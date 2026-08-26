import Link from "next/link";
import GradientBlobs from "@/components/GradientBlobs";

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <GradientBlobs />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <span className="text-sm font-medium uppercase tracking-widest text-brand-600">
            Our story
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Designed in the North,
            <br />
            <span className="text-gradient">made to last.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            Norr began with a simple idea: make fewer, better things. We craft
            essentials from organic and recycled fabrics, designed to be worn
            for years — not seasons.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Why Norr</h2>
            <p className="mt-3 leading-relaxed text-neutral-600">
              The fashion industry moves too fast. We slow it down. Every Norr
              piece is designed with intention, cut from heavyweight,
              responsibly-sourced fabric, and built with reinforced seams that
              age beautifully. We release small, considered collections instead
              of chasing trends.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Our commitments
            </h2>
            <ul className="mt-4 space-y-3 text-neutral-600">
              <li className="flex gap-3">
                <span className="text-brand-500">✓</span>
                Organic and recycled materials wherever possible
              </li>
              <li className="flex gap-3">
                <span className="text-brand-500">✓</span>
                Fair, transparent manufacturing partners
              </li>
              <li className="flex gap-3">
                <span className="text-brand-500">✓</span>
                Carbon-neutral shipping on every order
              </li>
              <li className="flex gap-3">
                <span className="text-brand-500">✓</span>
                Repair, don&apos;t replace — free repairs for life
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-black/5 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to see for yourself?
          </h2>
          <Link
            href="/shop"
            className="mt-6 inline-block rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Shop the collection
          </Link>
        </div>
      </section>
    </div>
  );
}
