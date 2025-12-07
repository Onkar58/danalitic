"use client";

import { useState } from "react";
import { Brain, Layers, Bot, Eye, GitBranch, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Custom LLM Development",
    short:
      "Fine-tune and deploy Large Language Models on your proprietary data.",
    detail:
      "We fine-tune and deploy Large Language Models on your proprietary data — delivering domain-accurate responses, not generic output.",
  },
  {
    icon: Layers,
    title: "RAG Pipelines",
    short:
      "Retrieval-Augmented Generation for grounded, accurate AI responses.",
    detail:
      "Retrieval-Augmented Generation ensures models cite your internal knowledge sources, reducing hallucinations and increasing compliance.",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    short: "Multi-agent architectures for workflow automation.",
    detail:
      "Multi-agent architectures that plan, reason, take actions, and collaborate — built for high-automation workflows.",
  },
  {
    icon: Eye,
    title: "AI Observability & Governance",
    short: "Real-time monitoring of prompts, latency, and hallucination rates.",
    detail:
      "Real-time monitoring of prompts, latency, hallucination rate, and costs with feedback loops for continuous improvement.",
  },
  {
    icon: GitBranch,
    title: "MLOps & CI/CD Automation",
    short: "Enterprise-ready ML lifecycle automation.",
    detail:
      "Automated pipelines for training, validation, deployment, rollback, and monitoring — enterprise-ready ML lifecycle.",
  },
];

export function AIMLSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="ai-ml" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#FF0066] to-[#FFBB33]">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold">
              Artificial Intelligence & Machine Learning
            </h2>
            <p className="text-muted-foreground">
              Delivering end-to-end AI solutions — from data to deployment.
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
                <service.icon className="h-5 w-5 text-[#FF0066] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-[#FF0066] group-hover:translate-x-1 transition-all" />
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
