export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">
        Terms & Conditions
      </h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          By accessing or using Danalitic’s website or services, you agree to be
          bound by these Terms & Conditions.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Use of Website
        </h2>
        <p>
          You agree to use the website only for lawful purposes and not to
          infringe the rights of others.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Intellectual Property
        </h2>
        <p>
          All content, trademarks, software, and design elements are the
          property of Danalitic or its licensors.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Limitation of Liability
        </h2>
        <p>
          Danalitic shall not be liable for any indirect or consequential
          damages arising from use of the website.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Governing Law</h2>
        <p>These Terms are governed by the laws of India.</p>

        <p>
          Contact:{" "}
          <a href="mailto:contact@danalitic.in" className="gradient-text">
            contact@danalitic.in
          </a>
        </p>
      </section>

      <p className="mt-16 text-sm text-muted">
        Last updated on 15th December 2025.
      </p>
    </main>
  );
}
