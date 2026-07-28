"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "./data";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className="relative group"
          >
            <span
              className={`transition-colors duration-300 text-[15px] font-medium ${
                active
                  ? "text-orange-400"
                  : "text-zinc-300 group-hover:text-white"
              }`}
            >
              {item.title}
            </span>

            {active ? (
              <motion.div
                layoutId="navbar-active"
                className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-orange-500"
              />
            ) : (
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}