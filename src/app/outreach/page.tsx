"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Plus, Minus, Send, FileText, CheckCircle2, Clock } from "lucide-react";

export default function OutreachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navPills = [
    { label: "Team tasks", href: "#tasks" },
    { label: "Work my tasks", href: "#work" },
    { label: "Drafts", href: "#drafts" },
    { label: "Handoffs", href: "#handoffs" },
  ];

  const steps = [
    {
      num: "01",
      title: "Receive",
      desc: "Accepted accounts arrive as tasks with context.",
    },
    {
      num: "02",
      title: "Prepare",
      desc: "Read the brief and the contact’s role hypothesis.",
    },
    {
      num: "03",
      title: "Draft",
      desc: "Write outreach from reviewed evidence.",
    },
    {
      num: "04",
      title: "Log",
      desc: "Record the outcome, or hand off to a partner.",
    },
  ];

  const faqs = [
    {
      q: "Does Insyder send emails for us?",
      a: "No. Insyder drafts messages grounded in reviewed evidence and role hypotheses, but a person on your team reviews, personalizes and sends every outreach.",
    },
    {
      q: "Can partners see everything?",
      a: "No. You control visibility down to specific fields. External partners and agencies only see permitted items such as the agreed next action, follow-up date and selected brief points.",
    },
    {
      q: "Can we see task outcomes?",
      a: "Yes. Every outcome—replies received, meetings booked, objections noted—is logged against the task history and carried directly into your CRM account record.",
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
            <span className="text-slate-200 uppercase">OUTREACH</span>
          </div>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-3">
            SOLUTIONS · OUTREACH
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Every task carries its context.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
            Researchers, reviewers and SDRs work from one task list. Drafts come from reviewed evidence, outcomes are logged, and handoffs stay clear.
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

      {/* 2. Section 1: Team tasks (#tasks) */}
      <section id="tasks" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                TEAM TASKS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                One list for the whole team.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                See every task across the workspace, with what is overdue, what is due soon and what is in progress.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Research, review, email and call tasks",
                  "Filter by owner, status, due date and priority",
                  "Each task links straight to the account brief",
                  "Tasks shown, overdue, due within 24 hours and in progress",
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

            {/* Right Card: All tasks · Sample data */}
            <div className="w-full">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">All tasks</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Task 1 */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Northbridge Manufacturing</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Research · Tom Reed · due 22 Nov</p>
                    </div>
                    <span className="rounded bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      In progress
                    </span>
                  </div>

                  {/* Task 2 */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Halden Cold Chain</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Email · Sam Okafor · due 24 Nov</p>
                    </div>
                    <span className="rounded bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">
                      Open
                    </span>
                  </div>

                  {/* Task 3 */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Kestrel Data Services</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Research · Tom Reed · due 18 Nov</p>
                    </div>
                    <span className="rounded bg-rose-50 border border-rose-200 px-2.5 py-1 text-xs font-semibold text-rose-700">
                      Overdue
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Work my tasks (#work) */}
      <section id="work" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Card: Research task · Sample data */}
            <div className="w-full order-2 lg:order-1">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">Research task</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Step 1 */}
                  <div className="py-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">1 · Review the evidence</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Mark supporting items as reviewed</p>
                    </div>
                    <span className="rounded bg-[#eefaf8] border border-[#a2ded6]/60 px-2.5 py-1 text-xs font-semibold text-[#0d7a6e]">
                      Done
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="py-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">2 · Write a note</h4>
                      <p className="text-xs text-slate-500 mt-0.5">For the reviewer</p>
                    </div>
                    <span className="rounded bg-[#eefaf8] border border-[#a2ded6]/60 px-2.5 py-1 text-xs font-semibold text-[#0d7a6e]">
                      Done
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="py-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">3 · Send to sales reviewer</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Ana Costa</p>
                    </div>
                    <span className="rounded bg-teal-50 border border-teal-200 px-2.5 py-1 text-xs font-semibold text-teal-800">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                WORK MY TASKS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Clear instructions on every task.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Each task says what to do next. A research task, for example, ends by sending the brief to a sales reviewer with a note, and then completes itself.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Step-by-step “what to do” on each task",
                  "Open the account brief in one click",
                  "Send to a named sales reviewer with a note",
                  "Start, complete or cancel with a reason",
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

      {/* 4. Section 3: Drafts (#drafts) */}
      <section id="drafts" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                DRAFTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Outreach written from what you know.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Draft emails and LinkedIn notes from reviewed evidence and the contact’s role hypothesis. A person reviews every draft before it’s used.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Email drafts and LinkedIn notes",
                  "Grounded in reviewed evidence",
                  "Opening lines from the role hypothesis",
                  "Log call and email outcomes against the task",
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

            {/* Right Card: Drafts · Sample data */}
            <div className="w-full">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">Drafts</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Draft 1 */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Email · Helen Marsh</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Opens with the open site-readiness decision</p>
                    </div>
                    <span className="rounded bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      For review
                    </span>
                  </div>

                  {/* Draft 2 */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">LinkedIn note · Owen Clarke</h4>
                      <p className="text-xs text-slate-500 mt-0.5">References the new facility</p>
                    </div>
                    <span className="rounded bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      For review
                    </span>
                  </div>
                </div>

                {/* Footer Counter */}
                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Drafts waiting</h4>
                    <p className="text-xs text-slate-500">Reviewed evidence attached</p>
                  </div>
                  <span className="text-xl font-extrabold text-slate-900">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 4: Handoffs (#handoffs) */}
      <section id="handoffs" className="py-20 lg:py-24 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Card: Partner handoffs · Sample data */}
            <div className="w-full order-2 lg:order-1">
              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <h3 className="text-base font-bold text-slate-900">Partner handoffs</h3>
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    Sample data
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {/* Item 1 */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Halden Cold Chain</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Regional partner</p>
                    </div>
                    <span className="rounded bg-[#eefaf8] border border-[#a2ded6]/60 px-2.5 py-1 text-xs font-semibold text-[#0d7a6e]">
                      Prepared
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Fenmoor College</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Follow up 2 Dec</p>
                    </div>
                    <span className="rounded bg-teal-50 border border-teal-200 px-2.5 py-1 text-xs font-semibold text-teal-800">
                      Shared
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800">
                HANDOFFS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Pass accounts on without losing context.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                When an account needs external fulfilment, prepare a handoff with an agreed next action and follow-up date, sharing only permitted fields.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Partner handoffs for accepted accounts",
                  "Agreed next action and follow-up date",
                  "Permitted fields only",
                  "Send accepted accounts to your CRM",
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
              From accepted account to logged outcome.
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
                Questions about Outreach.
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
            href="/contact-profiling"
            className="group flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>← Previous Contact profiling</span>
          </Link>
          <Link
            href="/solutions"
            className="group flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors"
          >
            <span>Next → Solutions by team</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* 9. Pre-Footer Conversion Ribbon (Dark Navy) */}
      <section className="bg-[#091424] text-white py-16 sm:py-20 text-center border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-8">
            Start every conversation with context.
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
