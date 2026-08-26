import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-600 via-accent-pink to-accent-peach text-sm font-black text-white">
                N
              </span>
              Norr<span className="text-brand-600">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              Thoughtful, built-to-last essentials for everyday life. Designed
              in the North, made responsibly.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-500">
              <li>
                <Link href="/shop" className="hover:text-black">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Outerwear" className="hover:text-black">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Tops" className="hover:text-black">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Bottoms" className="hover:text-black">
                  Bottoms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-500">
              <li>
                <Link href="/about" className="hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-black">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/5 pt-6 text-sm text-neutral-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Norr Clothing. All rights reserved.</p>
          <p>Secured by Stripe · Ships worldwide</p>
        </div>
      </div>
    </footer>
  );
}
