"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

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
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const productLinks = [
    {
      title: "Product tour",
      desc: "See how Insyder connects every step from signal to first meeting.",
      href: "/product",
    },
    {
      title: "Discover",
      desc: "Find companies with a reason to talk, from a plain-language search.",
      href: "/discover",
    },
    {
      title: "Monitor",
      desc: "Saved playbooks that re-check on a schedule and log new signals.",
      href: "/monitor",
    },
    {
      title: "Accounts",
      desc: "Every account, its evidence, its brief and its path to sales.",
      href: "/preview",
    },
    {
      title: "Contact profiling",
      desc: "Find who decides, then prepare for each person.",
      href: "/product",
    },
    {
      title: "Outreach",
      desc: "Tasks, drafts and handoffs that carry the account’s context.",
      href: "/product",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#091424] text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <InsyderLogo />
        </Link>

        {/* Desktop Navigation matching screenshot */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {/* Product Dropdown Trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors focus:outline-none ${
                productDropdownOpen || pathname === "/product"
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <span>Product</span>
              {productDropdownOpen ? (
                <ChevronUp className="h-3.5 w-3.5 text-white" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-white" />
              )}
            </button>

            {/* Exact Product Megamenu Dropdown from Screenshot */}
            {productDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-[540px] rounded-3xl border border-slate-200/80 bg-[#FAF9F5] p-6 text-slate-900 shadow-2xl animate-in fade-in zoom-in-95 duration-150 z-50">
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {productLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setProductDropdownOpen(false)}
                      className="group block rounded-xl p-2.5 transition-colors hover:bg-black/5"
                    >
                      <h4 className="text-sm font-bold text-slate-950 group-hover:text-teal-800 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 leading-snug font-normal">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block">Product</span>
            {productLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-300 hover:text-white pl-2"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-teal-300"
            >
              Solutions by Teams
            </Link>
          </div>

          <div>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-teal-300"
            >
              About
            </Link>
          </div>

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
