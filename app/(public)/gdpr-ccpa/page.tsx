export default function GdprCcpaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">
        GDPR & CCPA Compliance
      </h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <h2 className="text-xl font-semibold text-foreground">
          GDPR (European Union)
        </h2>
        <p>
          Danalitic supports compliance with the General Data Protection
          Regulation (GDPR) through the following principles:
        </p>
        <ul className="list-disc pl-6">
          <li>Lawful, fair, and transparent processing</li>
          <li>Purpose limitation and data minimization</li>
          <li>Accuracy and storage limitation</li>
          <li>Integrity, confidentiality, and accountability</li>
          <li>Privacy by design and by default</li>
        </ul>

        <p>
          EU data subjects may request access, rectification, erasure,
          portability, or restriction of processing.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          CCPA / CPRA (California, USA)
        </h2>
        <ul className="list-disc pl-6">
          <li>Danalitic does not sell personal information</li>
          <li>Supports the right to know, delete, and correct data</li>
          <li>Honors opt-out requests where applicable</li>
          <li>No discrimination against users exercising their rights</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">
          International Data Transfers
        </h2>
        <p>
          Where cross-border data transfers occur, Danalitic applies appropriate
          contractual and organizational safeguards.
        </p>

        <p>
          Requests & inquiries:{" "}
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
