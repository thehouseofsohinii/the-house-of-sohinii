import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide md:text-xl">
          The House of Sohinii
        </Link>

        <nav className="flex gap-5 text-sm font-medium text-stone-700">
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}