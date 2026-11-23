"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Radio,
  Building2,
  UserSearch,
  Send,
  Sparkles,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";

export default function SolutionsPage() {
  const workflows = [
    {
      num: "01",
      name: "Discover",
      desc: "Find companies with a reason to talk, from a plain-language search.",
      linkText: "Explore discover →",
      href: "/preview",
      icon: <Compass className="h-4 w-4 text-teal-600" />,
    },
    {
      num: "02",
      name: "Monitor",
      desc: "Saved playbooks that re-check on a schedule and log new signals.",
      linkText: "Explore monitor →",
      href: "/product",
      icon: <Radio className="h-4 w-4 text-blue-600" />,
    },
    {
      num: "03",
      name: "Accounts",
      desc: "Every account, its evidence, its brief and its path to sales.",
      linkText: "Explore accounts →",
      href: "/preview",
      icon: <Building2 className="h-4 w-4 text-cyan-600" />,
    },
    {
      num: "04",
      name: "Contact profiling",
      desc: "Find who decides, then prepare for each person.",
      linkText: "Explore contact profiling →",
      href: "/product",
      icon: <UserSearch className="h-4 w-4 text-indigo-600" />,
    },
    {
      num: "05",
      name: "Outreach",
      desc: "Tasks, drafts and handoffs that carry the account’s context.",
      linkText: "Explore outreach →",
      href: "/product",
      icon: <Send className="h-4 w-4 text-emerald-600" />,
    },
  ];

  const roles = [
    {
      id: "leaders",
      role: "Sales leaders",
      title: "Know which accounts are real, and who owns them.",
      desc: "See the pipeline with sales acceptance next to deal stage, and the reason behind every decision.",
      withoutInsyder: "Pipeline full of accounts nobody can explain.",
      bullets: [
        "Acceptance outcomes with reasons",
        "Owners and overdue next actions",
        "Workspace reports with PDF export",
      ],
      example: {
        signal: "Five accounts entered the pipeline this week.",
        context: "Two accepted, one returned, two rejected with reasons.",
        question: "Which accepted accounts have no meeting booked yet?",
      },
    },
    {
      id: "sellers",
      role: "SDRs & AEs",
      title: "Start every conversation with a reason and a plan.",
      desc: "Accepted accounts arrive with evidence, people and a role hypothesis for each contact.",
      withoutInsyder: "Generic outreach because nobody had time to work out what changed.",
      bullets: [
        "Role hypothesis before each first call",
        "Drafts written from reviewed evidence",
        "One task list with the brief attached",
      ],
      example: {
        signal: "A logistics group opens a second distribution hub.",
        context: "Head of IT likely owns site standards, not budget.",
        question: "Who is specifying the new hub’s network?",
      },
    },
    {
      id: "researchers",
      role: "Researchers",
      title: "Turn a lead into a brief sales will trust.",
      desc: "Search, review the sources and fill a brief where every answer says how it’s known.",
      withoutInsyder: "Research lives in tabs and notes, and the reviewer has to redo it.",
      bullets: [
        "Quick searches or checked lists",
        "Evidence marked reviewed or stale",
        "Brief sent to a named reviewer",
      ],
      example: {
        signal: "A college publishes a server refresh tender.",
        context: "Value and timeline observed; incumbent unknown.",
        question: "Is the incumbent bidding, and who wrote the specification?",
      },
    },
    {
      id: "revops",
      role: "RevOps",
      title: "Only checked accounts reach the CRM.",
      desc: "Set the workflow, acceptance gates and suppressions, and control what syncs.",
      withoutInsyder: "Half-qualified records and duplicates polluting the CRM.",
      bullets: [
        "Workflow with or without sales review",
        "Gates for the facts you require",
        "HubSpot or Salesforce sync without duplicates",
      ],
      example: {
        signal: "Twelve accounts accepted this month.",
        context: "Two matched existing CRM records; one contact had opted out.",
        question: "Did every accepted account sync with an owner?",
      },
    },
    {
      id: "agencies",
      role: "Agencies & MSPs",
      title: "Run every client from one login.",
      desc: "Each client gets its own workspace, playbooks, accounts and reports.",
      withoutInsyder: "Spreadsheets per client and shortlists the client can’t check.",
      bullets: [
        "A workspace per client",
        "Explainable shortlists with sources",
        "Usage tracked per workspace",
      ],
      example: {
        signal: "Twelve target accounts with facility news.",
        context: "Three are already worked by a channel partner.",
        question: "Which are explainable enough to put forward?",
      },
    },
    {
      id: "partners",
      role: "Channel partners",
      title: "Pick up exactly what you’re handed.",
      desc: "Handoffs carry an agreed next action and follow-up date, and share only permitted fields.",
      withoutInsyder: "Leads passed by email with no context.",
      bullets: [
        "Accepted accounts with context",
        "Permitted fields only",
        "Clear follow-up dates",
      ],
      example: {
        signal: "An accepted account needs on-site fulfilment.",
        context: "Reviewer prepares a handoff to the regional partner.",
        question: "Has the partner followed up by the agreed date?",
      },
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900">
      {/* 1. Hero Section (Dark Navy) */}
      <section className="bg-[#091424] text-white pt-16 pb-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block mb-4">
            SOLUTIONS
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Five workflows. Every role in the revenue team.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Explore each workflow, or see how each team uses Insyder on the same account record.
          </p>

          <div className="mt-8">
            <Link
              href="/book-demo"
              className="inline-flex items-center rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-6 py-2.5 text-xs font-bold text-[#091424] transition-all hover:scale-105 active:scale-95"
            >
              Book a demo
            </Link>
          </div>

          {/* Role Navigation Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
            <a
              href="#workflows"
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-1.5 text-xs font-medium text-slate-200 transition-colors"
            >
              Workflows
            </a>
            {roles.map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className="rounded-full border border-white/10 bg-white/5 hover:border-[#7fe3d6]/40 hover:text-white px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors"
              >
                {r.role}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Workflows Section */}
      <section id="workflows" className="py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
              WORKFLOWS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              From first signal to first meeting.
            </h2>
          </div>

          {/* 5 Workflows + Spotlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflows.map((wf) => (
              <div
                key={wf.num}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">{wf.num}</span>
                    <div className="h-7 w-7 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                      {wf.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {wf.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {wf.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={wf.href}
                    className="inline-flex items-center text-xs font-bold text-slate-900 hover:text-teal-800 transition-colors"
                  >
                    <span>{wf.linkText}</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Spotlight Card (Dark Navy) */}
            <div className="rounded-2xl border border-white/10 bg-[#0B1528] p-7 shadow-lg text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#7fe3d6]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#7fe3d6] border border-[#7fe3d6]/30">
                    <Sparkles className="h-3 w-3" /> Spotlight
                  </span>
                  <span className="text-xs font-mono text-slate-400">Core Engine</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Role hypothesis</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  A meeting-ready brief for each contact: what they control, how to open, what to ask and what to avoid.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/preview"
                  className="inline-flex items-center text-xs font-bold text-[#7fe3d6] hover:text-white transition-colors"
                >
                  <span>See an example →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. By Team Section */}
      <section className="py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
              BY TEAM
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              Built for every role.
            </h2>
          </div>

          {/* 6 Role Rows matching screenshot */}
          <div className="space-y-16">
            {roles.map((r) => (
              <div
                key={r.id}
                id={r.id}
                className="scroll-mt-24 pt-8 border-t border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Left Role Info (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                    {r.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {r.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {r.desc}
                  </p>

                  {/* Without Insyder Alert Box */}
                  <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3.5 text-xs text-rose-900">
                    <span className="font-bold">Without Insyder: </span>
                    <span className="font-normal">{r.withoutInsyder}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                    {r.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Example Card (5 cols) */}
                <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                    <span className="font-bold text-slate-900">Example</span>
                    <span className="text-slate-400 font-mono text-[11px]">Illustrative</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block mb-0.5">
                        Signal
                      </span>
                      <p className="text-slate-800 font-medium">{r.example.signal}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                        Context
                      </span>
                      <p className="text-slate-700 font-normal">{r.example.context}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                        Question
                      </span>
                      <p className="text-slate-900 font-semibold italic">"{r.example.question}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Callout (Dark Navy) */}
      <section className="bg-[#091424] py-20 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            See how your team would use it.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/book-demo"
              className="rounded-full bg-[#7fe3d6] hover:bg-[#6dd3c6] px-7 py-2.5 text-xs font-bold text-[#091424] shadow-sm transition-all hover:scale-105"
            >
              Book a demo
            </Link>

            <Link
              href="/product"
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              Take the product tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
