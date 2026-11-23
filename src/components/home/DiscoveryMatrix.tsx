"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Users,
  Flame,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function DiscoveryMatrix() {
  const [activeStep, setActiveStep] = useState(0);

  const columns = [
    {
      title: "1. Add your accounts",
      subtitle: "CRM sync & domain upload",
      icon: <Globe className="h-4 w-4 text-teal-600" />,
      items: [
        "Upload target account domain lists",
        "Auto-sync from Salesforce & HubSpot",
        "De-anonymize website IP traffic",
        "Define tier-1 ICP criteria",
      ],
      sample: "500 accounts uploaded",
    },
    {
      title: "2. Identify your buyers",
      subtitle: "Buying committee mapping",
      icon: <Users className="h-4 w-4 text-cyan-600" />,
      items: [
        "Map VP of Sales & RevOps personas",
        "Verify direct mobile & work emails",
        "Detect organizational hierarchy",
        "Identify internal champions",
      ],
      sample: "2,400 verified decision makers",
    },
    {
      title: "3. Detect live intent",
      subtitle: "Multi-network intent radar",
      icon: <Flame className="h-4 w-4 text-amber-600" />,
      items: [
        "Monitor 40+ B2B publisher networks",
        "Track job posting keyword spikes",
        "Detect tech stack additions",
        "Score propensity to purchase",
      ],
      sample: "38 accounts surging today",
    },
    {
      title: "4. Generate your pitch",
      subtitle: "1-Click Meeting Briefings",
      icon: <Sparkles className="h-4 w-4 text-indigo-600" />,
      items: [
        "Synthesize strategic pain points",
        "Generate first-call opener hooks",
        "Pre-populate battlecard objections",
        "Push directly to Slack & Calendar",
      ],
      sample: "100% prepared first meetings",
    },
  ];

  return (
    <section className="bg-[#fafaf7] py-20 md:py-28 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Domain Input */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                Account Discovery
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Start with your website.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Connect your website or upload your tier-1 account list. Insyder reveals which companies are researching your category right now, who the buyers are, and what to say.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <span className="text-xs font-semibold text-slate-700 block">
                Quick Pipeline Assessment
              </span>
              <p className="text-xs text-slate-500">
                Test how many tier-1 accounts in your territory have uncontacted buying committee members.
              </p>
              <Link
                href="/preview"
                className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-700 py-2.5 text-xs font-bold text-white shadow-sm transition-colors"
              >
                <span>Launch Interactive Matrix</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4-Column Pipeline Flow */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map((col, idx) => (
              <div
                key={col.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 mb-3">
                    {col.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{col.title}</h3>
                  <p className="text-[11px] text-teal-600 font-medium mb-3">{col.subtitle}</p>

                  <ul className="space-y-2 mt-2">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600 leading-snug">
                        <CheckCircle2 className="h-3 w-3 text-teal-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <span className="inline-block rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-700">
                    {col.sample}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
