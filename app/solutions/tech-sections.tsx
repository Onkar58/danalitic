"use client";
import React, { useState } from "react";
import {
  Zap,
  Cloud,
  Bot,
  Atom,
  Heart,
  DollarSign,
  Factory,
  ShoppingBag,
  Building2,
  Briefcase,
} from "lucide-react";

export default function TechSections() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const products = [
    {
      name: "Danalitic RAG Engine",
      tag: "RAG",
      color: "from-pink-500 to-orange-500",
      icon: Zap,
      desc: "Context-aware retrieval engine that integrates vector databases and knowledge graphs for superior LLM grounding.",
    },
    {
      name: "Cloud Save Optimizer",
      tag: "FinOps",
      color: "from-cyan-400 to-blue-500",
      icon: Cloud,
      desc: "AI-driven FinOps suite reducing cloud waste by up to 40% across AWS, Azure, and GCP.",
    },
    {
      name: "Agentic Fabric",
      tag: "Agents",
      color: "from-yellow-400 to-orange-500",
      icon: Bot,
      desc: "Framework for designing autonomous, explainable, and collaborative AI agents.",
    },
    {
      name: "Quantum Lab",
      tag: "Quantum",
      color: "from-purple-500 to-fuchsia-500",
      icon: Atom,
      desc: "Research sandbox connecting quantum simulators with classical ML pipelines.",
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      gradient: "from-pink-500/20 to-red-500/20",
      desc: "Clinical document intelligence, ICD-10 coding assistants, privacy-preserving analytics.",
    },
    {
      name: "Finance",
      icon: DollarSign,
      gradient: "from-green-500/20 to-emerald-500/20",
      desc: "Fraud detection, compliance automation, real-time risk scoring.",
    },
    {
      name: "Manufacturing",
      icon: Factory,
      gradient: "from-blue-500/20 to-indigo-500/20",
      desc: "Predictive maintenance, digital twin analytics, production optimization.",
    },
    {
      name: "Retail & eCommerce",
      icon: ShoppingBag,
      gradient: "from-purple-500/20 to-pink-500/20",
      desc: "Demand forecasting, personalized search, recommendation engines.",
    },
    {
      name: "Public Sector",
      icon: Building2,
      gradient: "from-cyan-500/20 to-blue-500/20",
      desc: "Secure hybrid cloud modernization and AI-driven governance.",
    },
    {
      name: "Enterprise SaaS",
      icon: Briefcase,
      gradient: "from-orange-500/20 to-yellow-500/20",
      desc: "Embedded AI capabilities, product differentiation, competitive advantage.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Proprietary Products - Terminal/CLI Inspired */}
      <section className="py-20 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 mb-4">
              <span className="text-xs font-mono text-pink-500">
                PROPRIETARY_TECH
              </span>
            </div>
            <h2 className="text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">Enterprise AI Arsenal</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Battle-tested frameworks and engines powering next-gen intelligent
              systems
            </p>
          </div>

          {/* Terminal-style product showcase */}
          <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="bg-gradient-to-r from-muted/30 to-muted/10 px-6 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-4">
                ~/products/proprietary
              </span>
            </div>

            <div className="grid lg:grid-cols-5 divide-x divide-border">
              {/* Sidebar navigation */}
              <div className="lg:col-span-2 p-6 bg-muted/5">
                <div className="space-y-2">
                  {products.map((product, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveProduct(i)}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 group ${
                        activeProduct === i
                          ? "bg-gradient-to-r " +
                            product.color +
                            " text-white shadow-lg scale-105"
                          : "hover:bg-muted/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <product.icon
                          className={`w-6 h-6 ${activeProduct === i ? "text-white" : "text-foreground"}`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`font-mono text-xs px-2 py-0.5 rounded ${
                                activeProduct === i
                                  ? "bg-white/20 text-white"
                                  : "bg-muted/30 text-muted-foreground"
                              }`}
                            >
                              {product.tag}
                            </span>
                          </div>
                          <div
                            className={`font-heading font-bold text-sm truncate ${
                              activeProduct === i
                                ? "text-white"
                                : "text-foreground"
                            }`}
                          >
                            {product.name}™
                          </div>
                        </div>
                        <div
                          className={`transition-transform duration-300 ${
                            activeProduct === i
                              ? "rotate-90 text-white"
                              : "text-muted"
                          }`}
                        >
                          ▶
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content display */}
              <div className="lg:col-span-3 p-8">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      {React.createElement(products[activeProduct].icon, {
                        className: "w-10 h-10 text-foreground",
                      })}
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground">
                          {products[activeProduct].name}™
                        </h3>
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-mono mt-1 bg-gradient-to-r ${products[activeProduct].color} text-white`}
                        >
                          {products[activeProduct].tag}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {products[activeProduct].desc}
                    </p>
                  </div>

                  {/* Code-like feature display */}
                  <div className="flex-1 bg-muted/10 rounded-xl p-6 font-mono text-sm border border-border">
                    <div className="space-y-2">
                      <div className="text-green-500">
                        <span className="text-muted-foreground">$</span>{" "}
                        initialize --product=
                        {products[activeProduct].tag.toLowerCase()}
                      </div>
                      <div className="text-cyan-400 pl-4">
                        ✓ Framework loaded successfully
                      </div>
                      <div className="text-cyan-400 pl-4">
                        ✓ Dependencies resolved
                      </div>
                      <div className="text-cyan-400 pl-4">
                        ✓ Ready for production deployment
                      </div>
                      <div className="text-muted-foreground pl-4 mt-4">
                        → Performance:{" "}
                        <span className="text-green-500">Optimal</span>
                      </div>
                      <div className="text-muted-foreground pl-4">
                        → Scalability:{" "}
                        <span className="text-green-500">Enterprise-grade</span>
                      </div>
                      <div className="text-muted-foreground pl-4">
                        → Status:{" "}
                        <span className="text-green-500 animate-pulse">
                          ● Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Neural Network Inspired */}
      <section className="py-20 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
              <span className="text-xs font-mono text-cyan-500">
                SECTOR_COVERAGE
              </span>
            </div>
            <h2 className="text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">Industries We Power</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Deploying AI across critical sectors with domain-specific
              intelligence
            </p>
          </div>

          {/* Hexagonal grid layout */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndustry(i)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  className="group relative"
                >
                  {/* Connection lines effect */}
                  <div className="absolute inset-0 -z-10">
                    {hoveredIndustry === i && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} blur-xl animate-pulse`}
                      ></div>
                    )}
                  </div>

                  <div
                    className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-500 ${
                      hoveredIndustry === i
                        ? "border-pink-500 bg-gradient-to-br " +
                          industry.gradient +
                          " shadow-2xl scale-105 -translate-y-2"
                        : "border-border bg-card hover:border-border/60"
                    }`}
                  >
                    {/* Neural node indicator */}
                    <div className="absolute -top-3 -right-3">
                      <div
                        className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                          hoveredIndustry === i
                            ? "bg-pink-500 border-pink-300 animate-pulse"
                            : "bg-muted border-border"
                        }`}
                      ></div>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`text-4xl transition-transform duration-500 ${
                          hoveredIndustry === i
                            ? "scale-110 animate-bounce"
                            : ""
                        }`}
                      >
                        {industry.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                          {industry.name}
                        </h3>
                        <div
                          className={`h-1 w-12 rounded-full transition-all duration-500 ${
                            hoveredIndustry === i
                              ? "w-24 bg-gradient-to-r from-pink-500 to-orange-500"
                              : "bg-muted"
                          }`}
                        ></div>
                      </div>
                    </div>

                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        hoveredIndustry === i ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {industry.desc}
                    </p>

                    {/* Tech stack indicators */}
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {["AI", "ML", "GenAI"].map((tech, j) => (
                        <span
                          key={j}
                          className={`px-2 py-1 rounded text-xs font-mono transition-all duration-300 ${
                            hoveredIndustry === i
                              ? "bg-white/20 text-foreground border border-white/30"
                              : "bg-muted/30 text-muted-foreground"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Deployment indicator */}
                    <div
                      className={`absolute bottom-4 right-4 transition-opacity duration-300 ${
                        hoveredIndustry === i ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex items-center gap-1 text-xs font-mono text-green-500">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Active
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Neural network visualization overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none -z-10"
              style={{ opacity: 0.1 }}
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ff0066" />
                  <stop offset="100%" stopColor="#00ffff" />
                </linearGradient>
              </defs>
              {hoveredIndustry !== null &&
                industries.map((_, i) => {
                  if (i !== hoveredIndustry) {
                    return (
                      <line
                        key={i}
                        x1={`${(hoveredIndustry % 3) * 33 + 16}%`}
                        y1={`${Math.floor(hoveredIndustry / 3) * 50 + 25}%`}
                        x2={`${(i % 3) * 33 + 16}%`}
                        y2={`${Math.floor(i / 3) * 50 + 25}%`}
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    );
                  }
                  return null;
                })}
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
