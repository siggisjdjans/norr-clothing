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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#525252]">
          all fits
        </span>
        <h1 className="mt-2 text-5xl font-semibold tracking-tighter sm:text-7xl">
          SHOP
        </h1>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        <Link
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
          nothing here yet. check back soon.
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
