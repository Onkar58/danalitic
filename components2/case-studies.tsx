"use client"

import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Financial Compliance at Scale",
    industry: "Financial Services",
    tagline: "70% reduction in manual review time",
    situation:
      "A global financial services firm struggled with manual compliance monitoring across thousands of daily transactions.",
    solution:
      "RAG-powered system integrated with existing workflow, processing regulatory updates and flagging risky transactions automatically.",
    outcomes: [
      "70% reduction in manual compliance review time",
      "Improved anomaly detection accuracy",
      "Auditable AI decision trails",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Predictive Maintenance for Manufacturing",
    industry: "Manufacturing",
    tagline: "$2M+ annual savings",
    situation: "Manufacturing client faced unplanned equipment downtime and wanted to shift to predictive maintenance.",
    solution: "End-to-end ML pipeline ingesting sensor data with real-time anomaly detection deployed on edge devices.",
    outcomes: [
      "45% reduction in unplanned downtime",
      "30% improvement in equipment lifespan",
      "$2M+ annual savings in maintenance costs",
    ],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    title: "Personalized E-Commerce Platform",
    industry: "Retail & E-Commerce",
    tagline: "25% increase in conversion rate",
    situation: "E-commerce platform needed real-time personalization but had fragmented data across multiple systems.",
    solution:
      "Unified data infrastructure with collaborative filtering engine and GenAI layer for personalized descriptions.",
    outcomes: [
      "25% increase in conversion rate",
      "40% increase in average order value",
      "Reduced customer acquisition costs through improved retention",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
]

export default function CaseStudies() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 glass">
            <p className="text-sm font-medium text-primary">Success Stories</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Real Results from Real <span className="gradient-text">Implementations</span>
          </h2>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* Left: Content */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="space-y-6">
                  {/* Category badge and title */}
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                      {study.industry}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">{study.title}</h3>
                    <p className="text-lg text-muted-foreground mt-2 italic">{study.tagline}</p>
                  </div>

                  {/* Story sections */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-foreground leading-relaxed">{study.situation}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Our Approach</h4>
                      <p className="text-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Outcomes grid */}
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.outcomes.map((outcome, i) => (
                          <li key={i} className="flex gap-3">
                            <ArrowUpRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual element */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div
                  className={`relative h-96 rounded-2xl overflow-hidden glass border-accent/30 bg-gradient-to-br ${study.color}`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-2xl">✓</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider">Key Metric</p>
                        <p className="text-3xl font-bold text-accent mt-2">{study.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
