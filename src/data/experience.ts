import type { Experience, Language } from "@/types";

export const professionalExperiences: Experience[] = [
  {
    id: "itb-fullstack",
    role: "Fullstack Developer",
    company: "Inside the Box",
    period: "Jun 2026 — Atual",
    type: "work",
    icon: "FaLaptopCode",
    description: [
      "Desenvolvimento e correção de funcionalidades em React.js, React Native e Next.js com TypeScript e APIs em Nest.js, entregando mais de 20 features/correções em produção",
      "Debugging avançado e análise de causa raiz, reduzindo em cerca de 30% o tempo médio de resolução de bugs críticos",
      "Refatoração de componentes React, reduzindo a duplicação de código em ~25% e melhorando a performance de renderização",
      "Aplicação de boas práticas e código limpo (componentização, tipagem estrita em TypeScript, revisão via Pull Requests)",
      "Consumo e integração de APIs REST construídas em Express.js e Nest.js",
      "Atuação em time ágil com Scrum — sprint planning, daily stand-ups, sprint review e retrospectivas — com gestão em board Kanban (Jira/Trello)",
    ],
  },
  {
    id: "itb-qa",
    role: "Quality Assurance Engineer Júnior",
    company: "Inside the Box",
    period: "Mar 2026 — Mai 2026",
    type: "work",
    icon: "FaBug",
    description: [
      "Testes e validação de mais de 40 endpoints de APIs REST com Postman; identificação e documentação de 25+ bugs em frontend e backend",
      "Debugging e análise de logs para investigação de falhas; automação básica de testes funcionais e exploratórios",
      "Colaboração direta com times de desenvolvimento em fluxo Scrum, priorizando bugs e tarefas de teste em board Kanban",
      "Base técnica de QA que impulsionou a promoção para Fullstack Developer em menos de 3 meses",
    ],
  },
  {
    id: "b2-marketing",
    role: "Desenvolvedor Full Stack Estagiário",
    company: "B2 Marketing Industrial",
    period: "2025 — 2026",
    type: "work",
    icon: "FaBriefcase",
    description: [
      "Desenvolvimento de aplicações web e landing pages em React.js/Next.js, com APIs REST em Nest.js e Express.js e autenticação JWT, elevando a taxa de conversão em cerca de 15%",
      "Modelagem e gerenciamento de banco de dados com PostgreSQL; otimização de performance e deploy via Git/Vercel",
      "Aplicação de boas práticas de código limpo (SOLID, componentização e separação de responsabilidades)",
      "Organização de demandas e priorização de tarefas com quadro Kanban, aumentando a previsibilidade de entregas",
      "Destaque: criação do sistema interno B2Hub, centralizando mais de 100 chamados/mês antes feitos via WhatsApp e reduzindo o tempo médio de atendimento em ~40%",
    ],
  },
];

export const educationExperiences: Experience[] = [
  {
    id: "ads",
    role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    company: "Centro Universitário Leonardo da Vinci (UNIASSELVI)",
    period: "2025 — 2027",
    type: "education",
    icon: "FaGraduationCap",
    description: [
      "Formação superior em Análise e Desenvolvimento de Sistemas",
      "Previsão de conclusão: junho de 2027",
      "Extensão universitária (149h): desenvolvimento em Next.js de plataforma de conscientização e apoio contra violência doméstica",
    ],
  },
  {
    id: "cs50",
    role: "CS50x — Introduction to Computer Science",
    company: "Harvard University (edX)",
    period: "2023 — 2024",
    type: "education",
    icon: "FaGraduationCap",
    description: [
      "Conclusão do curso de Ciência da Computação de Harvard",
      "Fundamentos de algoritmos, estruturas de dados, C, Python e SQL",
      "Projeto final: Habits Dashboard — sistema de rastreamento de hábitos diários",
    ],
  },
  {
    id: "bootcamp-ia",
    role: "Bootcamp de Inteligência Artificial",
    company: "Bradesco",
    period: "2024",
    type: "education",
    icon: "SiOpenai",
    description: [
      "Bootcamp focado em fundamentos e aplicações de Inteligência Artificial",
    ],
  },
];

export const languages: Language[] = [
  {
    name: "Português",
    level: "Nativo",
    flag: "🇧🇷",
    percentage: 100,
  },
  {
    name: "Inglês",
    level: "Avançado",
    flag: "🇺🇸",
    percentage: 80,
  },
  {
    name: "Espanhol",
    level: "Intermediário",
    flag: "🇪🇸",
    percentage: 55,
  },
  {
    name: "Italiano",
    level: "Intermediário",
    flag: "🇮🇹",
    percentage: 50,
  },
];
