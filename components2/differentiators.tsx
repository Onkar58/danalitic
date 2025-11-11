"use client"

import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react"

const differentiators = [
  {
    icon: Zap,
    title: "Deep Technical Expertise",
    description:
      "Our team includes ML engineers, data scientists, cloud architects, and AI researchers with proven experience shipping production systems.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Ownership",
    description:
      "We architect solutions, build the infrastructure, deploy to production, and optimize continuously. Full accountability across the entire lifecycle.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security & Compliance",
    description:
      "Security, governance, and compliance are baked in from day one. Your AI infrastructure meets the highest standards for data privacy and audit requirements.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Optimized Implementations",
    description:
      "We balance cutting-edge performance with pragmatic cost management. Maximum value without unnecessary overhead.",
  },
  {
    icon: TrendingUp,
    title: "Proven Delivery Track Record",
    description: "We have shipped 50+ production AI systems across finance, healthcare, retail, and manufacturing.",
  },
]

export default function Differentiators() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-card/50 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 glass">
            <p className="text-sm font-medium text-primary">Why We're Different</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Enterprise Expertise, <span className="gradient-text">Startup Speed</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((diff, i) => {
            const Icon = diff.icon
            return (
              <div
                key={i}
                className={`glass rounded-2xl p-8 md:p-10 border-accent/30 hover:border-accent/50 transition-all duration-300 ${
                  i % 2 === 0 ? "md:row-span-2" : ""
                }`}
              >
                <div className="flex flex-col h-full gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{diff.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-accent/50 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
