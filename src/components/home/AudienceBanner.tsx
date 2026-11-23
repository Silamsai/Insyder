import React from "react";

export function AudienceBanner() {
  const audiences = [
    "Technology sales teams",
    "SDR teams",
    "Managed service providers",
    "Agencies",
    "Channel partners",
  ];

  return (
    <section className="bg-[#0c1c33] border-y border-white/10 py-7 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7fe3d6] whitespace-nowrap">
            Built for teams who sell into change
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {audiences.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-[#7fe3d6]/40 hover:text-white transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
