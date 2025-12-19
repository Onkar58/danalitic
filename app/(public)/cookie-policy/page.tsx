export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">
        Cookie Policy
      </h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          This Cookie Policy explains how Danalitic uses cookies and similar
          technologies.
        </p>

        <ul className="list-disc pl-6">
          <li>Strictly necessary cookies</li>
          <li>Performance and analytics cookies</li>
          <li>Functional cookies</li>
        </ul>

        <p>You may manage cookies through your browser settings.</p>

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
