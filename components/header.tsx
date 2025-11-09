"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-foreground flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="hidden sm:inline">AI Enterprise</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-muted-foreground hover:text-foreground transition">
            Services
          </Link>
          <Link href="#industries" className="text-muted-foreground hover:text-foreground transition">
            Industries
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </div>

        {/* CTA + Mobile menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Schedule Demo
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-secondary rounded-lg transition">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link href="#services" className="block px-4 py-2 hover:bg-secondary rounded-lg transition">
              Services
            </Link>
            <Link href="#industries" className="block px-4 py-2 hover:bg-secondary rounded-lg transition">
              Industries
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-secondary rounded-lg transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
