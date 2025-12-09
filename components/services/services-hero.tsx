import { Sparkles } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-background overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF0066]/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-border mb-6">
            <Sparkles className="h-4 w-4 text-[#FF0066]" />
            <span className="text-sm font-medium text-muted-foreground">
              Our Services
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-semibold sm:text-5xl text-balance">
            What we build isn't just AI —{" "}
            <span className="gradient-text">
              it's intelligence that performs, scales, and pays for itself.
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From custom LLM deployments to quantum-inspired optimization, we
            deliver end-to-end solutions that transform your data into
            competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
}
