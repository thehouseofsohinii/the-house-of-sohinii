export interface Product {
  id: string;
  name: string;
  fabric: string;
  design: string;
  price: number;
  occasion: string;
  description: string;
  image: string;
  video?: string;
  featured?: boolean;
}