"use client";

import { useState } from "react";
import {
  Cloud,
  Network,
  DollarSign,
  Shield,
  Container,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Multi-Cloud Architecture",
    short: "Unified deployments across AWS, Azure, and GCP.",
    detail:
      "Unified deployments across AWS, Azure, and GCP to avoid vendor lock-in and improve resiliency.",
  },
  {
    icon: Cloud,
    title: "Hybrid Cloud Pipelines",
    short: "Integrate on-premises with public cloud workloads.",
    detail:
      "Integrate on-premises datacenters with public cloud workloads for secure and seamless scale.",
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization (FinOps AI)",
    short: "AI-driven recommendations for up to 40% cost savings.",
    detail:
      "AI-driven workload placement recommendations that reduce compute + storage spend by up to 40%.",
  },
  {
    icon: Shield,
    title: "Secure Private LLM Hosting",
    short: "Enterprise LLMs deployed inside VPC environments.",
    detail:
      "Enterprise LLMs deployed inside VPC environments with RBAC, token throttling, and full audit logs.",
  },
  {
    icon: Container,
    title: "Kubernetes & Containers",
    short: "Auto-scaling container platforms for high-performance.",
    detail:
      "Auto-scaling container platforms designed for high-performance inference and streaming analytics.",
  },
];

export function CloudSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="cloud" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#00FFFF]">
            <Cloud className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold">
              Cloud & Hybrid Infrastructure
            </h2>
            <p className="text-muted-foreground">
              Optimize, scale, and secure across every environment.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl border border-border bg-card hover:bg-background transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-4">
                <service.icon className="h-5 w-5 text-[#00BFFF] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all" />
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
