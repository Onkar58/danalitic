"use client";

import { useEffect, useRef, useState } from "react";

const industries = ["Healthcare", "FinTech", "Manufacturing", "Public Sector"];

export function WhoWeAre() {
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
    <section ref={sectionRef} className="py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 font-accent">
              Who We Are
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 font-heading">
              An AI-driven engineering company specializing in intelligent
              systems that scale.
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg font-sans">
              We bridge the gap between cutting-edge research and real-world
              enterprise applications, delivering solutions that transform how
              organizations operate.
            </p>

            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6 font-accent">
                Industries We Serve
              </p>
              <div className="flex flex-col gap-3">
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className={`flex items-center gap-4 transition-all duration-500`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-8 h-px gradient-bg" />
                    <span className="text-sm font-medium tracking-wide text-foreground uppercase font-accent">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Engineering blueprint visual */}
          <div
            className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="aspect-square bg-muted/10 rounded-xl relative overflow-hidden">
              {/* Blueprint grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #94a3b8 1px, transparent 1px),
                    linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                <g stroke="#FF0066" strokeWidth="1" fill="none" opacity="0.6">
                  <path d="M50 200 L150 100 L250 100 L350 200 L250 300 L150 300 Z" />
                  <path d="M100 200 L200 120 L300 200 L200 280 Z" />
                  <circle cx="200" cy="200" r="60" />
                  <line
                    x1="200"
                    y1="80"
                    x2="200"
                    y2="140"
                    strokeDasharray="4,4"
                  />
                  <line
                    x1="200"
                    y1="260"
                    x2="200"
                    y2="320"
                    strokeDasharray="4,4"
                  />
                  <line
                    x1="80"
                    y1="200"
                    x2="140"
                    y2="200"
                    strokeDasharray="4,4"
                  />
                  <line
                    x1="260"
                    y1="200"
                    x2="320"
                    y2="200"
                    strokeDasharray="4,4"
                  />
                </g>

                <g fill="#00FFFF">
                  <circle cx="200" cy="100" r="4" />
                  <circle cx="150" cy="200" r="4" />
                  <circle cx="250" cy="200" r="4" />
                  <circle cx="200" cy="300" r="4" />
                </g>
              </svg>

              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
