import Header from "@/components/header"
import Footer from "@/components/footer"
import { Lightbulb, Zap } from "lucide-react"

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative min-h-96 flex items-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-pink-200 opacity-5 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-balance">
                Empowering enterprises to make <span className="gradient-text">every byte intelligent</span>
              </h1>
              <p className="mt-6 text-xl text-muted leading-relaxed">
                We believe the future of computing lies in synergy — between human intuition, artificial intelligence,
                and cloud scale.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Who We Are</h2>
                <p className="text-muted leading-relaxed">
                  Founded in Pune, India, Danalitic India Private Limited is an AI-driven engineering company
                  specializing in large-scale AI systems, multi-cloud architecture, and quantum computing research.
                </p>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <p className="text-foreground leading-relaxed">
                  Our engineers, data scientists, and researchers combine decades of experience across AWS, Google
                  Cloud, and Microsoft Azure, crafting intelligent platforms for clients in Healthcare, FinTech,
                  Manufacturing, and Public Sector.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-4 rounded-lg border border-border bg-white/50">
                    <p className="font-heading font-semibold text-foreground mb-2">Global Presence</p>
                    <p className="text-sm text-muted">Pune | Hyderabad | USA Innovation Hub | Remote Teams</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-white/50">
                    <p className="font-heading font-semibold text-foreground mb-2">Founded</p>
                    <p className="text-sm text-muted">AI-driven engineering pioneers since inception</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          className="py-20 border-t border-border"
          style={{ background: "linear-gradient(to bottom right, rgba(255, 0, 102, 0.03), rgba(255, 187, 51, 0.03))" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="glass rounded-2xl p-8">
                <Lightbulb className="w-8 h-8 text-[#FF0066] mb-4" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                  Danalitic was founded to bridge the gap by delivering real intelligence across every cloud, every
                  model, and every interaction. We are pioneering the next era where AI, Cloud, and Quantum Computing
                  converge.
                </p>
              </div>
              <div className="glass rounded-2xl p-8">
                <Zap className="w-8 h-8 text-[#FFBB33] mb-4" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                  To craft intelligent AI platforms that not only analyze and automate — but adapt, optimize, and
                  evolve. We build systems that empower enterprises at every stage of their intelligence journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border-2 border-pink-200 hover:border-pink-400 hover:bg-pink-50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center text-white font-heading font-bold mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">Innovation with Integrity</h3>
                <p className="text-muted">
                  We build what matters, responsibly. Every solution is engineered with security, ethics, and long-term
                  impact in mind.
                </p>
              </div>
              <div className="p-8 rounded-2xl border-2 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-heading font-bold mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">Scalability with Simplicity</h3>
                <p className="text-muted">
                  Complex AI made accessible to every enterprise. We demystify cutting-edge technology and make it
                  production-ready.
                </p>
              </div>
              <div className="p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-heading font-bold mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Sustainability through Optimization
                </h3>
                <p className="text-muted">
                  Cloud efficiency is intelligence in action. We reduce waste, cost, and environmental impact through
                  smarter architecture.
                </p>
              </div>
              <div className="p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-heading font-bold mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">Human-Centric AI</h3>
                <p className="text-muted">
                  We design systems that empower people, not replace them. Every AI tool amplifies human creativity and
                  capability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
