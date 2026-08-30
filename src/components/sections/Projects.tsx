"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTimes,
  FaCheckCircle,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";
import { projects, categories } from "@/data/projects";

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState("Todos");

  const filtered = projects.filter((p) =>
    filter === "Todos" ? true : p.category === filter
  );

  const selectedProject = projects.find((p) => p.id === selected);

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6"
          >
            Projetos Selecionados
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Uma vitrine de soluções reais, focadas em performance e experiência
            do usuário.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-surface text-text-secondary border-border hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project.id)}
                className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />

                  {project.poster ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.poster}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-4xl font-bold text-white/30 select-none">{project.title.charAt(0)}</span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 z-30">
                    <span className="text-xs font-bold px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 relative z-20 -mt-12">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-text-secondary bg-white/5 px-2 py-1 rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-text-muted px-2 py-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Ver detalhes <FaArrowRight className="text-[10px]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-border w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="w-full md:w-3/5 bg-black relative flex items-center justify-center">
                {selectedProject.poster ? (
                  <img
                    src={selectedProject.poster}
                    alt={`${selectedProject.title}`}
                    className="w-full h-full object-cover max-h-[50vh] md:max-h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${selectedProject.gradient}`}
                    />
                    <span className="absolute text-8xl font-bold text-white/20 select-none">
                      {selectedProject.title.charAt(0)}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 md:hidden p-2 bg-black/50 rounded-full text-white z-50"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto bg-surface">
                <button
                  onClick={() => setSelected(null)}
                  className="hidden md:block self-end p-2 text-text-secondary hover:text-white transition-colors mb-4"
                >
                  <FaTimes size={20} />
                </button>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <span className="text-primary text-sm font-semibold mb-6 block">
                  {selectedProject.category}
                </span>

                <p className="text-text-secondary leading-relaxed mb-8 text-sm">
                  {selectedProject.description}
                </p>

                {selectedProject.features && (
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                      <FaLayerGroup /> Destaques
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                        >
                          <FaCheckCircle
                            className="text-primary mt-1 flex-shrink-0"
                            size={14}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-border space-y-3">
                  {selectedProject.codeLink.includes("http") ||
                  selectedProject.backLink ? (
                    <>
                      <a
                        href={selectedProject.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <FaGithub size={20} />
                        {selectedProject.backLink
                          ? "Ver Código (Front-end)"
                          : "Ver Código"}
                      </a>
                      {selectedProject.backLink && (
                        <a
                          href={selectedProject.backLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-transparent border border-white/20 text-white font-bold py-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <FaGithub size={20} />
                          Ver Código (Back-end)
                        </a>
                      )}
                    </>
                  ) : (
                    <div>
                      <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FaLayerGroup /> Stacks & Foco
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-text-secondary bg-white/5 px-2.5 py-1.5 rounded border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
