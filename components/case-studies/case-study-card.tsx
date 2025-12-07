"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  metrics: Metric[];
  highlights: string[];
  dark: boolean;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${study.dark ? "bg-[#0C0C0C]" : "bg-background"}`}
    >
      {/* Gradient accent for dark sections */}
      {study.dark && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF0066] to-transparent opacity-50" />
      )}

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Category badge */}
          <div className="mb-6">
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                study.dark
                  ? "bg-white/10 text-white/80"
                  : "bg-gradient-to-r from-[#FF0066]/10 to-[#FFBB33]/10 text-[#FF0066]"
              }`}
            >
              {study.category}
            </span>
          </div>

          {/* Title and subtitle */}
          <h2
            className={`font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-semibold mb-3 ${
              study.dark ? "text-white" : "text-foreground"
            }`}
          >
            {study.title}
          </h2>
          <p
            className={`text-lg mb-8 ${study.dark ? "text-gray-400" : "text-muted-foreground"}`}
          >
            {study.subtitle}
          </p>

          {/* Metrics grid */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {study.metrics.map((metric, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl ${
                  study.dark
                    ? "bg-white/5 border border-white/10"
                    : "bg-muted/5 border border-border"
                }`}
              >
                <div
                  className={`font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-semibold ${
                    study.dark ? "text-white" : "gradient-text"
                  }`}
                >
                  {isInView ? (
                    <AnimatedCounter
                      end={metric.value}
                      prefix={metric.prefix || ""}
                      suffix={metric.suffix || ""}
                      duration={1500}
                    />
                  ) : (
                    `${metric.prefix || ""}0${metric.suffix || ""}`
                  )}
                </div>
                <p
                  className={`text-sm mt-1 ${study.dark ? "text-gray-500" : "text-muted-foreground"}`}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-3 mb-8">
            {study.highlights.map((highlight, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 transition-all duration-500`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <CheckCircle2
                  className={`h-5 w-5 mt-0.5 shrink-0 ${study.dark ? "text-[#00FFFF]" : "text-[#FF0066]"}`}
                />
                <p
                  className={`text-sm leading-relaxed ${study.dark ? "text-gray-300" : "text-foreground/80"}`}
                >
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            asChild
            variant={study.dark ? "secondary" : "default"}
            className={
              study.dark
                ? "bg-white text-[#0C0C0C] hover:bg-white/90"
                : "shimmer-btn text-white border-0"
            }
          >
            <Link href="/contact">
              Discuss a Similar Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom gradient for dark sections */}
      {study.dark && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBB33] to-transparent opacity-50" />
      )}
    </div>
  );
}
