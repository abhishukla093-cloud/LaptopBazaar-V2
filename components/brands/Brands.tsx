"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BrandCard from "./BrandCard";
import { brands } from "./data";

export default function Brands() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[150px]" />
      </div>

      <Container>
        <SectionHeading
          badge="Trusted Brands"
          title="Choose Your Favorite Brand"
          description="Explore laptops from the world's leading brands, trusted by millions for performance, reliability and innovation."
        />

        <div className="mt-16 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}