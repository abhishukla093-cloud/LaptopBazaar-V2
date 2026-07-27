"use client";

import { ArrowRight, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start">
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 backdrop-blur-xl">
        <Zap size={16} />
        India's Premium Laptop Store
      </div>

      {/* Heading */}
      <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
        Performance Meets
        <span className="mt-2 block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          Next-Gen Computing
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
        Discover premium laptops from Apple, ASUS, Dell, Lenovo and MSI.
        Built for gaming, creativity and everyday productivity with unmatched
        performance.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Button className="group">
          Shop Now
          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>

        <button className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-500/40 hover:bg-white/10">
          Explore Collection
        </button>
      </div>

      {/* Stats */}
      <div className="mt-14 w-full">
        <HeroStats />
      </div>
    </div>
  );
}