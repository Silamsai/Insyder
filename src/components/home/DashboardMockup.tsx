"use client";

import React from "react";
import Link from "next/link";
import { InsyderDemoWorkspace } from "@/components/demo/InsyderDemoWorkspace";
import { Sparkles, ArrowRight, ChevronRight } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-6xl rounded-2xl shadow-[0_25px_70px_-15px_rgba(0,242,254,0.18)] transition-all">
      {/* Top Floating Glow Pill */}
      <div className="mb-3 flex items-center justify-between px-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping"></span>
          <span className="font-semibold text-teal-300">Live Interactive Workspace</span>
          <span className="hidden sm:inline text-slate-400">· Click leads to select or hand off to researcher</span>
        </div>
        <Link
          href="/preview"
          className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-semibold transition-colors"
        >
          <span>Open Full Screen</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Exact Insyder Workspace */}
      <InsyderDemoWorkspace isHeroCompact={true} />
    </div>
  );
}
