"use client";

import React from "react";
import Link from "next/link";

export function RoleHypothesisSection() {
  const metaRows = [
    { label: "Built from", value: "Public sources, account research, your notes" },
    { label: "Time", value: "A few minutes" },
    { label: "Cost", value: "2 research units" },
    { label: "Output", value: "10 sections, sources, PDF export" },
    { label: "Status", value: "A working hypothesis, never verified fact" },
  ];

  return (
    <section className="bg-[#0B1528] py-20 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-12">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6]">
              ROLE HYPOTHESIS
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.1]">
              Know what each <br />
              person is likely to care <br />
              about, before you call.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal pt-1">
              For any contact, Insyder writes a meeting-ready brief from public sources, the account research and your meeting notes.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                href="/preview"
                className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] text-[#091424] px-6 py-2.5 text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                See a full example
              </Link>
              <Link
                href="/product"
                className="rounded-full border border-white/20 bg-transparent hover:bg-white/5 text-white px-6 py-2.5 text-xs font-semibold transition-colors"
              >
                Contact profiling
              </Link>
            </div>
          </div>

          {/* Right Column: Key-Value Table matching screenshot */}
          <div className="lg:col-span-5 pt-2">
            <div className="divide-y divide-white/10 border-t border-b border-white/10 text-xs sm:text-sm">
              {metaRows.map((row) => (
                <div key={row.label} className="py-3.5 flex items-center justify-between gap-4">
                  <span className="text-slate-400 font-normal shrink-0">{row.label}</span>
                  <span className="text-slate-200 font-medium text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Exact Contact Role Hypothesis · Sample Card */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-[#FBFBF7] text-slate-900 shadow-2xl overflow-hidden">
          {/* Card Top Bar */}
          <div className="p-6 sm:p-8 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
                CONTACT ROLE HYPOTHESIS · SAMPLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                Helen Marsh, Northbridge Manufacturing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                Head of IT Infrastructure · Decision maker
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => alert("Regenerated hypothesis for Helen Marsh.")}
                className="rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors"
              >
                Regenerate
              </button>
              <button
                onClick={() => alert("Downloading PDF brief...")}
                className="rounded-lg bg-[#0B1528] hover:bg-slate-800 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-colors"
              >
                Export PDF
              </button>
            </div>
          </div>

          {/* Card Body: 3 Columns matching screenshot */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Column 1: Opening Approach (4 cols) */}
            <div className="md:col-span-4 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                OPENING APPROACH
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                “I saw the Kestrel Park announcement. Which part of getting the site ready is taking most of your attention?”
              </p>
            </div>

            {/* Column 2: Lead With & Hold Back (4 cols) */}
            <div className="md:col-span-4 space-y-4 md:border-l md:border-slate-200/80 md:pl-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                  LEAD WITH
                </span>
                <p className="mt-1 text-sm text-slate-700 font-normal">
                  A site network and backup design review.
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                  HOLD BACK
                </span>
                <div className="mt-1 flex items-start gap-2 text-sm text-slate-700 font-normal">
                  <span className="text-rose-600 font-bold shrink-0">■</span>
                  <span>A full hardware refresh proposal</span>
                </div>
              </div>
            </div>

            {/* Column 3: The Question to Leave Them With (4 cols) */}
            <div className="md:col-span-4">
              <div className="rounded-xl border border-[#CDEAE5] bg-[#EFF8F6] p-5 sm:p-6 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 block">
                  THE QUESTION TO LEAVE THEM WITH
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                  “What has to be true on opening day for you to be confident the site will run?”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
