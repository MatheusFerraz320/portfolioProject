"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaQuoteLeft,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

const milestones = [
  {
    icon: <FaShieldAlt className="text-cyan-400" />,
    step: "PMSP",
    period: "Antes de 2023",
    title: "A Base: Polícia Militar",
    text: "Anos de serviço na Polícia Militar de São Paulo. A rotina exigia disciplina, resiliência, tomada de decisão sob pressão e trabalho em equipe — valores que carrego até hoje dentro de cada sprint.",
  },
  {
    icon: <FaGraduationCap className="text-accent" />,
    step: "CS50x",
    period: "2023 – 2024",
    title: "O Ponto de Virada: a Chama da Programação",
    text: "Durante a transição, encontrei a Ciência da Computação. Concluí o CS50x de Harvard — algoritmos, estruturas de dados, C, Python e SQL — e me apaixonei pela lógica de transformar problemas em soluções.",
  },
  {
    icon: <FaCode className="text-primary" />,
    step: "Full-Stack",
    period: "2025 – Hoje",
    title: "Construindo a Carreira de Dev",
    text: "Ingressei em Análise e Desenvolvimento de Sistemas (UNIASSELVI) e entrei no mercado. Hoje atuo como full-stack em todo o ciclo: APIs, autenticação JWT, arquitetura de componentes e bancos relacionais até o deploy em produção.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface via-background to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
            Sobre Mim
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Da disciplina militar à engenharia de software — uma história de
            propósito, coragem e aprendizado contínuo.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group flex-shrink-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-surface">
              <img
                src="/images/fotoMatheus.jpeg"
                alt="Matheus Ferraz"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {["PMSP →", "CS50x →", "Full-Stack"].map((step, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold text-white bg-surface border border-border px-2.5 py-1 rounded-full whitespace-nowrap"
                >
                  {step}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              De Policial Militar a{" "}
              <span className="text-primary">Desenvolvedor Full-Stack</span>
            </h3>

            <div className="relative mb-8">
              <FaQuoteLeft className="text-primary/30 text-3xl absolute top-0 left-0" />
              <p className="text-text-secondary leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0 text-lg italic pl-10">
                Eu não troquei um uniforme por um teclado — eu levei comigo o
                que ele me ensinou. A mesma disciplina que me manteve firme no
                quartel é a que hoje me faz escrever código com
                responsabilidade, resiliência e visão de impacto real.
              </p>
            </div>

            <p className="text-text-secondary mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Da Polícia Militar de São Paulo ao full-stack, construí uma base
              sólida: hoje atuo em todo o ciclo de desenvolvimento — modelagem
              de API, autenticação JWT, arquitetura de componentes e bancos
              relacionais até o deploy em produção — sempre em times ágeis
              (Scrum/Kanban), com foco em qualidade de código, debugging
              avançado e melhoria contínua de performance.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {[
                "React",
                "Next.js",
                "Nest.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Prisma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {milestones.map((m, i) => (
            <motion.div
              key={m.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-surface border border-border rounded-2xl p-7 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {m.icon}
                </div>
                <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                  {m.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {m.text}
              </p>

              <div className="absolute top-6 right-6 text-xs font-bold text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
