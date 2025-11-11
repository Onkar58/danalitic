"use client";

import { useState } from "react";

import {
  Landmark,
  Hospital,
  ShoppingBag,
  Factory,
  Boxes,
  Building,
} from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Financial Services",
    icon: Landmark,
    highlights: ["Compliance Automation", "Fraud Detection", "Risk Analysis"],
    description:
      "AI-driven compliance monitoring, regulatory analysis, and transaction intelligence for financial institutions.",
  },
  {
    id: 2,
    name: "Healthcare & Life Sciences",
    icon: Hospital,
    highlights: ["Medical Imaging", "Clinical NLP", "Drug Discovery"],
    description:
      "Accelerate research and clinical workflows with machine learning and predictive diagnostics.",
  },
  {
    id: 3,
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    highlights: ["Personalization", "Demand Forecasting", "Price Optimization"],
    description:
      "Enhanced customer experience with AI recommendations, forecasting, and dynamic pricing strategies.",
  },
  {
    id: 4,
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    highlights: [
      "Predictive Maintenance",
      "Quality Assurance",
      "Supply Visibility",
    ],
    description:
      "Optimize operations with AI-driven anomaly detection and autonomous decision-making systems.",
  },
  {
    id: 5,
    name: "Enterprise Software & SaaS",
    icon: Boxes,
    highlights: ["AI Features", "Product Differentiation", "Competitive Edge"],
    description:
      "Embed AI capabilities into your platform with intelligent APIs and automation layers.",
  },
  {
    id: 6,
    name: "Government & Public Sector",
    icon: Building,
    highlights: [
      "Citizen Engagement",
      "Resource Optimization",
      "Policy Insights",
    ],
    description:
      "Secure AI infrastructure for modernizing public services and data-driven governance.",
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 glass">
            <p className="text-sm font-medium text-accent">
              Vertical Solutions
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            <span className="gradient-text">Industries</span> We Serve
          </h2>
        </div>

        {/* Industry grid with hover states */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`relative p-6 rounded-xl text-left transition-all duration-300 overflow-hidden group ${
                  activeIndustry.id === industry.id
                    ? "glass border-accent/50 bg-accent/10 shadow-lg shadow-accent/20"
                    : "border border-border/50 hover:border-border bg-background/50 hover:bg-background"
                }`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-6 h-6 mt-1 flex-shrink-0 `} />
                    <h3 className="font-bold text-lg">{industry.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {industry.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative glass rounded-2xl p-8 md:p-12 border-accent/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />

          <div className="relative space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-6xl">
                <activeIndustry.icon
                  className={`w-6 h-6 mt-1 flex-shrink-0 `}
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground">
                  {activeIndustry.name}
                </h3>
                <p className="text-muted-foreground mt-2 text-lg leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Key Capabilities
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {activeIndustry.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-background/50 border border-border/50"
                  >
                    <p className="font-semibold text-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
