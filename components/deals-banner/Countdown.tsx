"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date();
  target.setDate(target.getDate() + 5);

  const calculate = () => {
    const now = new Date().getTime();
    const distance = target.getTime() - now;

    if (distance <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(
        Math.floor((distance / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((distance / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(
        Math.floor((distance / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Box = ({
    value,
    label,
  }: {
    value: string;
    label: string;
  }) => (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-md">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
        {label}
      </div>
    </div>
  );

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
      <Box value={time.days} label="Days" />
      <Box value={time.hours} label="Hours" />
      <Box value={time.minutes} label="Minutes" />
      <Box value={time.seconds} label="Seconds" />
    </div>
  );
}   