"use client";

import { motion } from "framer-motion";

export function TaglineSection({
  tagline = "Crafting Intelligent AI Experiences",
}: {
  tagline?: string;
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto flex items-center justify-center gap-4">
        {/* Vertical Gradient Line */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "2.5rem" }}
          transition={{ duration: 0.6 }}
          className="w-[3px] rounded-full gradient-brand"
        />

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl font-heading font-semibold gradient-text"
        >
          {tagline}
        </motion.h2>
      </div>
    </section>
  );
}
