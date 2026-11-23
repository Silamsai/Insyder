"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Plus, Minus, FileText, Sparkles, Download, RefreshCw, ExternalLink } from "lucide-react";

export default function ContactProfilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showFullExample, setShowFullExample] = useState(false);

  const navPills = [
    { label: "Find decision makers", href: "#find" },
    { label: "Roles to find", href: "#roles" },
    { label: "Role hypothesis", href: "#hypothesis" },
    { label: "Meeting notes", href: "#notes" },
  ];

  const steps = [
    {
      num: "01",
      title: "Find people",
      desc: "Search for decision makers on the account.",
    },
    {
      num: "02",
      title: "Check them",
      desc: "Confirm who they are before relying on them.",
    },
    {
      num: "03",
      title: "Run a hypothesis",
      desc: "Get a ten-section brief for each contact.",
    },
    {
      num: "04",
      title: "Prepare",
      desc: "Add a meeting note, regenerate and export.",
    },
  ];

  const faqs = [
    {
      q: "Are contacts verified?",
      a: "No. Insyder finds contacts from public sources and marks them unverified. Your team checks them before use, keeping research explainable and in your control.",
    },
    {
      q: "Is a role hypothesis a personality profile?",
      a: "No. It describes a professional role from public sources, as a working hypothesis to check in conversation. It is never presented as verified fact or psychological profiling.",
    },
    {
      q: "What does it cost?",
      a: "Finding decision makers uses one research unit per search. Running a full ten-section role hypothesis uses two research units per contact.",
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
            <span className="text-slate-200 uppercase">CONTACT PROFILING</span>
          </div>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            SOLUTIONS · CONTACT PROFILING
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Know who decides, and what to say to each of them.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
            Find the IT and technology decision makers at an account, each with a source. Then prepare for every conversation with a role hypothesis.
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
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white transition-colors"
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Section 1: Find decision makers (#find) */}
      <section id="find" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                FIND DECISION MAKERS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                The people who own the decision, with sources.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Insyder searches the web for IT and technology decision makers at an account, with work emails where it finds them. Every contact shows where it was found.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Name, title and work email where available",
                  "The source and public profile behind each contact",
                  "Marked unverified until someone on your team checks",
                  "One research unit per search",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7fe3d6]/30 text-[#0d7a6e] mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: Decision makers · Sample data */}
            <div className="w-full">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">Decision makers</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Helen Marsh */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Helen Marsh</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Head of IT Infrastructure · source linked</p>
                    </div>
                    <span className="rounded bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-[11px] font-medium text-amber-800">
                      Unverified
                    </span>
                  </div>

                  {/* Owen Clarke */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Owen Clarke</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Operations Director · source linked</p>
                    </div>
                    <span className="rounded bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-[11px] font-medium text-amber-800">
                      Unverified
                    </span>
                  </div>

                  {/* Ruth Adeyemi */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Ruth Adeyemi</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Procurement Lead · source linked</p>
                    </div>
                    <span className="rounded bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-[11px] font-medium text-amber-800">
                      Unverified
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-stone-100 text-xs text-slate-500">
                  Results are unverified: check before use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Roles to find (#roles) */}
      <section id="roles" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Card: Roles to find · Sample data */}
            <div className="w-full order-2 lg:order-1">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">Roles to find</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Site project manager */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Site project manager</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Kestrel Park</p>
                    </div>
                    <span className="rounded bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">
                      Open
                    </span>
                  </div>

                  {/* Head of Procurement */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Head of Procurement</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Found · Ruth Adeyemi</p>
                    </div>
                    <span className="rounded bg-[#eefaf8] border border-[#a2ded6]/60 px-2.5 py-1 text-xs font-semibold text-[#0d7a6e]">
                      Filled
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                ROLES TO FIND
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Track the roles that matter, even before you know the person.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                If a role matters but nobody fills it yet, add it. Your team can see the gap and close it later.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Add roles such as site project manager or procurement lead",
                  "See open roles beside your contacts",
                  "Add a contact by hand when you meet someone",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7fe3d6]/30 text-[#0d7a6e] mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 3: Role hypothesis (#hypothesis) */}
      <section id="hypothesis" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                ROLE HYPOTHESIS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                A meeting-ready brief for each person.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                For any contact, Insyder writes ten sections: what they likely control, their world right now, how to open, what to ask, objections and what you don’t know yet.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Built from public sources, the account research and your notes",
                  "A few minutes and 2 research units per contact",
                  "Sources listed, PDF export",
                  "A working hypothesis, never presented as fact",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7fe3d6]/30 text-[#0d7a6e] mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: Role hypothesis · Helen Marsh */}
            <div className="w-full">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">Role hypothesis · Helen Marsh</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Item 01 */}
                  <div className="py-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Meeting context</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Purpose, posture and central tension</p>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-mono font-bold text-slate-600">
                      01
                    </span>
                  </div>

                  {/* Item 06 */}
                  <div className="py-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">How to run the meeting</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Opening, questions and the ask</p>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-mono font-bold text-slate-600">
                      06
                    </span>
                  </div>

                  {/* Item 07 */}
                  <div className="py-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Objections</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Likely pushback and how to respond</p>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-mono font-bold text-slate-600">
                      07
                    </span>
                  </div>

                  {/* Item 09 */}
                  <div className="py-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">The question to leave them with</h4>
                      <p className="text-xs text-slate-500 mt-0.5">What has to be true on opening day…</p>
                    </div>
                    <span className="rounded bg-[#7fe3d6]/30 text-[#074b43] px-2 py-0.5 text-xs font-mono font-bold">
                      09
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setShowFullExample(!showFullExample)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                  >
                    <span>{showFullExample ? "Hide full brief ↑" : "See the full example →"}</span>
                  </button>
                  <span className="text-[11px] text-slate-400">10 sections · PDF ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Full Helen Marsh Role Hypothesis Card */}
          {showFullExample && (
            <div className="mt-8 transition-all animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="rounded-2xl border border-stone-200/90 bg-[#FAF9F5] p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800 block mb-1">
                      CONTACT ROLE HYPOTHESIS · SAMPLE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Helen Marsh, <span className="font-medium text-slate-600">Northbridge Manufacturing</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Head of IT Infrastructure · Decision maker · 2 sources verified</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg border border-stone-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-stone-50 flex items-center gap-1.5">
                      <RefreshCw className="h-3 w-3 text-slate-500" />
                      Regenerate
                    </button>
                    <button className="rounded-lg bg-[#091424] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 flex items-center gap-1.5">
                      <Download className="h-3 w-3 text-[#7fe3d6]" />
                      Export PDF
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  {/* Column 1: Opening Approach */}
                  <div className="rounded-xl border border-stone-200/80 bg-white p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block mb-2">
                      OPENING APPROACH
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed font-serif italic">
                      “I saw the Kestrel Park announcement. Which part of getting the site ready is taking most of your attention?”
                    </p>
                  </div>

                  {/* Column 2: Lead With / Hold Back */}
                  <div className="rounded-xl border border-stone-200/80 bg-white p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block mb-1">
                        LEAD WITH
                      </span>
                      <p className="text-xs font-semibold text-slate-900">
                        A site network and backup design review.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-stone-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                        HOLD BACK
                      </span>
                      <p className="text-xs text-slate-600">
                        • A full hardware refresh proposal
                      </p>
                    </div>
                  </div>

                  {/* Column 3: The Question to Leave Them With */}
                  <div className="rounded-xl border border-[#a2ded6]/50 bg-[#eefaf8] p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d7a6e] block mb-2">
                      THE QUESTION TO LEAVE THEM WITH
                    </span>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      “What has to be true on opening day for you to be confident the site will run?”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Section 4: Meeting notes (#notes) */}
      <section id="notes" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Card: Meeting note · Sample data */}
            <div className="w-full order-2 lg:order-1">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">Meeting note</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Call booked */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Call booked</h4>
                      <p className="text-xs text-slate-500 mt-0.5">4 Dec, via the partner</p>
                    </div>
                    <span className="rounded bg-[#eefaf8] border border-[#a2ded6]/60 px-2.5 py-1 text-xs font-semibold text-[#0d7a6e]">
                      Added
                    </span>
                  </div>

                  {/* Partner covers */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Partner covers</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Cabling only</p>
                    </div>
                    <span className="rounded bg-[#eefaf8] border border-[#a2ded6]/60 px-2.5 py-1 text-xs font-semibold text-[#0d7a6e]">
                      Added
                    </span>
                  </div>

                  {/* Hypothesis */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Hypothesis</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Regenerated with the note</p>
                    </div>
                    <span className="rounded bg-teal-50 border border-teal-200 px-2.5 py-1 text-xs font-semibold text-teal-800">
                      Sharpened
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                MEETING NOTES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Sharper with what you already know.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Booked a meeting? Add a note about it and regenerate. The context, opening and questions update to match.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Add a meeting note before or after running",
                  "Regenerate for a version that reflects it",
                  "Unknowns shrink as you learn more",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7fe3d6]/30 text-[#0d7a6e] mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How it works Section (Dark Navy #091424) */}
      <section className="bg-[#091424] text-white py-20 lg:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-2">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              From an account to a prepared call.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div key={st.num} className="border-t border-white/15 pt-6">
                <span className="text-xs font-mono font-bold text-[#7fe3d6] tracking-wider block mb-2">
                  {st.num}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800 block mb-2">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Questions about Contact profiling.
              </h2>
            </div>

            <div className="lg:col-span-8 divide-y divide-stone-200">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between text-left group focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                        {faq.q}
                      </span>
                      <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-200/60 text-slate-700">
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm text-slate-700 leading-relaxed max-w-2xl font-normal">
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

      {/* 8. Prev / Next Navigation Row */}
      <div className="border-b border-stone-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/accounts"
            className="group flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>← Previous Accounts</span>
          </Link>
          <Link
            href="/outreach"
            className="group flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors"
          >
            <span>Next → Outreach</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* 9. Pre-Footer Conversion Ribbon (Dark Navy) */}
      <section className="bg-[#091424] text-white py-16 sm:py-20 text-center border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-8">
            Walk into every first meeting prepared.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-demo"
              className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-6 py-2.5 text-xs font-bold text-[#091424] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              Book a demo
            </Link>
            <Link
              href="/solutions"
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs font-bold text-white transition-all hover:scale-105 active:scale-95"
            >
              All solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
