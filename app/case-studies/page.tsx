import type { Metadata } from "next";
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";

export const metadata: Metadata = {
  title: "Case Studies | Danalitic",
  description:
    "Real enterprise outcomes from our AI, Cloud, and Data solutions. Explore how we've helped organizations achieve measurable business value.",
};

const caseStudies = [
  {
    id: 1,
    title: "Intelligent Document Processing for a Global Insurer",
    subtitle:
      "LLM-driven data extraction and compliance tagging across 18M+ files.",
    category: "AI & Document Intelligence",
    metrics: [
      { value: 94, suffix: "%", label: "Accuracy" },
      { value: 60, suffix: "%", label: "Cost Reduction" },
      { value: 7, suffix: " → 14h", label: "SLA Time", prefix: "" },
    ],
    highlights: [
      "Built a Retrieval-Augmented Generation (RAG) pipeline using OpenAI + private vector DB for claims documents.",
      "Used domain-adapted LLM to extract clauses, coverage limits, and compliance tags from PDFs and scanned text.",
      "Deployed via Azure Functions with event-driven chunking and secure blob storage.",
      "Achieved 94% accuracy vs. 78% baseline using traditional regex NLP models.",
      "Reduced manual review cost by 60% and SLA time from 7 days → 14 hours.",
    ],
    dark: false,
  },
  {
    id: 2,
    title: "Multi-Cloud FinOps AI for Retail Chain",
    subtitle:
      "Real-time cloud optimization engine delivering 38% cost savings.",
    category: "Cloud & FinOps",
    metrics: [
      { value: 420, prefix: "$", suffix: "K", label: "Monthly Savings" },
      { value: 38, suffix: "%", label: "Cost Reduction" },
      { value: 48, suffix: "", label: "Projects Optimized" },
    ],
    highlights: [
      "Integrated cost telemetry from AWS, Azure, and GCP using unified APIs.",
      "Trained XGBoost-based cost predictor to forecast utilization spikes and recommend auto-scaling thresholds.",
      "Implemented LLM-based anomaly detection agent to explain sudden billing deviations in natural language.",
      "Deployed using Kubernetes + Prometheus + Grafana dashboards.",
      "Result: Average monthly compute savings of $420K across 48 projects.",
    ],
    dark: true,
  },
  {
    id: 3,
    title: "Agentic AI for Supply Chain Automation",
    subtitle:
      "Autonomous agents reducing delays in a multi-country logistics network.",
    category: "Agentic AI",
    metrics: [
      { value: 22, suffix: "%", label: "Faster Shipping" },
      { value: 100, suffix: "%", label: "Real-time Routing" },
      { value: 3, suffix: "", label: "Agent Types" },
    ],
    highlights: [
      "Designed multi-agent system (Planner → Executor → Critic) architecture to manage order routing and warehouse coordination.",
      "Agents connected via message bus (Kafka) for async event passing and state recovery.",
      "Added LLM-based policy agent for interpreting dynamic vendor SLAs.",
      "System self-optimized shipping time by 22%, rerouting in real-time under disruptions.",
      "Deployed on Google Cloud Run + Pub/Sub stack for scalability.",
    ],
    dark: false,
  },
  {
    id: 4,
    title: "Predictive Maintenance using Edge-to-Cloud ML",
    subtitle: "Preventing equipment downtime in large manufacturing setups.",
    category: "IoT & Manufacturing",
    metrics: [
      { value: 37, suffix: "%", label: "Downtime Reduced" },
      { value: 200, suffix: "ms", label: "Alert Latency", prefix: "<" },
      { value: 3, suffix: " months", label: "ROI Timeline" },
    ],
    highlights: [
      "Built IoT ingestion pipelines using AWS IoT Core → Kinesis → SageMaker.",
      "Modeled sensor data with LSTM sequence predictors detecting early-stage vibration anomalies.",
      "Created lightweight ONNX-optimized edge models for real-time alerts with < 200 ms latency.",
      "Integration with cloud-based digital twin dashboards for predictive visualization.",
      "Reduced unplanned maintenance events by 37% within 3 months.",
    ],
    dark: true,
  },
  {
    id: 5,
    title: "Private Healthcare LLM with PHI Protection",
    subtitle: "On-premises GenAI platform for clinical document reasoning.",
    category: "Healthcare AI",
    metrics: [
      { value: 4, suffix: "x", label: "Faster Summaries" },
      { value: 0, suffix: "", label: "Data Breaches" },
      { value: 100, suffix: "%", label: "HIPAA Compliant" },
    ],
    highlights: [
      "Hosted LLM fine-tuned on de-identified clinical text inside HIPAA-secure private VPC.",
      "Added context window filtering + role-based prompt access for PHI safety.",
      "Integrated Retrieval layer (Weaviate + embeddings) for contextual retrieval of guidelines.",
      "Achieved zero data exfiltration under DLP scans; compliance verified via internal audit.",
      "Enabled clinicians to summarize case histories 4× faster.",
    ],
    dark: false,
  },
  {
    id: 6,
    title: "Quantum-Inspired Optimization for Financial Portfolios",
    subtitle:
      "Hybrid classical–quantum model achieving faster portfolio balancing.",
    category: "Quantum & Finance",
    metrics: [
      { value: 1.8, suffix: "x", label: "Faster Convergence" },
      { value: 12, suffix: "%", label: "Better Sharpe Ratio" },
      { value: 1, suffix: "", label: "Pilot Partner" },
    ],
    highlights: [
      "Developed Quantum Approximate Optimization Algorithm (QAOA) simulator with Python Qiskit.",
      "Integrated with classical PyTorch reinforcement learner for continuous portfolio updates.",
      "Benchmarked against classical solvers: achieved 1.8× faster convergence and 12% better Sharpe ratio.",
      "Deployed hybrid workflow using Azure Quantum + local GPU cluster.",
      "Prototype now in pilot with investment analytics partner.",
    ],
    dark: true,
  },
  {
    id: 7,
    title: "NLP-Driven Legal Intelligence Platform",
    subtitle:
      "Automated clause extraction and risk classification from contracts.",
    category: "Legal Tech",
    metrics: [
      { value: 93.6, suffix: "%", label: "F1 Score" },
      { value: 70, suffix: "%", label: "Effort Reduced" },
      { value: 30, suffix: "K", label: "Contracts Trained" },
    ],
    highlights: [
      "Built NER and classification pipeline using BERT + Spacy custom entities (Obligation, Termination, Jurisdiction).",
      "Trained model on 30K annotated contracts using weak supervision.",
      "Implemented context-aware clause summarizer via fine-tuned Llama-2-13B model.",
      "Accuracy: 93.6% F1 vs. 82% baseline.",
      "Result: Reduced manual legal review effort by 70%.",
    ],
    dark: false,
  },
  {
    id: 8,
    title: "Intelligent Cloud Migration Advisor",
    subtitle: "AI-guided recommendation engine for migrating legacy workloads.",
    category: "Cloud Migration",
    metrics: [
      { value: 1200, suffix: "+", label: "Blueprints Generated" },
      { value: 98, suffix: "%", label: "Classification Accuracy" },
      { value: 5, suffix: " → 3d", label: "Assessment Time", prefix: "" },
    ],
    highlights: [
      "Analyzed 20 TB of legacy metadata using Python-based classifier + embedding search.",
      "Auto-classified workloads as lift-and-shift, refactor, or rebuild.",
      "Integrated LLM reasoning layer to explain recommendations in natural language.",
      "Produced 1,200+ migration blueprints with 98% accuracy vs. manual classification.",
      "Delivered via Danalitic Migration Assistant™, cutting assessment time from 5 weeks → 3 days.",
    ],
    dark: true,
  },
  {
    id: 9,
    title: "DataOps & Metadata Intelligence Framework",
    subtitle: "Unified data discovery and governance through automation.",
    category: "Data Governance",
    metrics: [
      { value: 40, suffix: "M", label: "Files Classified" },
      { value: 2, suffix: "%", label: "False Positive Rate", prefix: "<" },
      { value: 100, suffix: "%", label: "Automated" },
    ],
    highlights: [
      "Created metadata scanning engine integrating with AWS S3, GCS, and Azure Blob.",
      "Added ML models for sensitivity detection, data lineage, and PII scoring.",
      "Connected with Elasticsearch + Neo4j for fast graph traversal and visual lineage.",
      "Results: 40M files auto-classified with < 2% false positive rate.",
      "Deployed via containerized microservices orchestrated on Kubernetes.",
    ],
    dark: false,
  },
  {
    id: 10,
    title: "Smart Retail Analytics with Generative Insights",
    subtitle:
      "Real-time consumer trend discovery powered by LLMs + vector search.",
    category: "Retail Analytics",
    metrics: [
      { value: 46, suffix: "%", label: "Better Targeting" },
      { value: 100, suffix: "%", label: "Automated Dashboard" },
      { value: 1, suffix: "", label: "Platform Built" },
    ],
    highlights: [
      "Integrated streaming analytics (Kafka → BigQuery) with AI summarizer agent.",
      "Generated marketing insights in plain English using LLM-based summarization.",
      "Enabled auto-segmentation of customers based on RFM + sentiment embeddings.",
      "Improved campaign targeting accuracy by 46%.",
      "Fully automated dashboard built using LangChain + Streamlit.",
    ],
    dark: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesHero />
      <section className="py-12">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </section>
    </main>
  );
}
