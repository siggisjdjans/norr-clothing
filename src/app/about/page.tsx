import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-shell py-20 sm:py-28">
      <p className="eyebrow">About NORR</p>
      <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">At the beginning.</h1>
      <div className="mt-12 grid gap-10 border-t border-neutral-200 pt-10 md:grid-cols-2">
        <p className="max-w-lg text-2xl leading-relaxed tracking-tight">NORR is a clothing project in progress. This website is an early preview.</p>
        <div className="max-w-lg space-y-6 text-base leading-relaxed text-neutral-600">
          <p>The collection shown here is not available to order. Product photography, specifications, and availability have not been confirmed.</p>
          <p>There is no mailing list or contact form collecting your details on this site.</p>
          <Link href="/clothing" className="action-link">Explore the clothing <span aria-hidden>↗</span></Link>
        </div>
      </div>
    </div>
  );
}
