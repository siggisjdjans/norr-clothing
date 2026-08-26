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
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <span className="text-6xl">🛍️</span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">
          Your cart is empty
        </h1>
        <p className="mt-2 text-neutral-600">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/shop"
          className="mt-8 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Your cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            const key = `${item.productId}__${item.size}__${item.color}`;
            return (
              <div
                key={key}
                className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
              >
                <ProductImage
                  product={product}
                  className="h-24 w-20 shrink-0 rounded-xl"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/product/${product.slug}`}
                        className="font-semibold hover:underline"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-0.5 text-sm text-neutral-500">
                        {item.size} ·{" "}
                        <span
                          className="inline-block h-3 w-3 rounded-full align-middle"
                          style={{ background: item.color }}
                        />{" "}
                        {item.color}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(key)}
                      className="text-sm text-neutral-400 hover:text-black"
                      aria-label="Remove"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center gap-2 rounded-full border border-black/10 px-1 py-0.5">
                      <button
                        onClick={() => updateQuantity(key, item.quantity - 1)}
                        className="grid h-7 w-7 place-items-center rounded-full hover:bg-black/5"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(key, item.quantity + 1)}
                        className="grid h-7 w-7 place-items-center rounded-full hover:bg-black/5"
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
            className="text-sm text-neutral-400 hover:text-black"
          >
            Clear cart
          </button>
        </div>

        <div className="h-fit rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-neutral-500">Subtotal</dt>
              <dd className="font-medium">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-neutral-500">Shipping</dt>
              <dd className="font-medium">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-black/5 pt-3 text-base">
              <dt className="font-semibold">Total</dt>
              <dd className="font-bold">{formatPrice(total)}</dd>
            </div>
          </dl>

          {error && (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={checkingOut}
            className="mt-6 w-full rounded-full bg-black py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {checkingOut ? "Redirecting…" : "Checkout with Stripe"}
          </button>
          <p className="mt-3 text-center text-xs text-neutral-400">
            🔒 Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
