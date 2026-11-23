"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#091424] min-h-screen text-white">
      {/* 1. Hero Section (Dark Navy) */}
      <section className="pt-12 pb-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb matching screenshot */}
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-slate-200">ABOUT</span>
          </div>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            ABOUT INSYDER
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Better first conversations start with better account context.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Insyder helps revenue teams find companies with a reason to talk, see the evidence behind the opportunity and prepare the people who make the decisions.
          </p>

          {/* Action CTAs matching screenshot */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/book-demo"
              className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-6 py-2.5 text-xs font-bold text-[#091424] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              Book a demo
            </Link>

            <Link
              href="/product"
              className="rounded-full border border-white/20 bg-transparent hover:bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              Explore the product
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Middle 2-Column Section (Warm Off-White / Cream) */}
      <section className="bg-[#FAF9F5] py-20 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Why Insyder */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800">
                WHY INSYDER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Less guesswork. More useful context.
              </h2>
              <div className="space-y-4 pt-2 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                <p>
                  Good outreach begins before the first message. Teams need a clear reason to engage, credible sources for that reason and an understanding of who is likely to care.
                </p>
                <p>
                  Insyder brings those steps together in one workflow: discover relevant accounts, monitor new signals, build account briefs, profile decision makers and carry context into outreach.
                </p>
              </div>
            </div>

            {/* Right Column: How We Work */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Evidence first, always.
              </h2>
              <div className="space-y-4 pt-2 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                <p>
                  Account research should be explainable. Insyder keeps sources close to the insight, so teams can judge what is useful, what is uncertain and what to ask next.
                </p>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Examples throughout this website use fictional sample data. Product outputs are research aids—not verified facts or a substitute for a seller’s judgement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Callout: One shared picture of the opportunity (Dark Navy) */}
      <section className="bg-[#091424] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            BUILT FOR TEAMS WHO SELL INTO CHANGE
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            One shared picture of the opportunity.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            From sales leaders and SDRs to researchers, RevOps teams, agencies and channel partners, everyone can work from the same account evidence and next steps.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/solutions"
              className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-6 py-2.5 text-xs font-bold text-[#091424] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              Explore solutions by team
            </Link>

            <Link
              href="/product"
              className="rounded-full border border-white/20 bg-transparent hover:bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              See contact profiling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
