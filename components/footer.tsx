import Link from "next/link";
import {
  Linkedin,
  Github,
  Twitter,
  Youtube,
  ArrowRight,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top grid */}
        <div className="grid gap-12 md:grid-cols-6 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-heading font-bold text-xl text-foreground flex items-center gap-2 w-48"
            >
              <img src="/logo.png" alt="Danalitic Logo" />
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              Engineering intelligent, secure, and scalable AI platforms for
              enterprises across every cloud.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="footer-link">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="footer-link">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="footer-link">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Legal & Trust
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trust-center" className="footer-link">
                  Trust Center
                </Link>
              </li>
              <li>
                <Link href="/security" className="footer-link">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="footer-link">
                  Compliances
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/data-processing-agreement" className="footer-link">
                  Data Processing Agreement
                </Link>
              </li>
              <li>
                <Link href="/gdpr-ccpa" className="footer-link">
                  GDPR & CCPA
                </Link>
              </li>
              <li>
                <Link href="/responsible-ai" className="footer-link">
                  Responsible AI
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-muted mb-4">
              Insights on AI, cloud architecture, security, and emerging tech —
              delivered occasionally.
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-md gradient-button px-4 py-2 text-sm font-medium"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted">
              © 2025 Danalitic. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="https://in.linkedin.com/company/danalitic"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/danalitic/"
                aria-label="Instagram"
                className="social-icon"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/danalitic/"
                aria-label="Facebook"
                className="social-icon"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/DanaliticI"
                aria-label="Twitter"
                className="social-icon"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://m.youtube.com/@danalitic7264/"
                aria-label="YouTube"
                className="social-icon"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
