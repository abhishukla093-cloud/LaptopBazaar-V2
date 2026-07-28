"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SearchBar() {
  const [focus, setFocus] = useState(false);

  return (
    <motion.div
      animate={{
        width: focus ? 260 : 210,
      }}
      transition={{
        duration: .3,
      }}
      className="hidden lg:flex h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
    >
      <div className="flex items-center px-4 text-zinc-400">
        <Search size={18} />
      </div>

      <input
        type="text"
        placeholder="Search laptops..."
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
      />
    </motion.div>
  );
}