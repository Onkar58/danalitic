import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/careers-hero";
import { CultureSection } from "@/components/careers/culture-section";
import { JobListings } from "@/components/careers/job-listings";
import { CareersCTA } from "@/components/careers/careers-cta";

export const metadata: Metadata = {
  title: "Careers at Danalitic | Join Our AI Engineering Revolution",
  description:
    "AI jobs India, cloud careers, quantum internships. Join the team building intelligent AI platforms for the future.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CultureSection />
      <JobListings />
      <CareersCTA />
    </main>
  );
}
