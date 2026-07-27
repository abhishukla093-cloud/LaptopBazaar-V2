export default function HeroBackground() {
  return (
    <>
      {/* Main Orange Glow */}
      <div className="absolute left-1/2 top-32 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[160px]" />

      {/* Blue Glow */}
      <div className="absolute right-10 top-40 h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[140px]" />

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />

      {/* Grid */}
      <div
        className="
        absolute inset-0
        opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:64px_64px]
      "
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
    </>
  );
}