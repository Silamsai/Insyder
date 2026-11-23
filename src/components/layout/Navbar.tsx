"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export function InsyderLogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Icon mark [i,] */}
      <div className="relative flex h-7 w-7 items-center justify-center rounded-md border border-white/20 bg-white/5 font-mono text-xs font-bold text-white shadow-sm">
        <span className="text-teal-300 font-extrabold text-[13px]">[i,]</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-white">insyder</span>
    </div>
  );
}

export const InsyderExactLogo = InsyderLogo;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#091424] text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <InsyderLogo />
        </Link>

        {/* Desktop Navigation matching screenshot */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
            <Link
              href="/product"
              className={pathname === "/product" ? "text-white font-semibold" : ""}
            >
              Product
            </Link>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
          </div>

          <Link
            href="/solutions"
            className={`transition-colors ${
              pathname === "/solutions" ? "text-white font-semibold" : "hover:text-white"
            }`}
          >
            Solutions by Teams
          </Link>

          <Link
            href="/about"
            className={`relative py-1 transition-colors ${
              pathname === "/about"
                ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7fe3d6]"
                : "hover:text-white"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/book-demo"
            className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-5 py-2 text-sm font-semibold text-[#091424] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#091424] px-6 py-6 space-y-4">
          <Link
            href="/product"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-teal-300"
          >
            Product
          </Link>
          <Link
            href="/solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-teal-300"
          >
            Solutions by Teams
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-teal-300"
          >
            About
          </Link>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded-full bg-[#7fe3d6] py-2.5 text-sm font-semibold text-[#091424]"
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
