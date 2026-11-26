"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades in any element marked with `data-reveal` the first time it scrolls into view.
 * Stagger with an inline `--rd` delay, e.g. style={{ "--rd": "120ms" }}.
 * Styles live in globals.css under "Scroll reveal".
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target); // only once
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
