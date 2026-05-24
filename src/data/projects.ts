import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "email-classifier",
    title: "Email Classifier (IA)",
    category: "AI / Full-Stack",
    featured: true,
    technologies: ["Python", "FastAPI", "IA Zero-Shot", "React", "Tailwind"],
    description:
      "Aplicação inteligente que classifica e-mails automaticamente em produtivos ou improdutivos utilizando IA Zero-Shot. Oferece score de confiança e sugestão de resposta.",
    features: [
      "Classificação automática via IA",
      "Score de confiança e justificativa",
      "Sugestão de resposta automática",
      "Upload de arquivos .txt e .pdf",
    ],
    video: "/videos/emailClassifier.mp4",
    poster: "/images/emailClassifier.png",
    codeLink: "https://github.com/MatheusFerraz320/email_classifier",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "personal-tracker",
    title: "Personal Tracker",
    category: "Full-Stack",
    featured: true,
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Tailwind"],
    description:
      "Sistema de gestão para personal trainers. Permite controle total de alunos, treinos e pagamentos, com autenticação segura e banco de dados relacional.",
    features: [
      "Autenticação JWT & Bcrypt",
      "Gestão de Treinos",
      "Banco de dados PostgreSQL",
      "Deploy em produção",
    ],
    video: "/videos/personalTracker.mp4",
    poster: "/images/personalTracker.png",
    codeLink: "https://github.com/MatheusFerraz320/Personal-Tracker",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "gym-system",
    title: "Gym System",
    category: "Full-Stack",
    featured: true,
    technologies: ["Node.js", "Express", "React", "Tailwind", "SQLite"],
    description:
      "Sistema robusto para gerenciamento de academias, cobrindo mensalidades, fichas de treino e controle de acesso.",
    features: [
      "Autenticação JWT & Bcrypt",
      "Gestão de aluno, mensalidades, funcionarios",
      "Banco de dados SQLITE projeto local",
      "Deploy em produção",
    ],
    video: "/videos/gymSystem.mp4",
    poster: "/images/gymSystem.png",
    codeLink: "https://github.com/MatheusFerraz320/gym-system",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: "websites",
    title: "Pro Websites / Landing Pages",
    category: "Front-end",
    featured: true,
    technologies: ["React", "Tailwind", "SEO", "Performance"],
    description:
      "Coleção de landing pages de alta conversão desenvolvidas para clientes, com foco em SEO, performance e design responsivo.",
    features: [
      "SEO otimizado para google.",
      "formularios funcionais, tecnicas de funis, conversão total",
      "Gateway de pagamentos",
      "Deploy em produção",
    ],
    video: "/videos/landingPage.mp4",
    poster: "/images/landingPage.png",
    codeLink: "Projeto Comercial",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: "habits",
    title: "Habits Dashboard",
    category: "Full-Stack",
    featured: true,
    technologies: ["Python (Flask)", "SQLite", "Bootstrap", "HTML/CSS"],
    description:
      "Dashboard para rastreamento de hábitos diários. Projeto final do curso CS50x de Harvard, focado em lógica e persistência de dados.",
    features: [
      "Autenticação JWT & Bcrypt",
      "Gestão de habitos diarios",
      "Banco de dados SQLITE projeto de estudo conclusão de curso harvard EDX cs50x",
      "Deploy em produção",
    ],
    video: "/videos/healthyFlow.mp4",
    poster: "/images/healthyflow.png",
    codeLink:
      "https://github.com/MatheusFerraz320/Cs50x_ProjetoFinal_HealthyFlow",
    gradient: "from-pink-500 to-rose-500",
  },
];

export const categories: string[] = ["Todos", "Full-Stack", "Front-end", "AI / Full-Stack"];
