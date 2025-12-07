"use client";

import { useState } from "react";
import {
  BarChart3,
  FileText,
  Activity,
  Database,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Predictive Modeling",
    short: "Forecast demand, risk, churn, and business trends.",
    detail:
      "Forecast demand, risk, churn, failure probability, and business trends using advanced ML algorithms.",
  },
  {
    icon: FileText,
    title: "NLP & Document Intelligence",
    short: "Extract knowledge from documents, contracts, and emails.",
    detail:
      "Extract knowledge, rules, workflows, and insights from PDFs, scans, contracts, emails, and EHRs.",
  },
  {
    icon: Activity,
    title: "Time-Series & Anomaly Detection",
    short: "Real-time pattern tracking for fraud and risk.",
    detail:
      "Real-time pattern tracking for fraud, downtime risk, stock movements, sensor failures, and cyber anomalies.",
  },
  {
    icon: Database,
    title: "Data Strategy & Modernization",
    short: "Blueprint analytics-ready enterprise datasets.",
    detail:
      "Blueprinting data platforms, governance models, and metadata catalogs for analytics-ready enterprise datasets.",
  },
  {
    icon: Lightbulb,
    title: "Explainable AI (XAI)",
    short: "Model interpretability for audit and compliance.",
    detail:
      "Detailed model interpretability dashboards for audit, compliance, and leadership visibility.",
  },
];

export function DataScienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="data-science" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#34D399]">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold">
              Data Science & Analytics
            </h2>
            <p className="text-muted-foreground">
              Transform your data into insight, foresight, and action.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl border border-border bg-card hover:bg-muted/10 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-4">
                <service.icon className="h-5 w-5 text-[#10B981] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-[#10B981] group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {hoveredIndex === index ? service.detail : service.short}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
