import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a question about our services or want to discuss your AI initiatives? We'd love to hear from you. Our
            team typically responds within 24 hours during business hours.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Email</h3>
                  <a href="mailto:contact@aiservices.com" className="text-primary hover:underline">
                    contact@aiservices.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Office Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday – Friday, 9:00 AM – 6:00 PM PT</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="font-semibold mb-3">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                We take every inquiry seriously. Expect a thoughtful response within 24 hours. If you have an urgent
                matter, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
