"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 select-none"
    >
      <Image
        src="/logo/logo.png"
        alt="LaptopBazaar Logo"
        width={52}
        height={52}
        priority
        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      <h2 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-400">
        LaptopBazaar
      </h2>
    </Link>
  );
}