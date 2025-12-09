"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { NodeMesh } from "../ui/node-mesh";

export function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
      <NodeMesh />
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF0066]/10 to-[#FFBB33]/5 blur-3xl transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00FFFF]/8 to-[#FF0066]/5 blur-3xl transition-all duration-1000 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        />

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255, 0, 102, 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            className={`transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
          >
            <animate
              attributeName="x1"
              from="-100%"
              to="200%"
              dur="8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              from="0%"
              to="300%"
              dur="8s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="0"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            className={`transition-opacity duration-1000 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
          >
            <animate
              attributeName="x1"
              from="-100%"
              to="200%"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              from="0%"
              to="300%"
              dur="10s"
              repeatCount="indefinite"
            />
          </line>
        </svg>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground transition-all duration-700 font-heading ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Engineering Intelligence
          <br />
          <span className="gradient-text">for the Real World</span>
        </h1>

        <p
          className={`mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Transform your data into actionable intelligence — scalable, reliable,
          and ethical.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-3 px-8 py-4 gradient-button text-white text-sm font-semibold tracking-wide rounded-lg hover:opacity-90 transition-opacity"
          >
            See Our Solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground text-sm font-semibold tracking-wide rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
