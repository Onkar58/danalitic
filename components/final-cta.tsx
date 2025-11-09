import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="space-y-8">
          {/* Headline */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 glass">
              <p className="text-sm font-medium text-accent">Let's Build Together</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Ready to Transform Your Business with <span className="gradient-text">AI?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-balance">
              Whether you're exploring generative AI for the first time or scaling an existing ML initiative, we're here
              to guide you from strategy to production.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 justify-center group"
            >
              Start Your AI Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border border-accent/30 text-foreground rounded-lg font-semibold hover:border-accent hover:bg-accent/5 transition-all duration-300 glass"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust statement */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              Trusted by leading enterprises across 6+ industries. Let's discuss your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
