import type { Experience } from "@/types";

export const professionalExperiences: Experience[] = [
  {
    id: "b2-marketing",
    role: "Desenvolvedor Full Stack",
    company: "B2 Marketing Industrial",
    period: "2025 — Atual",
    type: "work",
    icon: "FaBriefcase",
    description: [
      "Desenvolvimento de aplicações web e landing pages com React.js e Next.js",
      "Criação e consumo de APIs REST para integração com serviços externos",
      "Modelagem e gerenciamento de banco de dados PostgreSQL",
      "Implementação de autenticação e controle de acesso com JWT",
      "Customização e desenvolvimento de sites em WordPress",
      "Otimização de performance e correção de bugs em produção",
      "Deploy e versionamento com Git, GitHub e Vercel",
      "Criação do B2Hub — sistema interno que centralizou o fluxo de chamados antes feito via WhatsApp",
    ],
  },
  {
    id: "frontend-itb",
    role: "Frontend Developer Júnior",
    company: "Inside the Box",
    period: "2026 — Atual",
    type: "work",
    icon: "FaLaptopCode",
    description: [
      "Correção e implementação de funcionalidades em React.js e Next.js",
      "Manutenção de aplicações em produção e resolução de bugs",
      "Consumo e integração de APIs REST",
      "Melhorias de interface e experiência do usuário",
      "Versionamento com Git e Bitbucket",
    ],
  },
  {
    id: "qa-itb",
    role: "Quality Assurance Engineer Júnior",
    company: "Inside the Box",
    period: "2026 — Atual",
    type: "work",
    icon: "FaBug",
    description: [
      "Testes e validação de APIs REST com Postman",
      "Identificação e documentação de bugs em frontend e backend",
      "Debugging e análise de logs para investigação de falhas",
      "Testes funcionais e exploratórios focados em estabilidade e UX",
      "Colaboração com devs na melhoria da qualidade do código",
    ],
  },
];

export const educationExperiences: Experience[] = [
  {
    id: "ads",
    role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    company: "Centro Universitário Leonardo da Vinci",
    period: "2025 — 2027",
    type: "education",
    icon: "FaGraduationCap",
    description: [
      "Formação superior em Análise e Desenvolvimento de Sistemas",
      "Previsão de conclusão: junho de 2027",
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
