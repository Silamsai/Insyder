"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, Building, Calendar, Users, Shield } from "lucide-react";

export default function BookDemoPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [teamSize, setTeamSize] = useState("10-50 reps");
  const [crm, setCrm] = useState("Salesforce");
  const [date, setDate] = useState("Tomorrow at 2:00 PM EST");
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#080d1a] min-h-screen text-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3.5 py-1 text-xs font-semibold text-teal-300 border border-teal-400/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-teal-400" /> Personalized Walkthrough
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            See Insyder on your accounts.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            In 20 minutes, we'll reveal which accounts in your territory are actively searching for your solution today.
          </p>
        </div>

        {/* Multi-step Card */}
        <div className="rounded-3xl border border-white/15 bg-[#0b132b] p-8 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in">
              <div className="h-16 w-16 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto text-2xl border border-teal-400/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">You're on the calendar!</h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                We've reserved <strong>{date}</strong>. Our enterprise team is currently compiling your custom domain intelligence briefing.
              </p>
              <div className="pt-6">
                <a
                  href="/preview"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
                >
                  <span>Explore Interactive Sandbox In The Meantime</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8 text-xs font-semibold text-slate-400">
                <span className={step >= 1 ? "text-teal-400" : ""}>1. Company & Domain</span>
                <span className={step >= 2 ? "text-teal-400" : ""}>2. Team & CRM</span>
                <span className={step >= 3 ? "text-teal-400" : ""}>3. Schedule Time</span>
              </div>

              <form onSubmit={handleNext} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Company Domain
                      </label>
                      <input
                        type="text"
                        required
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Sales Team Size
                      </label>
                      <select
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#080d1a] py-3 px-4 text-sm text-white focus:border-teal-400 focus:outline-none"
                      >
                        <option>1-5 reps</option>
                        <option>5-15 reps</option>
                        <option>15-50 reps</option>
                        <option>50+ enterprise reps</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Primary CRM
                      </label>
                      <select
                        value={crm}
                        onChange={(e) => setCrm(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#080d1a] py-3 px-4 text-sm text-white focus:border-teal-400 focus:outline-none"
                      >
                        <option>Salesforce</option>
                        <option>HubSpot</option>
                        <option>Outreach / Salesloft Native</option>
                        <option>Other / Custom</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in">
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Select Preferred Consultation Time
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Tomorrow at 10:00 AM EST",
                        "Tomorrow at 2:00 PM EST",
                        "Wednesday at 11:30 AM EST",
                        "Thursday at 3:00 PM EST",
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setDate(slot)}
                          className={`p-3 rounded-xl border text-xs font-semibold transition-all text-left ${
                            date === slot
                              ? "bg-teal-400/20 text-teal-300 border-teal-400/40"
                              : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      ← Back
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all"
                  >
                    <span>{step === 3 ? "Confirm Demo" : "Continue"}</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
