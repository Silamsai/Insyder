import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AudienceBanner } from "@/components/home/AudienceBanner";
import { SolutionsWorkflows } from "@/components/home/SolutionsWorkflows";
import { RoleHypothesisSection } from "@/components/home/RoleHypothesisSection";
import { MidConversionRibbon } from "@/components/home/MidConversionRibbon";
import { PlatformTrustSection } from "@/components/home/PlatformTrustSection";
import { GetStartedSection } from "@/components/home/GetStartedSection";
import { FaqSection } from "@/components/home/FaqSection";
import { PreFooterCta } from "@/components/home/PreFooterCta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with exact headline, copy, and Discover Find & Assign Demo Workspace */}
      <HeroSection />

      {/* 2. Audience Banner: Built for teams who sell into change */}
      <AudienceBanner />

      {/* 3. Solutions: Every account, from first signal to first meeting (5 Workflows + Spotlight) */}
      <SolutionsWorkflows />

      {/* 4. Role Hypothesis: Know what each person is likely to care about (Helen Marsh Card) */}
      <RoleHypothesisSection />

      {/* 5. Mid-page Conversion Ribbon: See Insyder on accounts like the ones your team sells to */}
      <MidConversionRibbon />

      {/* 6. Platform & Trust: Fits your stack. Keeps your data clean (4 Pillars) */}
      <PlatformTrustSection />

      {/* 7. Get Started: Start with your website (4 Steps) */}
      <GetStartedSection />

      {/* 8. FAQ: Good questions (5 Exact Questions) */}
      <FaqSection />

      {/* 9. Pre-Footer Dual Callout: Every account with a reason... */}
      <PreFooterCta />
    </div>
  );
}
