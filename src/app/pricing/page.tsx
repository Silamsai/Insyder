"use client";

import React, { useState } from "react";
import Link from "next/link";
import { pricingTiers } from "@/data/pricing";
import { Check, Sparkles, HelpCircle, ArrowRight, Calculator } from "lucide-react";

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);

  // ROI Calculator states
  const [repsCount, setRepsCount] = useState(10);
  const [avgDealSize, setAvgDealSize] = useState(25000);
  const [currentWinRate, setCurrentWinRate] = useState(15);

  // Calculation formulas
  const additionalMeetingsPerMonth = repsCount * 4; // 4 extra prepared meetings per rep/month
  const additionalWinsPerYear = Math.round((additionalMeetingsPerMonth * 12 * (currentWinRate / 100)) * 0.35);
  const projectedRevenueLift = additionalWinsPerYear * avgDealSize;
  const annualInsyderCost = repsCount * 139 * 12;
  const roiMultiplier = Math.round(projectedRevenueLift / Math.max(annualInsyderCost, 1));

  return (
    <div className="bg-[#080d1a] min-h-screen text-white">
      {/* Header */}
      <section className="relative overflow-hidden pt-16 pb-14 border-b border-white/10 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3.5 py-1 text-xs font-semibold text-teal-300 border border-teal-400/20 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-teal-400" /> Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Predictable pricing for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
              unstoppable sales teams.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Every plan includes unlimited 1-click meeting briefings and bi-directional CRM synchronization.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full bg-white/5 p-1 border border-white/10">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                !annualBilling ? "bg-teal-400 text-slate-950 font-bold" : "text-slate-300 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                annualBilling ? "bg-teal-400 text-slate-950 font-bold" : "text-slate-300 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-slate-950/20 px-2 py-0.5 text-[10px] font-bold text-slate-950">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => {
            const price = annualBilling ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.id}
                className={`rounded-3xl border p-8 flex flex-col justify-between transition-all ${
                  tier.popular
                    ? "border-teal-400/50 bg-[#0b132b] shadow-2xl shadow-teal-500/10 scale-105"
                    : "border-white/10 bg-[#090f22]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    {tier.badge && (
                      <span className="rounded-full bg-teal-400/20 px-2.5 py-1 text-xs font-bold text-teal-300 border border-teal-400/30">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 min-h-[36px]">{tier.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">${price}</span>
                    <span className="text-xs text-slate-400">/ rep / month</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {annualBilling ? "Billed annually" : "Billed monthly"}
                  </p>

                  <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Included Capabilities
                    </span>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href={tier.ctaHref}
                    className={`inline-flex w-full items-center justify-center rounded-full py-3 text-xs font-bold transition-all ${
                      tier.popular
                        ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-lg shadow-teal-500/20 hover:scale-[1.02]"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="rounded-3xl border border-white/15 bg-[#0b132b] p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="h-4 w-4" /> Interactive Pipeline Calculator
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Calculate your expected revenue return.
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            See how equipping your sales team with 1-click meeting briefings and verified intent data translates directly into pipeline and closed revenue.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Sales Representatives / AEs</span>
                  <span className="text-teal-400 font-bold">{repsCount} reps</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={repsCount}
                  onChange={(e) => setRepsCount(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Average Annual Contract Value (ACV)</span>
                  <span className="text-cyan-400 font-bold">${avgDealSize.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={avgDealSize}
                  onChange={(e) => setAvgDealSize(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Current First-Meeting to Close Win Rate</span>
                  <span className="text-emerald-400 font-bold">{currentWinRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  value={currentWinRate}
                  onChange={(e) => setCurrentWinRate(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Projected Output Card */}
            <div className="lg:col-span-5 rounded-2xl border border-teal-400/30 bg-teal-950/20 p-6 sm:p-8 text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Estimated Annual Impact
              </span>
              <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                +${(projectedRevenueLift / 1000).toFixed(0)}k
              </p>
              <p className="text-xs text-slate-300">Projected net new annual revenue</p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                <div className="rounded-lg bg-white/5 p-2.5">
                  <span className="text-slate-400 block text-[10px]">Extra Closed Deals</span>
                  <span className="text-base font-bold text-teal-300">+{additionalWinsPerYear} / year</span>
                </div>
                <div className="rounded-lg bg-white/5 p-2.5">
                  <span className="text-slate-400 block text-[10px]">Projected ROI</span>
                  <span className="text-base font-bold text-cyan-300">{roiMultiplier}x Return</span>
                </div>
              </div>

              <Link
                href="/book-demo"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
              >
                <span>Unlock this pipeline now</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
