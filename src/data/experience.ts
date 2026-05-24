import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "pmsp",
    role: "Policial Militar",
    company: "Polícia Militar do Estado de São Paulo",
    period: "2018 — 2024",
    type: "work",
    icon: "FaShieldAlt",
    description: [
      "Atuação operacional com foco em disciplina, resolução de problemas sob pressão e trabalho em equipe.",
      "Desenvolvimento de habilidades de liderança, comunicação clara e tomada de decisão em ambientes críticos.",
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
      "Conclusão do curso de Ciência da Computação de Harvard com projeto final aprovado.",
      "Fundamentos de algoritmos, estruturas de dados, C, Python, SQL e boas práticas de programação.",
    ],
  },
  {
    id: "dev-fullstack",
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer / Autônomo",
    period: "2024 — Presente",
    type: "work",
    icon: "FaLaptopCode",
    description: [
      "Desenvolvimento de aplicações full-stack com React, Node.js, TypeScript, PostgreSQL e APIs REST.",
      "Criação de landing pages de alta conversão, sistemas de gestão e soluções com IA integrada.",
      "Entrega de projetos completos do zero ao deploy, com autenticação segura e arquitetura escalável.",
    ],
  },
];
