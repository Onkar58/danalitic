export default function TrustCenterPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">Trust Center</h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          The Danalitic Trust Center provides transparency into our security,
          privacy, compliance, and reliability practices.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Our Commitments
        </h2>
        <ul className="list-disc pl-6">
          <li>Secure-by-design systems</li>
          <li>No resale of customer data</li>
          <li>Audit logs and traceability</li>
          <li>Enterprise-grade reliability</li>
        </ul>

        <p>
          For trust-related inquiries, contact{" "}
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
