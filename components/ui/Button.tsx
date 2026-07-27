"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-orange-500/40",
        variant === "primary"
          ? "bg-orange-500 text-white shadow-[0_0_35px_rgba(249,115,22,0.35)] hover:bg-orange-600"
          : "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-orange-500/40 hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}