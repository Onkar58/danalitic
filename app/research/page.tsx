import { BookOpen, Lightbulb, Users } from "lucide-react";

export default function Research() {
  return (
    <>
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative min-h-96 flex items-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-200 opacity-3 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-balance mb-6">
              Innovation at the{" "}
              <span className="gradient-text">Edge of Intelligence</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              Danalitic AI Labs advances LLMs, Agentic AI, and Quantum-Enhanced
              Intelligence through cutting-edge research and community
              collaboration.
            </p>
          </div>
        </section>

        {/* Research Pillars */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-8">
                <BookOpen className="w-8 h-8 text-[#FF0066] mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Open Research
                </h3>
                <p className="text-muted mb-4">
                  Publishing findings on RAG performance, agent orchestration,
                  and QML models.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF0066]">→</span>
                    <span className="text-foreground">
                      RAG Architecture Papers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF0066]">→</span>
                    <span className="text-foreground">
                      Agent Orchestration Frameworks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF0066]">→</span>
                    <span className="text-foreground">Quantum ML Models</span>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-8">
                <Users className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Community Engagement
                </h3>
                <p className="text-muted mb-4">
                  Hackathons with AI Pune and GDG Cloud Pune to foster
                  innovation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span className="text-foreground">AI Pune Hackathons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span className="text-foreground">
                      GDG Cloud Collaborations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span className="text-foreground">Developer Workshops</span>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-8">
                <Lightbulb className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Innovation Grants
                </h3>
                <p className="text-muted mb-4">
                  Collaborations with IITs and ISRO Labs on quantum-inspired ML.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    <span className="text-foreground">
                      IIT Research Partnerships
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    <span className="text-foreground">
                      ISRO Labs Collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    <span className="text-foreground">Academic Funding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Research */}
        <section
          className="py-20 border-t border-border"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 0, 102, 0.03), rgba(255, 187, 51, 0.03))",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-12">
              Featured Research Areas
            </h2>
            <div className="space-y-6">
              <div className="p-8 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:bg-pink-50 transition-all duration-300">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Large Language Models & RAG
                </h3>
                <p className="text-muted">
                  Advanced retrieval-augmented generation for enterprise
                  knowledge systems.
                </p>
              </div>
              <div className="p-8 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Agentic AI & Multi-Agent Systems
                </h3>
                <p className="text-muted">
                  Autonomous agents that reason, plan, and execute in complex
                  enterprise workflows.
                </p>
              </div>
              <div className="p-8 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Quantum-Enhanced Machine Learning
                </h3>
                <p className="text-muted">
                  Exploring hybrid classical-quantum approaches for optimization
                  and prediction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
