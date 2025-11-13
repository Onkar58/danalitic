"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Cpu, Globe, Users, Zap } from "lucide-react";

const researchItems = [
  {
    id: "rag",
    title: "RAG Performance",
    subtitle: "Retrieval-augmented generation experiments",
    desc: "Benchmarks, retrieval strategies, and cost/latency trade-offs for LLM RAG pipelines.",
    icon: BookOpen,
  },
  {
    id: "agents",
    title: "Agent Orchestration",
    subtitle: "Multi-agent workflows & safety",
    desc: "Design patterns, failure modes, and reward shaping for agentic AI systems.",
    icon: Users,
  },
  {
    id: "qml",
    title: "Quantum ML",
    subtitle: "Quantum-inspired & hybrid models",
    desc: "Prototyping QML algorithms, simulator experiments and classical-quantum hybrids.",
    icon: Cpu,
  },
  {
    id: "open",
    title: "Open Research",
    subtitle: "Papers & Reproducibility",
    desc: "Publication-ready artifacts, reproducible notebooks and community datasets.",
    icon: Globe,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground gradient-mesh scroll-smooth">
      {/* HERO */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="inline-flex items-center uppercase text-sm tracking-wider text-muted">
              Research / Quantum
            </p>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight gradient-text">
              Research & Innovation
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Danalitic AI Labs — advancing LLMs, Agentic AI, and
              Quantum-Enhanced Intelligence. Open research, community
              collaborations, and innovation grants powering the future of
              generative AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="glass inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium gradient-button"
                href="#open-research"
              >
                <Zap className="w-4 h-4" />
                View Initiatives
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium border border-border hover:shadow-md"
                href="#collab"
              >
                <Award className="w-4 h-4 text-primary" />
                Partnerships & Grants
              </motion.a>
            </div>
          </motion.header>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden glass animate-float">
              <div className="absolute inset-0 gradient-mesh" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    Quantum-inspired Experiments
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    Hybrid simulations, model introspection, and reproducible
                    notebooks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Research */}
      <section id="open-research" className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Open Research Initiatives
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Publishing findings on RAG performance, agent orchestration, and
                QML models.
              </p>
            </div>

            <div className="hidden md:flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-border hover:bg-input transition">
                View papers
              </button>
              <button className="px-4 py-2 rounded-lg border border-border hover:bg-input transition">
                Datasets
              </button>
            </div>
          </div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {researchItems.map((r) => (
              <motion.article
                key={r.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-input border border-border">
                    <r.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {r.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">{r.desc}</p>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    className="text-sm font-medium text-primary underline"
                    href="#"
                  >
                    Read more
                  </a>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="px-3 py-1 rounded-md gradient-button text-white text-sm font-semibold"
                  >
                    Open Lab
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaboration */}
      <section id="collab" className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Community & Collaboration
              </h3>
              <p className="mt-3 text-muted-foreground">
                Hackathons with AI Pune and GDG Cloud Pune. Community-first
                approach to reproducible research and ecosystem-building.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Badge icon={Users} label="Hackathons" />
                  <Badge icon={Globe} label="Community" />
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <Badge icon={Award} label="IIT / ISRO Collaborations" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <h4 className="text-lg font-semibold text-foreground">
                Innovation Grants & Programs
              </h4>
              <div className="mt-4 overflow-x-auto py-3">
                <div className="flex gap-4 min-w-[720px]">
                  {[
                    {
                      title: "Quantum-Inspired ML Grant",
                      org: "IIT Collaboration",
                    },
                    { title: "Agentic Systems Seed", org: "Internal" },
                    { title: "Open Datasets Fellowship", org: "Community" },
                  ].map((g, idx) => (
                    <motion.div
                      whileHover={{ y: -4 }}
                      key={idx}
                      className="glass p-5 rounded-2xl min-w-[220px]"
                    >
                      <h5 className="font-semibold">{g.title}</h5>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Partner: {g.org}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <a className="text-sm text-primary underline" href="#">
                          Apply
                        </a>
                        <span className="text-xs text-muted-foreground">
                          Open
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Badge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 bg-input px-3 py-2 rounded-lg border border-border">
      <Icon className="w-5 h-5 text-primary" />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}
