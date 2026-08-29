import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "SOH-001",
    name: "Banarasi Elegance",
    fabric: "Silk",
    design: "Banarasi",
    price: 8500,
    occasion: "Wedding",
    description: "A rich Banarasi saree with a timeless zari finish.",
    image: "/images/product-1.jpg",
    featured: true,
  },
  {
    id: "SOH-002",
    name: "Bengal Cotton Bloom",
    fabric: "Cotton",
    design: "Handloom",
    price: 3200,
    occasion: "Poila Boishakh",
    description: "Lightweight and elegant cotton saree inspired by Bengal traditions.",
    image: "/images/product-2.jpg",
    featured: true,
  },
  {
    id: "SOH-003",
    name: "Festive Silk Aura",
    fabric: "Silk",
    design: "Contemporary",
    price: 6200,
    occasion: "Durga Puja",
    description: "A festive saree designed to shine during cultural celebrations.",
    image: "/images/product-3.jpg",
    featured: false,
  },
];