"use client";

import React from "react";
import Link from "next/link";
import { InsyderDemoWorkspace } from "@/components/demo/InsyderDemoWorkspace";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 bg-[#091424] text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#7fe3d6]/30 bg-[#0c1c33] px-4 py-1.5 mb-7">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7fe3d6]">
            ACCOUNT INTELLIGENCE FOR REVENUE TEAMS
          </span>
        </div>

        {/* Main Headline with Reduced, Proportional Font Size */}
        <h1 className="mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.12]">
          Find the right accounts. <br />
          Walk into{" "}
          <span className="text-[#7fe3d6]">
            every first
          </span>{" "}
          <span className="text-[#7fe3d6]">
            meeting
          </span>{" "}
          prepared.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          Insyder spots companies going through the changes your offer depends on, shows the evidence, finds the people who decide, and briefs your sellers on each one before they call.
        </p>

        {/* Action CTAs */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/book-demo"
            className="w-full sm:w-auto rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-7 py-2.5 text-sm font-bold text-[#091424] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a demo
          </Link>

          <Link
            href="/preview"
            className="w-full sm:w-auto rounded-full border border-white/20 bg-[#122238] hover:bg-[#182c47] px-6 py-2.5 text-sm font-semibold text-white transition-all"
          >
            See how Discover works
          </Link>
        </div>

        {/* Subtext below buttons */}
        <p className="mt-4 text-xs text-slate-400 font-medium">
          Live web research · HubSpot and Salesforce sync · role-based access
        </p>

        {/* The Exact Insyder Discover Demo Workspace */}
        <div className="mt-12 max-w-6xl mx-auto shadow-[0_25px_80px_-15px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden border border-white/10">
          <InsyderDemoWorkspace isHeroCompact={false} />
        </div>
      </div>
    </section>
  );
}
