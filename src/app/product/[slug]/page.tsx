import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductImage from "@/components/ProductImage";
import ProductPurchase from "@/components/ProductPurchase";
import ProductCard from "@/components/ProductCard";
import { products, getProductBySlug, formatPrice } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — Norr Clothing`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id))
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav className="mb-8 text-sm text-neutral-500">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-black">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductImage
          product={product}
          className="aspect-[4/5] w-full rounded-3xl shadow-sm"
        />

        <div className="flex flex-col">
          <span className="text-sm font-medium uppercase tracking-wider text-brand-600">
            {product.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold">
            {formatPrice(product.price)}
          </p>

          <p className="mt-4 leading-relaxed text-neutral-600">
            {product.description}
          </p>

          <div className="mt-8">
            <ProductPurchase product={product} />
          </div>

          <div className="mt-10 border-t border-black/5 pt-6">
            <h2 className="font-semibold">Details</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-0.5 text-brand-500">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">
            You might also like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
