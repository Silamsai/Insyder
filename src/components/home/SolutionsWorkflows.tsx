import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Radio, Building2, UserSearch, Send, Sparkles } from "lucide-react";

export function SolutionsWorkflows() {
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

  return (
    <section className="bg-[#FAF9F5] py-20 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            Solutions
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Every account, from first signal to first meeting.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Five connected workflows, each with the evidence attached.
          </p>
        </div>

        {/* 5 Workflows + Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((wf) => (
            <div
              key={wf.num}
              className="group rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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
                  className="inline-flex items-center text-xs font-bold text-slate-900 hover:text-teal-700 transition-colors"
                >
                  <span>{wf.linkText}</span>
                </Link>
              </div>
            </div>
          ))}

          {/* Spotlight Card */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1528] p-7 shadow-lg text-white flex flex-col justify-between">
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
                href="/product"
                className="inline-flex items-center text-xs font-bold text-[#7fe3d6] hover:text-white transition-colors"
              >
                <span>See an example →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
