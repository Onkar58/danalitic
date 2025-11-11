import Link from "next/link"
import { Linkedin, Github, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-heading font-bold text-xl text-foreground flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg gradient-brand" />
              Danalitic
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Empowering enterprises with intelligent AI platforms across every cloud.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions#ai" className="text-muted hover:text-foreground transition">
                  AI & LLM
                </Link>
              </li>
              <li>
                <Link href="/solutions#data" className="text-muted hover:text-foreground transition">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/solutions#cloud" className="text-muted hover:text-foreground transition">
                  Cloud Engineering
                </Link>
              </li>
              <li>
                <Link href="/solutions#quantum" className="text-muted hover:text-foreground transition">
                  Quantum AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted hover:text-foreground transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted hover:text-foreground transition">
                  Research
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with animated glow line */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted">© 2025 Danalitic. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted hover:text-accent transition p-2">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition p-2">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition p-2">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition p-2">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
