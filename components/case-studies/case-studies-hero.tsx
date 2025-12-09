import { TrendingUp } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-16 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#FF0066]/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-border mb-6">
            <TrendingUp className="h-4 w-4 text-[#FF0066]" />
            <span className="text-sm font-medium text-foreground">
              Real Enterprise Outcomes
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-semibold sm:text-5xl text-balance">
            Case Studies that prove{" "}
            <span className="gradient-text">
              intelligence delivers measurable impact.
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From document AI to quantum optimization, explore how we've helped
            enterprises achieve breakthrough results with AI, Cloud, and Data
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
