"use client";

import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28">

      {/* Background */}
      <div className="absolute inset-0 -z-10">

        {/* Main Orange Glow */}
        <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/12 blur-[180px]" />

        {/* Right Blue Ambient */}
        <div className="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-sky-500/8 blur-[180px]" />

        {/* Bottom Left Orange */}
        <div className="absolute bottom-[-120px] left-[-80px] h-[420px] w-[420px] rounded-full bg-orange-500/8 blur-[170px]" />

        {/* Top Left */}
        <div className="absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-white/[0.02] blur-[120px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.28)_100%)]" />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.045]
            bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        />

        {/* Noise */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            mix-blend-soft-light
            bg-[radial-gradient(circle,rgba(255,255,255,.4)_1px,transparent_1px)]
            bg-[size:14px_14px]
          "
        />
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}