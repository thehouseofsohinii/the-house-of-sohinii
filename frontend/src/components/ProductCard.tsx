import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const coverImage = product.images?.[0]?.image;

  return (
    <Link href={`/catalog/${product.slug}`} className="block rounded-lg border p-4 hover:shadow-md">
      {coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverImage}
          alt={product.images?.[0]?.alt_text || product.title}
          className="h-64 w-full object-cover rounded-md"
        />
      )}
      <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.short_description}</p>
      <p className="mt-2 font-medium">₹{product.price}</p>
    </Link>
  );
}