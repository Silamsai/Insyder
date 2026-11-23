"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Brain,
  MessageSquare,
  Layers,
} from "lucide-react";
import { mockAccounts } from "@/data/accounts";

export function PersonaDeepDive() {
  const [selectedPersonaIndex, setSelectedPersonaIndex] = useState(0);
  const samplePersonas = [
    {
      name: "Marcus Vance",
      role: "VP of Global Sales Development",
      company: "Datadog",
      logo: "🐶",
      avatarLetter: "MV",
      priorities: [
        "Shortening rep ramp time from 4.5 months to under 60 days",
        "Consolidating fragmented data tools into 1 unified intelligence workflow",
        "Increasing cold-to-first-meeting conversion rate above 18%",
      ],
      opener:
        "I noticed Datadog is adding 20+ enterprise reps in EMEA this quarter. Most revenue leaders find unguided research burns 3+ hours per rep per week. How are your new hires currently preparing for their first enterprise discovery calls?",
      techStack: ["Salesforce", "Outreach", "Gong", "Snowflake", "Slack"],
      signal: "Hiring surge + G2 ABM research spikes",
    },
    {
      name: "David Kim",
      role: "Director of Enterprise Sales Enablement",
      company: "Snowflake",
      logo: "❄️",
      avatarLetter: "DK",
      priorities: [
        "Ensuring every rep delivers a custom pitch aligned to prospect cloud architecture",
        "Automating pre-call briefing cards directly into Slack 15 min prior to meetings",
      ],
      opener:
        "Enterprise buyers tune out generic cloud pitches in seconds. How do your enterprise AEs currently verify a prospect's data warehouse posture before kicking off discovery?",
      techStack: ["Salesforce", "Highspot", "Salesloft", "Slack"],
      signal: "AI Data Cloud Expansion announced",
    },
    {
      name: "Chloe Chen",
      role: "VP of Revenue Operations",
      company: "Ramp",
      logo: "💳",
      avatarLetter: "CC",
      priorities: [
        "Automating lead routing & instant company enrichment",
        "De-anonymizing high-intent web visitors visiting pricing pages",
      ],
      opener:
        "Finance leaders are notoriously skeptical of generic outreach. We help reps identify exact ERP stacks and expense friction points before picking up the phone.",
      techStack: ["Salesforce", "HubSpot", "Segment", "Slack"],
      signal: "Migrating to Salesforce Enterprise",
    },
  ];

  const currentPersona = samplePersonas[selectedPersonaIndex];

  return (
    <section className="relative overflow-hidden bg-[#080d1a] py-20 md:py-28 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Deep Persona Intelligence
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Know what each person is likely to care about, before you call.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Persona-level intelligence that gives reps the exact pain points, recent initiatives, and talking points to win the conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/book-demo"
                className="rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25 hover:opacity-95 transition-all"
              >
                Start free trial
              </Link>
              <Link
                href="/preview"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See sample profile →
              </Link>
            </div>
          </div>

          {/* Metric Stats */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-300">3.8x</p>
              <p className="text-xs text-slate-400 leading-snug">Higher meeting conversion</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-cyan-300">45%</p>
              <p className="text-xs text-slate-400 leading-snug">Shorter sales cycle duration</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-300">0 min</p>
              <p className="text-xs text-slate-400 leading-snug">Manual pre-call research time</p>
            </div>
          </div>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {samplePersonas.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => setSelectedPersonaIndex(idx)}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all whitespace-nowrap ${
                selectedPersonaIndex === idx
                  ? "bg-teal-400/20 text-teal-300 border border-teal-400/40 shadow-sm"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              <span>{p.logo}</span>
              <span>{p.name}</span>
              <span className="text-[10px] text-slate-400 font-normal">({p.company})</span>
            </button>
          ))}
        </div>

        {/* Persona Intelligence Card Mockup */}
        <div className="relative rounded-2xl border border-white/15 bg-[#0b132b] p-6 sm:p-8 shadow-2xl shadow-cyan-950/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Decision Maker Profile */}
            <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-teal-400 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-md">
                  {currentPersona.avatarLetter}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{currentPersona.name}</h3>
                    <span className="inline-flex items-center rounded-full bg-teal-400/15 px-2 py-0.5 text-[10px] font-semibold text-teal-300 border border-teal-400/30">
                      Verified Buyer
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{currentPersona.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <span>{currentPersona.company}</span>
                    <span>·</span>
                    <span className="text-teal-300 font-medium">{currentPersona.signal}</span>
                  </p>
                </div>
              </div>

              {/* Priorities */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                  <Brain className="h-4 w-4" /> What this buyer cares about now
                </h4>
                <ul className="space-y-2.5">
                  {currentPersona.priorities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detected Tech Stack */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  <Layers className="h-3.5 w-3.5" /> Confirmed Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentPersona.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tailored Opener & Conversation Playbook */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                    <MessageSquare className="h-4 w-4" /> AI-Generated First Call Opener
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono">Updated 10 min ago</span>
                </div>

                <div className="mt-3 rounded-xl border border-teal-400/25 bg-teal-950/20 p-4 sm:p-5">
                  <p className="text-sm sm:text-base text-slate-100 font-medium italic leading-relaxed">
                    "{currentPersona.opener}"
                  </p>
                </div>
              </div>

              {/* Rep Guidance Tips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                  <span className="font-bold text-teal-300 block mb-1">Recommended Talk Track</span>
                  <p className="text-slate-300 leading-relaxed">
                    Focus on automated pre-call briefings and 9-step verified contact deliverability. Avoid generic data volume claims.
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                  <span className="font-bold text-amber-300 block mb-1">Potential Objections</span>
                  <p className="text-slate-300 leading-relaxed">
                    "We already have ZoomInfo." Counter with our 1-click meeting prep that sits directly inside Slack/Calendar.
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 border-t border-white/10">
                <span>Synchronized with Salesforce & Outreach sequences</span>
                <Link
                  href="/preview"
                  className="inline-flex items-center gap-1.5 text-teal-300 hover:text-white font-semibold transition-colors"
                >
                  Generate brief for your own accounts <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
