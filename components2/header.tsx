"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-xl text-foreground flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg gradient-brand" />
          <span className="hidden sm:inline">Danalitic</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-muted hover:text-foreground transition"
          >
            About
          </Link>
          <Link
            href="/solutions"
            className="text-muted hover:text-foreground transition"
          >
            Solutions
          </Link>
          <Link
            href="/research"
            className="text-muted hover:text-foreground transition"
          >
            Research
          </Link>
          <Link
            href="/careers"
            className="text-muted hover:text-foreground transition"
          >
            Careers
          </Link>
        </div>

        {/* CTA + Mobile menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 gradient-brand text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#FF0066]/25 transition-all duration-300"
          >
            Schedule Call
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-secondary/5 rounded-lg transition"
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="block px-4 py-2 hover:bg-secondary/5 rounded-lg transition"
            >
              Solutions
            </Link>
            <Link
              href="/research"
              className="block px-4 py-2 hover:bg-secondary/5 rounded-lg transition"
            >
              Research
            </Link>
            <Link
              href="/careers"
              className="block px-4 py-2 hover:bg-secondary/5 rounded-lg transition"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block w-full px-4 py-2 gradient-brand text-white rounded-lg font-medium text-center"
            >
              Schedule Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
