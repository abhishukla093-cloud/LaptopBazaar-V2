"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";
import { products } from "./data";

export default function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[180px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-[180px]" />
      </div>

      <Container>
        <SectionHeading
          badge="Featured Products"
          title="Trending Laptops"
          description="Discover our hand-picked collection of premium laptops with the latest processors, dedicated graphics and exceptional performance."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}