"use client";

import { ArrowRight, Atom, Brain, Cloud, Workflow, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 opacity-20 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200 to-blue-300 opacity-15 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-pink-600" />
              <p className="text-sm font-semibold text-pink-600">
                AI Engineering | Cloud | Quantum
              </p>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Crafting <span className="gradient-text">Intelligent</span> AI
                Platforms
              </h1>
              <p className="mt-6 text-lg leading-relaxed max-w-lg">
                At Danalitic, we fuse Artificial Intelligence, Cloud
                Engineering, and Quantum Innovation to transform data into
                decision-making power. From LLMs to Agentic AI, we build
                hybrid-cloud systems that think, adapt, and save.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 gradient-button rounded-full font-bold overflow-hidden transition-all hover:shadow-xl hover:shadow-pink-500/30">
                <Link
                  href="/services"
                  className="relative z-10 flex items-center justify-center gap-2"
                >
                  Explore Our services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </button>
              <button className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all">
                <Link href="contact">Talk to an Expert</Link>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Grid */}
          {/* Right Column - Visual Grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[8.5rem_10rem_19.3rem] grid-rows-[16.625rem_15.5rem_1.375rem_6.9rem] gap-5">
              {/* Top Large Image - Hybrid Cloud */}
              <div className="col-span-2 col-start-2 overflow-hidden rounded-3xl gradient-brand shadow-xl relative group">
                <div className="w-full h-full flex items-center justify-center relative">
                  <Cloud className="w-24 h-24 text-white/30 absolute" />
                  <Workflow className="w-16 h-16 text-white/50 absolute top-8 right-8 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs font-bold text-white/90 mb-1">
                      HYBRID CLOUD
                    </div>
                    <div className="text-sm text-white/70">
                      AWS • Azure • GCP
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Arrow */}
              <div className="col-start-1 row-start-1 self-end">
                <svg
                  className="w-32 text-pink-300/40"
                  viewBox="0 0 131 174"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M123.385 5.96661C123.548 6.77895 123.021 7.56919 122.209 7.73166C115.896 8.99415 109.63 9.96037 103.486 10.9077C99.0811 11.5869 94.7393 12.2564 90.4886 13.0183C80.1979 14.8631 70.1037 17.2952 59.8744 21.8151C41.5635 29.906 25.0024 41.8876 14.0337 58.7365C8.37592 67.4273 4.29836 78.5442 3.60483 89.504C2.91206 100.452 5.59556 111.123 13.2956 119.15C17.2013 123.222 22.165 126.554 27.7033 129.043C26.3041 123.491 25.7088 117.6 26.1196 111.355C27.0927 96.5641 39.1649 88.8778 52.0447 87.6439C64.8739 86.4148 79.2577 91.4779 85.4762 102.943C88.8209 109.11 89.0032 115.236 86.7021 120.549C84.4187 125.822 79.7615 130.137 73.7 132.917C63.9444 137.39 51.9845 138.282 40.6769 136.184C37.8771 135.664 35.1075 134.96 32.412 134.076C37.8412 148.683 49.141 160.796 61.9724 170.755C62.6268 171.263 62.7456 172.205 62.2377 172.86C61.7298 173.514 60.7875 173.633 60.133 173.125C46.4556 162.51 34.1037 149.186 28.7723 132.754C22.0105 130.053 15.8772 126.176 11.1305 121.227C2.69861 112.436 -0.119486 100.855 0.610818 89.3145C1.34036 77.7856 5.61055 66.1764 11.5195 57.0997C22.8909 39.6323 39.9827 27.3247 58.6619 19.071C69.1997 14.4148 79.5552 11.9305 89.9592 10.0654C94.3905 9.27105 98.7725 8.59677 103.176 7.91915C109.222 6.98883 115.309 6.05221 121.62 4.78992C122.433 4.62745 123.223 5.15427 123.385 5.96661Z"
                  />
                </svg>
              </div>

              {/* Stats Card - Cost Savings */}
              <div className="col-span-2 col-start-1 row-start-2 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-7 overflow-hidden border border-pink-200/50">
                <div className="flex gap-7 items-start">
                  <div className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                    40%
                  </div>
                  <Zap className="w-14 h-14 text-pink-600" />
                </div>
                <p className="mt-7 text-lg text-slate-900">
                  Average{" "}
                  <span className="font-bold text-pink-600">
                    cloud cost savings
                  </span>{" "}
                  with our hybrid infrastructure optimization
                </p>
              </div>

              {/* Quantum Icon Card */}
              <div className="col-start-2 row-span-2 row-start-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center group hover:scale-105 transition-transform border border-indigo-200/50">
                <Atom className="w-16 h-16 text-indigo-600 group-hover:rotate-180 transition-transform duration-700" />
              </div>

              {/* Side Image - AI Brain with Arrow */}
              <div className="relative col-start-3 row-span-2 row-start-2 bg-gradient-to-br from-rose-400 via-pink-500 to-orange-500 rounded-3xl overflow-hidden shadow-xl group">
                <div className="w-full h-full flex items-center justify-center relative">
                  <Brain className="w-24 h-24 text-white/30 absolute group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs font-bold text-white/90 mb-1">
                      AGENTIC AI
                    </div>
                    <div className="text-sm text-white/70">
                      LLMs • RAG • Multi-Agent
                    </div>
                  </div>
                </div>
                <svg
                  className="absolute -bottom-24 -right-14 w-16 rotate-45 text-white/20"
                  viewBox="0 0 90 184"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M82.3024 182.601C81.9706 183.654 80.8475 184.239 79.794 183.908C61.988 178.3 44.3459 170.161 28.8638 159.628C27.9867 159.032 27.0952 158.433 26.1953 157.829C19.3285 153.217 11.9733 148.278 6.79983 141.399C1.60997 134.499 0.117312 128.254 1.83895 122.43C2.6984 119.522 4.32632 116.846 6.49378 114.34C5.35517 113.106 4.35358 111.733 3.52901 110.202C0.650361 104.857 -0.218529 98.5344 0.0443264 92.3589C0.307769 86.1696 1.71314 79.9869 3.52802 74.7987C6.69986 65.7313 12.4429 58.6702 19.6577 53.195C12.3683 47.5787 9.48814 39.1289 10.8726 29.8393C12.4961 18.9454 20.6761 11.4583 29.4427 6.62192C30.6367 5.96323 31.853 5.36019 33.0898 4.81414C32.6941 4.2623 32.3003 3.71906 31.9081 3.18775C31.2521 2.29908 31.4407 1.04688 32.3294 0.390874C33.218 -0.265116 34.4702 -0.0765027 35.1262 0.812169C35.7502 1.65741 36.3517 2.49315 36.9405 3.3212C40.0542 2.27675 43.2795 1.57898 46.5911 1.24683C46.6891 1.237 46.7946 1.226 46.9069 1.2143C47.9181 1.10892 49.4784 0.946293 50.9907 1.06971C52.6143 1.20221 54.7929 1.707 56.0859 3.59542C57.7733 6.05985 57.6463 9.09276 56.7901 11.555C55.9341 14.0168 54.2062 16.3578 52.0068 17.5835C49.5695 18.9417 47.2092 19.1616 45.0203 18.356C42.9436 17.5916 41.279 15.9963 39.9217 14.2581C38.3955 12.3034 36.9096 10.2152 35.4536 8.1518C34.067 8.73156 32.7065 9.38967 31.3749 10.1243C23.0707 14.7056 16.1837 21.3381 14.8289 30.4289C13.5775 38.8256 16.3089 46.1012 23.1133 50.7625C25.3554 49.2979 27.7094 47.964 30.1477 46.7504C38.4925 42.5968 47.3718 40.5021 56.4215 39.4065L56.6665 39.3768C62.6119 38.6565 70.4082 37.7119 76.8537 39.8042C78.4687 40.3284 80.1229 41.2783 81.2992 42.6776C82.5177 44.1272 83.2123 46.067 82.7269 48.2956C82.2241 50.6043 80.7223 52.4194 79.1373 53.7643C77.5359 55.1229 75.6762 56.1504 74.1276 56.8586C66.8292 60.1963 58.4963 61.2743 50.803 61.3583C41.5426 61.4595 31.7569 60.2088 23.2355 55.5241C15.9695 60.7389 10.3301 67.4678 7.30368 76.1195C5.59322 81.0092 4.28448 86.8017 4.04071 92.5291C3.79633 98.2704 4.62711 103.806 7.05067 108.305C7.66677 109.449 8.41725 110.498 9.28332 111.46C10.7025 110.137 12.2604 108.858 13.9176 107.613C19.0542 103.753 25.1603 101.362 30.9 99.1141C31.9728 98.6939 33.0328 98.2788 34.0713 97.86C44.8345 93.5196 54.5514 90.7828 66.1479 90.2536C73.0985 89.9364 80.1661 91.5085 85.7372 96.3378C87.9729 98.2757 89.3101 100.449 89.7945 102.77C90.2767 105.08 89.8719 107.333 88.9817 109.369C87.2323 113.37 83.5007 116.81 79.8943 119.046C67.1806 126.927 52.1165 127.684 38.0675 125.998C32.5974 125.342 25.6204 124.358 19.2411 122.116C15.756 120.891 12.3561 119.258 9.45526 117.031C7.61589 119.173 6.33377 121.335 5.67485 123.564C4.42421 127.794 5.29376 132.742 9.99659 138.995C14.7347 145.295 21.485 149.836 28.4179 154.501C29.3147 155.104 30.2147 155.71 31.1137 156.321C46.2316 166.606 63.5108 174.586 80.9955 180.092C82.049 180.424 82.6341 181.547 82.3024 182.601Z"
                  />
                </svg>
              </div>

              {/* Capability Pills */}
              <div className="col-start-3 row-start-4 space-y-3">
                <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-900">
                      LLM & RAG
                    </div>
                    <div className="text-xs text-slate-500">
                      Fine-tuned models
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex-shrink-0 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-900">
                      Multi-Agent AI
                    </div>
                    <div className="text-xs text-slate-500">
                      Autonomous systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
