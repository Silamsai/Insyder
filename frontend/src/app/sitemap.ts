import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SHOW_PRICING } from "@/lib/features";

// Every public page. Add new pages here.
const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/product", priority: 0.9 },
  { path: "/solutions", priority: 0.9 },
  { path: "/discover", priority: 0.8 },
  { path: "/monitor", priority: 0.8 },
  { path: "/accounts", priority: 0.8 },
  { path: "/contact-profiling", priority: 0.8 },
  { path: "/outreach", priority: 0.8 },
  ...(SHOW_PRICING ? [{ path: "/pricing", priority: 0.8 }] : []),
  { path: "/demo", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
