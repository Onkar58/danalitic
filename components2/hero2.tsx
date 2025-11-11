"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingBoxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: "easeOut",
      },
    }),
    float: (custom: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        delay: custom * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="bg-accent/50 w-full overflow-clip rounded-lg 2xl:w-[calc(min(100vw-2*2rem,100%+8rem))]">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              className="container flex flex-col items-center px-8 py-16 text-center lg:mx-auto lg:items-start lg:px-16 lg:py-32 lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-sm font-medium text-blue-600 dark:text-blue-400"
                variants={itemVariants}
              >
                New Release
              </motion.p>

              <motion.h1
                className="my-6 text-pretty text-4xl font-bold lg:text-6xl"
                variants={itemVariants}
              >
                Welcome to Our Website
              </motion.h1>

              <motion.p
                className="text-muted-foreground mb-8 max-w-xl lg:text-xl"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </motion.p>

              <motion.div
                className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
                variants={itemVariants}
              >
                <motion.button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-blue-600 text-white shadow-sm hover:bg-blue-700 h-10 px-6 py-2 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="mr-2 size-4" aria-hidden="true" />
                  Primary
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Floating Boxes */}
            <div className="flex flex-col items-center justify-center p-8">
              <div className="relative h-[500px] w-full max-w-[500px]">
                {/* Top Right Box */}
                <motion.div
                  className="border-border bg-accent absolute right-[50%] top-[12%] flex aspect-square w-[24%] justify-center rounded-lg border border-gray-300 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                  custom={0}
                  variants={floatingBoxVariants}
                  initial="hidden"
                  animate={["visible", "float"]}
                />

                {/* Middle Right Box */}
                <motion.div
                  className="aspect-5/6 border-border bg-accent absolute right-[50%] top-[36%] flex w-[40%] justify-center rounded-lg border border-gray-300 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                  custom={1}
                  variants={floatingBoxVariants}
                  initial="hidden"
                  animate={["visible", "float"]}
                />

                {/* Middle Left Box */}
                <motion.div
                  className="aspect-5/6 border-border bg-accent absolute bottom-[36%] left-[54%] flex w-[40%] justify-center rounded-lg border border-gray-300 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                  custom={2}
                  variants={floatingBoxVariants}
                  initial="hidden"
                  animate={["visible", "float"]}
                />

                {/* Bottom Left Box */}
                <motion.div
                  className="border-border bg-accent absolute bottom-[12%] left-[54%] flex aspect-square w-[24%] justify-center rounded-lg border border-gray-300 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                  custom={3}
                  variants={floatingBoxVariants}
                  initial="hidden"
                  animate={["visible", "float"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
