import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Do not create AGENTS.md on `next dev` */
  agentRules: false,
  /* Prevent worker concurrency conflicts on Windows */
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
