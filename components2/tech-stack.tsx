"use client"

const categories = [
  {
    title: "AI/ML Frameworks",
    items: ["PyTorch", "TensorFlow", "JAX", "Scikit-learn", "XGBoost", "LightGBM", "Hugging Face Transformers"],
  },
  {
    title: "GenAI & LLM Tools",
    items: ["LangChain", "LlamaIndex", "Vector embeddings", "OpenAI", "Ollama", "Fine-tuning pipelines"],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS SageMaker", "Google Cloud Vertex AI", "Azure ML Studio", "Multi-cloud orchestration"],
  },
  {
    title: "Data & ML Infrastructure",
    items: ["Kubernetes", "Docker", "Apache Spark", "Airflow", "Databricks", "Snowflake", "DVC", "MLflow"],
  },
  {
    title: "Vector Databases",
    items: ["Pinecone", "Weaviate", "Milvus", "Qdrant", "Elasticsearch", "PostgreSQL pgvector"],
  },
  {
    title: "DevOps & Monitoring",
    items: ["GitOps", "ArgoCD", "Prometheus", "Grafana", "DataDog", "New Relic", "Terraform", "Pulumi"],
  },
]

export default function TechStack() {
  const categoriesWithColors = categories.map((cat, i) => ({
    ...cat,
    color: [
      "from-blue-500/20",
      "from-cyan-500/20",
      "from-emerald-500/20",
      "from-orange-500/20",
      "from-purple-500/20",
      "from-red-500/20",
    ][i],
  }))

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 glass">
            <p className="text-sm font-medium text-accent">Technology Stack</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Built with Modern <span className="gradient-text">Enterprise Tools</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to deliver scalable, production-grade AI
            systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesWithColors.map((category, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-8 border-accent/20 hover:border-accent/50 transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                i === 1 || i === 4 ? "lg:row-span-2" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl -z-10`}
              />

              <h3 className="text-xl font-bold text-foreground mb-6 relative">{category.title}</h3>

              <div className="space-y-3">
                {category.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10 transition-colors">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
