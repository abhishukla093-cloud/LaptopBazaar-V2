"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Orange Glow */}
      <div className="absolute h-[620px] w-[620px] rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-0 top-10 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[120px]" />

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* Glass Panel */}
        <div className="relative h-[520px] w-[620px] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl">

          {/* Reflection */}
          <div className="absolute -left-32 top-0 h-full w-40 rotate-12 bg-white/10 blur-3xl" />

          {/* Decorative Rings */}
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-orange-500/30" />
          <div className="absolute left-10 bottom-10 h-16 w-16 rounded-full border border-sky-400/20" />

          {/* Laptop Placeholder */}
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-7xl">💻</div>

              <h3 className="text-2xl font-bold text-white">
                Premium 3D Laptop
              </h3>

              <p className="mt-2 text-zinc-400">
                Coming in the next step
              </p>
            </div>
          </div>

        </div>

        {/* Shadow */}
        <div className="mx-auto mt-10 h-8 w-[320px] rounded-full bg-orange-500/20 blur-3xl" />
      </motion.div>

    </div>
  );
}