"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "./CategoryCard";
import { categories } from "./data";

export default function Categories() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[180px]" />
      </div>

      <Container>
        <SectionHeading
          badge="Shop by Category"
          title="Find the Perfect Laptop"
          description="Browse our carefully selected categories to find the perfect laptop for gaming, business, studies, content creation and more."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}   