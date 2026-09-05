import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductImage from "./ProductImage";

export default function ProductCard({ product, eager = false }: { product: Product; eager?: boolean }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block min-w-0">
      <ProductImage product={product} eager={eager} />
      <div className="flex items-start justify-between gap-4 border-b border-neutral-200 py-5">
        <div>
          <h3 className="text-base font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-neutral-600">{product.category} / {product.color}</p>
        </div>
        <span aria-hidden className="text-xl transition-transform group-hover:translate-x-1">↗</span>
      </div>
    </Link>
  );
}
