import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    num: "1",
    title: "Strategy & Discovery",
    desc: "Understand business objectives, existing infrastructure, and success metrics.",
  },
  {
    num: "2",
    title: "Architecture & Design",
    desc: "Design scalable architecture and create detailed technical specifications.",
  },
  {
    num: "3",
    title: "Prototype & Validation",
    desc: "Build proof-of-concept with your real data to validate assumptions.",
  },
  {
    num: "4",
    title: "Development & Training",
    desc: "Develop production-grade code, train models, and build robust infrastructure.",
  },
  {
    num: "5",
    title: "Deployment & Optimization",
    desc: "Deploy to production with comprehensive monitoring and optimization.",
  },
  { num: "6", title: "Handoff & Support", desc: "Transfer knowledge to your team and provide ongoing support." },
]

export default function Process() {
  const stepsWithIcons = steps.map((step, i) => ({
    ...step,
    icon: ["🎯", "🏗️", "🔬", "⚙️", "🚀", "📚"][i],
  }))

  return (
    <section id="process" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 glass">
            <p className="text-sm font-medium text-primary">Our Process</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            From Vision to <span className="gradient-text">Production</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-accent/30 to-primary/0 transform -translate-x-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stepsWithIcons.map((step, i) => (
              <div key={i} className={`relative ${i % 2 === 1 && i < 4 ? "lg:mt-12" : ""}`}>
                <div className="glass rounded-2xl p-8 border-accent/20 hover:border-accent/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl font-bold text-accent/20">{step.num}</span>
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2 text-accent text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Enterprise Ready</span>
                    </div>
                  </div>
                </div>

                {i < stepsWithIcons.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-accent/30 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
