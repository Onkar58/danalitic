export default function ResponsibleAiPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">
        Responsible AI Policy
      </h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          Danalitic is committed to developing and deploying Artificial
          Intelligence systems that are ethical, transparent, secure, and
          aligned with human values.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Core Principles
        </h2>

        <h3 className="font-semibold text-foreground">1. Human Oversight</h3>
        <p>
          AI systems are designed to support human decision-making and do not
          replace accountability or judgment.
        </p>

        <h3 className="font-semibold text-foreground">
          2. Transparency & Explainability
        </h3>
        <p>
          We strive to make AI behavior understandable, auditable, and
          explainable wherever feasible.
        </p>

        <h3 className="font-semibold text-foreground">
          3. Fairness & Bias Mitigation
        </h3>
        <p>
          Reasonable measures are taken to identify, monitor, and reduce bias in
          AI models and datasets.
        </p>

        <h3 className="font-semibold text-foreground">
          4. Privacy & Data Protection
        </h3>
        <p>
          AI systems follow data minimization, strict access controls, and
          privacy-preserving techniques.
        </p>

        <h3 className="font-semibold text-foreground">5. Security & Safety</h3>
        <p>
          AI pipelines are protected against misuse, prompt injection, data
          leakage, and unauthorized access.
        </p>

        <h3 className="font-semibold text-foreground">6. Responsible Use</h3>
        <p>
          Customers are expected to use Danalitic AI solutions in compliance
          with applicable laws and ethical standards.
        </p>

        <p>
          Responsible AI practices are reviewed periodically to align with
          evolving technologies and regulations.
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
