export default function CompliancePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">Compliance</h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          Danalitic platforms are designed to support global regulatory and
          industry compliance requirements.
        </p>

        <ul className="list-disc pl-6">
          <li>ISO/IEC 27001</li>
          <li>SOC 2 (Security & Availability)</li>
          <li>GDPR</li>
          <li>HIPAA</li>
          <li>NIST frameworks</li>
        </ul>

        <p>
          Compliance is a shared responsibility between Danalitic and its
          customers.
        </p>
      </section>

      <p className="mt-16 text-sm text-muted">
        Last updated on 15th December 2025.
      </p>
    </main>
  );
}
