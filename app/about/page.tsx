"use client";

import VerticalTimeline from "@/components/timeline";
import {
  Brain,
  Globe,
  Heart,
  Lightbulb,
  MapPin,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const values = [
    {
      icon: Shield,
      title: "Innovation with Integrity",
      description: "We build what matters, responsibly.",
    },
    {
      icon: TrendingUp,
      title: "Scalability with Simplicity",
      description: "Complex AI made accessible to every enterprise.",
    },
    {
      icon: Lightbulb,
      title: "Sustainability through Optimization",
      description: "Cloud efficiency is intelligence in action.",
    },
    {
      icon: Heart,
      title: "Human-Centric AI",
      description: "We design systems that empower people, not replace them.",
    },
  ];

  const locations = [
    "Pune",
    "Hyderabad",
    "USA Innovation Hub",
    "Remote Global Teams",
  ];

  return (
    <section className="relative overflow-hidden py-16 bg-muted dark:bg-background gradient-mesh">
      <div className="container mx-auto px-4">
        {/* Top Header – Strong Vertical-Line Presence */}
        <div
          className={`flex flex-col md:flex-row items-start gap-10 pb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-5"}`}
        >
          <div className="flex-1 border-l-4 border-primary pl-6">
            <p className="flex items-center gap-2 text-primary text-sm tracking-wider font-medium">
              <Brain className="w-4 h-4" /> ABOUT US
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-medium leading-tight gradient-text">
              Engineering Intelligence for the Real World
            </h1>
          </div>

          <p className="flex-1 md:text-lg text-muted-foreground">
            Danalitic merges AI, cloud scale, and human insight to build systems
            that understand, adapt, and optimize every interaction. Intelligence
            is not only processed here–it evolves here.
          </p>
        </div>

        {/* Vision Section – Curved container + floating lights */}
        <div
          className={`relative mx-auto max-w-4xl m-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-md border border-white/20 h-[350px] md:h-[450px] overflow-hidden relative">
            {/* Floating light blobs */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-primary/40 blur-3xl rounded-full animate-pulse-slow" />
              <div
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/40 blur-3xl rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-40 h-40 text-primary/40 animate-pulse-slow" />
            </div>
          </div>

          <p className="text-center mt-6 text-muted-foreground italic text-xl">
            Intelligence isn’t a feature. It is a foundation.
          </p>
        </div>

        {/* Who We Are */}
        <div
          className={`flex flex-col lg:flex-row gap-20 py-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-y-5"}`}
        >
          <div className="flex-1 flex flex-col items-start justify-center pr-4">
            <h2 className="text-2xl flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <span className="font-semibold">Who We Are</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Danalitic India Private Limited is a Pune-born AI engineering
              company focused on delivering real-world intelligence across
              industries including Healthcare, FinTech, Manufacturing, and
              Public Sector.
            </p>
          </div>

          <div className="flex-1">
            <VerticalTimeline />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="py-16 relative">
          {/* Mission */}
          <div
            className={`max-w-3xl mb-20 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
          >
            <h2 className="text-4xl font-medium flex items-center gap-3 mb-4">
              <Target className="w-10 h-10 text-primary" /> Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Craft AI platforms that learn, optimize, and evolve with every
              interaction.
            </p>
          </div>

          {/* Values – Converted into a radial grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {values.map((value, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl bg-card border hover:border-primary/40 transition-all group"
              >
                <div className="absolute -top-4 left-4 w-10 h-10 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <value.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Global Presence – Turned into badges */}
          <div
            className={`transition-all duration-700 delay-900 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="flex items-center gap-3 text-2xl font-medium mb-6">
              <MapPin className="w-7 h-7 text-primary" />
              Global Presence
            </h3>

            <div className="flex flex-wrap gap-4">
              {locations.map((loc, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-5 py-2 rounded-full border bg-card hover:border-primary/50 transition-all cursor-pointer"
                >
                  <Globe className="w-5 h-5 text-primary" />
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
