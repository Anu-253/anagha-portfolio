export const data = {
  name: "Anagha P Kulkarni",
  initials: "APK",
  role: "AI/ML Engineer & Full-Stack Developer",
  tagline: "Creating software with intelligence.",
  subline: "Pre-final year CSE student who builds end-to-end — model training, REST APIs, and React frontends.",
  pitch:
    "Pre-final year CSE student (graduating 2027) with 4 internships across ML, computer vision, audio AI, and data analytics. I don't just train models — I wrap them in APIs, build frontends, and measure outcomes.",
  pitch2:
    "My edge is breadth with depth: I can architect a FastAPI backend, implement a MediaPipe pose pipeline, and surface insights in a React dashboard — all in the same sprint.",
  phone: "+91 9901341284",
  email: "anaghapk2005@gmail.com",
  linkedin: "https://linkedin.com/in/anagha-p-kulkarni-723498341",
  github: "https://github.com/Anu-253",
  // Update this path once you add your resume PDF to /public/
  resume: "/res_optimized.pdf",
  location: "Bengaluru, India",

  stats: [
    { value: "4", label: "Internships" },
    { value: "3+", label: "Projects Shipped" },
    { value: "76–87%", label: "Model Accuracy" },
    { value: "2027", label: "Graduating" },
  ],

  ticker: [
    "Python", "FastAPI", "React.js", "OpenCV", "MediaPipe",
    "scikit-learn", "Librosa", "Power BI", "MySQL", "Streamlit",
    "Computer Vision", "Audio ML", "REST APIs", "pandas", "NumPy",
  ],

  projects: [
    {
      id: 1,
      title: "AI Fitness Assistant",
      subtitle: "Real-time CV form coach",
      category: "Computer Vision · Full-Stack",
      problem:
        "Home exercisers lack real-time form feedback and have no way to track progressive improvements in technique.",
      solution:
        "Browser-based app streams webcam frames to a FastAPI backend, runs MediaPipe Pose on 33 body landmarks, and applies joint-angle thresholds to auto-count reps for three exercises.",
      impact: [
        "Form-scoring engine (0–100) generates per-rep textual cues — caught errors like 'back not straight' in real time",
        "Session data persisted to MySQL: reps, scores, duration surfaced in analytics dashboard with personal-best tracking",
        "3 REST endpoints, CORS-configured, architecture documented for JWT auth extensibility",
      ],
      stack: ["React", "FastAPI", "MediaPipe", "OpenCV", "MySQL"],
      accent: "amber",
      featured: true,
      github: "https://github.com/Anu-253/AI-Fitness-Assistant",
      demo: "", // add live URL if deployed
      // Place a screenshot at /public/projects/fitness-ai.png
      image: "/fitness-ai-placeholder.svg",
    },
    {
      id: 2,
      title: "AI Music Remix & Mood Generator",
      subtitle: "Audio feature ML pipeline",
      category: "Audio ML · Streamlit",
      problem:
        "Music mood classification typically requires large labeled datasets — I wanted to prove the concept on a deliberately small, curated set.",
      solution:
        "Extracted 4 Librosa audio features per track (tempo, RMS, spectral centroid, zero-crossing rate); trained a Random Forest on 80 manually labeled samples across 4 mood classes with careful stratified splits.",
      impact: [
        "76% accuracy and 0.76 weighted F1-score on held-out samples despite 80-sample dataset constraint",
        "Mood-conditioned audio transforms: pitch shift + tempo scaling via SoundFile for each predicted mood",
        "Deployed as Streamlit app with SQLite-backed song library and one-click download",
      ],
      stack: ["Python", "scikit-learn", "Librosa", "Streamlit", "SQLite"],
      accent: "rose",
      featured: true,
      github: "https://github.com/Anu-253/AI-Music-Mood-Generator",
      demo: "", // add Streamlit Cloud URL if deployed
      // Place a screenshot at /public/projects/music-ml.png
      image: "/music-ml-placeholder.svg",
    },
    {
      id: 3,
      title: "Diabetes Risk Prediction",
      subtitle: "Clinical ML classifier",
      category: "Healthcare ML",
      problem:
        "The Pima Indians dataset's zero-valued medical features create a subtle data leakage risk that most tutorials ignore.",
      solution:
        "Identified and imputed 5 medically-invalid zero values via median substitution, benchmarked Logistic Regression vs. Random Forest with 5-fold CV and GridSearchCV tuning.",
      impact: [
        "Random Forest achieved ~79% accuracy with feature importance confirming fasting glucose as top predictor",
        "Validated model behaviour against clinical literature — consistent with real-world diagnostic priorities",
        "Reproducible pipeline with clean experiment logs across model iterations",
      ],
      stack: ["Python", "pandas", "scikit-learn", "GridSearchCV"],
      accent: "sage",
      featured: false,
      github: "https://github.com/Anu-253/Diabetes-Risk-Prediction",
      demo: "",
      image: "",
    },
    {
     
id: 4,
title: "Indian History RAG Chatbot",
subtitle: "Retrieval-Augmented Generation using LLMs",
category: "Generative AI",

problem:
"Users often struggle to find accurate and contextual information about Indian history from large volumes of historical content.",

solution:
"Built a Retrieval-Augmented Generation (RAG) chatbot that retrieves relevant historical documents and generates context-aware answers using LLMs. Implemented document chunking, semantic search, vector embeddings, and prompt engineering for accurate responses.",

impact: [
"Improved response relevance through document retrieval and contextual grounding",
"Reduced hallucinations by combining vector search with LLM-based generation",
"Enabled interactive question-answering across Indian history topics"
],

stack: [
"Python",
"LangChain",
"FAISS",
"LLM",
"RAG",
"Streamlit"
],

accent: "amber",
featured: false,

github: "https://github.com/Anu-253/Indian-History-RAG-Chatbot",

demo: "",

image: ""
}

  ],

  experience: [
    {
      company: "Edunet Foundation",
      role: "AI/ML Intern",
      period: "Jan – Mar 2026",
      location: "Virtual",
      highlights: [
        "Shipped 2 supervised ML projects end-to-end — data collection, preprocessing, model training, evaluation, and written reports — inside a structured 10-week mentored programme",
        "Applied scikit-learn classification pipelines with GridSearchCV; maintained reproducible experiment logs across model iterations",
      ],
      tags: ["scikit-learn", "Python", "GridSearchCV", "ML Pipelines"],
    },
    {
company: "Unlox",
role: "AI Intern",
period: "Feb– May 2026",
location: "Virtual",
highlights: [
"Developed an AI-powered Fitness Tracker that analyzes user health metrics and activity patterns to generate personalized fitness insights and recommendations",
"Built end-to-end machine learning workflows including data preprocessing, feature engineering, model training, evaluation, and performance optimization",
"Implemented interactive dashboards and visualizations for tracking fitness progress, activity trends, and health indicators",
],
tags: ["Python", "Machine Learning", "Data Analysis", "Pandas", "scikit-learn"],
},

    {
      company: "Internshala Training",
      role: "Web Development Intern",
      period: "Sep – Dec 2025",
      location: "Virtual",
      highlights: [
        "Built 2 responsive web apps (PG-finder and airline booking UI) using HTML, CSS, and vanilla JS with mobile-first layouts, semantic markup, and client-side form validation",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
  ],

  skills: {
    "ML / AI": {
      items: ["scikit-learn", "MediaPipe", "Librosa", "OpenCV", "NumPy", "pandas"],
      level: [88, 80, 78, 82, 90, 90],
    },
    "Backend": {
      items: ["FastAPI", "Python", "MySQL", "SQLite", "REST APIs"],
      level: [80, 90, 75, 72, 80],
    },
    "Frontend": {
      items: ["React.js", "JavaScript", "HTML", "CSS", "Streamlit"],
      level: [72, 72, 82, 80, 78],
    },

    "Tools": {
      items: ["Git / GitHub", "Jupyter", "VS Code", "Google Colab"],
      level: [82, 88, 90, 86],
    },
  },

  education: {
    degree: "B.Tech — Computer Science Engineering",
    institution: "ACS College of Engineering, Bengaluru",
    period: " 2023 –  2027",
  },
};
