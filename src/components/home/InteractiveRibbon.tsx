"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export function InteractiveRibbon() {
  const [domain, setDomain] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    router.push(`/preview?domain=${encodeURIComponent(domain)}`);
  };

  return (
    <section className="bg-[#eaf5ea] py-12 border-y border-teal-200/60 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              See Insyder on accounts like the ones your team sells to.
            </h3>
            <p className="mt-1 text-sm sm:text-base text-slate-700">
              Enter any target company domain to see live intent signals and buying committee members instantly.
            </p>
          </div>

          <form onSubmit={handleSearch} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g. datadoghq.com or stripe.com"
                className="w-full rounded-full border border-teal-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-950 hover:bg-slate-800 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Try live preview</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
