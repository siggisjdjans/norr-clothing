import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Clothing — NORR",
  description: "Explore the current NORR clothing edit.",
};

export default async function ClothingPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const filtered = category ? products.filter((product) => product.category === category) : products;

  return (
    <div className="page-shell py-16 sm:py-20">
      <Link href="/" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-black">
        <span aria-hidden="true">←</span> Back to home
      </Link>
      <div className="mb-10 grid gap-8 border-b border-neutral-200 pb-10 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="eyebrow">NORR / Clothing</p>
          <h1 className="section-title mt-4">The current edit.</h1>
        </div>
        <p className="max-w-lg text-base leading-relaxed text-neutral-600 md:justify-self-end">
          Seven modern wardrobe studies shaped around proportion, texture, and everyday utility. Names and imagery are original to NORR; final production details are still in development.
        </p>
      </div>

      <nav aria-label="Filter clothing" className="mb-10 flex flex-wrap gap-2">
        <Link
          aria-current={!category ? "page" : undefined}
          href="/clothing"
          className={`brutal px-4 py-2 text-sm font-semibold uppercase tracking-wide ${!category ? "bg-[#111] text-white" : "bg-white text-[#111]"}`}
        >
          All
        </Link>
        {categories.map((item) => (
          <Link
            key={item}
            aria-current={category === item ? "page" : undefined}
            href={`/clothing?category=${encodeURIComponent(item)}`}
            className={`brutal px-4 py-2 text-sm font-semibold uppercase tracking-wide ${category === item ? "bg-[#111] text-white" : "bg-white text-[#111]"}`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-neutral-600">No pieces match this category.</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => <ProductCard key={product.id} product={product} eager={index < 3} />)}
        </div>
      )}
    </div>
  );
}
