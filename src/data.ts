export const portfolioData = {
  about: {
    name: "Praveen Kumar",
    headline: "Building AI & Data Products",
    subHeadline: "Specializing in AI/ML, Data Analytics, and Full-Stack Engineering.",
    currentStatus: "B.Tech CSE Student (Aug 2023 - July 2027)",
    location: "Mahendragarh, HR",
    email: "praveenthakur180109@gmail.com",
    resumeLink: "/resume.pdf",
    roles: ["AI/ML Engineer", "GenAI Builder"],
    aboutParagraph: "I'm a Computer Science undergraduate with a deep passion for AI and Data Science. I have proficiency and hands-on experience with deep learning frameworks, LLM architectures, and data analytics pipelines.\n\nCurrently focused on building intelligent AI agents, RAG systems, and expanding my MLOps skillset.",
  },
  techStack: {
    "Languages": ["C/C++", "Python", "JavaScript", "HTML/CSS", "SQL"],
    "AI/ML": ["RAG", "GraphRAG", "GenAI", "LLMs", "NLP", "Agentic Workflows"],
    "Frameworks/Tools": ["Streamlit", "Flask", "Docker", "LlamaIndex", "LangChain", "LangGraph", "Neo4j", "FastAPI"],
    "Libraries": ["TensorFlow", "PyTorch", "Pandas", "Numpy", "Scikit-learn"],
    "Developer Tools": ["Git", "GitHub", "VS Code", "Google Colab", "Linux"],
  },
  projects: [
    {
      title: "Agentic Data Analyst",
      description: [
        "Developed an autonomous Cognitive Agent using LangGraph that plans analysis steps, executes Python code, and autonomously resolves runtime errors via recursive reflection loops (Self-Healing).",
        "Deployed a secure, containerized application using Docker on Render with a Streamlit interface, implementing sandbox guardrails.",
      ],
      techStack: ["LangGraph", "Llama-3.3", "Docker", "Streamlit", "Python"],
      githubLink: "https://github.com/prvn-kumar01/Agentic-Data-Analyst",
      liveDemoLink: "https://auto-analyst.example.com",
    },
    {
      title: "Image Captioning",
      description: [
        "Designed a multimodal deep learning pipeline utilizing CNNs (Encoder) for spatial feature extraction and LSTMs (Decoder) for sequential natural language generation.",
        "Enhanced model accuracy on the Flickr8k dataset using Transfer Learning with pre-trained vision models.",
      ],
      techStack: ["Python", "TensorFlow/Keras", "NLP", "CNN", "LSTM"],
      githubLink: "https://github.com/prvn-kumar01/ImageCaptioning",
      liveDemoLink: "https://image-captioning.example.com",
    },
    {
      title: "Weather Forecasting",
      description: [
        "Developed a weather forecasting model to predict future conditions by analyzing historical time-series data.",
        "Built an end-to-end data pipeline using Machine Learning techniques in Python and Pandas.",
      ],
      techStack: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
      githubLink: "https://github.com/prvn-kumar01/Weather_forecasting",
    },
    {
      title: "BioGraph-RAG",
      description: [
        "Engineered a GraphRAG architecture combining Neo4j Knowledge Graphs with Vector Search to resolve complex multi-hop medical queries in unstructured clinical PDFs.",
        "Orchestrated Llama-3 (70B) via Groq for high-precision Named Entity Recognition (NER), mapping complex Drug-Protein-Disease relationships into a structured graph schema.",
      ],
      techStack: ["Llama-3", "Neo4j", "LlamaIndex", "Python"],
      githubLink: "https://github.com/prvn-kumar01/BioGraph-RAG",
      liveDemoLink: "https://biograph-rag.example.com",
    }
  ],
  experience: [
    {
      role: "Data Analyst Intern",
      company: "TrendalyTix",
      duration: "June 2025 - July 2025",
      description: [
        "Architected predictive models using Scikit-learn and Pandas to analyze real-world datasets, improving data-driven decision accuracy.",
        "Optimized automated data cleaning pipelines for production-grade analytics workflows.",
        "Synthesized complex technical findings into actionable business insights, presenting stakeholders with interactive visualizations.",
      ],
      techStack: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
    },
    {
      role: "Artificial Intelligence Trainer (Freelance)",
      company: "Outlier",
      duration: "Dec 2024 - Feb 2025",
      description: [
        "Optimized Large Language Model (LLM) performance through Advanced Prompt Engineering and Chain-of-Thought reasoning across STEM and coding domains.",
        "Executed RLHF (Reinforcement Learning from Human Feedback) workflows to evaluate and refine model outputs, ensuring technical accuracy and ethical alignment.",
      ],
      techStack: ["Prompt Engineering", "RLHF", "LLMs", "Chain-of-Thought"],
    }
  ],
  socials: {
    linkedin: "https://linkedin.com/in/praveen-kumar211",
    github: "https://github.com/prvn-kumar01",
    twitter: "https://twitter.com/praveen",
  }
};
