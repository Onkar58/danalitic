"use client";
import { useState } from "react";
import { ServiceProps, Services } from "./services";

type INDUSTRY_DATA = {
  [k: string]: ServiceProps[];
};
const INDUSTRY_DATA: INDUSTRY_DATA = {
  "AI & Machine Learning": [
    {
      title: "Custom LLM Development",
      description:
        "We fine-tune and deploy Large Language Models on your proprietary data — delivering domain-accurate responses, not generic output.",
      height: "tall",
      image:
        "https://pixelplex.io/wp-content/uploads/2024/01/llm-applications-main.jpg",
    },
    {
      title: "RAG Pipelines",
      description:
        "Retrieval-Augmented Generation ensures models cite your internal knowledge sources, reducing hallucinations and increasing compliance.",
      height: "medium",
    },
    {
      title: "Agentic AI Systems",
      description:
        "Multi-agent architectures that plan, reason, take actions, and collaborate — built for high-automation workflows.",
      height: "short",
      image:
        "https://eco-cdn.iqpc.com/eco/images/channel_content/images/ai-generated_images_comic_strip_in_blue_modern_styleruOsIIcWQV26K4grrs4kG4RLXQ3zj6fX5aeZucLh.webp",
    },
    {
      title: "AI Observability & Governance",
      description:
        "Real-time monitoring of prompts, latency, hallucination rate, and cost with feedback loops for continuous improvement.",
      height: "tall",
    },
    {
      title: "MLOps & CI/CD Automation",
      description:
        "Automated pipelines for training, validation, deployment, rollback, and monitoring — enterprise-ready ML lifecycle.",
      height: "tall",
      image:
        "https://www.databricks.com/sites/default/files/inline-images/mlops-cycle.png",
    },
  ],

  "Cloud & Hybrid Infrastructure": [
    {
      title: "Multi-Cloud Architecture",
      description:
        "Unified deployments across AWS, Azure, and GCP to avoid vendor lock-in and improve resiliency.",
      height: "tall",
    },
    {
      title: "Hybrid Cloud Pipelines",
      description:
        "Integrate on-premises datacenters with public cloud workloads for secure and seamless scale.",
      height: "short",
    },
    {
      title: "Cloud Cost Optimization (FinOps AI)",
      description:
        "AI-driven workload placement recommendations that reduce compute + storage spend by up to 40%.",
      height: "medium",
    },
    {
      title: "Secure Private LLM Hosting",
      description:
        "Enterprise LLMs deployed inside VPC environments with RBAC, token throttling, and full audit logs.",
      height: "medium",
    },
    {
      title: "Kubernetes & Containers",
      description:
        "Auto-scaling container platforms designed for high-performance inference and streaming analytics.",
      height: "short",
    },
  ],

  "Data Science & Analysis": [
    {
      title: "Predictive Modeling",
      description:
        "Forecast demand, risk, churn, failure probability, and business trends using advanced ML algorithms.",
    },
    {
      title: "NLP & Document Intelligence",
      description:
        "Extract insights from PDFs, scans, contracts, emails, and EHRs using advanced NLP models.",
    },
    {
      title: "Time-Series & Anomaly Detection",
      description:
        "Real-time tracking for fraud, downtime risk, stock movements, sensor failures, and cyber anomalies.",
    },
    {
      title: "Data Strategy & Modernization",
      description:
        "Design enterprise data platforms, governance models, and metadata catalogs for analytics-ready datasets.",
    },
    {
      title: "Explainable AI (XAI)",
      description:
        "Model interpretability dashboards for audit, compliance, and leadership visibility.",
    },
  ],

  "Quantum & Emerging Tech": [
    {
      title: "Quantum-ML Fusion",
      description:
        "Testing ML models enhanced by quantum computing for optimization, simulation, and molecular search.",
    },
    {
      title: "Quantum-Inspired Algorithms",
      description:
        "Achieve quantum-level performance using classical hardware for logistics, routing, and optimization.",
    },
    {
      title: "Hybrid Classical–Quantum Systems",
      description:
        "Split workloads — classical for scale, quantum for complexity — to accelerate computation.",
    },
    {
      title: "Quantum Research Partnerships",
      description:
        "Research collaborations with academia to explore frontier quantum breakthroughs.",
    },
  ],

  "Enterprise AI & Public Infrastructure": [
    {
      title: "Healthcare AI",
      description:
        "Prior authorization automation, ICD-10 coding, clinical document AI with PHI safety controls.",
    },
    {
      title: "Finance & BFSI",
      description:
        "Fraud prevention, risk scoring, audit intelligence, and regulatory automation.",
    },
    {
      title: "Manufacturing",
      description:
        "Predictive maintenance, vision inspection, and supply-chain optimization.",
    },
    {
      title: "Retail & eCommerce",
      description:
        "Personalized recommendations, dynamic pricing, and customer-journey intelligence.",
    },
    {
      title: "Government & Public Sector",
      description:
        "Secure cloud modernization and AI adoption aligned with compliance and citizen privacy.",
    },
  ],
};

export default function ServicesTabsWithAccordion() {
  const industries = Object.keys(INDUSTRY_DATA);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setActiveIndustry(industry);
                setHovered(null);
              }}
              className={`px-4 py-2 rounded-full border-none text-sm transition
                ${
                  activeIndustry === industry
                    ? "gradient-button"
                    : "gradient-border cursor-pointer"
                }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Accordion for Selected Industry */}
        <div className="">
          <Services
            services={INDUSTRY_DATA[activeIndustry]}
            title={activeIndustry}
          />
          {
            // INDUSTRY_DATA[activeIndustry].map((item, i) => (
            //   <div
            //     key={i}
            //     onMouseEnter={() => setHovered(i)}
            //     onMouseLeave={() => setHovered(null)}
            //     className="border-b border-gray-200 px-6 py-5 cursor-pointer transition hover:bg-gray-50"
            //   >
            //     <div className="flex justify-between gap-4">
            //       {/* Left Column: Title */}
            //       <p className="font-semibold text-gray-900 w-1/2">
            //         {item.title}
            //       </p>
            //
            //       {/* Right Column: Expanding Description */}
            //       <div className="w-1/2 text-gray-700 text-sm overflow-hidden relative">
            //         <div
            //           className={`transition-all duration-300 ${
            //             hovered === i
            //               ? "max-h-40 opacity-100"
            //               : "max-h-0 opacity-0"
            //           }`}
            //         >
            //           {item.description}
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // ))
          }
        </div>
      </div>
    </div>
  );
}
