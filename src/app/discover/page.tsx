"use client";

import React, { useState } from "react";
import Link from "next/link";
import { InsyderDemoWorkspace } from "@/components/demo/InsyderDemoWorkspace";
import { Check, ArrowRight, ArrowLeft, Plus, Minus } from "lucide-react";

export default function DiscoverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navPills = [
    { label: "Plain-language search", href: "#search" },
    { label: "Quick search or list", href: "#types" },
    { label: "Playbooks", href: "#playbooks" },
    { label: "Choose & assign", href: "#assign" },
  ];

  const steps = [
    {
      num: "01",
      title: "Describe",
      desc: "Write who you’re looking for and pick a playbook.",
    },
    {
      num: "02",
      title: "Review",
      desc: "Check the search before research units are spent.",
    },
    {
      num: "03",
      title: "Choose",
      desc: "Select the leads worth researching from the results.",
    },
    {
      num: "04",
      title: "Assign",
      desc: "Hand them to a researcher, with a task for each.",
    },
  ];

  const faqs = [
    {
      q: "What does a search cost?",
      a: "A quick search costs 1 research unit per company found. Building a comprehensive list with full source verification costs 2 units per account. You review every search query and result count estimate before any units are deducted.",
    },
    {
      q: "Where do the results come from?",
      a: "Insyder indexes live, public evidence across official council planning permissions, public sector procurement notices, enterprise job board telemetry, corporate press releases, and specialized trade publications.",
    },
    {
      q: "Can I search without a playbook?",
      a: "Yes. You can run open plain-language company research without attaching a playbook. Attaching a playbook simply applies predefined signal weights and pre-filters your target signals.",
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
            <span className="text-slate-200">DISCOVER</span>
          </div>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            SOLUTIONS · DISCOVER
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Find companies with a reason to talk, before anyone else does.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
            Describe the accounts you want in plain language. Insyder searches the web against your playbook, saves each match with its sources and hands it to a researcher.
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

      {/* 2. Four Feature Sections (Alternating) */}
      <div className="divide-y divide-slate-200">
        {/* Section 1: Plain-language search */}
        <section id="search" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  PLAIN-LANGUAGE SEARCH
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Say who, where and what they’re doing.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  No boolean strings or filter trees. Describe the companies you want, and be specific: who they are, where they are and what is changing.
                </p>

                <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-3 text-xs text-teal-950 font-serif italic">
                  “UK universities upgrading data centres in the last 90 days”
                </div>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Mention a city or region in the description to narrow it</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Set countries, industries and how many results you want</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Every result is saved as an account with its sources</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Describe the companies</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-slate-500 text-[10px] block">What kind of companies?</span>
                      <span className="font-bold text-slate-900">UK manufacturers expanding production sites</span>
                    </div>
                    <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      Required
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Countries</span>
                      <span className="font-bold text-slate-900">United Kingdom</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Set
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Industries</span>
                      <span className="font-bold text-slate-900">Manufacturing</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      Recommended
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Results</span>
                      <span className="font-bold text-slate-900">10 · 1 result = 1 research unit</span>
                    </div>
                    <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                      10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Search type (Alternating) */}
        <section id="types" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Search type</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Quick search</span>
                      <span className="text-slate-500 text-[11px]">Takes seconds · up to 10 results</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Selected
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Build a list</span>
                      <span className="text-slate-500 text-[11px]">Takes a few minutes · up to 25 companies</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      Option
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">History</span>
                      <span className="text-slate-500 text-[11px]">8 previous searches</span>
                    </div>
                    <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                      8
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  SEARCH TYPE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Seconds for a scan, minutes for a checked list.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Choose the depth that fits the job: a quick look at recent news, or a list where every company is checked against your signals.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Quick search: recent articles about companies with a buying signal, up to 10 results</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Build a list: up to 25 companies, each checked against your signals, with sources</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Run history keeps every past search</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Playbooks */}
        <section id="playbooks" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  PLAYBOOKS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Your signals, bundled and reusable.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  A playbook says which changes make an account relevant to your offer. Use it for searches now and monitors later.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Expansion, infrastructure hiring, hardware refresh, compute and procurement signals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>One playbook per offer or campaign</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Accounts are grouped by playbook across Insyder</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Or search with no playbook for open company research</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Playbooks</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Infrastructure expansion</span>
                      <span className="text-slate-500 text-[11px]">Expansion · infra hiring · refresh · compute</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      6 accounts
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Hiring demand</span>
                      <span className="text-slate-500 text-[11px]">Infrastructure roles at growing sites</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      4 accounts
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Multi-site IT support</span>
                      <span className="text-slate-500 text-[11px]">Refresh and procurement signals</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      3 accounts
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Public tenders</span>
                      <span className="text-slate-500 text-[11px]">New procurement notices</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      2 accounts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Choose & assign (Alternating) */}
        <section id="assign" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Find & assign</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">1 · Find leads</span>
                      <span className="text-slate-500 text-[11px]">Search reviewed and run</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Done
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">2 · Choose leads</span>
                      <span className="text-slate-500 text-[11px]">4 of 10 selected</span>
                    </div>
                    <span className="rounded bg-[#0B1528] px-2 py-0.5 text-[10px] font-bold text-white">
                      Current
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">3 · Assign researcher</span>
                      <span className="text-slate-500 text-[11px]">Tom Reed</span>
                    </div>
                    <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                      Next
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">4 · Done</span>
                      <span className="text-slate-500 text-[11px]">Research tasks created</span>
                    </div>
                    <span className="text-slate-400 text-xs">—</span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  CHOOSE & ASSIGN
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Pick the best leads and hand them over.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  A four-step flow takes you from search to assigned work: find leads, choose the ones worth researching, assign a researcher, done.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Review the search before any research units are spent</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Select the leads worth a researcher’s time</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Each assignment creates a research task</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Accounts appear in the watchlist straight away</span>
                  </li>
                </ul>
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
            From a sentence to an assigned lead in four steps.
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
                Questions about Discover.
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
              href="/solutions"
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <span className="text-[11px] text-slate-400 font-medium">← All solutions</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors mt-1">
                Solutions overview
              </span>
            </Link>

            <Link
              href="/product#monitor"
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col justify-between text-right group"
            >
              <span className="text-[11px] text-slate-400 font-medium">Next →</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors mt-1">
                Monitor
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer Callout (Dark Navy) */}
      <section className="bg-[#091424] py-20 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Find your next accounts with a reason to talk.
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
