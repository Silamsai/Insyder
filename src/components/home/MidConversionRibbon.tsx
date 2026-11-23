import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MidConversionRibbon() {
  return (
    <section className="bg-[#EAE8DE] py-14 border-y border-slate-300 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            See Insyder on accounts like the ones your team sells to.
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-demo"
              className="rounded-full bg-[#0B1528] hover:bg-slate-800 text-white px-6 py-2.5 text-xs font-bold transition-all shadow-sm"
            >
              Book a demo
            </Link>

            <Link
              href="/product"
              className="rounded-full border border-slate-400/80 bg-white hover:bg-slate-50 text-slate-900 px-5 py-2.5 text-xs font-semibold transition-colors"
            >
              Take the product tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
