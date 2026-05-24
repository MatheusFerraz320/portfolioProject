"use client";

import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const stats = [
  { value: "2+", label: "Anos em Tech" },
  { value: "5+", label: "Projetos Entregues" },
  { value: "2", label: "Empresas" },
  { value: "3", label: "Tecnologias Domínio" },
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
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
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
            <h3 className="text-2xl font-bold text-white mb-4">
              De Policial Militar a{" "}
              <span className="text-primary">Desenvolvedor Full-Stack</span>
            </h3>

            <p className="text-text-secondary mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Minha trajetória é construída sobre{" "}
              <strong className="text-white">disciplina</strong>,{" "}
              <strong className="text-white">resiliência</strong> e{" "}
              <strong className="text-white">vontade de aprender</strong>. Dos
              anos na Polícia Militar de São Paulo ao desenvolvimento de
              soluções digitais completas — cada etapa me preparou para entregar
              código de qualidade com responsabilidade e visão de impacto real.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-surface border border-border"
                >
                  <span className="block text-xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Entrar em Contato <FaArrowRight size={12} />
              </a>
              <a
                href="/curriculo-matheus-ferraz.pdf"
                target="_blank"
                className="px-6 py-3 bg-transparent border border-primary/40 text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <FaDownload size={14} />
                Download Currículo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
