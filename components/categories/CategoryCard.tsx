"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "./data";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
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
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20">
          <Icon size={30} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-white">
          {category.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {category.description}
        </p>

        {/* CTA */}
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-400 transition-all duration-300 group-hover:gap-3">
          Browse
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.div>
  );
}