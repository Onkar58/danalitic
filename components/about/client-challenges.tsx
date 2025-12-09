"use client";

import { useEffect, useRef, useState } from "react";

const challenges = [
  "Legacy systems holding back growth",
  "Fragmented data silos",
  "Complex multi-cloud spending",
  "Lack of real-time visibility",
  "Manual business processes draining time",
  "High infrastructure TCO",
];

export function ClientChallenges() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 gradient-mesh">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left side: Title and statement */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 font-accent">
              What We Solve
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-8 font-heading">
              The challenges holding enterprises back
            </h2>

            <p className="text-muted-foreground leading-relaxed font-sans">
              We understand the obstacles that prevent organizations from
              unlocking the full potential of their data and AI initiatives.
            </p>
          </div>

          {/* Right side: Stacked list of pains */}
          <div className="lg:col-span-3">
            <div className="space-y-0">
              {challenges.map((challenge, index) => (
                <div
                  key={challenge}
                  className={`group border-t border-border last:border-b py-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-mono text-muted-foreground pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xl sm:text-2xl font-medium text-foreground/80 group-hover:text-foreground transition-colors font-heading">
                      {challenge}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
