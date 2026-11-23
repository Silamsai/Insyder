import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Layers, Users, Database } from "lucide-react";

export function GetStartedSection() {
  const steps = [
    {
      num: "01",
      title: "Add your website",
      desc: "Get a suggested offer, buyers, territory and signals for one research unit.",
      icon: <Globe className="h-4 w-4 text-teal-700" />,
    },
    {
      num: "02",
      title: "Choose your playbooks",
      desc: "Bundle the signals that matter and set monitors to re-check daily, weekly or monthly.",
      icon: <Layers className="h-4 w-4 text-blue-700" />,
    },
    {
      num: "03",
      title: "Invite your team",
      desc: "Add researchers, sales reviewers, SDRs, analysts and partners, and pick a workflow.",
      icon: <Users className="h-4 w-4 text-indigo-700" />,
    },
    {
      num: "04",
      title: "Connect your CRM",
      desc: "Link HubSpot or Salesforce and add suppressions so current clients are never prospected.",
      icon: <Database className="h-4 w-4 text-emerald-700" />,
    },
  ];

  return (
    <section className="bg-[#FAF9F5] py-20 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            Get started
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Start with your website.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Insyder reads it to suggest what you sell, who buys it and which signals to watch. You review every suggestion before it’s used.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">{s.num}</span>
                  <div className="h-7 w-7 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-teal-800">Step {s.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
