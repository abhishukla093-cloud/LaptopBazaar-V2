import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 select-none"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_0_30px_rgba(249,115,22,0.28)] transition-all duration-300 group-hover:scale-105">
        <span className="text-lg font-bold text-white">L</span>
      </div>

      <h2 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-400">
        LaptopBazaar
      </h2>
    </Link>
  );
}