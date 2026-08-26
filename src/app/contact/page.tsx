"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this to your email provider (Resend, SendGrid, etc.) or a contact
    // API route. For now we acknowledge receipt locally.
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Get in touch</h1>
      <p className="mt-2 text-neutral-600">
        Questions about an order, sizing, or a collaboration? We&apos;d love to
        hear from you.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold">Email</h2>
            <a
              href="mailto:hello@norrclothing.com"
              className="text-neutral-600 hover:text-black"
            >
              hello@norrclothing.com
            </a>
          </div>
          <div>
            <h2 className="font-semibold">Support hours</h2>
            <p className="text-neutral-600">Mon–Fri, 9am–5pm ET</p>
          </div>
          <div>
            <h2 className="font-semibold">Follow</h2>
            <p className="text-neutral-600">@norrclothing on Instagram & TikTok</p>
          </div>
        </div>

        {sent ? (
          <div className="flex h-fit flex-col items-start rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-mint/20 text-xl">
              ✓
            </span>
            <h2 className="mt-4 text-xl font-semibold">Message received</h2>
            <p className="mt-2 text-neutral-600">
              Thanks for reaching out — we&apos;ll get back to you within one
              business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium">Name</label>
              <input
                required
                className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
