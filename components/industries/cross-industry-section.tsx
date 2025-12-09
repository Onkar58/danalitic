import { Zap, Cloud, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const strengths = [
  {
    icon: Zap,
    title: "AI that reduces workload, not headcount",
  },
  {
    icon: Cloud,
    title: "Hybrid cloud to optimize performance + cost",
  },
  {
    icon: Shield,
    title: "Data security & compliance at the core",
  },
  {
    icon: Network,
    title: "Automation that scales across orgs — not in silos",
  },
];

export function CrossIndustrySection() {
  return (
    <section className="py-24 bg-white gradient-mesh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold sm:text-3xl">
            Cross-Industry <span className="gradient-text">Strengths</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            In every domain, Danalitic delivers:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-[#FF0066]/10 to-[#FFBB33]/10 mb-4">
                <strength.icon className="h-6 w-6 text-[#FF0066]" />
              </div>
              <p className="font-medium text-foreground">{strength.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="shimmer-btn text-white border-0 font-medium px-8"
          >
            <Link href="/contact">
              Explore Solutions for Your Industry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
