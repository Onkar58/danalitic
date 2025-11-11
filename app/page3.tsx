import Header from "@/components/header";
// import Hero from "@/components/hero";
import Services from "@/components/services";
import Industries from "@/components/industries";
import CaseStudies from "@/components/case-studies";
import Differentiators from "@/components/differentiators";
import TechStack from "@/components/tech-stack";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero2";
import Hero from "@/components/hero3";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <CaseStudies />
        <Differentiators />
        <TechStack />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
