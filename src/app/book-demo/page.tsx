"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus } from "lucide-react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    website: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is Insyder an outsourced SDR service?",
      a: "No. It’s software your team runs. Your people choose the accounts, judge the evidence and own every decision.",
    },
    {
      q: "Which CRMs does it work with?",
      a: "HubSpot and Salesforce.",
    },
    {
      q: "Is a role hypothesis a personality profile?",
      a: "No. It describes a professional role from public sources, as a working hypothesis to check in conversation.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#091424] min-h-screen text-white">
      {/* 1. Hero & Request a Demo Form Split */}
      <section className="pt-12 pb-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-slate-200">BOOK A DEMO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Info & What we'll cover (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7fe3d6] block">
                BOOK A DEMO
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                See Insyder on accounts like yours.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                A 30-minute walkthrough, shaped around what you sell and who you sell to.
              </p>

              {/* What we'll cover */}
              <div className="pt-4 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7fe3d6] block">
                  WHAT WE’LL COVER
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#7fe3d6] shrink-0 mt-0.5" />
                    <span>Finding accounts with the signals that matter to your offer</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#7fe3d6] shrink-0 mt-0.5" />
                    <span>An account brief and its evidence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#7fe3d6] shrink-0 mt-0.5" />
                    <span>A role hypothesis for a sample contact</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#7fe3d6] shrink-0 mt-0.5" />
                    <span>How acceptance and CRM handoff would work for your team</span>
                  </li>
                </ul>
              </div>

              {/* Useful to have ready */}
              <div className="pt-4 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7fe3d6] block">
                  USEFUL TO HAVE READY
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#7fe3d6] shrink-0 mt-0.5" />
                    <span>Your website</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#7fe3d6] shrink-0 mt-0.5" />
                    <span>Two or three target accounts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#7fe3d6] shrink-0 mt-0.5" />
                    <span>The CRM you use</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Request a Demo Form Card (6 cols) */}
            <div className="lg:col-span-6 rounded-3xl bg-white p-7 sm:p-9 text-slate-900 shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-950">Request a demo</h2>

              {/* Yellow Preview Banner */}
              <div className="mt-4 rounded-xl border border-[#FDE8CA] bg-[#FEF7EC] p-3 text-xs text-amber-900 leading-relaxed font-normal">
                Form preview. This form isn't connected yet, so nothing you enter is sent or stored.
              </div>

              {submitted ? (
                <div className="mt-6 p-6 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 text-center space-y-2 animate-in fade-in">
                  <h3 className="font-bold text-lg">Thank you!</h3>
                  <p className="text-xs text-teal-800">
                    We've received your request. In a live environment, our team will confirm your walkthrough within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs font-semibold text-teal-900 underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Row 1: Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Work email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Your role
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: Company Website */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Company website
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 focus:border-slate-900 focus:outline-none"
                    />
                  </div>

                  {/* Row 4: What would you like to see? */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      What would you like to see?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Who you sell to, which signals matter, which CRM you use"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="rounded-full bg-[#0B1528] hover:bg-slate-800 text-white px-7 py-2.5 text-xs font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Request demo
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Before You Book: Quick Answers (Warm Off-white) */}
      <section className="bg-[#FAF9F5] py-20 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Title */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 block">
                BEFORE YOU BOOK
              </span>
              <h2 className="text-4xl font-extrabold text-slate-950 tracking-tight">
                Quick answers.
              </h2>
            </div>

            {/* Right Accordion Questions matching screenshot */}
            <div className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
                    <div className="h-6 w-6 rounded-full bg-[#0B1528] text-white flex items-center justify-center shrink-0">
                      <Minus className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
