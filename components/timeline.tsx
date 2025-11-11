"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Cpu, Zap } from "lucide-react";
import React from "react";

const timelineData = [
  {
    icon: Brain,
    title: "Large-Scale AI & Machine Learning Systems",
    description:
      "Building and deploying enterprise-grade AI systems with advanced machine learning capabilities at scale. Optimize model performance and handle massive datasets efficiently.",
    iconColor: "text-pink-500 group-hover:text-orange-500",
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Architecture & FinOps Optimization",
    description:
      "Architecting cloud-native solutions across multiple providers while optimizing costs and performance. Implement best practices for cloud financial operations.",
    iconColor: "text-blue-500 group-hover:text-cyan-400",
  },
  {
    icon: Cpu,
    title: "Autonomous AI Agents & Conversational Frameworks",
    description:
      "Developing intelligent autonomous agents with natural language understanding and adaptive learning. Create sophisticated conversational experiences at scale.",
    iconColor: "text-orange-500 group-hover:text-amber-400",
  },
  {
    icon: Zap,
    title: "Quantum Computing & Hybrid AI Research",
    description:
      "Exploring cutting-edge quantum algorithms and hybrid classical-quantum AI architectures. Pioneer the future of computational intelligence.",
    iconColor: "text-violet-500 group-hover:text-fuchsia-400",
  },
];

const VerticalTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -90,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          className="mx-auto flex flex-col items-center justify-star gap-16 text-center sm:max-w-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === timelineData.length - 1;
            console.log({ icon: item.title, isLast });

            return (
              <React.Fragment key={index}>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-start w-full gap-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    variants={iconVariants}
                    className={`flex size-8 items-center justify-center rounded-full ${item.iconColor} transition-shadow duration-300`}
                  >
                    <Icon className="size-8 " aria-hidden="true" />
                  </motion.span>

                  <motion.h2
                    className="my-2 text-xl font-medium text-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.title}
                  </motion.h2>
                </motion.div>

                {
                  // <motion.span
                  //   // variants={lineVariants}
                  //   className="my-3 h-36 w-[2px] origin-top"
                  //   style={{
                  //     backgroundImage:
                  //       "linear-gradient(to bottom, red, rgba(0, 0, 0, 0) 0%)",
                  //     backgroundPosition: "left",
                  //     backgroundSize: "3px 15px",
                  //     backgroundRepeat: "repeat-y",
                  //   }}
                  // />
                }
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalTimeline;
