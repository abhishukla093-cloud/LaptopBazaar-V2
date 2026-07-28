"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./data";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-sky-500/5 blur-[170px]" />
      </div>

      <Container>

        <SectionHeading
          badge="Why Choose Us"
          title="Experience Premium Shopping"
          description="Everything you need for a secure, reliable and seamless laptop buying experience."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {whyChooseItems.map((item) => (
            <WhyChooseCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}