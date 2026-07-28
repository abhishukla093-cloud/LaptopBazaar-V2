"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
    >
      <motion.div
        whileHover={{
          rotate: -5,
          scale: 1.08,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <Image
          src="/logo/logo.png"
          alt="LaptopBazaar"
          width={56}
          height={56}
          priority
          className="object-contain drop-shadow-[0_0_18px_rgba(249,115,22,.45)]"
        />
      </motion.div>

      <div className="hidden md:flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-white transition-all group-hover:text-orange-400">
          LaptopBazaar
        </span>

        <span className="text-xs tracking-[0.35em] uppercase text-zinc-400">
          Premium Store
        </span>
      </div>
    </Link>
  );
}