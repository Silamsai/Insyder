"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does Insyder do?",
      a: "Insyder spots companies going through changes that create need for your services (site expansions, tender announcements, infrastructure hiring, executive turnover). It gathers the public evidence, identifies who controls the relevant budget, and generates a tailored role hypothesis so your sellers know exactly who to call and what to say.",
    },
    {
      q: "Does a signal mean a company is ready to buy?",
      a: "No. A signal indicates change and potential need, not an active procurement cycle. That is why Insyder provides evidence sources and conversation angles rather than pretending to predict closed deals. It gives your reps a credible, timely reason to start a conversation.",
    },
    {
      q: "Is a role hypothesis a personality profile?",
      a: "No. A role hypothesis is not personality profiling or psychological typing. It is a meeting-ready operational brief focused on the person’s responsibilities: what initiatives they likely control, relevant company announcements, recommended opening angles, and what topics to hold back on until later meetings.",
    },
    {
      q: "Which CRMs does it work with?",
      a: "Insyder natively synchronizes with HubSpot and Salesforce. Sales-accepted accounts and verified contacts push directly to your CRM with complete source evidence. We automatically suppress current clients and opted-out contacts so your database stays clean.",
    },
    {
      q: "Is this an outsourced SDR service?",
      a: "No. Insyder is an intelligence platform for your existing revenue team—including SDRs, Account Executives, Researchers, and Channel Partners. It automates the hours spent on manual research so your team can focus on qualified conversations.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#FAF9F5] py-20 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              Good questions.
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Clear answers on signals, role hypotheses, and CRM safety.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors pr-6">
                      {faq.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 group-hover:bg-teal-50 transition-colors">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5 text-teal-800" />
                      ) : (
                        <Plus className="h-3.5 w-3.5 text-slate-600 group-hover:text-teal-800" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pr-6 text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
