"use client";

import Container from "@/components/layout/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Actions from "./Actions";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="mt-6 h-20 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="grid h-full grid-cols-[260px_minmax(0,1fr)_260px] items-center px-8">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <Logo />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center">
              <NavLinks />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end">
              <Actions />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}