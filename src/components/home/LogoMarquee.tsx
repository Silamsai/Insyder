import React from "react";

export function LogoMarquee() {
  const logos = [
    { name: "Datadog", text: "DATADOG" },
    { name: "Snowflake", text: "❄ snowflake" },
    { name: "Segment", text: "segment" },
    { name: "Ramp", text: "RAMP ↗" },
    { name: "Linear", text: "Linear" },
    { name: "Retool", text: "retool" },
    { name: "Vercel", text: "▲ Vercel" },
    { name: "Supabase", text: "⚡ Supabase" },
  ];

  return (
    <section className="border-y border-white/10 bg-[#070c18] py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by revenue leaders at high-growth B2B companies
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee space-x-12 sm:space-x-16 items-center opacity-70 hover:opacity-100 transition-opacity">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="text-base sm:text-lg font-bold tracking-wider text-slate-400 hover:text-cyan-300 transition-colors cursor-default whitespace-nowrap"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
