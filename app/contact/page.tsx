import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-pink-200 opacity-5 blur-3xl" />

          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-balance mb-6">
              Let's Build the{" "}
              <span className="gradient-text">Future — Together</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl leading-relaxed">
              Have a question about our services or want to discuss your AI
              initiatives? We'd love to hear from you. Our team typically
              responds within 24 hours during business hours.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted font-medium mb-1">Email</p>
                    <a
                      href="mailto:contact@danalitic.com"
                      className="text-[#FF0066] hover:underline font-medium"
                    >
                      contact@danalitic.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted font-medium mb-1">Phone</p>
                    <a
                      href="tel:+918901234567"
                      className="text-[#FF0066] hover:underline font-medium"
                    >
                      +91 (890) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted font-medium mb-1">
                      Office Locations
                    </p>
                    <p className="text-foreground">
                      Pune | Hyderabad | USA Innovation Hub | Remote Global
                      Teams
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted font-medium mb-1">
                      Business Hours
                    </p>
                    <p className="text-foreground">
                      Monday – Friday, 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                  Response Time
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  We take every inquiry seriously. Expect a thoughtful response
                  within 24 hours. If you have an urgent matter, please call us
                  directly or mention it in your message.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 border-2 border-[#FF0066]/20">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/solutions"
                      className="text-[#FF0066] hover:underline"
                    >
                      Explore Our Solutions
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-[#FF0066] hover:underline">
                      Learn About Danalitic
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="text-[#FF0066] hover:underline"
                    >
                      Join Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/research"
                      className="text-[#FF0066] hover:underline"
                    >
                      View Our Research
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
