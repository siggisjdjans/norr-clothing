import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import ProductImage from "./ProductImage";

export default function ProductCard({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
    >
      <div className="brutal overflow-hidden bg-[#fff]">
        <div className={`relative overflow-hidden ${large ? "aspect-[4/5]" : "aspect-square"}`}>
          <ProductImage
            product={product}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rotate-[-4deg] rounded-full bg-[#ff2d78] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-white">
              {product.badge}
            </span>
          )}
          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-[#c8ff00] text-lg opacity-0 transition-opacity group-hover:opacity-100">
            →
          </span>
        </div>
        <div className="flex items-start justify-between gap-2 border-t-2 border-[#111] p-4">
          <div>
            <h3 className="text-base font-black uppercase tracking-tight leading-none">
              {product.name}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#777]">
              {product.category}
            </p>
          </div>
          <span className="text-base font-black">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Link>
  );
}
