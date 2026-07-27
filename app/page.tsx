import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Brands from "@/components/brands";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Brands />
      <Categories />
      <FeaturedProducts />
    </main>
  );
}