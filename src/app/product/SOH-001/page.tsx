import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div
          className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-md"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div>
          <p className="text-sm text-stone-500">{product.id}</p>
          <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold">{formatPrice(product.price)}</p>

          <div className="mt-6 space-y-2 text-stone-700">
            <p><strong>Fabric:</strong> {product.fabric}</p>
            <p><strong>Design:</strong> {product.design}</p>
            <p><strong>Occasion:</strong> {product.occasion}</p>
          </div>

          <p className="mt-6 text-stone-700">{product.description}</p>

          <button className="mt-8 rounded-full bg-stone-900 px-6 py-3 text-white transition hover:bg-stone-800">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}