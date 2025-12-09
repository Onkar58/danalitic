"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AIMLSection } from "./ai-ml-section";
import { CloudSection } from "./cloud-section";
import { DataScienceSection } from "./data-science-section";
import { QuantumSection } from "./quantum-section";
import { useSearchParams } from "next/navigation";

export function ServicesTabs() {
  const params = useSearchParams();
  const defaultTab = params.get("tab");
  const tabs = [
    { key: "aiml", label: "AI & ML", component: <AIMLSection /> },
    {
      key: "cloud",
      label: "Cloud & Hybrid Infra",
      component: <CloudSection />,
    },
    {
      key: "data",
      label: "Data Science & Analytics",
      component: <DataScienceSection />,
    },
    {
      key: "quantum",
      label: "Quantum Computing",
      component: <QuantumSection />,
    },
  ];

  const [active, setActive] = useState(defaultTab ?? "aiml");

  const currentTab = tabs.find((tab) => tab.key === active);

  return (
    <main className="pb-20" id="tabs">
      {/* Tabs Container */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="flex flex-wrap gap-4 border-b border-neutral-300 pb-3">
          {tabs.map((tab) => {
            const isActive = active === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative px-4 py-2 text-sm font-medium 
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                  }
                `}
              >
                {tab.label}

                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-black"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Tab Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {currentTab?.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
