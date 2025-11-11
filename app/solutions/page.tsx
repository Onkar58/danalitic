"use client";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Cloud,
  Database,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import TechSections from "./tech-sections";

export default function Solutions() {
  const solutions = [
    {
      id: "ai",
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Delivering end-to-end AI solutions — from data to deployment.",
      fullDescription:
        "Build, fine-tune, and deploy large language models tailored to your business needs. Our RAG pipelines integrate vector databases for superior context retrieval, while Agentic AI Systems automate complex enterprise workflows with explainability and reasoning at their core.",
      services: [
        "LLM Development & Fine-Tuning",
        "RAG Pipelines with real-time context retrieval",
        "Agentic AI Systems for workflow automation",
        "AI Observability & performance scoring",
      ],
      icon: Brain,
      gradient: "from-pink-500 via-pink-400 to-orange-400",
      position: "left",
    },
    {
      id: "data",
      title: "Data Science & Analytics",
      description: "Transform your data into insight, foresight, and action.",
      fullDescription:
        "Unlock actionable insights from complex data with advanced predictive models, NLP capabilities, and real-time anomaly detection. Our MLOps automation ensures continuous model improvement and seamless production deployment.",
      services: [
        "Predictive & Prescriptive Analytics",
        "NLP & Document Intelligence",
        "Time-Series Forecasting & Anomaly Detection",
        "MLOps Pipeline Automation",
      ],
      icon: Database,
      gradient: "from-amber-500 via-yellow-400 to-orange-300",
      position: "right",
    },
    {
      id: "cloud",
      title: "Cloud & Hybrid Infrastructure",
      description: "Optimize, scale, and secure across every environment.",
      fullDescription:
        "Architect multi-cloud strategies that reduce costs by up to 40% while maintaining security and scalability. We design enterprise-grade infrastructure with Kubernetes automation, FinOps optimization, and private LLM hosting in secure VPCs.",
      services: [
        "Multi-Cloud Deployments (AWS | Azure | GCP)",
        "Hybrid Cloud Architecture",
        "Cloud Cost Optimization & FinOps AI",
        "Containerization & Kubernetes Automation",
      ],
      icon: Cloud,
      gradient: "from-cyan-500 via-teal-400 to-blue-400",
      position: "left",
    },
    {
      id: "quantum",
      title: "Quantum Computing & AI Fusion",
      description: "Exploring the frontiers of computation.",
      fullDescription:
        "Pioneer next-generation solutions at the intersection of quantum computing and AI. Our hybrid classical-quantum frameworks explore quantum-inspired optimization, quantum-enhanced ML experiments, and collaborative research with leading academic institutions.",
      services: [
        "Quantum-Inspired Optimization Algorithms",
        "Quantum-Enhanced ML Experiments",
        "QML Research Collaborations",
        "Hybrid Classical–Quantum Processing",
      ],
      icon: Zap,
      gradient: "from-violet-500 via-purple-400 to-pink-400",
      position: "right",
    },
  ];
  const [activeService, setActiveService] = useState("ai");
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-96 flex items-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-balance mb-6">
              Solutions That <span className="gradient-text">Empower</span>{" "}
              Innovation
            </h1>
            <p className="text-xl text-muted max-w-2xl leading-relaxed">
              Comprehensive AI, data, and cloud services engineered for
              enterprise scale. From strategy to production, we deliver
              solutions that drive measurable business value.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 rounded-full font-semibold gradient-brand text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all">
                Explore Solutions
              </button>
              <button className="px-8 py-3 rounded-full font-semibold border-2 border-border text-foreground hover:bg-gray-50 transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <div className="py-32 space-y-32">
          {solutions.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <section
                key={service.id}
                data-service={service.id}
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${idx > 0 ? "mt-12" : ""}`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${service.position === "right" ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Text Content */}
                  <div
                    className={
                      service.position === "right" ? "lg:order-2" : "lg:order-1"
                    }
                  >
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                        Service
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight text-balance">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted mb-8 leading-relaxed max-w-lg">
                      {service.fullDescription}
                    </p>

                    <div className="space-y-3 mb-10">
                      {service.services.map((svc, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground font-medium">
                            {svc}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                      Learn more{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Visual Element - Gradient Box with nodes */}
                  <div
                    className={
                      service.position === "right" ? "lg:order-1" : "lg:order-2"
                    }
                  >
                    <div
                      className={`relative aspect-square rounded-3xl overflow-hidden group`}
                      style={{
                        background: `linear-gradient(135deg, ${service.gradient})`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-20" />
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl opacity-15" />
                      </div>

                      {/* Animated nodes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-40 h-40">
                          {[0, 1, 2, 3].map((i) => {
                            const angle = (i / 4) * Math.PI * 2;
                            const x = Math.cos(angle) * 60;
                            const y = Math.sin(angle) * 60;
                            return (
                              <div
                                key={i}
                                className="absolute w-8 h-8 rounded-full bg-white/40 backdrop-blur border border-white/60"
                                style={{
                                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                  left: "50%",
                                  top: "50%",
                                  animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                                }}
                              />
                            );
                          })}
                          <div className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full gradient-brand -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-pink-500/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagonal separator */}
                {idx < solutions.length - 1 && (
                  <div className="mt-24 relative h-20 overflow-hidden opacity-20">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 1200 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 20 Q 300 50 600 20 T 1200 20 L 1200 0 L 0 0 Z"
                        fill="url(#grad)"
                        stroke="none"
                      />
                      <defs>
                        <linearGradient
                          id="grad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#ff0066" />
                          <stop offset="50%" stopColor="#ffbb33" />
                          <stop offset="100%" stopColor="#00ffff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </section>
            );
          })}
        </div>
        {/* Products */}
        <TechSections />
      </main>
    </>
  );
}
