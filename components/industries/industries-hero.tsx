import { Globe } from "lucide-react";

export function IndustriesHero() {
  return (
    <section className="relative pt-32 pb-16 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFBB33]/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-border mb-6">
            <Globe className="h-4 w-4 text-[#FF0066]" />
            <span className="text-sm font-medium text-muted-foreground">
              Industries We Serve
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-semibold sm:text-5xl text-balance">
            AI that adapts to{" "}
            <span className="gradient-text">
              every industry — and every challenge.
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We help organizations across sectors unlock intelligent automation,
            cloud efficiency, and advanced decision-making through AI, ML, Cloud
            Engineering, and Quantum Innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
