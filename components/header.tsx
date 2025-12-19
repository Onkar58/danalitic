"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      href: "/about",
      label: "About",
    },

    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/industries", label: "Industries" },
    { href: "/blogs", label: "Blogs" },
    { href: "/careers", label: "Careers" },
    { href: "/products", label: "Products", hasDropdown: true },
  ];

  const productLinks = [
    { href: "/products/traces-ai", label: "Traces AI" },
    { href: "/products/cloud-optima", label: "Cloud Optima" },
    { href: "/products/voices-ai", label: "Voices AI" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-xl text-foreground flex items-center gap-2 w-38"
        >
          <img src="logo.png" alt="Logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 py-2 font-[600] relative">
          {links.map((item) => {
            const isActive = pathname === item.href;
            const isProducts = item.hasDropdown;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => isProducts && setShowProductsDropdown(true)}
                onMouseLeave={() =>
                  isProducts && setShowProductsDropdown(false)
                }
              >
                <Link
                  href={item.href}
                  className="relative group text-muted hover:text-foreground transition"
                >
                  {item.label}

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full transition-all duration-300 
                      ${isActive ? "opacity-100 gradient-brand animate-gradient-shift" : "opacity-0 group-hover:opacity-100 gradient-brand"}
                    `}
                  />
                </Link>

                {/* Desktop Floating Dropdown */}
                <AnimatePresence>
                  {isProducts && showProductsDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="
                        absolute top-10 left-1/2 -translate-x-1/2
                        w-[260px] p-5 rounded-xl
                        bg-white backdrop-blur-md
                        border border-black/[0.07]
                        shadow-[0px_8px_30px_rgba(0,0,0,0.08)]
                      "
                    >
                      <div className="space-y-2">
                        {productLinks.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={"/products"}
                            className="group flex items-center justify-between px-2 py-2 rounded-md text-[15px] text-muted hover:text-foreground hover:bg-white/90 transition"
                          >
                            <span className="font-medium">{subItem.label}</span>

                            <motion.span
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -5 }}
                              className="opacity-0 group-hover:opacity-100 text-xs transition"
                            >
                              →
                            </motion.span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA + Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Profile Icon (ONLY when logged in) */}
          {isLoggedIn && (
            <Link
              href="/dashboard"
              aria-label="Dashboard"
              className="
        flex h-9 w-9 items-center justify-center rounded-full
        border border-black/[0.08]
        hover:bg-secondary/10
        hover:border-black/[0.15]
        transition
      "
            >
              <User className="h-4 w-4 text-muted-foreground" />
            </Link>
          )}

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 gradient-button rounded-lg font-medium hover:shadow-lg hover:shadow-[#FF0066]/25"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((item) => {
                const isProducts = item.hasDropdown;
                const isActive = pathname === item.href;

                if (isProducts) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setShowProductsDropdown((prev) => !prev)}
                        className="
                          flex w-full items-center justify-between 
                          px-4 py-2 rounded-lg font-medium 
                          hover:bg-secondary/5
                        "
                      >
                        {item.label}

                        <motion.span
                          animate={{ rotate: showProductsDropdown ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {showProductsDropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="ml-6 pl-4 py-2 border-l border-muted space-y-2"
                          >
                            {productLinks.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={"/products"}
                                className="block text-sm py-1 text-muted hover:text-foreground transition"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    onClick={() => setIsOpen(false)}
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg hover:bg-secondary/5 transition ${
                      isActive ? "bg-secondary/10" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="block w-full px-4 py-2 gradient-brand text-white rounded-lg text-center font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
