import { Product } from "@/types/products";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/api/catalog/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/api/catalog/${slug}/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}