import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { WhoWeAre } from "@/components/about/who-we-are";
import { ClientChallenges } from "@/components/about/client-challenges";
import { SolutionsOfferings } from "@/components/about/solutions-offerings";
import { WhyDanalitic } from "@/components/about/why-danalitic";
import { SocialProof } from "@/components/about/social-proof";
import { AboutCta } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Danalitic | Engineering Intelligence for the Real World",
  description:
    "Transform your data into actionable intelligence — scalable, reliable, and ethical. Danalitic delivers AI solutions for Healthcare, FinTech, Manufacturing, and Public Sector.",
  keywords: [
    "data science India",
    "AI company Pune",
    "hybrid cloud expert",
    "quantum computing",
    "enterprise AI",
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <ClientChallenges />
      <SolutionsOfferings />
      <WhyDanalitic />
      <SocialProof />
      <AboutCta />
    </>
  );
}
