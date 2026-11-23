import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PreFooterCta() {
  return (
    <section className="bg-[#091424] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h2 className="mx-auto max-w-3xl text-center text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Every account with a{" "}
          <span className="text-[#7fe3d6]">reason</span>, an owner and a prepared first call.
        </h2>

        {/* Dual Action Cards matching user prompt */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Book a demo */}
          <div className="rounded-2xl border border-white/10 bg-[#0C1A2E] p-8 flex flex-col justify-between hover:border-[#7fe3d6]/30 transition-all">
            <div>
              <h3 className="text-xl font-bold text-white">Book a demo</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                We’ll show Insyder on accounts and roles like the ones your team sells to.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-6 py-2.5 text-xs font-bold text-[#091424] transition-all hover:scale-105 active:scale-95"
              >
                <span>Book a demo</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: See a role hypothesis */}
          <div className="rounded-2xl border border-white/10 bg-[#0C1A2E] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
            <div>
              <h3 className="text-xl font-bold text-white">See a role hypothesis</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                Walk through a sample brief for one contact, section by section.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/preview"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs font-semibold text-white transition-colors"
              >
                <span>Open the example →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
