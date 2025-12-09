"use client";

import type React from "react";

import { useState, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import {
  Heart,
  Landmark,
  Factory,
  ShoppingCart,
  Truck,
  Building2,
  Code2,
  FlaskConical,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Landmark,
  Factory,
  ShoppingCart,
  Truck,
  Building2,
  Code2,
  FlaskConical,
};

interface Industry {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  details: string[];
}

interface IndustrySectionProps {
  industry: Industry;
  index: number;
}

export function IndustrySection({ industry, index }: IndustrySectionProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const IconComponent = iconMap[industry.icon];

  return (
    <div
      ref={ref}
      id={industry.id}
      className={`border-b border-border last:border-b-0 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full py-8 flex items-center justify-between gap-6 group text-left"
      >
        <div className="flex items-center gap-6">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#FF0066]/10 to-[#FFBB33]/10 group-hover:from-[#FF0066]/20 group-hover:to-[#FFBB33]/20 transition-colors">
            {IconComponent && (
              <IconComponent className="h-6 w-6 text-[#FF0066]" />
            )}
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-foreground group-hover:text-[#FF0066] transition-colors">
              {industry.title}
            </h3>
            <p className="text-muted-foreground mt-1">{industry.shortDesc}</p>
          </div>
        </div>
        <div className="shrink-0">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground group-hover:text-[#FF0066] transition-colors" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-[#FF0066] transition-colors" />
          )}
        </div>
      </button>

      {/* Expandable details */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-8 pl-20">
            <div className="space-y-3">
              {industry.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#FF0066] shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
