import { BookOpen, Briefcase, Zap } from "lucide-react";

export default function Careers() {
  const roles = [
    {
      title: "AI Engineer (LLM / RAG / Agents)",
      level: "Senior/Mid",
      icon: Zap,
    },
    { title: "Cloud FinOps Architect", level: "Senior", icon: Briefcase },
    {
      title: "Data Scientist (NLP / ML Ops)",
      level: "Mid/Junior",
      icon: BookOpen,
    },
    { title: "Quantum Research Intern", level: "Intern", icon: Zap },
  ];

  return (
    <>
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
              We're building systems that define the next decade of AI. If
              you're passionate about deep learning, cloud engineering, or
              quantum computation — Danalitic is where you belong.
            </p>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-12">
              Our Culture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center text-white font-heading font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Hybrid Workplace
                </h3>
                <p className="text-muted">
                  Work flexibly from our offices in Pune, Hyderabad, or USA, or
                  fully remote. We trust our team.
                </p>
              </div>
              <div className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-heading font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Continuous Learning
                </h3>
                <p className="text-muted">
                  AWS, GCP, and Azure certification support. Access to
                  cutting-edge research and training programs.
                </p>
              </div>
              <div className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-heading font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Innovation-First Mindset
                </h3>
                <p className="text-muted">
                  Your ideas matter. Collaborate on cutting-edge projects that
                  push the boundaries of AI and cloud.
                </p>
              </div>
              <div className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-heading font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Competitive Benefits
                </h3>
                <p className="text-muted">
                  Competitive salary, health insurance, professional
                  development, and equity opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section
          className="py-20 border-t border-border"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 0, 102, 0.03), rgba(255, 187, 51, 0.03))",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-12">
              Open Roles
            </h2>
            <div className="grid gap-6">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <div
                    key={i}
                    className="group p-6 rounded-xl border-2 border-border hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center text-white flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground">
                          {role.title}
                        </h3>
                        <p className="text-sm text-muted mt-1">
                          {role.level} Level
                        </p>
                      </div>
                    </div>
                    <div className="text-[#FF0066] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-white/50 border-2 border-border text-center">
              <p className="text-foreground mb-4">
                Don't see a perfect fit? We're always looking for talented
                engineers.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 gradient-brand text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-300 transition-all duration-300"
              >
                Send Us Your Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
