import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block min-w-0">
      <ProductImage product={product} className="min-h-72 transition-colors group-hover:bg-neutral-200" />
      <div className="flex items-start justify-between gap-4 border-b border-neutral-200 py-5">
        <div><h3 className="text-base font-medium">{product.name}</h3><p className="mt-1 text-sm text-neutral-600">Collection preview</p></div>
        <span aria-hidden className="text-xl transition-transform group-hover:translate-x-1">↗</span>
      </div>
    </Link>
  );
}
