"use client";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Cloud,
  Cpu,
  Network,
  Sparkles,
  Bot,
  LineChart,
  Lock,
  Zap,
  GitBranch,
  Container,
} from "lucide-react";
import Link from "next/link";

export const CTA = () => {
  const leftIcons = [
    {
      Icon: Brain,
      position: "bottom-4 left-24",
      scale: 1,
      delay: 0,
      color: "text-primary",
    },
    {
      Icon: Database,
      position: "bottom-24 left-20",
      scale: 0.6,
      delay: 0.1,
      color: "text-secondary",
    },
    {
      Icon: Cloud,
      position: "bottom-28 right-44",
      scale: 1,
      delay: 0.2,
      color: "text-accent",
    },
    {
      Icon: Cpu,
      position: "bottom-7 right-44",
      scale: 0.6,
      delay: 0.3,
      color: "text-primary",
    },
    {
      Icon: Network,
      position: "bottom-1 right-24",
      scale: 1,
      delay: 0.4,
      color: "text-secondary",
    },
    {
      Icon: Sparkles,
      position: "-bottom-5 right-0",
      scale: 0.6,
      delay: 0.5,
      color: "text-accent",
    },
  ];

  const rightIcons = [
    {
      Icon: Bot,
      position: "bottom-4 right-24",
      scale: 1,
      delay: 0.6,
      color: "text-primary",
    },
    {
      Icon: LineChart,
      position: "bottom-24 right-20",
      scale: 0.6,
      delay: 0.7,
      color: "text-accent",
    },
    {
      Icon: Lock,
      position: "bottom-28 left-44",
      scale: 1,
      delay: 0.8,
      color: "text-secondary",
    },
    {
      Icon: Zap,
      position: "bottom-7 left-44",
      scale: 0.6,
      delay: 0.9,
      color: "text-primary",
    },
    {
      Icon: GitBranch,
      position: "bottom-1 left-24",
      scale: 1,
      delay: 1.0,
      color: "text-accent",
    },
    {
      Icon: Container,
      position: "-bottom-5 left-0",
      scale: 0.6,
      delay: 1.1,
      color: "text-secondary",
    },
  ];

  const IconCircle = ({ Icon, position, scale, delay, color }: any) => (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: [scale, scale * 1.1, scale],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 0.5, delay },
        scale: {
          duration: 2,
          delay: delay + 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className={`absolute ${position} flex items-center justify-center rounded-full border border-border bg-card p-4 shadow-lg`}
      style={{ transform: `scale(${scale})` }}
    >
      <Icon className={`w-8 h-8 ${color}`} />
    </motion.span>
  );

  return (
    <section className="overflow-hidden py-32 bg-background gradient-mesh">
      <div className="container relative mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center text-4xl font-heading font-semibold lg:text-6xl/16"
        >
          Ready to build your <br />{" "}
          <span className="gradient-text">intelligent future?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-center text-lg text-muted-foreground lg:mt-10"
        >
          Partner with Danalitic to create scalable, compliant, and cloud-native
          AI systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mt-8 flex justify-center lg:mt-16"
        >
          <Link href="contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all hover:opacity-90 h-12 rounded-lg px-8 shadow-lg hover:shadow-xl gradient-button"
            >
              Schedule a Strategy Call
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Icons Background */}
        <div className="inset-0 -z-10 flex justify-center lg:absolute">
          <div className="relative -top-8 flex justify-between sm:-top-20 lg:-top-0 lg:w-full">
            {/* Left Side Icons */}
            <div className="scale-80 relative -left-20 min-h-44 min-w-[460px] translate-x-28 sm:translate-x-0 lg:min-h-[292px] lg:scale-90 xl:scale-100">
              {leftIcons.map((iconProps, index) => (
                <IconCircle key={`left-${index}`} {...iconProps} />
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="scale-80 relative -right-20 min-h-44 min-w-[460px] -translate-x-28 sm:translate-x-0 lg:min-h-[292px] lg:scale-90 xl:scale-100">
              {rightIcons.map((iconProps, index) => (
                <IconCircle key={`right-${index}`} {...iconProps} />
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
