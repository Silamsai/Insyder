"use client";

import React from "react";
import Link from "next/link";
import { InsyderDemoWorkspace } from "@/components/demo/InsyderDemoWorkspace";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function ProductPage() {
  const navPills = [
    { label: "Discover", href: "#discover" },
    { label: "Monitor", href: "#monitor" },
    { label: "Accounts", href: "#accounts" },
    { label: "Contact profiling", href: "#contacts" },
    { label: "Outreach", href: "#outreach" },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900">
      {/* 1. Hero Section (Dark Navy #091424) */}
      <section className="bg-[#091424] text-white pt-12 pb-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-slate-200">PRODUCT</span>
          </div>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            PRODUCT TOUR
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Everything your team needs between a signal and a first meeting.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Five connected workflows, from finding accounts with a reason to talk to handing them to sales.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/book-demo"
              className="inline-flex items-center rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-6 py-2.5 text-xs font-bold text-[#091424] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              Book a demo
            </Link>
          </div>

          {/* Anchor Navigation Pills */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
            {navPills.map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className="rounded-full border border-white/15 bg-white/5 hover:border-[#7fe3d6]/40 hover:text-white px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors"
              >
                {pill.label}
              </a>
            ))}
          </div>

          {/* Floating Insyder Discover Demo Workspace */}
          <div className="mt-14 max-w-6xl mx-auto shadow-[0_25px_80px_-15px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden border border-white/10">
            <InsyderDemoWorkspace isHeroCompact={false} />
          </div>
        </div>
      </section>

      {/* 2. Five Workflows Detail Sections (Alternating Layouts) */}
      <div className="divide-y divide-slate-200">
        {/* Section 1: Discover */}
        <section id="discover" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  DISCOVER
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Find companies with a reason to talk.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Describe the accounts you want in plain language and get matches saved with their sources.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Quick search or checked lists</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Playbooks of signals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Review before spending</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Find & assign</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Northbridge Manufacturing</span>
                      <span className="text-slate-500 text-[11px]">Expansion + IT vacancy</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Match
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Arkwright Components</span>
                      <span className="text-slate-500 text-[11px]">Infrastructure hiring</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Match
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/preview"
                    className="inline-flex items-center text-xs font-bold text-teal-800 hover:text-slate-950 transition-colors"
                  >
                    <span>More on Discover →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Monitor (Alternating) */}
        <section id="monitor" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Signal monitors</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Infrastructure expansion</span>
                      <span className="text-slate-500 text-[11px]">Daily</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Fresh signals
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Hiring demand</span>
                      <span className="text-slate-500 text-[11px]">Weekly</span>
                    </div>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                      Quota reached
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/preview"
                    className="inline-flex items-center text-xs font-bold text-teal-800 hover:text-slate-950 transition-colors"
                  >
                    <span>More on Monitor →</span>
                  </Link>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  MONITOR
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Keep watching, so you don’t have to.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Monitors re-run playbooks on a schedule and log every new signal.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Daily, weekly or monthly</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Filter detected signals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Changes flow into the account feed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Accounts */}
        <section id="accounts" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  ACCOUNTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Every account, its evidence and its path to sales.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Watchlist, account brief, qualification, sales acceptance, pipeline and CRM.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Signals with sources and dates</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Answers marked with their basis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Decisions on record</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Northbridge Manufacturing</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">New production facility</span>
                      <span className="text-slate-500 text-[11px]">Expansion · 14 Oct 2026</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Reviewed
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Priority</span>
                      <span className="text-slate-500 text-[11px]">Fit, timing and evidence</span>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-teal-700 text-teal-900 font-bold text-xs">
                      86
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/preview"
                    className="inline-flex items-center text-xs font-bold text-teal-800 hover:text-slate-950 transition-colors"
                  >
                    <span>More on Accounts →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact profiling (Alternating) */}
        <section id="contacts" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Decision makers</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Helen Marsh</span>
                      <span className="text-slate-500 text-[11px]">Head of IT Infrastructure</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Hypothesis ready
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Owen Clarke</span>
                      <span className="text-slate-500 text-[11px]">Operations Director</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      Unverified
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/preview"
                    className="inline-flex items-center text-xs font-bold text-teal-800 hover:text-slate-950 transition-colors"
                  >
                    <span>More on Contact profiling →</span>
                  </Link>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  CONTACT PROFILING
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Know who decides, and what to say.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Find decision makers with sources, then run a role hypothesis for each.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Sourced, unverified until checked</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Roles to find</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Ten-section role hypotheses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Outreach */}
        <section id="outreach" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  OUTREACH
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Every task carries its context.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Team tasks, clear instructions, drafts from reviewed evidence and partner handoffs.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>One list for the whole team</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Drafts for human review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Outcomes logged</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Tasks</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Northbridge Manufacturing</span>
                      <span className="text-slate-500 text-[11px]">Research · due 22 Nov</span>
                    </div>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                      In progress
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Halden Cold Chain</span>
                      <span className="text-slate-500 text-[11px]">Email · due 24 Nov</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      Open
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/preview"
                    className="inline-flex items-center text-xs font-bold text-teal-800 hover:text-slate-950 transition-colors"
                  >
                    <span>More on Outreach →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Bottom Callout (Dark Navy) */}
      <section className="bg-[#091424] py-20 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            See every step on accounts like yours.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/book-demo"
              className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-7 py-2.5 text-xs font-bold text-[#091424] shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              Book a demo
            </Link>

            <Link
              href="/preview"
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              See a role hypothesis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
