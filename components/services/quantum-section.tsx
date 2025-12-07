"use client";

import { useState } from "react";
import { Atom, Cpu, Zap, GraduationCap, ChevronRight } from "lucide-react";
import { NodeMesh } from "@/components/ui/node-mesh";

const services = [
  {
    icon: Cpu,
    title: "Quantum-ML Fusion",
    short: "Testing ML models enhanced by quantum computing.",
    detail:
      "Testing ML models enhanced by quantum computing for optimization, simulation, and molecular search.",
  },
  {
    icon: Zap,
    title: "Quantum-Inspired Algorithms",
    short: "Quantum-level performance on classical hardware.",
    detail:
      "Achieve quantum-level performance using classical hardware for logistics, routing, and portfolio optimization.",
  },
  {
    icon: Atom,
    title: "Hybrid Classical–Quantum Systems",
    short: "Split workloads between classical and quantum.",
    detail:
      "Split workloads intelligently — classical for scale, quantum for complexity — to accelerate computation.",
  },
  {
    icon: GraduationCap,
    title: "Quantum Research Partnerships",
    short: "Co-innovation with academia and research institutions.",
    detail:
      "Co-innovation with academia and research institutions to explore frontier breakthroughs.",
  },
];

export function QuantumSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="quantum"
      className="relative py-24 bg-[#0C0C0C] overflow-hidden"
    >
      <NodeMesh />

      {/* Violet glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/20 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
            <Atom className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-white">
              Quantum Computing & AI Fusion
            </h2>
            <p className="text-gray-400">
              Exploring the frontiers of computation.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-4">
                <service.icon className="h-5 w-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    {service.title}
                    <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-[#8B5CF6] group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {hoveredIndex === index ? service.detail : service.short}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
