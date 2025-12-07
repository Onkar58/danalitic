import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesCTA() {
  return (
    <section className="py-20 gradient-mesh">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold sm:text-3xl text-balance">
          Ready to transform your data into{" "}
          <span className="gradient-text">intelligence</span>?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Let's discuss how our solutions can accelerate your business outcomes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="shimmer-btn text-white border-0 font-medium px-8"
          >
            <Link href="/contact">
              Schedule a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:bg-white"
          >
            <Link href="/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
