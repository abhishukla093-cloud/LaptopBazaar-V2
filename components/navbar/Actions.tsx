"use client";

import { Heart, Search, ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";

const iconClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-orange-500/40 hover:bg-white/10 hover:text-white";

export default function Actions() {
  return (
    <div className="flex items-center gap-3">
      <button className={iconClass}>
        <Search size={18} />
      </button>

      <button className={iconClass}>
        <Heart size={18} />
      </button>

      <button className={iconClass}>
        <ShoppingBag size={18} />
      </button>

      <Button className="hidden md:inline-flex">
        Login
      </Button>
    </div>
  );
}