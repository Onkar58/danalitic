"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Our team went from months of manual compliance reviews to a system that flags issues in real-time. The accuracy and speed have been transformational for our audit function.",
    author: "Sarah Chen",
    role: "Compliance Director, Global Financial Services",
  },
  {
    text: "They didn't just build a model—they built an entire system. The infrastructure, the monitoring, the documentation. It was a true partnership, and we shipped to production in half the time we expected.",
    author: "Marcus Rodriguez",
    role: "CTO, Manufacturing Company",
  },
  {
    text: "The personalization engine transformed our customer experience metrics. But what impressed me most was how they handled the transition and trained our team to maintain it.",
    author: "Jennifer Park",
    role: "VP Product, E-Commerce Retailer",
  },
]

export default function Testimonials() {
  const testimonialsEnhanced = testimonials.map((t, i) => ({
    ...t,
    rating: 5,
    color: [
      "from-blue-500/10 to-cyan-500/10",
      "from-orange-500/10 to-red-500/10",
      "from-emerald-500/10 to-teal-500/10",
    ][i],
  }))

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 glass">
            <p className="text-sm font-medium text-accent">Client Success</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Trusted by Enterprise <span className="gradient-text">Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsEnhanced.map((testimonial, i) => (
            <div
              key={i}
              className={`relative glass rounded-2xl p-8 md:p-10 border-accent/30 hover:border-accent/50 transition-all duration-300 overflow-hidden group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} pointer-events-none opacity-50 group-hover:opacity-75 transition-opacity`}
              />

              <div className="relative space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <div>
                  <p className="text-foreground text-lg leading-relaxed italic">"{testimonial.text}"</p>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
