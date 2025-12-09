"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Users, FlaskConical } from "lucide-react";

const highlights = [
  {
    label: "Innovation with Integrity",
    description:
      "Ethical AI design that prioritizes transparency and responsible deployment",
  },
  {
    label: "Scalability with Simplicity",
    description:
      "Enterprise systems made easy — complex AI, simplified for your teams",
  },
  {
    label: "Human-Centric AI",
    description:
      "Empowering your teams, not replacing them. AI as a collaborator.",
  },
];

const additionalContent = [
  {
    icon: Users,
    title: "Elite Team",
    description:
      "50+ AI engineers and data scientists with decades of combined experience",
  },
  {
    icon: MapPin,
    title: "Global Hubs",
    description:
      "Pune, Hyderabad, USA — delivering excellence across time zones",
  },
  {
    icon: FlaskConical,
    title: "Research-First",
    description: "Engineering grounded in cutting-edge research and innovation",
  },
];

export function WhyDanalitic() {
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
        <div
          className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 font-accent">
            What Makes Us Different
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight font-heading">
            Why Danalitic?
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <h3 className="text-lg font-semibold text-foreground mb-3 inline-block font-heading">
                  {item.label}
                  <span className="block h-0.5 gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-full" />
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional content areas */}
        <div className="border-t border-border pt-16">
          <div className="grid sm:grid-cols-3 gap-12">
            {additionalContent.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-border rounded-lg text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1 font-accent">
                    {item.title}
                  </p>
                  <p className="text-foreground/80 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
