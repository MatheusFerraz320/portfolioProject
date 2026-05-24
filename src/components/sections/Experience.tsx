"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaBug,
  FaGraduationCap,
  FaChevronDown,
  FaRobot,
} from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import {
  professionalExperiences,
  educationExperiences,
} from "@/data/experience";

const iconMap: Record<string, React.ReactNode> = {
  FaBriefcase: <FaBriefcase className="text-cyan-400" size={18} />,
  FaLaptopCode: <FaLaptopCode className="text-secondary" size={18} />,
  FaBug: <FaBug className="text-red-400" size={18} />,
  FaGraduationCap: <FaGraduationCap className="text-accent" size={18} />,
  FaRobot: <FaRobot className="text-yellow-400" size={18} />,
  SiOpenai: <SiOpenai className="text-green-400" size={18} />,
};

function Card({
  exp,
  index,
}: {
  exp: (typeof professionalExperiences)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-surface border border-border rounded-xl p-5 hover:border-white/20 transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
            {iconMap[exp.icon]}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-white mb-0.5">
              {exp.role}
            </h3>
            <p className="text-sm text-text-secondary">{exp.company}</p>
          </div>

          <FaChevronDown
            className={`text-text-muted mt-1.5 transition-transform duration-300 flex-shrink-0 ${
              open ? "rotate-180" : ""
            }`}
            size={14}
          />
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-4 pt-4 border-t border-border space-y-2">
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0 block w-1 h-1 rounded-full bg-primary" />
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 px-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-sm font-bold text-white tracking-wider uppercase">
                Profissional
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
            </div>

            <div className="space-y-4">
              {professionalExperiences.map((exp, i) => (
                <Card key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
              <span className="text-sm font-bold text-white tracking-wider uppercase">
                Educação
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-accent/50 to-transparent" />
            </div>

            <div className="space-y-4">
              {educationExperiences.map((exp, i) => (
                <Card key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
