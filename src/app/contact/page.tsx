import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="page-shell py-20 sm:py-28">
      <p className="eyebrow">Contact</p>
      <h1 className="section-title mt-6">Contact details are not available yet.</h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">NORR does not currently have a published customer contact channel. This page does not collect or send messages.</p>
      <Link href="/" className="action-link mt-10">Back to NORR <span aria-hidden>↗</span></Link>
    </div>
  );
}
