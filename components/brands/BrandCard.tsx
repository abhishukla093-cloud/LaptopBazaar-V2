"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Brand } from "./data";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500/40
        hover:bg-white/[0.05]
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Brand Logo Placeholder */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-2xl font-bold text-white shadow-lg shadow-orange-500/20">
          {brand.name.charAt(0)}
        </div>

        {/* Brand Name */}
        <h3 className="text-2xl font-bold text-white">
          {brand.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {brand.description}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-400 transition-all duration-300 group-hover:gap-3">
          Explore
          <ChevronRight size={18} />
        </div>
      </div>
    </motion.div>
  );
}