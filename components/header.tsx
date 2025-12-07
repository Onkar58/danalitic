"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const links = [
    // { href: "/about", label: "About" },
    // { href: "/solutions", label: "Solutions" },
    // { href: "/research", label: "Research" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/industries", label: "Industries" },
    { href: "/blogs", label: "Blogs" },
    { href: "/careers", label: "Careers" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-xl text-foreground flex items-center gap-2 w-38"
        >
          <img src="logo.png" alt="Logo" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 py-2 font-[600]">
          {links.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-muted hover:text-foreground transition"
              >
                {item.label}

                {/* Underline Element */}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full transition-all duration-300 
            ${isActive ? "opacity-100 gradient-brand animate-gradient-shift" : "opacity-0 group-hover:opacity-100 gradient-brand"}
          `}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA + Mobile menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 gradient-button rounded-lg font-medium hover:shadow-lg hover:shadow-[#FF0066]/25"
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
            {links.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative block px-4 py-2 rounded-lg transition group ${
                    isActive ? "bg-secondary/10" : "hover:bg-secondary/5"
                  }`}
                >
                  {item.label}

                  {/* Underline Element */}
                  <span
                    className={`absolute left-4 bottom-1 h-[3px] w-8 rounded-full transition-all duration-300 
                ${isActive ? "opacity-100 gradient-brand" : "opacity-0 group-hover:opacity-100 gradient-brand"}
              `}
                  />
                </Link>
              );
            })}

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
