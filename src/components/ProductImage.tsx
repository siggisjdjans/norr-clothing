import type { Product } from "@/lib/products";

export default function ProductImage({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <div className={`flex flex-col justify-between bg-neutral-100 p-6 sm:p-8 ${className}`}>
      <p className="eyebrow">{product.category} / Preview</p>
      <p className="my-12 max-w-[12ch] text-3xl font-medium leading-tight tracking-tight text-neutral-700 sm:text-4xl">{product.name}</p>
      <p className="text-xs text-neutral-600">Product photography not yet available</p>
    </div>
  );
}
