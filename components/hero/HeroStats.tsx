"use client";

import { ShieldCheck, Truck, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "50K+",
    subtitle: "Happy Customers",
  },
  {
    icon: Truck,
    title: "Free",
    subtitle: "Shipping",
  },
  {
    icon: ShieldCheck,
    title: "Official",
    subtitle: "Warranty",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Icon
                size={22}
                className="text-orange-500"
              />
            </div>

            <div>
              <p className="text-base font-semibold text-white">
                {item.title}
              </p>

              <p className="text-sm text-zinc-500">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}