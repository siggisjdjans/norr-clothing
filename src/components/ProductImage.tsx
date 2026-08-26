import type { Product } from "@/lib/products";

export default function ProductImage({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: product.gradient }}
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_55%)]" />
      <span
        className="relative text-7xl drop-shadow-lg sm:text-8xl"
        role="img"
        aria-label={product.name}
      >
        {product.emoji}
      </span>
      <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
        {product.category}
      </span>
    </div>
  );
}
