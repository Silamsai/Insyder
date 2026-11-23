"use client";

import React, { useState } from "react";
import Link from "next/link";
import { integrationsData, Integration } from "@/data/integrations";
import { Search, ArrowRight, Check, Sparkles, Filter, ExternalLink } from "lucide-react";

export default function IntegrationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = ["All", "CRM", "Sales Engagement", "Data Warehouse", "Communication", "Automation"];

  const filtered = integrationsData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#080d1a] min-h-screen text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-16 border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3.5 py-1 text-xs font-semibold text-teal-300 border border-teal-400/20 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-teal-400" /> Ecosystem & Integrations
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Fits your stack. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
              Keeps your data clean.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Bi-directional synchronization with your CRM, engagement dialers, and data warehouse. Zero duplicate records, zero manual CSV uploads.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                  category === cat
                    ? "bg-teal-400 text-slate-950 font-bold"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search integrations..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-xs text-white placeholder-slate-400 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
            />
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-[#0b132b] p-6 shadow-lg hover:border-teal-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl border border-white/10">
                    {item.logo}
                  </div>
                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-teal-300 border border-white/10">
                    {item.syncType}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <span className="text-xs text-slate-400 font-medium">{item.category}</span>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Certified Connector</span>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-300 hover:text-white transition-colors"
                >
                  Configure Sync <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Webhook / API banner */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:text-left sm:flex items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Need a custom webhook or REST API integration?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Insyder provides developer-friendly REST endpoints, webhooks, and reverse ETL connectors.
            </p>
          </div>
          <Link
            href="/book-demo"
            className="mt-4 sm:mt-0 inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition-colors whitespace-nowrap border border-white/10"
          >
            <span>Request API Docs</span>
            <ExternalLink className="ml-2 h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
