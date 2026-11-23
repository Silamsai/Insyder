import React from "react";
import Link from "next/link";
import {
  Radar,
  Users2,
  BrainCircuit,
  Workflow,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export function BentoFeatures() {
  return (
    <section className="bg-[#fafaf7] py-20 md:py-28 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Features
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Every account, from first signal to first meeting.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate hours of manual prospect research. Insyder combines intent detection, buying committee discovery, and automated briefing into one unified platform.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Intent radar */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100 group-hover:scale-110 transition-transform">
                <Radar className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">Intent radar</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Capture buyer intent signals 4x faster before competitors know an RFP is drafted. Tracks live publisher visits, keyword surges, and hiring trends.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-teal-600">40+ Intent Networks</span>
              <span>Updated in real-time</span>
            </div>
          </div>

          {/* Card 2: Enrichment */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 group-hover:scale-110 transition-transform">
                <Users2 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">Enrichment</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                97%+ email deliverability and verified mobile numbers mapped to organizational charts. Automatically links decision makers, influencers, and budget holders.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-cyan-600">9-Step Verification</span>
              <span>Zero bounce guarantee</span>
            </div>
          </div>

          {/* Card 3: Account scoring */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">Account scoring</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Dynamically score accounts based on hiring surges, tech shifts, and historical win patterns so reps only focus on accounts with high propensity to close.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-blue-600">Custom ICP Weights</span>
              <span>Auto-prioritized pipeline</span>
            </div>
          </div>

          {/* Card 4: CRM & Workflow Sync */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100 group-hover:scale-110 transition-transform">
                <Workflow className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">CRM & Workflow Sync</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Bi-directional sync keeps rep records clean without manual CSV imports. Deep native integration with Salesforce, HubSpot, Outreach, and Salesloft.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-amber-600">Zero CSV uploads</span>
              <span>Bi-directional updates</span>
            </div>
          </div>

          {/* Card 5: Outreach intelligence */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:scale-110 transition-transform">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">Outreach intelligence</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Turn raw firmographics into personalized first-call openers and sequence hooks tailored to each decision maker's specific strategic initiatives.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-indigo-600">Tailored Hooks</span>
              <span>3.8x reply rate boost</span>
            </div>
          </div>

          {/* Card 6: 1-Click Meeting Prep (SIGNATURE DARK NAVY BENTO CARD) */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#0b132b] p-7 shadow-xl shadow-cyan-950/20 text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/20 text-teal-300 border border-teal-400/30 group-hover:scale-110 transition-transform">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white flex items-center gap-2">
                1-click meeting prep
                <span className="rounded-full bg-teal-400/20 px-2 py-0.5 text-[10px] font-semibold text-teal-300 border border-teal-400/30">
                  Exclusive
                </span>
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Generate custom account briefings and conversation guides in seconds. Every account with a reason, an owner, and a prepared first call.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="font-semibold text-teal-300">Slack & Calendar Sync</span>
              <Link
                href="/preview"
                className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors"
              >
                Try live <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
