"use client";

import { Atom, Bot, Brain, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: <Brain />,
    title: "AI & LLM Innovation",
    description:
      "Build, fine-tune, and deploy large language models (LLMs), Retrieval-Augmented Generation (RAG), and reasoning agents tailored to your business.",
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    iconColor: "text-pink-500 group-hover:text-orange-500",
  },
  {
    icon: <Cloud />,
    title: "Hybrid Cloud Expertise",
    description:
      "We integrate AWS, Azure, and GCP into one seamless infrastructure with up to 40% cloud cost savings.",
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    iconColor: "text-blue-500 group-hover:text-cyan-400",
  },
  {
    icon: <Bot />,
    title: "Agentic AI Systems",
    description:
      "Develop autonomous, explainable, multi-agent frameworks that reason, plan, and act in complex enterprise workflows.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    iconColor: "text-orange-500 group-hover:text-amber-400",
  },
  {
    icon: <Atom />,
    title: "Quantum Intelligence",
    description:
      "Pioneering research at the intersection of AI and Quantum computing to drive next-generation optimization and prediction.",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    iconColor: "text-violet-500 group-hover:text-fuchsia-400",
  },
];

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative px-6 pb-20 md:pb-10 lg:px-10 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="bg-border absolute left-0 right-0 top-0 h-px md:hidden" />

      <div className="bg-background relative -mt-6 mb-10 flex aspect-square w-12 items-center justify-center rounded-lg ring-1 ring-border md:-mt-10 md:mb-10 md:w-20 overflow-hidden">
        <div
          className={`absolute inset-0 rounded-lg opacity-20 transition-opacity duration-300 group-hover:opacity-40 bg-gradient-to-br ${feature.gradient}`}
        />

        <span
          className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${feature.iconColor}`}
        >
          {feature.icon}
        </span>
      </div>

      {/* Copy */}
      <div>
        <h3
          className={`mb-3 max-w-[14rem] text-lg font-semibold tracking-tight md:mb-4 md:text-2xl lg:mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text transition-all duration-300 text-foreground/90 group-hover:text-transparent`}
        >
          {feature.title}
        </h3>
        <p className="text-foreground leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
};

export default function DanalyticFeatures() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.1 },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative p-16 ">
      <div className="container relative z-10 mx-auto flex flex-col space-y-14">
        {/* Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-4xl px-6 text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
            We Engineer <span className="gradient-text">Intelligence </span>{" "}
            that <span className="gradient-text"> Performs</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
            Our platforms bring together AI + Cloud + Quantum to deliver
            measurable business value—faster, safer, and more cost-efficiently
            than ever before.
          </p>
        </div>

        {/* Grid */}
        <div className="relative mt-6 md:mt-10">
          <div className="bg-border left-0 right-0 top-0 h-px" />
          <div className="divide-border grid md:grid-cols-4 md:divide-x">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
          <div className="bg-border absolute bottom-0 left-0 right-0 h-px" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
