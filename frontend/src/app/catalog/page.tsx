import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function CatalogPage() {
  const products = await fetchProducts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Catalog</h1>

      {products.length === 0 ? (
        <p>No products available yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}