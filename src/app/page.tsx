import Link from "next/link";
import GradientBlobs from "@/components/GradientBlobs";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const featured = products.slice(0, 4);

const values = [
  {
    icon: "🌿",
    title: "Responsibly made",
    text: "Organic and recycled fabrics, chosen for comfort and longevity.",
  },
  {
    icon: "🧵",
    title: "Built to last",
    text: "Heavyweight construction and reinforced seams that age beautifully.",
  },
  {
    icon: "🚚",
    title: "Fast, free shipping",
    text: "Free carbon-neutral shipping on orders over $75, worldwide.",
  },
  {
    icon: "↩️",
    title: "Easy returns",
    text: "30-day hassle-free returns. No questions, no stress.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <GradientBlobs />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-neutral-600 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent-mint" />
            New — The Everyday Collection
          </span>

          <h1
            className="animate-fade-up mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Essentials for
            <br />
            <span className="text-gradient">everyday life.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg text-neutral-600"
            style={{ animationDelay: "160ms" }}
          >
            Norr crafts thoughtful, built-to-last clothing designed in the
            North. Fewer, better things — made to be worn for years.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/shop"
              className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Shop the collection
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-black/10 bg-white/70 px-7 py-3.5 text-sm font-semibold text-black backdrop-blur transition-transform hover:scale-[1.03]"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-black/5 bg-white/50 py-4">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-neutral-400">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              [
                "Free shipping over $75",
                "Organic fabrics",
                "30-day returns",
                "Designed in the North",
                "Carbon-neutral delivery",
              ].map((t) => (
                <span key={`${i}-${t}`} className="flex items-center gap-12">
                  {t} <span className="text-brand-400">✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The essentials
            </h2>
            <p className="mt-2 text-neutral-600">
              Our most-loved pieces, restocked and ready.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-black/30 sm:block"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-black/5 bg-white/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-xl">
                {v.icon}
              </span>
              <h3 className="mt-2 font-semibold">{v.title}</h3>
              <p className="text-sm text-neutral-500">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <GradientBlobs />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Built for the <span className="text-gradient">long run.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-600">
            Join the list for early access to drops, restocks, and 10% off your
            first order.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none focus:border-brand-400"
            />
            <button
              type="submit"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get 10% off
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
