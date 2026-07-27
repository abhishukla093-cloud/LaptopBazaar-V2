"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "./data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500/40
      "
    >
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 to-black">

        {product.badge && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}

        <button
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/40
            text-white
            transition
            hover:bg-orange-500
          "
        >
          <Heart size={18} />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          width={260}
          height={180}
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm uppercase tracking-wider text-orange-400">
          {product.brand}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <Star
            size={16}
            className="fill-orange-400 text-orange-400"
          />
          <span className="text-sm text-white">
            {product.rating}
          </span>

          <span className="text-sm text-zinc-500">
            ({product.reviews} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>

          <span className="text-zinc-500 line-through">
            ${product.originalPrice}
          </span>
        </div>

        {/* Button */}
        <button
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-orange-500
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-orange-600
          "
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}