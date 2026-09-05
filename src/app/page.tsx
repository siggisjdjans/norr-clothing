import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const featured = products.slice(0, 5);
const hero = featured[0];

const reviews = [
  {
    name: "mia.",
    handle: "@mia.fits",
    text: "the hoodie is actually heavy. like i can feel the quality. 10/10 no notes",
    color: "#eeeeee",
  },
  {
    name: "jay",
    handle: "@jaywears",
    text: "oversized but not sloppy. finally a brand that gets the proportions right",
    color: "#eeeeee",
  },
  {
    name: "kenzo",
    handle: "@kenzo.raw",
    text: "copped the cargo pants. pockets for days. shipping was stupid fast",
    color: "#eeeeee",
  },
];

const tickerItems = [
  "OVERSIZED HOODIE",
  "HEAVYWEIGHT TEE",
  "CARGO PANTS",
  "RIB KNIT BEANIE",
  "FLEECE JOGGERS",
  "FULL ZIP",
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#dedede]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="brutal-static bg-[#f5f5f5] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              New drop 001
            </span>
            <span className="brutal-static bg-[#111] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
              Free ship over $75
            </span>
          </div>

          <h1 className="mt-8 select-none text-[clamp(4rem,16vw,12rem)] font-semibold leading-[0.82] tracking-tighter">
            <span className="block">NORR</span>
            <span className="block text-[clamp(2rem,6vw,4.5rem)] font-medium leading-tight tracking-tight text-[#666]">Everyday, considered.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-lg font-medium leading-snug text-[#333] sm:text-xl">
              Oversized fits. Heavyweight fabrics. No seasons — just staples
              that actually last.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="brutal inline-flex items-center justify-center gap-2 bg-[#111] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#ffffff]"
              >
                Shop the drop →
              </Link>
              <Link
                href="/about"
                className="brutal inline-flex items-center justify-center bg-[#f5f5f5] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#111]"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────────────────────── */}
      <div className="overflow-hidden border-b border-[#dedede] bg-[#111] py-3">
        <div className="collection-track">
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 items-center">
              {tickerItems.map((t) => (
                <span
                  key={`${i}-${t}`}
                  className="flex items-center gap-6 px-6 text-sm font-semibold uppercase tracking-widest text-[#ffffff]"
                >
                  {t}
                  <span className="text-[#ffffff]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured products ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#525252]">
              001 / the essentials
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tighter sm:text-6xl">
              THE DROP
            </h2>
          </div>
          <Link
            href="/shop"
            className="link-draw hidden text-sm font-semibold uppercase tracking-widest sm:block"
          >
            view all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 sm:row-span-2">
            <ProductCard product={hero} large />
          </div>
          {featured.slice(1).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────────────────────────── */}
      <section className="border-y border-[#dedede] bg-[#f5f5f5] text-[#111]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <p className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            We don&apos;t do seasons. We don&apos;t do trends. We make the same
            five fits, <span className="underline decoration-[#a3a3a3] underline-offset-8">better</span>, over and
            over — until they&apos;re impossible to beat.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
            <span>✓ 400gsm fleece</span>
            <span>✓ organic cotton</span>
            <span>✓ free repairs</span>
            <span>✓ carbon neutral</span>
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
          THE PEOPLE <span className="outline-text">AGREE</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.handle}
              className="brutal-static bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold"
                  style={{ background: r.color }}
                >
                  {r.name[0].toUpperCase()}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-[#666]">{r.handle}</p>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#333]">
                “{r.text}”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[#dedede] bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
          <h2 className="text-4xl font-semibold tracking-tighter text-[#111] sm:text-6xl">
            GET THE FIT.
          </h2>
          <p className="max-w-md text-[#111]/70">
            Early access to drops, restocks, and 10% off your first order. No
            spam, promise.
          </p>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              aria-label="Email address"
              autoComplete="email"
              required
              placeholder="your@email.com"
              className="brutal-static flex-1 bg-[#ffffff] px-5 py-3.5 text-sm font-medium outline-none"
            />
            <button
              type="submit"
              className="brutal bg-[#111] px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#ffffff]"
            >
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
