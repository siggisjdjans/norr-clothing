"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { getProductById, formatPrice } from "@/lib/products";
import ProductImage from "@/components/ProductImage";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clear, subtotal } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  async function handleCheckout() {
    setCheckingOut(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.productId,
            size: i.size,
            color: i.color,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setCheckingOut(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <span className="text-7xl">🛒</span>
        <h1 className="mt-6 text-4xl font-semibold uppercase tracking-tighter sm:text-6xl">
          cart&apos;s empty
        </h1>
        <p className="mt-2 font-medium text-[#666]">
          nothing in here yet. fix that.
        </p>
        <Link
          href="/shop"
          className="brutal mt-8 bg-[#111] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#ffffff]"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-5xl font-semibold uppercase tracking-tighter sm:text-7xl">
        YOUR CART
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            const key = `${item.productId}__${item.size}__${item.color}`;
            return (
              <div key={key} className="brutal-static flex gap-4 bg-white p-4">
                <ProductImage
                  product={product}
                  className="h-28 w-24 shrink-0"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/product/${product.slug}`}
                        className="font-semibold uppercase tracking-tight hover:text-[#525252]"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-0.5 text-xs font-medium text-[#666]">
                        {item.size} ·{" "}
                        <span
                          className="inline-block h-3 w-3 rounded-full border border-[#dedede]/20 align-middle"
                          style={{ background: item.color }}
                        />{" "}
                        {item.color}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(key)}
                      className="text-sm font-semibold text-[#666] hover:text-[#525252]"
                      aria-label="Remove"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="brutal flex items-center bg-[#ffffff]">
                      <button
                        onClick={() => updateQuantity(key, item.quantity - 1)}
                        className="grid h-9 w-9 place-items-center font-semibold hover:bg-[#111] hover:text-[#ffffff]"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(key, item.quantity + 1)}
                        className="grid h-9 w-9 place-items-center font-semibold hover:bg-[#111] hover:text-[#ffffff]"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold">
                      {formatPrice(product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={clear}
            className="text-sm font-bold text-[#666] underline hover:text-[#525252]"
          >
            clear cart
          </button>
        </div>

        <div className="brutal-static h-fit bg-white p-6">
          <h2 className="text-lg font-semibold uppercase tracking-wide">
            Order summary
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="font-medium text-[#666]">Subtotal</dt>
              <dd className="font-semibold">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-[#666]">Shipping</dt>
              <dd className="font-semibold">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-[#dedede] pt-3 text-base">
              <dt className="font-semibold uppercase">Total</dt>
              <dd className="font-semibold">{formatPrice(total)}</dd>
            </div>
          </dl>

          {error && (
            <p className="mt-4 bg-[#111]/10 px-3 py-2 text-sm font-medium text-[#525252]">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={checkingOut}
            className="brutal mt-6 w-full bg-[#111] py-4 text-sm font-semibold uppercase tracking-widest text-[#ffffff] disabled:opacity-60"
          >
            {checkingOut ? "Redirecting…" : "Checkout →"}
          </button>
          <p className="mt-3 text-center text-xs font-medium text-[#666]">
            🔒 secure payment · stripe
          </p>
        </div>
      </div>
    </div>
  );
}
