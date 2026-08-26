"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export default function SuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-mint/20 text-3xl">
        ✓
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">
        Thank you for your order!
      </h1>
      <p className="mt-3 max-w-md text-neutral-600">
        Your order is confirmed. We&apos;ve sent a receipt to your email and
        will ship your essentials shortly.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/shop"
          className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          Continue shopping
        </Link>
        <Link
          href="/"
          className="rounded-full border border-black/10 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-black/30"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
