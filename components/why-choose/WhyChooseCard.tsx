"use client";

import { motion } from "framer-motion";
import type { WhyChooseItem } from "./data";

interface WhyChooseCardProps {
  item: WhyChooseItem;
}

export default function WhyChooseCard({
  item,
}: WhyChooseCardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500/40
        hover:shadow-[0_0_45px_rgba(249,115,22,.12)]
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-orange-500/10
          text-orange-400
          transition-all
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white
        "
      >
        <Icon size={30} />
      </div>

      <h3 className="text-xl font-semibold text-white">
        {item.title}
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        {item.description}
      </p>
    </motion.div>
  );
}