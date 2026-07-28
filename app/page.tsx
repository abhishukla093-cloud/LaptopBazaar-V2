import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Brands from "@/components/brands";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/products";
import WhyChoose from "@/components/why-choose";
import DealsBanner from "@/components/deals-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <Brands />

      <Categories />

      <FeaturedProducts />

      <DealsBanner />

      <WhyChoose />
    </main>
  );
}