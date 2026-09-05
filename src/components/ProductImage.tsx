import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductImage({
  product,
  className = "",
  eager = false,
}: {
  product: Product;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-neutral-100 ${className}`}>
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        loading={eager ? "eager" : "lazy"}
        sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 ease-out group-hover:scale-[1.015]"
      />
    </div>
  );
}
