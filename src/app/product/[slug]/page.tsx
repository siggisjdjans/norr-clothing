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
  if (!product) return { title: "not found" };
  return {
    title: `${product.name} — NORR`,
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
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <nav className="mb-8 text-xs font-bold uppercase tracking-widest text-[#666]">
        <Link href="/" className="hover:text-[#111]">
          home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-[#111]">
          shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#111]">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="brutal-static overflow-hidden bg-white">
          <ProductImage product={product} className="aspect-[4/5] w-full" />
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#525252]">
            {product.category}
          </span>
          <h1 className="mt-2 text-5xl font-semibold uppercase leading-none tracking-tighter sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-semibold">{formatPrice(product.price)}</p>

          <p className="mt-5 leading-relaxed text-[#333]">
            {product.description}
          </p>

          <div className="mt-8">
            <ProductPurchase product={product} />
          </div>

          <div className="mt-10 border-t border-[#dedede] pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest">
              Details
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[#333]">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-0.5 font-semibold text-[#525252]">✦</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-semibold tracking-tighter sm:text-4xl">
            YOU MIGHT <span className="outline-text">ALSO LIKE</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
