"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Radar,
  Users,
  BrainCircuit,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react";

export default function ProductPage() {
  const [activeEngine, setActiveEngine] = useState<"radar" | "enrichment" | "scoring" | "briefs">("radar");

  const engines = {
    radar: {
      title: "Intent Radar Engine",
      badge: "Real-Time Telemetry",
      description:
        "Continuously monitors buyer research surges across 10,000+ B2B publisher networks, SEC disclosures, patent filings, and hiring job boards.",
      features: [
        "First-party reverse IP website de-anonymization",
        "Third-party topic consumption across technical review sites",
        "Hiring velocity tracking for specific roles (e.g., AEs, DevOps, Security)",
        "Competitor contract renewal window prediction",
      ],
      metric: "4x earlier signal detection than standard form fills",
    },
    enrichment: {
      title: "Buying Committee Graph",
      badge: "97%+ Accuracy",
      description:
        "Maps out the full 6-to-10 person enterprise buying committee, linking champions, technical evaluators, and budget sign-offs.",
      features: [
        "9-step real-time SMTP and phone carrier verification",
        "Hierarchical org chart visualization with reporting lines",
        "Direct work emails and verified mobile phone numbers",
        "Automatic deduplication against your current CRM records",
      ],
      metric: "Zero email bounces with active SMTP handshakes",
    },
    scoring: {
      title: "Propensity-to-Buy AI",
      badge: "Custom ICP Model",
      description:
        "Prioritizes accounts using machine learning weights trained on your historical wins, recent tech changes, and engagement velocity.",
      features: [
        "Dynamic 1-100 Intent Score updated daily",
        "Custom weighting for company size, industry, and funding stage",
        "Negative signal discounting for frozen hiring or layoff signals",
        "Automated tier-1, tier-2 account tiering into CRM views",
      ],
      metric: "2.8x higher win rate on 90+ scored accounts",
    },
    briefs: {
      title: "1-Click Meeting Briefs",
      badge: "Reps' Superpower",
      description:
        "Generates tailored 2-minute pre-call intelligence sheets delivered straight to Slack and Google Calendar 15 minutes before calls.",
      features: [
        "Target buyer's top 3 strategic priorities and recent LinkedIn posts",
        "Proven conversation openers customized to the prospect's tech stack",
        "High-probability objection handles and competitive differentiators",
        "One-click copy to clipboard or sync to CRM call notes",
      ],
      metric: "Saves 40+ minutes of manual rep research per meeting",
    },
  };

  const current = engines[activeEngine];

  return (
    <div className="bg-[#080d1a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-teal-500/15 via-cyan-500/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3.5 py-1 text-xs font-semibold text-teal-300 border border-teal-400/20 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-teal-400" /> Insyder Platform Architecture
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            The intelligence engine built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
              first-meeting mastery.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            From discovering unlisted in-market demand to walking into meetings with executive-grade briefings, explore the four pillars powering Insyder.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/preview"
              className="rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25 hover:scale-105 transition-all"
            >
              Explore Live Sandbox
            </Link>
            <Link
              href="/book-demo"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book a Tour →
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Engine Tabs */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {[
              { id: "radar", label: "Intent Radar", icon: <Radar className="h-4 w-4" /> },
              { id: "enrichment", label: "Buying Committee", icon: <Users className="h-4 w-4" /> },
              { id: "scoring", label: "Propensity AI", icon: <BrainCircuit className="h-4 w-4" /> },
              { id: "briefs", label: "Meeting Briefs", icon: <FileText className="h-4 w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveEngine(tab.id as any)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeEngine === tab.id
                    ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Engine Showcase Box */}
        <div className="rounded-3xl border border-white/15 bg-[#0b132b] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="rounded-full bg-teal-400/15 px-3 py-1 text-xs font-semibold text-teal-300 border border-teal-400/30">
                {current.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{current.title}</h2>
              <p className="text-base text-slate-300 leading-relaxed">{current.description}</p>

              <div className="space-y-3 pt-2">
                {current.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="text-2xl font-bold text-cyan-300">{current.metric}</span>
              </div>
            </div>

            {/* Visual preview block */}
            <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#080d1a] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-slate-400">
                <span className="font-mono">LIVE ENGINE TELEMETRY</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span> Real-time
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                  <span className="text-teal-300 font-bold block mb-1">Incoming Intent Trigger</span>
                  <p className="text-slate-300 font-mono text-[11px]">
                    23 unique engineers at "Stripe" researched "Enterprise Kafka to Snowflake streaming"
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                  <span className="text-cyan-300 font-bold block mb-1">Buying Committee Matched</span>
                  <p className="text-slate-300 font-mono text-[11px]">
                    VP of Data Platform (Mark S.) & Head of Infra Engineering identified and verified
                  </p>
                </div>
                <div className="rounded-lg bg-teal-950/30 p-3 border border-teal-400/20">
                  <span className="text-teal-300 font-bold block mb-1">1-Click Brief Generated</span>
                  <p className="text-slate-200 italic font-sans text-xs">
                    "I noticed your team is actively evaluating event streaming into Snowflake. Most teams encounter schema drift bottlenecks..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 border-t border-white/10 bg-[#070c18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-10 w-10 text-teal-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white">Enterprise-Grade Security & Privacy</h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            SOC 2 Type II certified, GDPR & CCPA compliant. Zero personal tracking or invasive cookies.
          </p>
        </div>
      </section>
    </div>
  );
}
