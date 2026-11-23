import React from "react";
import Link from "next/link";
import { InsyderLogo } from "./Navbar";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070E1A] text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 space-y-3">
            <Link href="/" className="inline-block">
              <InsyderLogo />
            </Link>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Account intelligence for revenue teams. Know who to call, and what to say.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">Product tour</Link>
              </li>
              <li>
                <Link href="/discover" className="hover:text-white transition-colors">Discover</Link>
              </li>
              <li>
                <Link href="/monitor" className="hover:text-white transition-colors">Monitor</Link>
              </li>
              <li>
                <Link href="/accounts" className="hover:text-white transition-colors">Accounts</Link>
              </li>
              <li>
                <Link href="/contact-profiling" className="hover:text-white transition-colors">Contact profiling</Link>
              </li>
              <li>
                <Link href="/outreach" className="hover:text-white transition-colors">Outreach</Link>
              </li>
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">Solutions by Teams</Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-white transition-colors">Book a demo</Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-white transition-colors">Contact details</Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-white transition-colors">Privacy policy</Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-white transition-colors">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-white/5 pt-8 text-slate-500">
          <p>© {new Date().getFullYear()} Insyder Technologies, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
