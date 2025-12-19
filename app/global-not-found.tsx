"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import "./globals.css";
export default function NotFound() {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen gradient-mesh flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in-up">
            {/* 404 Number with gradient */}
            <div className="relative mb-24">
              <div className="inset-0 flex items-center justify-center">
                <AlertCircle
                  className="w-24 h-24 md:w-32 md:h-32 text-[#ff0066] animate-pulse"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 -mt-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#101010]">
                Page Not Found
              </h2>
              <p className="text-lg text-[#444444] max-w-md mx-auto leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                onClick={() => router.back()}
                variant="outline"
                size="lg"
                className="group border-2 border-[#ff0066]/20 hover:border-[#ff0066] hover:bg-[#ff0066]/5 transition-all duration-300 min-w-[180px]"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Go Back
              </Button>

              <Link href="/" className="min-w-[180px]">
                <Button
                  size="lg"
                  className="w-full gradient-bg hover:opacity-90 transition-opacity duration-300 group"
                >
                  <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="pt-8 opacity-60">
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ff0066] to-transparent" />
                <span className="text-sm text-[#444444] font-mono">
                  Error Code: 404
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ffbb33] to-transparent" />
              </div>
            </div>

            {/* Helpful Links */}
            <div className="pt-4">
              <p className="text-sm text-[#444444] mb-4">
                You might be looking for:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/services"
                  className="text-sm text-[#ff0066] hover:underline underline-offset-4 transition-all"
                >
                  Services
                </Link>
                <span className="text-[#444444]">•</span>
                <Link
                  href="/case-studies"
                  className="text-sm text-[#ff0066] hover:underline underline-offset-4 transition-all"
                >
                  Case Studies
                </Link>
                <span className="text-[#444444]">•</span>
                <Link
                  href="/industries"
                  className="text-sm text-[#ff0066] hover:underline underline-offset-4 transition-all"
                >
                  Industries
                </Link>
                <span className="text-[#444444]">•</span>
                <Link
                  href="/contact"
                  className="text-sm text-[#ff0066] hover:underline underline-offset-4 transition-all"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff0066]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffbb33]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </main>
      </body>
    </html>
  );
}
