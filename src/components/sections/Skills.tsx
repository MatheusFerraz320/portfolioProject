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
import type { Skill } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  FaJsSquare: <span className="text-yellow-400 text-5xl font-bold">JS</span>,
  SiTypescript: <SiTypescript className="text-blue-500 text-5xl" />,
  FaReact: <FaReact className="text-blue-400 text-5xl" />,
  SiNextdotjs: <SiNextdotjs className="text-white text-5xl" />,
  SiTailwindcss: <SiTailwindcss className="text-cyan-400 text-5xl" />,
  FaHtml5: <FaHtml5 className="text-orange-500 text-5xl" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-500 text-5xl" />,
  FaNodeJs: <FaNodeJs className="text-green-500 text-5xl" />,
  FaPython: <FaPython className="text-yellow-300 text-5xl" />,
  SiFastapi: <SiFastapi className="text-teal-400 text-5xl" />,
  FaDatabase: <FaDatabase className="text-gray-400 text-5xl" />,
  SiPostgresql: <SiPostgresql className="text-blue-300 text-5xl" />,
  SiMysql: <SiMysql className="text-blue-400 text-5xl" />,
  FaGitAlt: <FaGitAlt className="text-orange-600 text-5xl" />,
  SiDocker: <SiDocker className="text-blue-400 text-5xl" />,
  SiExpress: <SiExpress className="text-gray-300 text-5xl" />,
  SiWordpress: <SiWordpress className="text-blue-400 text-5xl" />,
  SiCypress: <SiCypress className="text-green-400 text-5xl" />,
};

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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.3)",
              }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-border backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {iconMap[skill.icon] || (
                  <span className="text-5xl text-white font-bold">?</span>
                )}
              </div>
              <p className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
