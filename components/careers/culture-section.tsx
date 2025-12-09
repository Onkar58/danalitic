import { Home, GraduationCap, Award, Lightbulb } from "lucide-react";

const culturePoints = [
  {
    icon: Home,
    title: "Hybrid Workplace",
    description:
      "Work from anywhere with flexible arrangements that fit your life.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "AWS / GCP certification support and dedicated learning time.",
  },
  {
    icon: Award,
    title: "Certification Support",
    description:
      "We invest in your professional growth with full certification sponsorship.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-First Mindset",
    description:
      "Work on cutting-edge AI, cloud, and quantum computing projects.",
  },
];

export function CultureSection() {
  return (
    <section className="py-16 gradient-mesh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold sm:text-3xl">
            Our <span className="gradient-text">Culture</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            What makes working at Danalitic different.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {culturePoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-[#FF0066]/10 to-[#FFBB33]/10 mb-4">
                <point.icon className="h-6 w-6 text-[#FF0066]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
