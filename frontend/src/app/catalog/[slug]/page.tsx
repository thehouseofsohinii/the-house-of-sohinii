import { fetchProductBySlug } from "@/lib/api";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="mt-2 text-gray-600">{product.short_description}</p>
      <p className="mt-4 font-semibold">₹{product.price}</p>

      <div className="mt-6 space-y-4">
        <p><strong>Fabric:</strong> {product.fabric}</p>
        <p><strong>Design:</strong> {product.design}</p>
        <p><strong>Occasion:</strong> {product.occasion}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {product.images.map((img) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.id}
            src={img.image}
            alt={img.alt_text || product.title}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </main>
  );
}