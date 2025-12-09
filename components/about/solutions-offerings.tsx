"use client"

import { useEffect, useRef, useState } from "react"

const offerings = [
  {
    name: "Large-Scale AI & ML Systems",
    benefit: "Real-time insights, predictive accuracy, intelligent automation",
    description:
      "Custom machine learning models, computer vision, NLP, and MLOps pipelines designed for enterprise scale.",
  },
  {
    name: "Multi-Cloud Architecture & FinOps",
    benefit: "Reduced cloud costs, scalable infrastructure, high uptime",
    description:
      "AWS, GCP, and Azure optimization with cost management, auto-scaling, and disaster recovery strategies.",
  },
  {
    name: "Autonomous AI Agents",
    benefit: "Automated workflows, improved CX, 24/7 support",
    description:
      "Conversational frameworks with intent recognition, process automation, and multi-channel support systems.",
  },
  {
    name: "Quantum Computing & Hybrid AI",
    benefit: "Future-proof architecture and innovation roadmap",
    description:
      "Cutting-edge quantum algorithms, hybrid systems, and research partnerships for next-gen capabilities.",
  },
]

export function SolutionsOfferings() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 font-accent">
            Our Capabilities
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl font-heading">
            Solutions & Offerings
          </h2>
        </div>

        <div className="space-y-0">
          {offerings.map((offering, index) => (
            <div
              key={offering.name}
              className={`group border-t border-border py-12 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left: Offering name */}
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors font-heading">
                    {offering.name}
                  </h3>
                </div>

                {/* Right: Benefit statement */}
                <div className="lg:col-span-4">
                  <p className="text-primary font-semibold text-sm tracking-wide uppercase font-accent">
                    {offering.benefit}
                  </p>
                </div>

                {/* Below: Mini descriptor */}
                <div className="lg:col-span-4">
                  <p className="text-muted-foreground leading-relaxed text-sm font-sans">{offering.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
