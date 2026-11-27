import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Do not create AGENTS.md on `next dev` */
  agentRules: false,
  /* Prevent worker concurrency conflicts on Windows */
  experimental: {
    cpus: 1,
  },
  /* Old Plans URLs now live under Pricing */
  async redirects() {
    // Pricing hidden for demos (src/lib/features.ts): its pages send visitors to Book a demo
    const hidePricing = process.env.NEXT_PUBLIC_SHOW_PRICING !== "true";
    return [
      ...(hidePricing
        ? [
            { source: "/pricing", destination: "/demo", permanent: false },
            { source: "/pricing/:path*", destination: "/demo", permanent: false },
          ]
        : []),
      { source: "/plans", destination: "/pricing", permanent: true },
      { source: "/plans/:path*", destination: "/pricing/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
