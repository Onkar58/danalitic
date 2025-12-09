"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCta() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-32 gradient-mesh overflow-hidden">
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-primary/30 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-primary/30 rounded-br-xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-heading transition-all duration-700 ${mounted ? "opacity-90 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Ready to transform your enterprise?
        </h2>

        <p
          className={`text-gray-800 mb-12 text-lg font-sans transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          No sales scripts — speak directly with our engineering teams.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 gradient-button text-sm font-semibold tracking-wide rounded-lg hover:opacity-90 transition-opacity"
          >
            Talk to Our Engineers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-black/20 text-gray-900 text-sm font-semibold tracking-wide rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
