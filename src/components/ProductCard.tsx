import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <ProductImage
          product={product}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight">{product.name}</h3>
            <p className="mt-0.5 text-sm text-neutral-500">{product.category}</p>
          </div>
          <span className="font-semibold">{formatPrice(product.price)}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c}
              className="h-4 w-4 rounded-full border border-black/10"
              style={{ background: c }}
              title={c}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
