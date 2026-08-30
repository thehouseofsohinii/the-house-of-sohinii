export type ProductImage = {
  id: number;
  image: string;
  alt_text: string;
};

export type Product = {
  id: number;
  title: string;
  product_code: string;
  description: string;
  short_description: string;
  fabric: string;
  design: string;
  occasion: string;
  price: string;
  category: string;
  featured: boolean;
  is_published: boolean;
  slug: string;
  created_at: string;
  updated_at: string;
  images: ProductImage[];
};