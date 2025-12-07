import { BookOpen } from "lucide-react";

export function BlogsHero() {
  return (
    <section className="relative pt-32 pb-12 bg-background overflow-hidden gradient-mesh">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-border mb-6">
            <BookOpen className="h-4 w-4 text-[#FF0066]" />
            <span className="text-sm font-medium text-muted-foreground">
              Danalitic Insights
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-semibold sm:text-5xl text-balance">
            Engineering Intelligence,{" "}
            <span className="gradient-text">One Article at a Time</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Explore our latest thinking on AI, Cloud Engineering, Quantum
            Computing, and the technologies shaping enterprise innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
