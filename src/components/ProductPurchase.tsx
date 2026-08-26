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
          <span className="text-sm font-semibold">Color</span>
          <span className="text-sm text-neutral-500">{color}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              aria-label={`Color ${c}`}
              className={`h-8 w-8 rounded-full border transition-all ${
                color === c
                  ? "ring-2 ring-black ring-offset-2"
                  : "border-black/10 hover:scale-110"
              }`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold">Size</span>
          <span className="text-sm text-neutral-500">Size guide</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`min-w-11 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                size === s
                  ? "border-black bg-black text-white"
                  : "border-black/10 text-neutral-700 hover:border-black/30"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleAdd}
        className={`w-full rounded-full py-3.5 text-sm font-semibold text-white transition-all ${
          added
            ? "bg-accent-mint text-black"
            : "bg-black hover:bg-neutral-800"
        }`}
      >
        {added ? "Added to cart ✓" : "Add to cart"}
      </button>
    </div>
  );
}
