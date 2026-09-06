export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-600">
        <p>© {new Date().getFullYear()} The House of Sohinii. All rights reserved.</p>
        <p className="mt-2">
          Follow us on Instagram, Facebook, Pinterest, and X for updates.
        </p>
      </div>
    </footer>
  );
}