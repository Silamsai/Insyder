"use client";

import type { ReactNode } from "react";

/** In-page jump link that smooth-scrolls to a section without adding #hash to the URL. */
export default function AnchorLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a
      href={`#${to}`}
      onClick={(e) => {
        const el = document.getElementById(to);
        if (!el) return;
        e.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}
