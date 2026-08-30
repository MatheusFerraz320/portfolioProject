"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaChevronDown,
  FaGithub,
  FaServer,
  FaCode,
  FaLayerGroup,
  FaWrench,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiFastapi,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiExpress,
  SiMysql,
  SiWordpress,
  SiCypress,
  SiPostman,
  SiJira,
  SiTrello,
  SiJest,
} from "react-icons/si";
import { skills } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  FaJsSquare: <span className="text-yellow-400 text-4xl font-bold">JS</span>,
  SiTypescript: <SiTypescript className="text-blue-500 text-4xl" />,
  FaReact: <FaReact className="text-blue-400 text-4xl" />,
  SiNextdotjs: <SiNextdotjs className="text-white text-4xl" />,
  SiTailwindcss: <SiTailwindcss className="text-cyan-400 text-4xl" />,
  FaHtml5: <FaHtml5 className="text-orange-500 text-4xl" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-500 text-4xl" />,
  FaNodeJs: <FaNodeJs className="text-green-500 text-4xl" />,
  FaPython: <FaPython className="text-yellow-300 text-4xl" />,
  SiFastapi: <SiFastapi className="text-teal-400 text-4xl" />,
  FaDatabase: <FaDatabase className="text-gray-400 text-4xl" />,
  SiPostgresql: <SiPostgresql className="text-blue-300 text-4xl" />,
  SiMysql: <SiMysql className="text-blue-400 text-4xl" />,
  FaGitAlt: <FaGitAlt className="text-orange-600 text-4xl" />,
  SiDocker: <SiDocker className="text-blue-400 text-4xl" />,
  SiExpress: <SiExpress className="text-gray-300 text-4xl" />,
  SiWordpress: <SiWordpress className="text-blue-400 text-4xl" />,
  SiCypress: <SiCypress className="text-green-400 text-4xl" />,
  FaServer: <FaServer className="text-red-400 text-4xl" />,
  FaGithub: <FaGithub className="text-white text-4xl" />,
  SiPostman: <SiPostman className="text-orange-400 text-4xl" />,
  SiJest: <SiJest className="text-red-400 text-4xl" />,
  SiJira: <SiJira className="text-blue-400 text-4xl" />,
  SiTrello: <SiTrello className="text-sky-400 text-4xl" />,
};

const categories: {
  label: string;
  key: string;
  icon: React.ReactNode;
  gradient: string;
  countDesc: string;
}[] = [
  {
    label: "Frontend",
    key: "frontend",
    icon: <FaCode className="text-primary" size={18} />,
    gradient: "from-primary/10 to-transparent",
    countDesc: "Tecnologias de interface e experiência do usuário",
  },
  {
    label: "Backend",
    key: "backend",
    icon: <FaServer className="text-secondary" size={18} />,
    gradient: "from-secondary/10 to-transparent",
    countDesc: "APIs, servidores e lógica de negócio",
  },
  {
    label: "Banco de Dados",
    key: "database",
    icon: <FaLayerGroup className="text-accent" size={18} />,
    gradient: "from-accent/10 to-transparent",
    countDesc: "Armazenamento e modelagem de dados",
  },
  {
    label: "Ferramentas",
    key: "tools",
    icon: <FaWrench className="text-text-muted" size={18} />,
    gradient: "from-white/5 to-transparent",
    countDesc: "DevOps, versionamento e produtividade",
  },
];

export default function Skills() {
  const [openCat, setOpenCat] = useState<string | null>(null);

  const toggle = (key: string) =>
    setOpenCat((prev) => (prev === key ? null : key));

  return (
    <section
      id="skills"
      className="w-full py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Tecnologias & Ferramentas
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-3">
          {categories.map((cat) => {
            const filtered = skills.filter((s) => s.category === cat.key);
            const isOpen = openCat === cat.key;

            return (
              <div
                key={cat.key}
                className="rounded-2xl border border-border overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(cat.key)}
                  className={`w-full flex items-center gap-4 p-5 text-left transition-all duration-300 bg-surface hover:bg-surface-hover ${
                    isOpen ? "border-b border-border" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    {cat.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold text-white">
                      {cat.label}
                    </span>
                    <p className="text-xs text-text-muted mt-0.5">
                      {isOpen ? "Clique para recolher" : cat.countDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-muted font-medium tabular-nums">
                      {filtered.length}{" "}
                      {filtered.length === 1 ? "item" : "itens"}
                    </span>
                    <FaChevronDown
                      className={`text-text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={14}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0">
                        <div className="pt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                          {filtered.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: index * 0.04,
                                duration: 0.3,
                              }}
                              whileHover={{
                                scale: 1.05,
                                borderColor: "rgba(255,255,255,0.3)",
                              }}
                              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/5 border border-border backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                            >
                              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                                {iconMap[skill.icon] || (
                                  <span className="text-4xl text-white font-bold">
                                    ?
                                  </span>
                                )}
                              </div>
                              <p className="text-xs font-medium text-text-secondary group-hover:text-white transition-colors text-center leading-tight">
                                {skill.name}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
