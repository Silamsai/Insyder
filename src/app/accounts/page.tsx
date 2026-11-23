"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Plus, Minus } from "lucide-react";

export default function AccountsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navPills = [
    { label: "Watchlist & imports", href: "#watchlist" },
    { label: "Account brief", href: "#brief" },
    { label: "Qualify a lead", href: "#qualify" },
    { label: "Sales acceptance", href: "#acceptance" },
    { label: "Pipeline & CRM", href: "#pipeline" },
  ];

  const steps = [
    {
      num: "01",
      title: "Research",
      desc: "Check the evidence behind each signal.",
    },
    {
      num: "02",
      title: "Qualify",
      desc: "Fill a brief where every answer records its basis.",
    },
    {
      num: "03",
      title: "Accept",
      desc: "A reviewer accepts, returns or rejects, with a reason.",
    },
    {
      num: "04",
      title: "Hand off",
      desc: "Send to your CRM or a partner, with no duplicates.",
    },
  ];

  const faqs = [
    {
      q: "What is the priority score?",
      a: "The priority score (out of 100) measures fit, timing and evidence strength. It weights company firmographics against detected signals, the freshness of verified sources and past win patterns for your offer.",
    },
    {
      q: "Can we skip the review step?",
      a: "Yes. Workspaces can configure automated acceptance gates. If an account meets your mandatory criteria (e.g. verified decision maker + recent tender notice), it can flow straight to sales without manual sign-off.",
    },
    {
      q: "Does accepting a brief change the deal stage?",
      a: "No. Accepting a brief confirms an account is worth sales time; it never artificially inflates deal pipeline stages. Deals progress independently as actual sales interactions take place.",
    },
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
            <Link href="/solutions" className="hover:text-white transition-colors">
              SOLUTIONS
            </Link>
            <span>/</span>
            <span className="text-slate-200">ACCOUNTS</span>
          </div>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            SOLUTIONS · ACCOUNTS
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Every account, its evidence and its path to sales, in one place.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
            Your target accounts with their research status, buying signals, qualification brief and deals. From watchlist to sales acceptance to CRM.
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
        </div>
      </section>

      {/* 2. Five Feature Sections (Alternating Layouts) */}
      <div className="divide-y divide-slate-200">
        {/* Section 1: Watchlist & imports */}
        <section id="watchlist" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  WATCHLIST & IMPORTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  All your target accounts, sorted by what matters.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Accounts grouped by playbook, with tier, research status, sales acceptance and a priority score, beside the signals your monitors found.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Import accounts or add a target by hand</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Filter by tier, research status or sales acceptance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>View flat or grouped by playbook</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Total accounts, high-intent Tier 1 and open pipeline at a glance</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Account intelligence</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Northbridge Manufacturing</span>
                      <span className="text-slate-500 text-[11px]">Tier 1 · accepted · qualified</span>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-teal-700 text-teal-900 font-bold text-xs">
                      86
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Halden Cold Chain</span>
                      <span className="text-slate-500 text-[11px]">Tier 1 · accepted</span>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-teal-700 text-teal-900 font-bold text-xs">
                      78
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Fenmoor College</span>
                      <span className="text-slate-500 text-[11px]">Tier 1 · in review</span>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-teal-700 text-teal-900 font-bold text-xs">
                      74
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Arkwright Components</span>
                      <span className="text-slate-500 text-[11px]">Tier 2 · draft</span>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-amber-600 text-amber-900 font-bold text-xs">
                      64
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Account brief (Alternating) */}
        <section id="brief" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Northbridge Manufacturing</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">New production facility announced</span>
                      <span className="text-slate-500 text-[11px]">Expansion · 14 Oct 2026</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Reviewed
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">IT Infrastructure Lead role</span>
                      <span className="text-slate-500 text-[11px]">Infra hiring · 03 Nov 2026</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      Not reviewed
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Regional hub consolidation</span>
                      <span className="text-slate-500 text-[11px]">Compute · 18 Aug 2026</span>
                    </div>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                      Stale
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  ACCOUNT BRIEF
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Every signal, with its source and date.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  One page per account: the evidence and its review status, priority, decision makers, deal stage, owner and a full activity timeline.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Mark evidence reviewed or flag it as stale</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Explainable priority score out of 100</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>A two-sentence, cited “why now” summary</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Activity timeline for everything that happened</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Qualify a lead */}
        <section id="qualify" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  QUALIFY A LEAD
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  A brief that says how each answer is known.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  A guided five-step flow: pick a lead, check the evidence, fill the brief, add people and send it for review.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Mark each answer unknown, inferred, observed or confirmed</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Fields for use case, environment, driver, timeframe, decision maker and partner</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>See which acceptance gates are still open</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Send to a named sales reviewer with a note</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Qualification brief</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Workload / use case</span>
                      <span className="font-bold text-slate-900">New production lines need site systems</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Observed
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Buying timeframe</span>
                      <span className="font-bold text-slate-900">Before opening · date disputed</span>
                    </div>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                      Inferred
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Deployment model</span>
                      <span className="font-bold text-slate-900">Critical question for the meeting</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      Unknown
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Sales acceptance (Alternating) */}
        <section id="acceptance" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Sales acceptance</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Draft</span>
                      <span className="text-slate-500 text-[11px]">Being researched</span>
                    </div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                      9
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Ready for review</span>
                      <span className="text-slate-500 text-[11px]">Waiting for a decision</span>
                    </div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                      2
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Needs research</span>
                      <span className="text-slate-500 text-[11px]">Returned with a reason</span>
                    </div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                      1
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Accepted</span>
                      <span className="text-slate-500 text-[11px]">Owner and next action set</span>
                    </div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-800 text-white text-xs font-bold">
                      7
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  SALES ACCEPTANCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  A reviewer decides what’s worth sales time.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Reviewers accept, return or reject each brief. Every decision records the reviewer, reason, time and brief version.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Acceptance needs reviewed evidence, an owner and a next action</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Add the brief fields your workspace requires</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Returned briefs go back to the researcher with the reason</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Works with or without a separate review step</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Pipeline & CRM */}
        <section id="pipeline" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  PIPELINE & CRM
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Acceptance and deal stage, side by side.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Track deals on their own, then send accepted accounts to your CRM without creating duplicates.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Accepting a brief never moves a deal by itself</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Owners, next actions and overdue items</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Send company, contacts and deal to HubSpot or Salesforce</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Partner handoffs that share permitted fields only</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Opportunity pipeline</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Northbridge Manufacturing</span>
                      <span className="text-slate-500 text-[11px]">Accepted · Qualified · Priya Shah</span>
                    </div>
                    <span className="text-slate-600 text-xs font-mono">27 Nov</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Halden Cold Chain</span>
                      <span className="text-slate-500 text-[11px]">Accepted · Contacted · £60,000</span>
                    </div>
                    <span className="text-slate-600 text-xs font-mono">24 Nov</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Kestrel Data Services</span>
                      <span className="text-slate-500 text-[11px]">New · no deal yet</span>
                    </div>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                      Overdue
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. How It Works Section (Dark Navy #091424) */}
      <section className="bg-[#091424] py-20 text-white border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-12">
            From watchlist to CRM, with a check at every step.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-white/10 bg-[#0C1A2E] p-6 space-y-3"
              >
                <span className="text-xs font-mono font-bold text-[#7fe3d6]">{s.num}</span>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Questions about Accounts.
              </h2>
            </div>

            <div className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between text-left focus:outline-none group"
                    >
                      <span className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        {faq.q}
                      </span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 group-hover:bg-teal-50 transition-colors">
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5 text-teal-800" />
                        ) : (
                          <Plus className="h-3.5 w-3.5 text-slate-600 group-hover:text-teal-800" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Previous / Next Navigation Row */}
      <section className="py-8 bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/monitor"
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <span className="text-[11px] text-slate-400 font-medium">← Previous</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors mt-1">
                Monitor
              </span>
            </Link>

            <Link
              href="/product#contacts"
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col justify-between text-right group"
            >
              <span className="text-[11px] text-slate-400 font-medium">Next →</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors mt-1">
                Contact profiling
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer Callout (Dark Navy) */}
      <section className="bg-[#091424] py-20 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Give sales fewer, better accounts.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/book-demo"
              className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-7 py-2.5 text-xs font-bold text-[#091424] shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              Book a demo
            </Link>

            <Link
              href="/solutions"
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              All solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
