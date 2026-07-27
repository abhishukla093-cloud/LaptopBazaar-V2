"use client";

import { MonitorSmartphone } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Orange Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-8 top-8 h-60 w-60 rounded-full bg-sky-500/10 blur-[120px]" />

      {/* Background Ring */}
      <div className="absolute h-[470px] w-[470px] rounded-full border border-orange-500/10" />

      {/* Laptop */}
      <div className="relative z-10">

        {/* Screen */}
        <div className="relative h-[360px] w-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-[0_40px_120px_rgba(0,0,0,.65)]">

          {/* Screen Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,.16),transparent_70%)]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* Logo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-500/20 ring-1 ring-orange-500/20">
              <MonitorSmartphone
                size={50}
                className="text-orange-400"
              />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-white">
              LaptopBazaar
            </h2>

            <p className="mt-3 text-lg text-zinc-400">
              Performance. Precision. Power.
            </p>

          </div>

        </div>

        {/* Laptop Base */}
        <div className="mx-auto h-3 w-[578px] rounded-b-[40px] bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 shadow-[0_12px_30px_rgba(0,0,0,0.45)]" />

      </div>

    </div>
  );
}