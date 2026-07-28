"use client";

import Link from "next/link";
import { Heart, ShoppingCart, User, Menu } from "lucide-react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Actions() {
  return (
    <div className="flex items-center justify-end gap-3">

      <SearchBar />

      {/* Wishlist */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: .95 }}
        className="hidden lg:flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-xl transition hover:border-orange-500/40 hover:text-orange-400"
      >
        <Heart size={18} />
      </motion.button>

      {/* Cart */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: .95 }}
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-xl transition hover:border-orange-500/40 hover:text-orange-400"
      >
        <ShoppingCart size={18} />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white">
          0
        </span>
      </motion.button>

      {/* Login */}
      <Link
        href="/login"
        className="hidden lg:flex h-11 items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 text-sm font-semibold text-white transition hover:bg-orange-500 hover:text-white"
      >
        <User size={17} />
        Login
      </Link>

      {/* Mobile Menu */}
      <button className="flex lg:hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
        <Menu size={22} />
      </button>
    </div>
  );
}