export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">
        Privacy Policy
      </h1>

      <section className="space-y-6 text-muted leading-relaxed">
        <p>
          Danalitic India Private Limited (“Danalitic”, “we”, “our”, “us”)
          respects your privacy and is committed to protecting personal
          information collected through our website, products, and services.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6">
          <li>Name, email address, phone number</li>
          <li>Company name and job title</li>
          <li>IP address, browser and device information</li>
          <li>Website usage data and cookies</li>
          <li>Business or system information shared voluntarily</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">
          How We Use Information
        </h2>
        <ul className="list-disc pl-6">
          <li>Respond to inquiries and requests</li>
          <li>Provide demos and consultations</li>
          <li>Improve services and platform security</li>
          <li>Ensure compliance and fraud prevention</li>
        </ul>

        <p>We do not sell personal data to third parties.</p>

        <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may request access, correction, or
          deletion of your personal data.
        </p>

        <p>
          Contact us at{" "}
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
