import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="page-shell py-16 sm:py-20">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#525252]">
          Collection preview
        </span>
        <h1 className="mt-4 section-title">
          The collection.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">An early look at the collection. Product details and availability are not yet confirmed. Orders are not open.</p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        <Link
          aria-current={!category ? "page" : undefined}
          href="/shop"
          className={`brutal px-4 py-2 text-sm font-semibold uppercase tracking-wide ${
            !category
              ? "bg-[#111] text-[#ffffff]"
              : "bg-[#ffffff] text-[#111]"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            aria-current={category === c ? "page" : undefined}
            href={`/shop?category=${encodeURIComponent(c)}`}
            className={`brutal px-4 py-2 text-sm font-semibold uppercase tracking-wide ${
              category === c
                ? "bg-[#111] text-[#ffffff]"
                : "bg-[#ffffff] text-[#111]"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center font-bold text-[#666]">
          No collection concepts match this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
