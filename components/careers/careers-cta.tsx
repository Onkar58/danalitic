import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CareersCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="gradient-mesh z-10 mx-auto  px-6 text-center lg:px-8">
        <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-semibold sm:text-4xl text-balance">
          Don't see the right role?
        </h2>
        <p className="mt-4 text-lg  max-w-2xl mx-auto">
          We're always looking for exceptional talent. Send us your resume and
          tell us how you'd like to contribute to the intelligence revolution.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="gradient-button font-medium px-8 h-12"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
