"use client";

import React, { useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Search,
  Sparkles,
  Layers,
  Settings,
  BarChart3,
  Send,
  Eye,
  Building,
  UserCheck,
  FileText,
  RotateCcw,
  X,
} from "lucide-react";

export interface LeadCompany {
  id: string;
  initials: string;
  name: string;
  tags: { label: string; color: string }[];
  detail: string;
  score: number;
  selected: boolean;
  sources: string[];
}

const initialLeads: LeadCompany[] = [
  {
    id: "lead-1",
    initials: "NM",
    name: "Northbridge Manufacturing",
    tags: [
      { label: "Expansion", color: "bg-blue-50 text-blue-700 border-blue-200" },
      { label: "Infra hiring", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    ],
    detail: "New production facility · 14 Oct 2026 · 2 sources",
    score: 86,
    selected: true,
    sources: [
      "Planning permission approved for 85,000 sq ft Birmingham plant",
      "Job post: Head of Plant Infrastructure & Automation",
    ],
  },
  {
    id: "lead-2",
    initials: "HC",
    name: "Halden Cold Chain",
    tags: [
      { label: "Expansion", color: "bg-blue-50 text-blue-700 border-blue-200" },
    ],
    detail: "New regional depot approved · 6 Nov 2026 · 1 source",
    score: 78,
    selected: true,
    sources: [
      "Midlands cold-storage expansion tender published in Logistics Weekly",
    ],
  },
  {
    id: "lead-3",
    initials: "FC",
    name: "Fenmoor College",
    tags: [
      { label: "Procurement", color: "bg-purple-50 text-purple-700 border-purple-200" },
    ],
    detail: "Server refresh tender · 16 Nov 2026 · 1 source",
    score: 74,
    selected: true,
    sources: [
      "Public sector procurement portal: £420,000 campus server replacement",
    ],
  },
  {
    id: "lead-4",
    initials: "AC",
    name: "Arkwright Components",
    tags: [
      { label: "Infra hiring", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    ],
    detail: "Infrastructure engineer role · 9 Nov 2026 · 1 source",
    score: 64,
    selected: true,
    sources: [
      "LinkedIn Talent Insights: Active recruitment for Senior OT Network Architect",
    ],
  },
  {
    id: "lead-5",
    initials: "KD",
    name: "Kestrel Data Services",
    tags: [
      { label: "Compute", color: "bg-sky-50 text-sky-700 border-sky-200" },
    ],
    detail: "Hosting capacity expansion · 2 Nov 2026 · 1 source",
    score: 61,
    selected: false,
    sources: [
      "Data Center Dynamics: UK edge computing node expansion announcement",
    ],
  },
  {
    id: "lead-6",
    initials: "SA",
    name: "Sterling Automation",
    tags: [
      { label: "Expansion", color: "bg-blue-50 text-blue-700 border-blue-200" },
      { label: "Procurement", color: "bg-purple-50 text-purple-700 border-purple-200" },
    ],
    detail: "Smart factory robotics plant · 28 Oct 2026 · 3 sources",
    score: 89,
    selected: false,
    sources: [
      "Press release: £12M funding secured for Bristol robotics assembly site",
      "Executive hire: VP of Manufacturing Engineering appointed",
    ],
  },
];

export function InsyderDemoWorkspace({ isHeroCompact = false }: { isHeroCompact?: boolean }) {
  const [leads, setLeads] = useState<LeadCompany[]>(initialLeads);
  const [currentStep, setCurrentStep] = useState<number>(2); // Step 2: Choose leads
  const [activeTab, setActiveTab] = useState<"find" | "playbooks">("find");
  const [assignedResearcher, setAssignedResearcher] = useState("Tom Reed · Researcher");
  const [activeSidebar, setActiveSidebar] = useState("Discover");
  const [inspectLead, setInspectLead] = useState<LeadCompany | null>(null);
  const [showTaskAssignedNotification, setShowTaskAssignedNotification] = useState(false);

  const selectedCount = leads.filter((l) => l.selected).length;

  const toggleLead = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, selected: !l.selected } : l))
    );
  };

  const handleAssign = () => {
    setCurrentStep(3);
    setTimeout(() => {
      setCurrentStep(4);
      setShowTaskAssignedNotification(true);
      setTimeout(() => setShowTaskAssignedNotification(false), 5000);
    }, 800);
  };

  const handleReset = () => {
    setLeads(initialLeads);
    setCurrentStep(2);
    setInspectLead(null);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-300/80 bg-[#0B1528] shadow-2xl overflow-hidden font-sans text-slate-800 transition-all select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Left Dark Sidebar */}
        <div className="lg:col-span-2 bg-[#0B1528] text-slate-300 p-4 flex flex-col justify-between border-r border-slate-800">
          <div>
            {/* Insyder Logo */}
            <div className="flex items-center gap-2 mb-8 px-2 py-1">
              <div className="h-6 w-6 rounded bg-gradient-to-tr from-cyan-400 to-teal-300 flex items-center justify-center font-bold text-slate-950 text-xs">
                [i,]
              </div>
              <span className="text-base font-bold text-white tracking-tight">insyder</span>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-1">
              {[
                { name: "Overview", icon: "▢" },
                { name: "Discover", icon: "■", active: true },
                { name: "Accounts", icon: "▢" },
                { name: "Monitors", icon: "▢" },
                { name: "Outreach", icon: "▢" },
                { name: "Reports", icon: "▢" },
                { name: "Settings", icon: "▢" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveSidebar(item.name)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    item.name === activeSidebar
                      ? "bg-[#17233D] text-white font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={`text-[10px] ${item.name === activeSidebar ? "text-teal-400" : "text-slate-500"}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="px-3 py-2 text-[10px] text-slate-500 border-t border-slate-800">
            <span>Workspace: Enterprise GTM</span>
          </div>
        </div>

        {/* Center & Right Light Working Canvas */}
        <div className="lg:col-span-10 bg-[#FBFBF7] p-5 sm:p-7 flex flex-col justify-between">
          <div>
            {/* Top Bar: Breadcrumb + Sample Data Pill */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 text-xs text-slate-500">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-slate-400">Insyder</span>
                <span>/</span>
                <span className="text-slate-400">Discover</span>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Find & assign</span>
              </div>
              <button
                onClick={handleReset}
                className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-semibold tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                SAMPLE DATA
              </button>
            </div>

            {/* Sub-Nav Pill Switcher */}
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => setActiveTab("find")}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeTab === "find"
                    ? "bg-[#0B1528] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Find & assign
              </button>
              <button
                onClick={() => setActiveTab("playbooks")}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === "playbooks"
                    ? "bg-[#0B1528] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Playbooks
              </button>
            </div>

            {/* Page Title & History Button */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800">
                  DISCOVER · FIND & ASSIGN
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-0.5">
                  Find new leads and hand them to a researcher
                </h2>
              </div>
              <button className="self-start sm:self-auto rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm">
                History (8)
              </button>
            </div>

            {/* Workflow Step Wizard */}
            <div className="mt-5 flex items-center gap-3 text-xs border-b border-slate-200 pb-4 overflow-x-auto">
              <div className="flex items-center gap-2 text-teal-700 font-semibold shrink-0">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold">
                  ✓
                </span>
                <span>Find leads</span>
              </div>
              <span className="h-0.5 w-6 bg-slate-300 shrink-0" />

              <div className={`flex items-center gap-2 shrink-0 ${currentStep === 2 ? "text-slate-950 font-bold" : "text-slate-600"}`}>
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  currentStep >= 2 ? "bg-[#0B1528] text-white" : "border border-slate-300 text-slate-600"
                }`}>
                  2
                </span>
                <span>Choose leads</span>
              </div>
              <span className="h-0.5 w-6 bg-slate-300 shrink-0" />

              <div className={`flex items-center gap-2 shrink-0 ${currentStep === 3 ? "text-slate-950 font-bold" : "text-slate-400"}`}>
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  currentStep >= 3 ? "bg-[#0B1528] text-white" : "border border-slate-300 text-slate-400"
                }`}>
                  3
                </span>
                <span>Assign researcher</span>
              </div>
              <span className="h-0.5 w-6 bg-slate-300 shrink-0" />

              <div className={`flex items-center gap-2 shrink-0 ${currentStep === 4 ? "text-teal-700 font-bold" : "text-slate-400"}`}>
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  currentStep === 4 ? "bg-teal-600 text-white" : "border border-slate-300 text-slate-400"
                }`}>
                  4
                </span>
                <span>Done</span>
              </div>
            </div>

            {/* Notification when task is assigned */}
            {showTaskAssignedNotification && (
              <div className="mt-4 p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-center justify-between animate-in fade-in">
                <span className="font-semibold">
                  ✓ Success! Research tasks created for {selectedCount} companies and assigned to {assignedResearcher}.
                </span>
                <button onClick={() => setShowTaskAssignedNotification(false)} className="text-teal-700 hover:text-teal-900">
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Content Body: Leads List on Left, Search Summary on Right */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Leads Table (7 cols) */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                  <span className="font-bold text-slate-900">
                    10 companies found · {selectedCount} selected
                  </span>
                  <span className="text-[11px] text-slate-400">Each saved with its sources</span>
                </div>

                <div className="space-y-2">
                  {leads.map((lead) => {
                    const isHigh = lead.score >= 70;
                    return (
                      <div
                        key={lead.id}
                        onClick={() => setInspectLead(lead)}
                        className={`group relative flex items-center justify-between p-3.5 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all cursor-pointer ${
                          inspectLead?.id === lead.id
                            ? "border-teal-600 ring-2 ring-teal-500/10"
                            : "border-slate-200/90"
                        }`}
                      >
                        {/* Checkbox & Avatar & Title */}
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={(e) => toggleLead(lead.id, e)}
                            className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                              lead.selected
                                ? "bg-teal-800 border-teal-800 text-white"
                                : "border-slate-300 bg-white hover:border-slate-400"
                            }`}
                          >
                            {lead.selected && <Check className="h-3 w-3 stroke-[3]" />}
                          </button>

                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                            {lead.initials}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-bold text-slate-900 text-sm group-hover:text-teal-800 transition-colors">
                                {lead.name}
                              </span>
                              {lead.tags.map((tag) => (
                                <span
                                  key={tag.label}
                                  className={`rounded px-1.5 py-0.5 text-[10px] font-semibold border ${tag.color}`}
                                >
                                  {tag.label}
                                </span>
                              ))}
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">{lead.detail}</p>
                          </div>
                        </div>

                        {/* Circular Score Badge */}
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold ${
                              isHigh
                                ? "border-teal-700 text-teal-900 bg-teal-50/40"
                                : "border-amber-600 text-amber-800 bg-amber-50/40"
                            }`}
                          >
                            {lead.score}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Search Box & Next Step Assignment (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                {/* Search query box */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                  <h3 className="text-xs font-bold text-slate-900">Your search</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed italic">
                    "UK manufacturers opening or expanding production sites in the last 90 days"
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white">
                      Infrastructure expansion
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700">
                      United Kingdom
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700">
                      Manufacturing
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                    Quick search · 10 research units used
                  </p>
                </div>

                {/* Assignment Box */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Next: assign a researcher</h3>
                    <div className="mt-2">
                      <select
                        value={assignedResearcher}
                        onChange={(e) => setAssignedResearcher(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2 px-3 text-xs font-medium text-slate-800 focus:border-slate-900 focus:outline-none shadow-sm"
                      >
                        <option>Tom Reed · Researcher</option>
                        <option>Sarah Jenkins · Senior Analyst</option>
                        <option>Alex Mercer · Enterprise SDR</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500">
                    Creates a research task for each selected lead.
                  </p>

                  <button
                    onClick={handleAssign}
                    disabled={selectedCount === 0}
                    className="w-full rounded-xl bg-[#0B1528] hover:bg-slate-800 text-white py-2.5 px-4 text-xs font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  >
                    Next: Assign researcher ({selectedCount})
                  </button>
                </div>

                {/* Lead Inspection Drawer (when a lead is clicked) */}
                {inspectLead && (
                  <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-4 text-xs space-y-2 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-teal-950">{inspectLead.name}</span>
                      <span className="font-bold text-teal-800">{inspectLead.score} Score</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">{inspectLead.detail}</p>
                    <div className="pt-2 border-t border-teal-100 space-y-1">
                      <span className="font-semibold text-slate-700 text-[10px] uppercase tracking-wider block">
                        Verified Sources ({inspectLead.sources.length})
                      </span>
                      {inspectLead.sources.map((src, i) => (
                        <p key={i} className="text-slate-600 text-[11px] italic">
                          • {src}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
