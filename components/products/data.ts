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
    price: 109999,
    originalPrice: 119999,
    rating: 4.9,
    reviews: 245,
    badge: "New",
  },
  {
    id: 2,
    name: "ROG Zephyrus G16",
    brand: "ASUS",
    image: "/products/rog-g16.png",
    price: 189999,
    originalPrice: 209999,
    rating: 4.8,
    reviews: 186,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "XPS 14",
    brand: "Dell",
    image: "/products/xps14.png",
    price: 159999,
    originalPrice: 174999,
    rating: 4.7,
    reviews: 132,
  },
  {
    id: 4,
    name: "Legion Pro 7",
    brand: "Lenovo",
    image: "/products/legion7.png",
    price: 199999,
    originalPrice: 219999,
    rating: 4.9,
    reviews: 278,
    badge: "Hot",
  },
];