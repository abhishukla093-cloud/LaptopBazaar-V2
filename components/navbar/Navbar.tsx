"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Actions from "./Actions";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div
          className={`mx-auto mt-5 transition-all duration-300 ${
            scrolled ? "scale-[0.985]" : "scale-100"
          }`}
        >
          <div
            className={`rounded-full border border-white/10 bg-black/50 backdrop-blur-2xl transition-all duration-300 ${
              scrolled ? "h-16 shadow-2xl" : "h-20"
            }`}
          >
            <div className="flex h-full items-center justify-between px-6 xl:px-10">

              {/* Logo */}
              <div className="flex w-[260px] items-center">
                <Logo />
              </div>

              {/* Navigation */}
              <div className="hidden flex-1 justify-center lg:flex">
                <NavLinks />
              </div>

              {/* Right Actions */}
              <div className="flex w-[430px] justify-end">
                <Actions />
              </div>

            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}