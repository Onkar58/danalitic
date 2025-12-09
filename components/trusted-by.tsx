"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Award, Lock, BadgeCheck } from "lucide-react";

// Map each logo to an icon
const items = [
  {
    label: "AWS Partner",
    icon: Cloud,
  },
  {
    label: "Google Cloud Certified",
    icon: Award,
  },
  {
    label: "Microsoft Azure Specialist",
    icon: ShieldCheck,
  },
  {
    label: "ISO 27001",
    icon: Lock,
  },
  {
    label: "SOC 2",
    icon: BadgeCheck,
  },
];

export function TrustedBy() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Trusted by Innovators
            </h2>
            <span className="absolute left-1/2 -bottom-2 h-[3px] w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF0066] to-[#FFBB33]" />
          </div>

          <p className="text-foreground max-w-xl text-sm md:text-base font-medium leading-snug">
            Our platform is trusted by global technology leaders and
            enterprise-grade security standards.
          </p>
        </div>

        {/* Animated Logos/Badges */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 place-items-center"
        >
          {items.map(({ label, icon: Icon }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.08 }}
              className="group relative flex flex-col items-center gap-3 transition"
            >
              {/* Glow background */}
              <span className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

              {/* Icon with float animation */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-600" />
              </motion.div>

              {/* Label */}
              <span className="relative z-10 text-xs md:text-sm font-semibold text-foreground">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
