import Link from "next/link";

export default function CartPage() {
  return (
    <div className="page-shell py-20 sm:py-28">
      <p className="eyebrow">Orders</p>
      <h1 className="section-title mt-6">Orders are not open.</h1>
      <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-600">The NORR collection is currently a preview. No purchases can be made on this site.</p>
      <Link href="/shop" className="action-link mt-10">Back to the collection <span aria-hidden>↗</span></Link>
    </div>
  );
}
