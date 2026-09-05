import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="page-shell py-12">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <div><Link href="/" className="text-4xl font-semibold tracking-tighter">NORR</Link><p className="mt-3 text-sm text-neutral-600">Clothing / A work in progress.</p></div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-4 text-sm"><Link href="/clothing" className="link-draw">Clothing</Link><Link href="/about" className="link-draw">About</Link><Link href="/contact" className="link-draw">Contact status</Link></nav>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-600"><p>© {new Date().getFullYear()} NORR</p><p>Collection preview · Orders are not open</p></div>
      </div>
    </footer>
  );
}
