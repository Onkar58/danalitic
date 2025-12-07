import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { AIMLSection } from "@/components/services/ai-ml-section";
import { CloudSection } from "@/components/services/cloud-section";
import { DataScienceSection } from "@/components/services/data-science-section";
import { QuantumSection } from "@/components/services/quantum-section";
import { ServicesCTA } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions | Danalitic",
  description:
    "LLM, RAG & Agentic AI Engineering. Enterprise AI solutions, multi-cloud architecture, and quantum computing services.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <AIMLSection />
      <CloudSection />
      <DataScienceSection />
      <QuantumSection />
      <ServicesCTA />
    </main>
  );
}
