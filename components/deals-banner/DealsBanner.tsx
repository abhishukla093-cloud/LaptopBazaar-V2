// Placeholder complete DealsBanner.tsx template.
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgePercent } from "lucide-react";
import Countdown from "./Countdown";

export default function DealsBanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[#050505]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] border border-orange-500/20 bg-gradient-to-br from-[#111] via-[#171717] to-[#0d0d0d] px-8 py-10 lg:px-16 lg:py-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-orange-400">
                <BadgePercent size={16} />
                Limited Time Offer
              </div>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">
                Save Up To
                <span className="block text-orange-500">40% OFF</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Premium laptops with official warranty, secure payment and fast delivery.
              </p>

              <Countdown />

              <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600 transition">
                Shop Now
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />
              <motion.div whileHover={{ y: -8, scale: 1.03 }}>
                <Image
                  src="/products/macbook-air.png"
                  alt="MacBook Air"
                  width={900}
                  height={700}
                  priority
                  className="relative w-full max-w-[620px] object-contain drop-shadow-[0_35px_80px_rgba(249,115,22,.35)]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
