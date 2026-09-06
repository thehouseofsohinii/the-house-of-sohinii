"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Bengal Heritage, Reimagined",
    subtitle: "Elegant sarees for festivals, weddings, and timeless occasions.",
    image: "/images/hero-1.jpg",
  },
  {
    title: "Festive Drapes for Every Celebration",
    subtitle: "Discover curated collections inspired by Bengali culture.",
    image: "/images/hero-2.jpg",
  },
  {
    title: "Crafted for Grace and Presence",
    subtitle: "Premium fabrics, thoughtful design, and a signature brand feel.",
    image: "/images/hero-3.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[linear-gradient(135deg,#f8f1e8,#fff8f4)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
            Bengali Heritage • Modern Elegance
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {slides[current].title}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-stone-700">
            {slides[current].subtitle}
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

        <div className="group relative overflow-hidden rounded-3xl bg-white p-4 shadow-lg">
          <div
            className="aspect-[4/5] rounded-2xl bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/0 p-3 text-white opacity-0 transition-all duration-300 hover:bg-white/15 group-hover:opacity-100 group-hover:bg-black/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/0 p-3 text-white opacity-0 transition-all duration-300 hover:bg-white/15 group-hover:opacity-100 group-hover:bg-black/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === current ? "bg-stone-900" : "bg-stone-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}