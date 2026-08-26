"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({ productId: product.id, size, color });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-black uppercase tracking-wide">Color</span>
          <span className="text-xs font-medium text-[#777]">{color}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              aria-label={`Color ${c}`}
              className={`h-9 w-9 rounded-full border-2 transition-all ${
                color === c
                  ? "border-[#111] ring-2 ring-[#c8ff00] ring-offset-2"
                  : "border-[#111]/20 hover:scale-110"
              }`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-black uppercase tracking-wide">Size</span>
          <span className="text-xs font-medium text-[#777]">size guide</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`brutal min-w-12 px-3 py-2 text-sm font-black ${
                size === s
                  ? "bg-[#111] text-[#f4f1ea]"
                  : "bg-[#f4f1ea] text-[#111]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleAdd}
        className={`brutal w-full py-4 text-sm font-black uppercase tracking-widest ${
          added
            ? "bg-[#c8ff00] text-[#111]"
            : "bg-[#111] text-[#f4f1ea]"
        }`}
      >
        {added ? "added ✓" : "add to cart"}
      </button>
    </div>
  );
}
