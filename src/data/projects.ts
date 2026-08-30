import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "workflow",
    title: "Workflow — Gestão de Projetos",
    category: "Full-Stack",
    featured: true,
    technologies: ["React", "Nest.js", "Prisma", "TypeScript", "Spec-Driven"],
    description:
      "Plataforma full stack para gestão de fluxos de trabalho, construída com React no front e Nest.js no back, seguindo os princípios de Spec-Driven Development para garantir APIs documentadas e previsíveis.",
    features: [
      "Frontend em React com TypeScript e Vite",
      "Backend em Nest.js com arquitetura modular",
      "Modelagem de dados com Prisma ORM",
      "Desenvolvimento orientado a specs (Spec-Driven Development)",
    ],
    poster:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    codeLink: "https://github.com/MatheusFerraz320/Workflow-web",
    backLink: "https://github.com/MatheusFerraz320/workFlow-api",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "architect-flow",
    title: "Architect Flow — Gestão de Projetos",
    category: "Full-Stack",
    featured: true,
    technologies: ["Next.js", "Nest.js", "Prisma", "PostgreSQL", "JWT"],
    description:
      "Portal full stack para arquitetos organizarem projetos e compartilharem o andamento com clientes, substituindo fluxos manuais via WhatsApp e e-mail. Backend em arquitetura em camadas com controle de acesso por papéis.",
    features: [
      "Backend Nest.js com Layered Architecture e JWT via cookie httpOnly",
      "Controle de acesso por papéis (arquiteto/cliente)",
      "Modelagem relacional em PostgreSQL via Prisma ORM",
      "Frontend Next.js/TypeScript com Shadcn/ui",
    ],
    poster:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    codeLink: "https://github.com/MatheusFerraz320/arq-flow-web",
    backLink: "https://github.com/MatheusFerraz320/arq-flow",
    gradient: "from-purple-500 to-indigo-500",
  },
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
    poster: "/images/personalTracker.png",
    codeLink: "https://github.com/MatheusFerraz320/Personal-Tracker",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "websites",
    title: "Pro Websites / Landing Pages",
    category: "Front-end",
    featured: true,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsividade",
    ],
    description:
      "Landing pages e websites de alta conversão, com foco em SEO, performance de carregamento e design 100% responsivo para diferentes dispositivos.",
    features: [
      "SEO otimizado para Google",
      "Layout totalmente responsivo (mobile-first)",
      "Alta performance e velocidade de carregamento",
      "Foco em conversão e funis de vendas",
    ],
    poster:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    codeLink: "Projeto Comercial",
    gradient: "from-orange-400 to-red-500",
  },
];

export const categories: string[] = ["Todos", "Full-Stack", "Front-end", "AI / Full-Stack"];
