import type { Metadata } from "next";
import { IndustriesHero } from "@/components/industries/industries-hero";
import { IndustrySection } from "@/components/industries/industry-section";
import { CrossIndustrySection } from "@/components/industries/cross-industry-section";

export const metadata: Metadata = {
  title: "Industries We Serve | Danalitic",
  description:
    "AI, ML, Cloud Engineering, and Quantum Innovation solutions across Healthcare, Finance, Manufacturing, Retail, and more.",
};

const industries = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    shortDesc: "AI for clinical intelligence, automation, and outcomes.",
    icon: "Heart",
    details: [
      "Automate extraction, summarization, and insights from clinical documents, lab reports, and radiology notes.",
      "On-prem or hybrid private LLM deployments to safeguard PHI.",
      "Prior authorization engines, ICD-10/ICD-11 code predictions, and medical policy reasoning engines.",
      "Predictive analytics for readmission risk, care plans, and operational efficiency.",
      "Supports HIPAA, HL7, FHIR, GDPR and other compliance frameworks.",
    ],
  },
  {
    id: "finance",
    title: "Banking, Finance & FinTech",
    shortDesc: "Trusted AI for risk, compliance, and financial growth.",
    icon: "Landmark",
    details: [
      "AI agents for fraud detection, AML compliance, and KYC automation.",
      "Risk scoring and anomaly detection across portfolio, trading, and payments.",
      "LLMs to interpret regulatory policies, generate reports, and automate audit workflows.",
      "Forecasting models for demand, pricing, delinquency, and credit risk.",
      "Quantum-inspired algorithms for portfolio optimization and trade simulations.",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    shortDesc: "AI-powered production, safety, and supply chain visibility.",
    icon: "Factory",
    details: [
      "Predictive maintenance from IoT sensor streams to prevent downtime.",
      "Computer vision for defect detection, quality control, and safety monitoring.",
      "Supply chain AI agents to coordinate procurement, warehousing, and logistics in real time.",
      "Digital twin modeling for throughput optimization and load planning.",
      "Deployment on edge + cloud for low latency and global oversight.",
    ],
  },
  {
    id: "retail",
    title: "Retail & Consumer Commerce",
    shortDesc: "Data-driven personalization and inventory intelligence.",
    icon: "ShoppingCart",
    details: [
      "Generative AI insights for consumer behavior, sentiment, and trend prediction.",
      "Personalized product recommendations and dynamic pricing engines.",
      "AI chat/voice support for customer experience automation across channels.",
      "Demand forecasting and stock replenishment powered by ML.",
      "Integration with Shopify, Salesforce, Dynamics, and POS platforms.",
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    shortDesc:
      "Autonomous workflows, optimized routes, and real-time visibility.",
    icon: "Truck",
    details: [
      "Multi-agent AI for transport planning, carrier coordination, and warehouse tasking.",
      "Route & capacity optimization using RL + Q-learning + quantum-inspired solvers.",
      "Shipment-risk prediction and delay anticipation from real-time telemetry.",
      "Digital control tower dashboards for end-to-end shipment visibility.",
      "Cloud-agnostic deployment for distributed global operations.",
    ],
  },
  {
    id: "government",
    title: "Public Sector & Government",
    shortDesc: "Secure, compliant AI adoption for digital governance.",
    icon: "Building2",
    details: [
      "AI for citizen service automation, smart grievance redressal, and document intelligence.",
      "LLMs to interpret policies, laws, procurement notices, and compliance frameworks.",
      "Analytics for tax, infrastructure, healthcare, and urban planning.",
      "Hybrid cloud architectures aligned with data sovereignty regulations.",
      "Support for GovCloud, NIC deployments, DISHA, NIST, SOC, GDPR.",
    ],
  },
  {
    id: "technology",
    title: "Technology & SaaS",
    shortDesc: "Scaling SaaS products faster with GenAI and multi-cloud.",
    icon: "Code2",
    details: [
      "LLM-based features (search, chatbots, summarization, autonomous workflows).",
      "Multi-tenant cloud architecture for performance, security, and cost control.",
      "Built-in observability, usage tracking, FinOps, and RBAC.",
      "RAG integrations with customer knowledge bases and documentation.",
      "AI marketplaces and plugin ecosystems for product extensibility.",
    ],
  },
  {
    id: "pharma",
    title: "Pharma & Drug Research",
    shortDesc: "Accelerating discovery and research pipelines.",
    icon: "FlaskConical",
    details: [
      "NLP for biomedical literature mining, adverse-event detection, and trial eligibility matching.",
      "Embedding-based similarity search across patents and publications.",
      "Quantum-inspired compound screening and molecular matching.",
      "ML forecasting for trial recruitment, toxicity risk, and formulation success.",
      "Hybrid cloud architectures for secure IP protection.",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-0">
            {industries.map((industry, index) => (
              <IndustrySection
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <CrossIndustrySection />
    </main>
  );
}
