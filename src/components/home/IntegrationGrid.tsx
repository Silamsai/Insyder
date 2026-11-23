import React from "react";
import Link from "next/link";
import { Database, RefreshCw, Send, Bell, ArrowRight, Check } from "lucide-react";

export function IntegrationGrid() {
  const stackItems = [
    {
      title: "Native CRM Sync",
      category: "Salesforce & HubSpot",
      icon: <Database className="h-5 w-5 text-teal-600" />,
      description: "Bi-directional auto-sync without overwriting custom field layouts. Eliminates duplicate contacts before pushing.",
      details: ["Zero duplicate accounts", "Custom property mapping", "Auto lead-to-account routing"],
    },
    {
      title: "Sales Engagement",
      category: "Outreach & Salesloft",
      icon: <Send className="h-5 w-5 text-cyan-600" />,
      description: "Inject intent topics and persona openers directly into cadence steps and live rep dialer screens.",
      details: ["Dynamic sequence variables", "Automated cadence enrollment", "Real-time dialer cheat sheets"],
    },
    {
      title: "Data Warehouses",
      category: "Snowflake & BigQuery",
      icon: <RefreshCw className="h-5 w-5 text-blue-600" />,
      description: "Warehouse-native architecture. Stream raw signals, contact graphs, and scoring directly to your data lake.",
      details: ["Sub-second streaming", "Zero ETL pipelines needed", "SQL-ready table schemas"],
    },
    {
      title: "Real-Time Alerts",
      category: "Slack & Microsoft Teams",
      icon: <Bell className="h-5 w-5 text-amber-600" />,
      description: "Pings reps 15 minutes before calendar events with automated account briefs and conversation hooks.",
      details: ["Pre-call calendar sync", "Target account surge alerts", "Interactive slash bot"],
    },
  ];

  return (
    <section className="bg-[#fafaf7] py-20 md:py-28 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Ecosystem
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Fits your stack. Keeps your data clean.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Insyder acts as an intelligent connective layer across your existing revenue tools, ensuring reps never have to leave their primary workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 mb-4">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span>Explore all 20+ certified integrations</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
