"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

export default function CatalogPage() {
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const fabricMatch = selectedFabric ? product.fabric === selectedFabric : true;
      const occasionMatch = selectedOccasion ? product.occasion === selectedOccasion : true;
      return fabricMatch && occasionMatch;
    });
  }, [selectedFabric, selectedOccasion]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Catalog</h1>
      <p className="mt-2 text-stone-600">
        Explore sarees by fabric, occasion, and design.
      </p>

      <div className="mt-8">
        <ProductFilters
          selectedFabric={selectedFabric}
          selectedOccasion={selectedOccasion}
          onFabricChange={setSelectedFabric}
          onOccasionChange={setSelectedOccasion}
        />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}