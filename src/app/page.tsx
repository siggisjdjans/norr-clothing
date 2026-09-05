import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div>
      <section className="home-hero page-shell">
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5">
          <p className="eyebrow">NORR / Clothing</p>
          <Link href="#collection" className="text-sm text-neutral-600 hover:text-black">Explore the collection ↓</Link>
        </div>
        <h1 className="hero-wordmark">NORR</h1>
        <div className="hero-caption">
          <p className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">A work in progress.<br /><span className="text-neutral-500">Out in the open.</span></p>
          <div className="max-w-sm">
            <p className="text-base leading-relaxed text-neutral-600">Seven modern wardrobe studies. Original NORR names, new imagery, and a focus on proportion and texture.</p>
            <Link href="/clothing" className="action-link mt-6">View the clothing <span aria-hidden>↗</span></Link>
          </div>
        </div>
      </section>
      <section id="collection" className="page-shell scroll-mt-28 py-16 sm:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div><p className="eyebrow mb-3">Collection preview</p><h2 className="section-title">The current edit.</h2></div>
          <Link href="/clothing" className="action-link">View all {products.length} <span aria-hidden>↗</span></Link>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product, index) => <ProductCard key={product.id} product={product} eager={index < 3} />)}
        </div>
      </section>
    </div>
  );
}
