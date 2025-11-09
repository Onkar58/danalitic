"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(104, 211, 255, 0.05) 25%, rgba(104, 211, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(104, 211, 255, 0.05) 75%, rgba(104, 211, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(104, 211, 255, 0.05) 25%, rgba(104, 211, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(104, 211, 255, 0.05) 75%, rgba(104, 211, 255, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px",
          animation: "gridShift 12s ease-in-out infinite alternate",
        }}
      />

      <div className="  relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Copy */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 glass">
                <p className="text-sm font-medium text-accent">
                  Enterprise AI at Scale
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                AI That <span className="gradient-text">Transforms</span>{" "}
                Business
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground text-balance">
                Deploy production-grade AI systems that integrate seamlessly
                into your enterprise infrastructure. From strategy to scale.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 group"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 border border-accent/30 text-foreground rounded-lg font-semibold hover:border-accent hover:bg-accent/5 transition-all duration-300 glass"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border/50">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">
                  50+
                </p>
                <p className="text-sm text-muted-foreground">
                  Production Systems
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">6</p>
                <p className="text-sm text-muted-foreground">
                  Industries Served
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">
                  $100M+
                </p>
                <p className="text-sm text-muted-foreground">
                  Client Value Created
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Visual element with glassmorphism */}
          <div className="relative hidden md:flex items-center justify-center h-full">
            <div className="absolute inset-0 rounded-3xl glass overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

              {/* Animated orbs */}
              <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
              <div className="absolute bottom-32 left-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-float animation-delay-2000" />

              {/* Content inside */}
              <div className="relative h-96 flex flex-col items-center justify-center gap-4 p-8">
                <div className="text-center space-y-4">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                    Neural Network Processing
                  </p>
                  <div className="space-y-2">
                    <div
                      className="h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"
                      style={{
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <div
                      className="h-1 bg-gradient-to-r from-accent/40 to-accent rounded-full"
                      style={{
                        width: "60%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <div
                      className="h-1 bg-gradient-to-r from-primary/30 to-primary rounded-full"
                      style={{
                        width: "70%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z"
            fill="var(--color-card)"
            opacity="0.3"
          />
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="var(--color-card)"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
