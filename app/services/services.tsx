"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useCallback, useEffect, useRef, useState } from "react";

export type ServiceProps = {
  title: string;
  image?: string;
  description: string;
  height?: "tall" | "medium" | "short";
};

// const services: ServiceProps[] = [
//   {
//     title: "Web Development",
//     image:
//       "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
//     description: "",
//   },
//   {
//     title: "Mobile App Development",
//     image:
//       "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
//     description: "",
//   },
//   {
//     title: "UI/UX Design",
//     image:
//       "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
//     description: "",
//   },
//   {
//     title: "Digital Marketing",
//     image:
//       "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
//     description: "",
//   },
// ];

const heights = ["tall", "medium", "short"];

export const Services = ({
  services,
  title,
}: {
  services: ServiceProps[];
  title: string;
}) => {
  const getHeightClass = (height: ServiceProps["height"]) => {
    switch (height) {
      case "tall":
        return "h-96";
      case "medium":
        return "h-72";
      case "short":
        return "h-56";
      default:
        return "h-56";
    }
  };
  const [randomHeights, setRandomHeights] = useState<number[]>([]);
  const getRandomHeights = useCallback(() => {
    const temp: number[] = [];
    services.forEach(() => {
      const index = Math.floor(Math.random() * heights.length);
      temp.push(index);
    });
    setRandomHeights(temp);
  }, []);
  useEffect(() => {
    getRandomHeights();
  }, [title]);
  const [visitedTabs, setVisitedTabs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setVisitedTabs((prev) => {
      if (prev[title]) return prev; // already animated
      const updated = { ...prev };
      updated[title] = true; // mark visited
      return updated;
    });
  }, [title]);

  const shouldAnimate = !visitedTabs[title];
  return (
    <section className="py-16">
      <div>
        <div className="mb-16">
          <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-base tracking-tight">
            Transform your business with our comprehensive digital services. We
            combine creativity with technical expertise to deliver solutions
            that drive growth.
          </p>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
              transition={
                shouldAnimate ? { duration: 0.5, delay: idx * 0.1 } : undefined
              }
              whileHover={{ y: -4 }}
              className="group mb-6 block break-inside-avoid overflow-hidden rounded-xl relative"
            >
              <Card
                className={`relative ${getHeightClass(
                  heights[randomHeights[idx]],
                )} overflow-hidden p-0`}
              >
                {/* Background Image */}
                <img
                  src={
                    service.image ??
                    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg"
                  }
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-black/90" />

                {/* Content */}
                <CardContent
                  className="
            absolute inset-0 
            flex flex-col 
            justify-end 
            p-6 
            z-20
          "
                >
                  {/* Title ALWAYS visible */}
                  <div
                    className="
              font-semibold 
              text-white 
              text-lg 
              transition-all 
              duration-300 
              group-hover:translate-y-[-10px]
            "
                  >
                    {service.title}
                  </div>

                  {/* Description ONLY on hover */}
                  <p
                    className="
              text-sm 
              text-gray-200 
              leading-relaxed 
              mt-2 
              opacity-0 
              max-h-0
              overflow-hidden
              transition-all 
              duration-300 
              group-hover:opacity-100 
              group-hover:max-h-32 
              group-hover:translate-y-[-4px]
            "
                  >
                    {service.description}
                  </p>
                </CardContent>

                {/* Arrow Icon */}
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-all duration-300 group-hover:rotate-45 z-30" />
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
