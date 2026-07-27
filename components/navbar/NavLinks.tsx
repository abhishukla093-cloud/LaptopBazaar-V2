"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Laptops",
    href: "/",
  },
  {
    title: "Gaming",
    href: "/",
  },
  {
    title: "Brands",
    href: "/",
  },
  {
    title: "Support",
    href: "/",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="group relative text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
        >
          {link.title}

          <motion.span
            layoutId="navbar-line"
            className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full"
          />
        </Link>
      ))}
    </nav>
  );
}