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
        <h1 className="mt-6 text-4xl font-black uppercase tracking-tighter sm:text-6xl">
          cart&apos;s empty
        </h1>
        <p className="mt-2 font-medium text-[#777]">
          nothing in here yet. fix that.
        </p>
        <Link
          href="/shop"
          className="brutal mt-8 bg-[#111] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#f4f1ea]"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">
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
                        className="font-black uppercase tracking-tight hover:text-[#ff2d78]"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-0.5 text-xs font-medium text-[#777]">
                        {item.size} ·{" "}
                        <span
                          className="inline-block h-3 w-3 rounded-full border border-[#111]/20 align-middle"
                          style={{ background: item.color }}
                        />{" "}
                        {item.color}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(key)}
                      className="text-sm font-black text-[#777] hover:text-[#ff2d78]"
                      aria-label="Remove"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="brutal flex items-center bg-[#f4f1ea]">
                      <button
                        onClick={() => updateQuantity(key, item.quantity - 1)}
                        className="grid h-9 w-9 place-items-center font-black hover:bg-[#111] hover:text-[#f4f1ea]"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(key, item.quantity + 1)}
                        className="grid h-9 w-9 place-items-center font-black hover:bg-[#111] hover:text-[#f4f1ea]"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-black">
                      {formatPrice(product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={clear}
            className="text-sm font-bold text-[#777] underline hover:text-[#ff2d78]"
          >
            clear cart
          </button>
        </div>

        <div className="brutal-static h-fit bg-white p-6">
          <h2 className="text-lg font-black uppercase tracking-wide">
            Order summary
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="font-medium text-[#777]">Subtotal</dt>
              <dd className="font-black">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-[#777]">Shipping</dt>
              <dd className="font-black">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t-2 border-[#111] pt-3 text-base">
              <dt className="font-black uppercase">Total</dt>
              <dd className="font-black">{formatPrice(total)}</dd>
            </div>
          </dl>

          {error && (
            <p className="mt-4 bg-[#ff2d78]/10 px-3 py-2 text-sm font-medium text-[#ff2d78]">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={checkingOut}
            className="brutal mt-6 w-full bg-[#111] py-4 text-sm font-black uppercase tracking-widest text-[#f4f1ea] disabled:opacity-60"
          >
            {checkingOut ? "Redirecting…" : "Checkout →"}
          </button>
          <p className="mt-3 text-center text-xs font-medium text-[#777]">
            🔒 secure payment · stripe
          </p>
        </div>
      </div>
    </div>
  );
}
