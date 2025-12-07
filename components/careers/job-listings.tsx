"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const jobs = [
  {
    id: 1,
    title: "AI Engineer (LLM / RAG / Agents)",
    department: "AI & Machine Learning",
    location: "Pune / Hybrid",
    type: "Full-time",
    experience: "3-6 years",
    description:
      "Build and deploy large language models, RAG pipelines, and agentic AI systems for enterprise clients.",
    requirements: [
      "Experience with LLM frameworks (LangChain, LlamaIndex, etc.)",
      "Strong Python skills and ML fundamentals",
      "Knowledge of vector databases (Pinecone, Weaviate, FAISS)",
      "Experience with prompt engineering and fine-tuning",
    ],
    benefits: [
      "Work on cutting-edge AI projects",
      "Competitive salary + equity",
      "AWS/GCP certification support",
      "Flexible hybrid work",
    ],
  },
  {
    id: 2,
    title: "Cloud FinOps Architect",
    department: "Cloud Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Design and implement cloud cost optimization strategies across AWS, Azure, and GCP for enterprise clients.",
    requirements: [
      "Deep expertise in multi-cloud architectures",
      "Experience with FinOps tools and frameworks",
      "Strong understanding of cloud pricing models",
      "Kubernetes and containerization experience",
    ],
    benefits: [
      "Lead cloud transformation projects",
      "Work with Fortune 500 clients",
      "Certification sponsorship",
      "Performance bonuses",
    ],
  },
  {
    id: 3,
    title: "Data Scientist (NLP / ML Ops)",
    department: "Data Science",
    location: "Pune / Hybrid",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Develop NLP models, build MLOps pipelines, and deliver predictive analytics solutions.",
    requirements: [
      "Strong foundation in ML algorithms and statistics",
      "Experience with NLP frameworks (Transformers, spaCy)",
      "MLOps experience (MLflow, Kubeflow, SageMaker)",
      "Proficiency in Python and SQL",
    ],
    benefits: [
      "Work on diverse industry projects",
      "Mentorship from senior scientists",
      "Conference attendance support",
      "Learning & development budget",
    ],
  },
  {
    id: 4,
    title: "Quantum Research Intern",
    department: "Quantum Computing",
    location: "Pune / On-site",
    type: "Internship",
    experience: "Final year / Fresh graduate",
    description:
      "Join our quantum research team to explore quantum-enhanced ML algorithms and hybrid computing systems.",
    requirements: [
      "Background in physics, mathematics, or computer science",
      "Interest in quantum computing fundamentals",
      "Programming experience (Python preferred)",
      "Research aptitude and curiosity",
    ],
    benefits: [
      "Work with quantum simulators (Qiskit, Cirq)",
      "Mentorship from quantum researchers",
      "Publication opportunities",
      "Full-time conversion potential",
    ],
  },
  {
    id: 5,
    title: "Senior DevOps Engineer",
    department: "Cloud Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "4-7 years",
    description:
      "Build and maintain CI/CD pipelines, infrastructure automation, and cloud-native deployments.",
    requirements: [
      "Strong Kubernetes and Docker experience",
      "Infrastructure as Code (Terraform, Pulumi)",
      "CI/CD tools (GitHub Actions, GitLab CI, Jenkins)",
      "Monitoring and observability (Prometheus, Grafana)",
    ],
    benefits: [
      "100% remote work",
      "Work on diverse tech stacks",
      "Competitive compensation",
      "Health and wellness benefits",
    ],
  },
];

const departments = [
  "All",
  "AI & Machine Learning",
  "Cloud Engineering",
  "Data Science",
  "Quantum Computing",
];

export function JobListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold sm:text-3xl">
            Open <span className="gradient-text">Positions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find your next role at Danalitic.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 gradient-border"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept
                    ? "gradient-brand text-white"
                    : "bg-muted/10 text-muted-foreground hover:cursor-pointer hover:bg-muted/5"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job listings table */}
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-4 bg-muted/10 text-sm font-medium text-muted-foreground">
            <div className="col-span-2">Position</div>
            <div>Location</div>
            <div>Type</div>
            <div>Experience</div>
          </div>

          <div className="divide-y divide-border">
            {filteredJobs.map((job) => (
              <button
                type="button"
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="w-full grid md:grid-cols-5 gap-2 md:gap-4 px-6 py-4 text-left hover:bg-muted/5 transition-colors group"
              >
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-foreground group-hover:text-[#FF0066] transition-colors flex items-center gap-2">
                    {job.title}
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {job.department}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 md:hidden" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4 md:hidden" />
                  {job.type}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 md:hidden" />
                  {job.experience}
                </div>
              </button>
            ))}
          </div>
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No positions found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Job modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-xl">
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#FF0066]/10 to-[#FFBB33]/10 text-[#FF0066] mb-3">
                  {selectedJob.department}
                </span>
                <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-foreground">
                  {selectedJob.title}
                </h2>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {selectedJob.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedJob.experience}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    About the Role
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-[#FF0066] mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    What We Offer
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-[#FFBB33] mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button className="shimmer-btn text-white border-0 flex-1">
                  Apply Now
                </Button>
                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
