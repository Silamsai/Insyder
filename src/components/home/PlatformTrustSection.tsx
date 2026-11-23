import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function PlatformTrustSection() {
  const pillars = [
    {
      title: "CRM sync",
      summary: "Send sales-accepted accounts to HubSpot or Salesforce.",
      bullets: [
        "Updates records, never duplicates",
        "Opted-out contacts never sent",
      ],
    },
    {
      title: "Evidence you can check",
      summary: "Every signal, contact and hypothesis lists its sources.",
      bullets: [
        "Dates and last-checked kept",
        "Unverified until a person confirms",
      ],
    },
    {
      title: "Access control",
      summary: "Role-based access for every part of the team.",
      bullets: [
        "Separate workspaces per team or client",
        "Partners see permitted fields only",
      ],
    },
    {
      title: "Usage you control",
      summary: "Research runs on units from your workspace quota.",
      bullets: [
        "Review searches before spending",
        "Suppress current clients",
      ],
    },
  ];

  return (
    <section className="bg-[#FAF9F5] py-20 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            Platform & trust
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Fits your stack. Keeps your data clean.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Insyder sits alongside your CRM, keeps every claim tied to a source and lets you control who sees what.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                {pillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="h-3.5 w-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/product"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-slate-950 transition-colors"
          >
            <span>More on the platform →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
