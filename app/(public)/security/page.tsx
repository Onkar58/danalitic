export default function SecurityPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">Security</h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          Security is foundational to everything we build at Danalitic. Our
          platforms are designed to protect enterprise data and AI workloads.
        </p>

        <ul className="list-disc pl-6">
          <li>Secure-by-design architecture</li>
          <li>Encryption in transit and at rest</li>
          <li>Role-Based Access Control (RBAC)</li>
          <li>Audit logging and traceability</li>
          <li>Regular vulnerability assessments</li>
        </ul>

        <p>We support private, hybrid, on-prem, and GovCloud deployments.</p>
      </section>

      <p className="mt-16 text-sm text-muted">
        Last updated on 15th December 2025.
      </p>
    </main>
  );
}
