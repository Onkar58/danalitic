import { CTA } from "@/components/cta";
import Hero from "@/components/hero";
import { TaglineSection } from "@/components/tagline";
import { TrustedBy } from "@/components/trusted-by";
import FeaturesSection from "@/components/why-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <TaglineSection />
      <TrustedBy />
      <CTA />
    </main>
  );
}
