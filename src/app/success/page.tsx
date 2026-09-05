import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  let paymentReceived = false;

  // Visiting this URL alone is never proof of payment. Verify prior Stripe
  // sessions without exposing the customer's identity or payment details.
  if (typeof session_id === "string" && /^cs_(test_|live_)?[A-Za-z0-9]+$/.test(session_id)) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      paymentReceived = session.metadata?.source === "norr-clothing" && session.status === "complete" && session.payment_status === "paid";
    } catch {
      // Invalid sessions and unavailable Stripe configuration remain unverified.
    }
  }

  return (
    <div className="page-shell py-20 sm:py-28">
      <p className="eyebrow">Payment status</p>
      <h1 className="section-title mt-6">{paymentReceived ? "Payment received." : "Payment not verified."}</h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">{paymentReceived ? "Stripe confirms payment for this checkout session. This page does not confirm shipment or that an email has been sent." : "This page cannot confirm a payment. If you attempted a payment, check the original Stripe checkout before trying again."}</p>
      <Link href="/" className="action-link mt-10">Back to NORR <span aria-hidden>↗</span></Link>
    </div>
  );
}
