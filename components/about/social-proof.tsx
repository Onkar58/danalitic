"use client"

import { useEffect, useRef, useState } from "react"

const metrics = [
  { value: "18M+", label: "Documents Processed" },
  { value: "27%", label: "Cloud Savings YoY" },
  { value: "99.98%", label: "Uptime SLA" },
]

const quote = {
  text: "Danalitic transformed our data infrastructure into an AI-powered platform that exceeded every expectation we had.",
  author: "CTO, Healthcare Enterprise",
}

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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
            Impact & Results
          </p>
        </div>

        <div
          className={`mb-24 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground/80 leading-relaxed max-w-4xl font-heading">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <cite className="block mt-8 text-sm text-muted-foreground not-italic tracking-wide font-accent">
            — {quote.author}
          </cite>
        </div>

        <div className="border-t border-border">
          <div className="grid sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`py-12 ${index !== 0 ? "sm:border-l border-border" : ""} ${index !== metrics.length - 1 ? "border-b sm:border-b-0 border-border" : ""} transition-all duration-500`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div
                  className={`sm:px-8 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2 font-heading">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground font-accent">
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-8 font-accent">
            Trusted by innovative enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {["Enterprise A", "Tech Corp", "Global Systems", "InnovateX", "DataFlow Inc"].map((name) => (
              <span key={name} className="text-lg font-medium text-muted-foreground/40 tracking-wide font-heading">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
