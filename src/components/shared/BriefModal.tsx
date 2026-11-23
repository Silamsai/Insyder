"use client";

import React, { useState } from "react";
import { Account } from "@/data/accounts";
import { X, Sparkles, Building2, Users, Flame, CheckCircle2, Copy, Check } from "lucide-react";

interface BriefModalProps {
  account: Account | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BriefModal({ account, isOpen, onClose }: BriefModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !account) return null;

  const handleCopy = () => {
    const text = `
INSYDER MEETING BRIEF: ${account.name} (${account.domain})
Stage: ${account.stage} | Intent Score: ${account.intentScore}%
Overview: ${account.executiveBrief.overview}
Strategic Why: ${account.executiveBrief.strategicWhy}
First-Call Opener Hook: "${account.executiveBrief.firstCallHook}"
Key Discovery Questions:
${account.executiveBrief.keyQuestions.map((q) => `- ${q}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0b132b] p-6 sm:p-8 text-slate-100 shadow-2xl shadow-cyan-500/10">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl border border-white/10">
              {account.logo}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{account.name}</h3>
                <span className="rounded-full bg-teal-400/20 px-2.5 py-0.5 text-xs font-semibold text-teal-300 border border-teal-400/30">
                  {account.intentScore}% Intent
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {account.domain} · {account.industry} · {account.employees}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-sm">
          {/* Executive Summary */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400">
              <Sparkles className="h-3.5 w-3.5" /> 1-Click Executive Summary
            </h4>
            <p className="mt-2 text-slate-300 leading-relaxed bg-white/5 p-3.5 rounded-xl border border-white/5">
              {account.executiveBrief.overview}
            </p>
          </div>

          {/* Strategic Why */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Strategic Why (Why They Care Now)
            </h4>
            <p className="mt-2 text-slate-300 leading-relaxed">
              {account.executiveBrief.strategicWhy}
            </p>
          </div>

          {/* First Call Opener Hook */}
          <div className="rounded-xl border border-teal-400/30 bg-teal-950/30 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300 block mb-1">
              Recommended First-Call Opener
            </span>
            <p className="text-slate-100 font-medium italic">
              "{account.executiveBrief.firstCallHook}"
            </p>
          </div>

          {/* Key Discovery Questions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              High-Impact Discovery Questions
            </h4>
            <ul className="space-y-2">
              {account.executiveBrief.keyQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buying Committee Personas */}
          {account.personas.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Decision Maker to Target
              </h4>
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3.5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white text-sm">
                    {account.personas[0].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{account.personas[0].name}</p>
                    <p className="text-xs text-slate-400">{account.personas[0].role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-teal-300 font-medium block">
                    {account.personas[0].priorities[0]?.slice(0, 40)}...
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/15 transition-colors border border-white/10"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-teal-400" /> Copied Brief to Clipboard
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy Brief to Clipboard
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 px-4 py-2 text-xs font-bold text-slate-950 hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
