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
      style={{ background: product.gradient }}
    >
      {/* diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 2px, transparent 14px)",
        }}
      />
      {/* radial highlight */}
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_25%,#fff,transparent_55%)]" />

      <span
        className="relative select-none text-[clamp(3rem,9vw,7rem)] font-black leading-none tracking-tighter text-transparent"
        style={{ WebkitTextStroke: "2px #fff" }}
      >
        {word}
      </span>

      <span className="absolute bottom-3 left-3 rotate-[-3deg] bg-[#111] px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white">
        {product.category}
      </span>
    </div>
  );
}
