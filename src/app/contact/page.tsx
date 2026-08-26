"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <span className="text-xs font-black uppercase tracking-widest text-[#ff2d78]">
        hmu
      </span>
      <h1 className="mt-2 text-5xl font-black uppercase tracking-tighter sm:text-7xl">
        GET IN TOUCH
      </h1>
      <p className="mt-3 max-w-md font-medium text-[#333]">
        Questions about an order, sizing, or a collab? We reply fast.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest">Email</h2>
            <a
              href="mailto:hello@norrclothing.com"
              className="link-draw font-medium text-[#333] hover:text-[#ff2d78]"
            >
              hello@norrclothing.com
            </a>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest">Hours</h2>
            <p className="font-medium text-[#333]">Mon–Fri, 9am–5pm ET</p>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest">Socials</h2>
            <p className="font-medium text-[#333]">@norrclothing everywhere</p>
          </div>
        </div>

        {sent ? (
          <div className="brutal-static flex flex-col items-start bg-[#c8ff00] p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#111] text-xl text-[#c8ff00]">
              ✓
            </span>
            <h2 className="mt-4 text-xl font-black uppercase">Got it</h2>
            <p className="mt-2 font-medium text-[#111]">
              We&apos;ll hit you back within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="brutal-static space-y-4 bg-white p-8">
            <div>
              <label className="mb-1.5 block text-sm font-black uppercase tracking-wide">
                Name
              </label>
              <input
                required
                className="brutal-static w-full bg-[#f4f1ea] px-4 py-2.5 text-sm font-medium outline-none"
                placeholder="your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-black uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                required
                className="brutal-static w-full bg-[#f4f1ea] px-4 py-2.5 text-sm font-medium outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-black uppercase tracking-wide">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="brutal-static w-full bg-[#f4f1ea] px-4 py-2.5 text-sm font-medium outline-none"
                placeholder="what's up?"
              />
            </div>
            <button
              type="submit"
              className="brutal w-full bg-[#111] py-3.5 text-sm font-black uppercase tracking-widest text-[#f4f1ea]"
            >
              Send it
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
