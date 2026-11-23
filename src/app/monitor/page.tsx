"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Plus, Minus } from "lucide-react";

export default function MonitorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navPills = [
    { label: "Saved recipes", href: "#recipes" },
    { label: "Cadence", href: "#cadence" },
    { label: "Signals detected", href: "#signals" },
    { label: "Into the account feed", href: "#feed" },
  ];

  const steps = [
    {
      num: "01",
      title: "Pick a playbook",
      desc: "Choose the signals and territory to watch.",
    },
    {
      num: "02",
      title: "Set the cadence",
      desc: "Daily, weekly or monthly, within your quota.",
    },
    {
      num: "03",
      title: "Review signals",
      desc: "Filter what was found by type, monitor or account.",
    },
    {
      num: "04",
      title: "Act on changes",
      desc: "Material changes flow into the account feed.",
    },
  ];

  const faqs = [
    {
      q: "Do monitors use research units?",
      a: "Yes. Each run uses units from your workspace quota. Monitors show when the quota has been reached.",
    },
    {
      q: "Can I monitor only my target accounts?",
      a: "Yes. You can watch your target watchlist, newly discovered leads, or both.",
    },
    {
      q: "How do I know a monitor is working?",
      a: "Each monitor shows when it last checked and when it last succeeded.",
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
            <span className="text-slate-200">MONITOR</span>
          </div>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            SOLUTIONS · MONITOR
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Keep watching your market, without anyone watching it.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
            Monitors are saved playbooks that re-run research on the schedule you choose, within your research quota, and log every new signal they find.
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

      {/* 2. Four Feature Sections (Alternating Layouts) */}
      <div className="divide-y divide-slate-200">
        {/* Section 1: Saved recipes */}
        <section id="recipes" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  SAVED RECIPES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Turn a playbook into a standing search.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  A monitor keeps your targeting: territory, time window and the signals that matter. It runs again and again so your team doesn’t have to.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Built from any playbook</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Territory and event window, such as the last 90 days</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Watch the whole market or only your target accounts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Add or remove monitors at any time</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Signal monitors</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Infrastructure expansion</span>
                      <span className="text-slate-500 text-[11px]">GB · last 90 days · 5 signals</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Multi-site IT support</span>
                      <span className="text-slate-500 text-[11px]">GB · last 90 days · 3 signals</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Hiring demand</span>
                      <span className="text-slate-500 text-[11px]">GB · last 90 days · 2 signals</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Cadence (Alternating) */}
        <section id="cadence" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Cadence</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Infrastructure expansion</span>
                      <span className="text-slate-500 text-[11px]">Daily · last checked 20 Nov</span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Fresh signals
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Multi-site IT support</span>
                      <span className="text-slate-500 text-[11px]">Weekly · last checked 16 Nov</span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      No changes
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Hiring demand</span>
                      <span className="text-slate-500 text-[11px]">Weekly · last checked 17 Nov</span>
                    </div>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                      Quota reached
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  CADENCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Daily, weekly or monthly. Or right now.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Choose how often each monitor checks. Every run stays within your research quota, and you can see when each last ran and last succeeded.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Set the cadence per monitor</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Check now when you need it</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Last checked and last successful run on every monitor</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Clear notice when the research quota is reached</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Signals detected */}
        <section id="signals" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  SIGNALS DETECTED
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Every new change, in one list.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Each detected signal shows its type, when it was found, which monitor found it and the source behind it.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Filter by signal type: refresh, hiring, compute, expansion, tender</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Filter by monitor or by account</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Show target watchlist accounts or newly discovered leads</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Open the source behind every signal</span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Signals detected</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Server refresh tender · Fenmoor College</span>
                      <span className="text-slate-500 text-[11px]">Hardware refresh · discovered 16 Nov</span>
                    </div>
                    <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-900">
                      Material change
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Reliability engineer role · Kestrel Data Services</span>
                      <span className="text-slate-500 text-[11px]">Infrastructure hiring · discovered 16 Nov</span>
                    </div>
                    <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-900">
                      Material change
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">New depot approved · Halden Cold Chain</span>
                      <span className="text-slate-500 text-[11px]">Expansion · discovered 14 Nov</span>
                    </div>
                    <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-900">
                      Material change
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Into the account feed (Alternating) */}
        <section id="feed" className="scroll-mt-24 py-20 bg-white/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                  <span className="font-bold text-slate-900">Signal activity log</span>
                  <span className="text-slate-400 font-mono text-[11px]">Sample data</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Northbridge Manufacturing</span>
                      <span className="text-slate-500 text-[11px]">IT vacancy names the new site</span>
                    </div>
                    <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-900">
                      Material change
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Arkwright Components</span>
                      <span className="text-slate-500 text-[11px]">Infrastructure engineer role</span>
                    </div>
                    <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-900">
                      Material change
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-900 block">Monitored changes</span>
                      <span className="text-slate-500 text-[11px]">Last 30 days</span>
                    </div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1528] text-white text-xs font-bold">
                      18
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                  INTO THE ACCOUNT FEED
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Changes land where your team works.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Material changes appear in the account intelligence feed, next to the account they belong to, so nobody needs to check a separate inbox.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Signal activity log beside your accounts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>New companies saved as discovered leads</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Changes on existing accounts flagged for review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Researchers can pick up new work straight away</span>
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
            Set it once, then let it run.
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
                Questions about Monitor.
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
              href="/discover"
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <span className="text-[11px] text-slate-400 font-medium">← Previous</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors mt-1">
                Discover
              </span>
            </Link>

            <Link
              href="/preview"
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col justify-between text-right group"
            >
              <span className="text-[11px] text-slate-400 font-medium">Next →</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors mt-1">
                Accounts
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer Callout (Dark Navy) */}
      <section className="bg-[#091424] py-20 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Never miss the change that makes an account relevant.
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
