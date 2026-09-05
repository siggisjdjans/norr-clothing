import type { Product } from "@/lib/products";

export default function ProductImage({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const word = product.name.split(" ")[0].toUpperCase();

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: "linear-gradient(145deg, #fafafa, #e5e5e5)" }}
    >
      <span
        className="relative select-none text-[clamp(3rem,9vw,7rem)] font-semibold leading-none tracking-tighter text-transparent"
        style={{ WebkitTextStroke: "1px #737373" }}
      >
        {word}
      </span>

      <span className="absolute bottom-3 left-3 bg-[#111] px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-white">
        {product.category}
      </span>
    </div>
  );
}
