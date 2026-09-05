import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#dedede] bg-white text-[#111]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="text-5xl font-semibold tracking-tighter">
              NORR<span className="text-[#111]">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#666]">
              Oversized fits. Heavyweight fabrics. Built in the north, worn
              everywhere. No seasons, just staples.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#111]">
              Shop
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/shop" className="link-draw hover:text-[#666]">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Outerwear" className="link-draw hover:text-[#666]">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Tops" className="link-draw hover:text-[#666]">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Bottoms" className="link-draw hover:text-[#666]">
                  Bottoms
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#111]">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/about" className="link-draw hover:text-[#666]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-draw hover:text-[#666]">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://instagram.com" className="link-draw hover:text-[#666]">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" className="link-draw hover:text-[#666]">
                  TikTok ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#dedede] pt-6 text-xs text-[#666] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NORR. all rights reserved.</p>
          <p>built different · secured by stripe</p>
        </div>
      </div>
    </footer>
  );
}
