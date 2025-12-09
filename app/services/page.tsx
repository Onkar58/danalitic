import { ServicesHero } from "@/components/services/services-hero";
import { ServicesTabs } from "@/components/services/servicesTabs";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions | Danalitic",
  description:
    "LLM, RAG & Agentic AI Engineering. Enterprise AI solutions, multi-cloud architecture, and quantum computing services.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Suspense>
        <ServicesTabs />
      </Suspense>
    </main>
  );
}
