"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { experiences } from "@/data/experience";

const iconMap: Record<string, React.ReactNode> = {
  FaShieldAlt: <FaShieldAlt className="text-primary" size={20} />,
  FaGraduationCap: <FaGraduationCap className="text-accent" size={20} />,
  FaLaptopCode: <FaLaptopCode className="text-secondary" size={20} />,
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4">
            Trajetória
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Da disciplina militar à construção de soluções digitais — uma
            transição movida por propósito e dedicação.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:flex md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                {iconMap[exp.icon]}
              </div>

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="inline-block text-xs font-bold text-primary mb-2 tracking-wider uppercase">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-text-secondary font-medium mb-4">
                  {exp.company}
                </p>
                <ul
                  className={`space-y-2 ${
                    index % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""
                  }`}
                >
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary leading-relaxed"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
