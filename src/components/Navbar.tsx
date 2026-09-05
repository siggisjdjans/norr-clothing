"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [{ href: "/shop", label: "Collection" }, { href: "/about", label: "About" }];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <nav aria-label="Main" className="page-shell flex min-h-20 flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="text-2xl font-semibold tracking-tighter" aria-label="NORR home">NORR</Link>
        <div className="flex items-center gap-6 text-sm sm:gap-10">{links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`link-draw py-2 ${pathname === link.href ? "text-black underline underline-offset-8" : "text-neutral-600 hover:text-black"}`}>{link.label}</Link>)}</div>
      </nav>
    </header>
  );
}
