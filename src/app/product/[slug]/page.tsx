import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import { products, getProductBySlug } from "@/lib/products";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);
  return { title: product ? `${product.name} — NORR Preview` : "Not found — NORR", description: "NORR collection preview. Product details and availability are not yet confirmed." };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id).sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category)).slice(0, 3);
  return (
    <div className="page-shell py-12 sm:py-20">
      <Link href="/shop" className="text-sm text-neutral-600 hover:text-black">← Collection</Link>
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
        <ProductImage product={product} className="min-h-80 sm:min-h-[28rem]" />
        <div className="self-center">
          <p className="eyebrow">{product.category} / Preview</p>
          <h1 className="section-title mt-6">{product.name}</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-600">This is a collection concept, not an item available to buy.</p>
          <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
            {[['Availability', 'Not open for orders'], ['Price, sizes & materials', 'Not yet confirmed'], ['Photography', 'Not yet available']].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-3 py-4"><dt className="text-neutral-600">{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </div>
      </div>
      <section className="mt-20"><h2 className="mb-8 text-3xl font-medium tracking-tight">More from the preview.</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
    </div>
  );
}
