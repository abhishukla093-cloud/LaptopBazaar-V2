export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Air M4",
    brand: "Apple",
    image: "/products/macbook-air.png",
    price: 1099,
    originalPrice: 1199,
    rating: 4.9,
    reviews: 245,
    badge: "New",
  },
  {
    id: 2,
    name: "ROG Zephyrus G16",
    brand: "ASUS",
    image: "/products/rog-g16.png",
    price: 1899,
    originalPrice: 2099,
    rating: 4.8,
    reviews: 186,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "XPS 14",
    brand: "Dell",
    image: "/products/xps14.png",
    price: 1599,
    originalPrice: 1749,
    rating: 4.7,
    reviews: 132,
  },
  {
    id: 4,
    name: "Legion Pro 7",
    brand: "Lenovo",
    image: "/products/legion7.png",
    price: 1999,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 278,
    badge: "Hot",
  },
];