export const portfolioData = {
  about: {
    name: "Praveen Kumar",
    headline: "Building AI & Data Products",
    subHeadline: "Specializing in AI/ML, Agentic RAG, AI Guardrails, and Production ML Systems.",
    currentStatus: "B.Tech CSE Student (Aug 2023 - July 2027)",
    location: "Mahendragarh, HR",
    email: "praveenthakur180109@gmail.com",
    resumeLink: "/resume.pdf",
    roles: ["AI/ML Engineer", "GenAI Builder", "Full-Stack Developer"],
    aboutParagraph: "AI/ML Engineer specializing in LLM applications, Agentic RAG, AI guardrails, and production ML systems. Experienced in building and deploying LangGraph-based agents, RAG pipelines, multimodal VLM systems, and FastAPI services on AWS.\n\nCurrently focused on building intelligent AI agents, GraphRAG systems, multimodal guardrails, and expanding my production MLOps skillset to deliver enterprise-grade AI solutions.",
  },
  techStack: {
    "Languages": ["C++", "Python", "JavaScript", "HTML/CSS", "SQL"],
    "AI & ML": ["RAG", "GraphRAG", "GenAI", "AgenticAI", "LLMs", "NLP", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    "Observability & Gateways": ["LLM Evals", "NeMo Guardrails", "AWS Bedrock Guardrails", "LangSmith", "Portkey"],
    "Frameworks & Tools": ["LangChain", "LangGraph", "LlamaIndex", "HuggingFace", "FastAPI", "Neo4j"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Git", "Linux"],
  },
  projects: [
    {
      title: "MultiModal-Guardrail",
      description: [
        "Built a Continuous Temporal Consistency & Faithfulness Evaluator for Vision-Language Models in real-time video streams, ensuring output reliability at scale.",
        "Designed guardrail pipelines that detect hallucinations and inconsistencies across multimodal VLM outputs, reducing unsafe model responses in production environments.",
        "Implemented real-time evaluation framework processing video streams with sub-second latency for enterprise-grade AI safety compliance.",
      ],
      techStack: ["Python", "VLMs", "NeMo Guardrails", "FastAPI", "Real-time Streaming"],
      githubLink: "https://github.com/prvn-kumar01/MultiModal-Guardrail",
    },
    {
      title: "Agentic Data Analyst",
      description: [
        "Developed an autonomous Cognitive Agent using LangGraph that plans analysis steps, executes Python code, and autonomously resolves runtime errors via recursive reflection loops (Self-Healing).",
        "Deployed a secure, containerized application using Docker on Render with a Streamlit interface, implementing sandbox guardrails for safe code execution.",
      ],
      techStack: ["LangGraph", "Llama-3.3", "Docker", "Streamlit", "Python"],
      githubLink: "https://github.com/prvn-kumar01/Agentic-Data-Analyst",
    },
    {
      title: "ClinGraph-AI",
      description: [
        "Engineered a Multi-Agent GraphRAG system that extracts biomedical entities from unstructured clinical PDFs and constructs a Neo4j knowledge graph for clinical trial matching.",
        "Implemented agentic multi-hop reasoning to match patients with eligible trials using cited evidence, achieving accurate entity extraction across Drug-Protein-Disease relationships.",
        "Built an end-to-end pipeline combining NER with Llama-3 (70B) via Groq, vector search, and graph traversal for complex multi-hop medical query resolution.",
      ],
      techStack: ["LangGraph", "Neo4j", "LlamaIndex", "Llama-3", "Python", "GraphRAG"],
      githubLink: "https://github.com/prvn-kumar01/ClinGraph-AI",
    },
    {
      title: "NexusElectronics",
      description: [
        "Architected a production-ready e-commerce platform for electronics retail with dynamic inventory routing and secure payment integrations.",
        "Delivered a seamless shopping experience with responsive frontend, real-time stock management, and optimized checkout flow reducing cart abandonment.",
        "Implemented scalable backend architecture with secure authentication, order tracking, and admin dashboard for inventory analytics.",
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubLink: "https://github.com/prvn-kumar01/NexusElectronics",
    },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "BharatOne, Pune",
      duration: "July 2026 – Aug 2026",
      location: "Remote",
      description: [
        "Built and shipped a production chat application (Firebase Firestore/Auth/Cloud Functions) with end-to-end encrypted messaging and a caching layer, serving real users with low-latency delivery and native social-media sharing via a JWT-secured backend.",
        "Designed and integrated an AI chatbot with custom guardrails to sanitize inputs/outputs and block prompt-injection and abuse attempts, hardening the assistant against adversarial attacks in a live production environment.",
      ],
      techStack: ["Firebase", "Cloud Functions", "JWT", "AI Guardrails", "React"],
    },
    {
      role: "AI Developer Intern",
      company: "Aigetai, Bengaluru",
      duration: "June 2026 – July 2026",
      location: "Hybrid",
      description: [
        "Architected and deployed production-grade Retrieval-Augmented Generation (RAG) pipelines, integrating advanced AI gateways and custom routing logic for optimized LLM inference.",
        "Engineered robust guardrails and comprehensive evaluation (evals) frameworks to ensure output safety, reliability, and alignment with enterprise quality standards.",
      ],
      techStack: ["RAG", "LangChain", "FastAPI", "LLM Evals", "AWS", "Python"],
    },
    {
      role: "Artificial Intelligence Trainer (Freelance)",
      company: "Outlier, United States",
      duration: "Dec 2024 – Feb 2025",
      location: "Remote",
      description: [
        "Improved LLM output quality across STEM domains through advanced prompt engineering, chain-of-thought reasoning, and RLHF evaluation workflows, ensuring technical accuracy and ethical alignment.",
        "Executed Reinforcement Learning from Human Feedback (RLHF) workflows to evaluate and refine model outputs across coding and scientific reasoning tasks.",
      ],
      techStack: ["Prompt Engineering", "RLHF", "LLMs", "Chain-of-Thought", "STEM"],
    },
    {
      role: "Data Analyst Intern",
      company: "TrendalyTix",
      duration: "June 2025 – July 2025",
      location: "Remote",
      description: [
        "Architected predictive models using Scikit-learn and Pandas to analyze real-world datasets, improving data-driven decision accuracy by 25%.",
        "Optimized automated data cleaning pipelines for production-grade analytics workflows, reducing preprocessing time by 40%.",
        "Synthesized complex technical findings into actionable business insights, presenting stakeholders with interactive visualizations using Matplotlib and Seaborn.",
      ],
      techStack: ["Python", "Pandas", "Scikit-learn", "Data Visualization", "Matplotlib"],
    },
  ],
  achievements: [
    {
      title: "National Finalist — 5G Lab Innovation Hackathon (2025)",
      description: "Built AR smart glasses using 5G URLLC for real-time communication, selected among 1000 teams and awarded INR 1,00,000 funding for prototyping.",
    },
  ],
  socials: {
    linkedin: "https://linkedin.com/in/praveen-kumar211",
    github: "https://github.com/prvn-kumar01",
    twitter: "https://twitter.com/praveen",
    leetcode: "https://leetcode.com/u/praveenn18",
  },
};
