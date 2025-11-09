"use client"

import { useState } from "react"
import { Code2, Brain, Cloud, BarChart3, Database, Sparkles } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Sparkles,
    title: "Generative AI Development",
    description: "Build custom GenAI applications tailored to your business workflows.",
    benefits: [
      "Custom LLM integration and prompt engineering",
      "Retrieval-Augmented Generation (RAG) architecture",
      "Multi-model orchestration and optimization",
      "Production-ready safety and compliance features",
    ],
  },
  {
    id: 2,
    icon: Brain,
    title: "Machine Learning & AI Strategy",
    description: "Design and deploy machine learning systems that solve real business problems.",
    benefits: [
      "End-to-end ML pipeline development",
      "Advanced feature engineering and data preparation",
      "Model selection, training, and validation",
      "Performance monitoring and retraining workflows",
    ],
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Engineering & Infrastructure",
    description: "Build secure, scalable cloud environments optimized for AI workloads.",
    benefits: [
      "Multi-cloud strategy and architecture",
      "Kubernetes orchestration and containerization",
      "Infrastructure-as-Code (IaC) and GitOps practices",
      "Auto-scaling and load optimization",
    ],
  },
  {
    id: 4,
    icon: BarChart3,
    title: "MLOps & LLMOps",
    description: "Operationalize your models with enterprise-grade frameworks.",
    benefits: [
      "CI/CD pipelines for model deployment",
      "Model versioning, monitoring, and governance",
      "Automated retraining and A/B testing",
      "Compliance and audit logging",
    ],
  },
  {
    id: 5,
    icon: Database,
    title: "Data Engineering & ETL",
    description: "Build robust data pipelines that fuel your AI initiatives.",
    benefits: [
      "Real-time and batch data pipelines",
      "Data quality and governance frameworks",
      "Vector database integration",
      "Data lake and warehouse optimization",
    ],
  },
  {
    id: 6,
    icon: Code2,
    title: "LLM Integration & Fine-Tuning",
    description: "Integrate state-of-the-art language models into your applications.",
    benefits: [
      "Multi-LLM orchestration (GPT, Claude, Llama, etc.)",
      "Domain-specific fine-tuning and adaptation",
      "Token optimization and cost reduction",
      "Latency optimization and caching strategies",
    ],
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 glass">
            <p className="text-sm font-medium text-primary">Our Capabilities</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Enterprise-Grade <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to production, we deliver AI solutions across the entire technology stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Service navigation with staggered cards */}
          <div className="space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 transform ${
                    activeService.id === service.id
                      ? "glass border-accent/50 bg-accent/10 shadow-lg shadow-accent/20"
                      : "border border-border/50 hover:border-border"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      className={`w-6 h-6 mt-1 flex-shrink-0 ${
                        activeService.id === service.id ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Active service details */}
          <div className="sticky top-24">
            <div className="glass rounded-2xl p-8 md:p-12 border-accent/30">
              <div className="space-y-8">
                {/* Service header */}
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4">
                    {activeService.icon && <activeService.icon className="w-7 h-7 text-accent" />}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{activeService.title}</h3>
                  <p className="text-muted-foreground mt-3 text-lg">{activeService.description}</p>
                </div>

                {/* Benefits list */}
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
