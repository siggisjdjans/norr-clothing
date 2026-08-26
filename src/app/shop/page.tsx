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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Shop</h1>
        <p className="mt-2 text-neutral-600">
          Thoughtful essentials, made to be worn for years.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          href="/shop"
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            !category
              ? "bg-black text-white"
              : "border border-black/10 text-neutral-600 hover:border-black/30"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/shop?category=${encodeURIComponent(c)}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === c
                ? "bg-black text-white"
                : "border border-black/10 text-neutral-600 hover:border-black/30"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-neutral-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
