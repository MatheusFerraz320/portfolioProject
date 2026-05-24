"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaGitAlt,
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
};

const categories: { label: string; key: string; color: string }[] = [
  { label: "Frontend", key: "frontend", color: "border-primary/30" },
  { label: "Backend", key: "backend", color: "border-secondary/30" },
  { label: "Banco de Dados", key: "database", color: "border-accent/30" },
  { label: "Ferramentas", key: "tools", color: "border-white/10" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full px-4">
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

        <div className="space-y-12">
          {categories.map((cat, catIndex) => {
            const filtered = skills.filter((s) => s.category === cat.key);

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-0.5 w-6 rounded-full ${cat.color.replace("border-", "bg-")}`} />
                  <span className="text-xs font-bold text-text-muted uppercase tracking-[0.15em]">
                    {cat.label}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {filtered.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: (catIndex * filtered.length + index) * 0.03,
                        duration: 0.4,
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(255,255,255,0.3)",
                      }}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-border backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="mb-2.5 group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
