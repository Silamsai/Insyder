"use client";

import React from "react";
import Link from "next/link";
import { InsyderDemoWorkspace } from "@/components/demo/InsyderDemoWorkspace";
import { Sparkles, ArrowLeft, ArrowRight, ShieldCheck, Download, RefreshCw } from "lucide-react";

export default function PreviewPage() {
  return (
    <div className="bg-[#080d1a] min-h-screen text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation Bar Above Demo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>
            <span className="text-slate-600">/</span>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300 border border-teal-400/20">
              <Sparkles className="h-3 w-3 text-teal-400" /> Interactive Product Demo
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/book-demo"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
            >
              <span>Schedule Live Walkthrough</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* The Exact Insyder Workspace Component */}
        <InsyderDemoWorkspace />

        {/* Bottom Explainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs">
          <div className="rounded-xl border border-white/10 bg-[#0b132b] p-5 space-y-2">
            <span className="font-bold text-teal-300 uppercase tracking-wider text-[11px] block">
              1. Natural Language Search
            </span>
            <p className="text-slate-300 leading-relaxed">
              Describe your target accounts in plain English (e.g. "UK manufacturers opening production sites in the last 90 days").
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0b132b] p-5 space-y-2">
            <span className="font-bold text-cyan-300 uppercase tracking-wider text-[11px] block">
              2. Source-Verified Leads
            </span>
            <p className="text-slate-300 leading-relaxed">
              Every lead is backed by public planning permissions, tender filings, job board telemetry, and verified news announcements.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0b132b] p-5 space-y-2">
            <span className="font-bold text-emerald-300 uppercase tracking-wider text-[11px] block">
              3. Seamless Researcher Hand-off
            </span>
            <p className="text-slate-300 leading-relaxed">
              Directly delegate selected companies to researchers and sales development reps with pre-compiled evidence files.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
