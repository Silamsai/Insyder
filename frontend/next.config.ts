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
    return [
      { source: "/plans", destination: "/pricing", permanent: true },
      { source: "/plans/:path*", destination: "/pricing/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
