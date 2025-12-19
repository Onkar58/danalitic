export default function DataProcessingAgreementPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">
        Data Processing Agreement
      </h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          This Data Processing Agreement (“DPA”) governs the processing of
          Personal Data by Danalitic India Private Limited (“Danalitic”) on
          behalf of its customers (“Customer”) in connection with the use of
          Danalitic products and services.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Purpose</h2>
        <p>
          This DPA is intended to ensure compliance with applicable data
          protection laws, including GDPR and other global privacy regulations.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Roles & Responsibilities
        </h2>
        <ul className="list-disc pl-6">
          <li>Customer acts as the Data Controller</li>
          <li>Danalitic acts as the Data Processor</li>
          <li>
            Personal Data is processed only on documented Customer instructions
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">
          Scope of Processing
        </h2>
        <ul className="list-disc pl-6">
          <li>Collection, storage, analysis, and deletion of data</li>
          <li>AI/ML processing for analytics, automation, and optimization</li>
          <li>System monitoring, support, and performance improvement</li>
        </ul>

        <p>Danalitic does not use Customer data for advertising or resale.</p>

        <h2 className="text-xl font-semibold text-foreground">
          Data Security Measures
        </h2>
        <ul className="list-disc pl-6">
          <li>Encryption at rest and in transit</li>
          <li>Role-Based Access Control (RBAC)</li>
          <li>Secure authentication and authorization</li>
          <li>Logging, monitoring, and audit trails</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">
          Sub-Processors
        </h2>
        <p>
          Danalitic may engage sub-processors strictly for service delivery. All
          sub-processors are bound by contractual confidentiality and security
          obligations.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Data Breach Notification
        </h2>
        <p>
          In the event of a confirmed data breach affecting Personal Data,
          Danalitic will notify the Customer without undue delay.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Data Retention & Deletion
        </h2>
        <p>
          Upon termination of services, Personal Data will be deleted or
          returned according to Customer instructions unless retention is
          required by law.
        </p>

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
