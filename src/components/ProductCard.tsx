import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-md">
      <div
        className="aspect-[4/5] bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-stone-500">{product.id}</p>
          </div>
          <p className="font-semibold">{formatPrice(product.price)}</p>
        </div>

        <p className="mt-2 text-sm text-stone-600">
          {product.fabric} • {product.design} • {product.occasion}
        </p>

        <p className="mt-3 text-sm text-stone-700">{product.description}</p>

        <Link
          href={`/product/${product.id}`}
          className="mt-4 inline-block rounded-full bg-stone-900 px-4 py-2 text-sm text-white transition hover:bg-stone-800"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}