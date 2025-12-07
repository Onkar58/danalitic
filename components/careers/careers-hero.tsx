import { Rocket } from "lucide-react";

export function CareersHero() {
  return (
    <section className="relative pt-32 pb-16 bg-background overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#FF0066]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFBB33]/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-border mb-6">
            <Rocket className="h-4 w-4 text-[#FF0066]" />
            <span className="text-sm font-medium text-muted-foreground">
              Join Danalitic
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-semibold sm:text-5xl text-balance">
            Join the{" "}
            <span className="gradient-text">Intelligence Revolution.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We're building systems that define the next decade of AI. If you're
            passionate about deep learning, cloud engineering, or quantum
            computation—Danalitic is where you belong.
          </p>
        </div>
      </div>
    </section>
  );
}
