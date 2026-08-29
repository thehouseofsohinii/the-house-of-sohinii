import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(135deg,#f8f1e8,#fff8f4)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
            Bengali Heritage • Modern Elegance
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Sarees that celebrate culture, craft, and occasion.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-stone-700">
            Discover curated sarees designed for festive moments, weddings, and everyday elegance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/catalog"
              className="rounded-full bg-stone-900 px-6 py-3 text-white transition hover:bg-stone-800"
            >
              Explore Catalog
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 transition hover:bg-stone-50"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <div className="aspect-[4/5] rounded-2xl bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
}