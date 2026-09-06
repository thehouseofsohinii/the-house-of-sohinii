export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <div className="mt-6 space-y-3 text-stone-700">
        <p>Email: hello@thehouseofsohinii.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Location: Howrah / Kolkata</p>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4">
        <p className="mb-2 font-semibold">Map placeholder</p>
        <p className="text-sm text-stone-600">
          Later you can embed Google Maps using latitude and longitude coordinates.
        </p>
      </div>
    </section>
  );
}