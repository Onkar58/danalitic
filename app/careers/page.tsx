"use client";

import { motion } from "framer-motion";
import {
  Atom,
  BookOpen,
  BrainCircuit,
  Building2,
  Rocket,
  Trophy,
} from "lucide-react";

export default function Careers() {
  const roles = [
    {
      title: "AI Engineer (LLM / RAG / Agents)",
      level: "Senior/Mid",
      icon: BrainCircuit,
    },
    { title: "Cloud FinOps Architect", level: "Senior", icon: Building2 },
    {
      title: "Data Scientist (NLP / ML Ops)",
      level: "Mid/Junior",
      icon: BookOpen,
    },
    { title: "Quantum Research Intern", level: "Intern", icon: Atom },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-pink-200 opacity-5 blur-3xl animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-balance mb-6">
            Join the{" "}
            <span className="gradient-text">Intelligence Revolution</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            We're building systems that define the next decade of AI. If you're
            passionate about deep learning, cloud engineering, or quantum
            computation — Danalitic is where you belong.
          </p>
        </div>
      </section>

      {/* ---------------------------- */}
      {/* Modern Culture Section       */}
      {/* ---------------------------- */}

      <section className="py-32 border-t border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200 blur-[120px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200 blur-[120px] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-20"
          >
            Our Culture
          </motion.h2>

          {/* Modern alternating layout */}
          <div className="space-y-4 sm:space-y-16 grid sm:grid-cols-2 items-start gap-6 sm:gap-16">
            {[
              {
                title: "Hybrid Workplace",
                desc: "Work flexibly from Pune, Hyderabad, USA — or fully remote. We trust our team.",
                icon: Building2,
                color: "text-pink-500",
              },
              {
                title: "Continuous Learning",
                desc: "AWS, GCP, and Azure certifications. Access to global research libraries.",
                icon: BookOpen,
                color: "text-amber-500",
              },
              {
                title: "Innovation-First",
                desc: "Work on LLMs, distributed cloud, agentic systems, and quantum pipelines.",
                icon: Rocket,
                color: "text-cyan-500",
              },
              {
                title: "Competitive Benefits",
                desc: "Great salary, equity tracks, international travel, and health insurance.",
                icon: Trophy,
                color: "text-purple-500",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Text */}
                  <div className="flex items-center gap-4 mb-4 ">
                    <div
                      className={`shrink-0 size-8 sm:size-14 rounded-md sm:rounded-xl flex items-center justify-center bg-white shadow-sm ${item.color}`}
                    >
                      <Icon className="size-4 sm:size-7" />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-heading font-bold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted text-lg">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------- */}
      {/* Modern Open Roles Section    */}
      {/* ---------------------------- */}

      <section
        className="py-32 border-t border-border relative"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(255, 0, 102, 0.03), rgba(255, 187, 51, 0.03))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-20"
          >
            Open Roles
          </motion.h2>

          {/* Modern Role List — NOT cards */}
          <div className="space-y-10">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group flex items-center justify-between py-6 px-4 border-b border-border cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl gradient-button flex items-center justify-center text-white shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">
                        {role.title}
                      </h3>
                      <p className="text-muted">{role.level} Level</p>
                    </div>
                  </div>

                  <motion.span
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-[#FF0066] text-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                  >
                    →
                  </motion.span>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-3xl bg-white/60 backdrop-blur-xl border border-border text-center shadow-xl"
          >
            <p className="text-foreground mb-6 text-lg">
              Don't see a perfect fit? We're always looking for talented
              engineers.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 gradient-button text-white rounded-xl font-medium hover:shadow-xl hover:shadow-pink-300 transition-all duration-300"
            >
              Send Us Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
