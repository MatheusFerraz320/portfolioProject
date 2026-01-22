import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
        {
      title: "Landing page para curso de idiomas",
      technologies: "HTML, CSS, JavaScript, React.js, Tailwind, Node.js(integração com gateway de pagamento)",
      description:
        "Landing page para curso de idiomas, otimizada para SEO e performance, com código limpo e boas práticas.",
      video: "/videos/languagePage.mp4",
      codeLink: "Projeto comercial",
    },
    {
      title: "Professional Websites / Landing Pages",
      technologies: "HTML, CSS, JavaScript, React.js, Tailwind",
      description:
        "Sites profissionais e landing pages responsivas, otimizadas para SEO e performance, com código limpo e boas práticas , icones direcionamento para conversão em redes sociais etc.",
      video: "/videos/landingPage.mp4",
      codeLink: "Projeto comercial",
    },
    {
      title: "Currency Converter",
      technologies: "HTML5, CSS3 + Bootstrap 5, JavaScript (ES6), Frankfurter API",
      description:
        "Conversor de moedas simples e responsivo, construído com HTML, CSS, JavaScript e a Frankfurter API.",
      features: [
        "Conversão de moedas em tempo real",
        "Suporte para USD, BRL, EUR, JPY",
        "Layout responsivo usando Bootstrap 5",
        "Validação de entrada e mensagens de erro amigáveis",
        "Exibição da data de conversão da API",
      ],
      image: "/images/currencyConverter.png",
      codeLink: "https://github.com/seu-usuario/currency-converter",
    },
    {
      title: "Habits Dashboard",
      technologies: "HTML, Bootstrap, JavaScript, Python (Flask), SQLite",
      description:
        "Aplicação completa para monitoramento de hábitos diários, com persistência de dados e layout responsivo. Esse foi meu projeto final para o curso CS50x de Harvard EDX meu primeiro projeto full stack.",
      features: [
        "Inserção e remoção de hábitos",
        "Habit check (marcar/desmarcar conclusão)",
        "Reset automático por período",
        "Frontend com HTML, CSS e Bootstrap",
        "Backend Python com Flask",
        "Banco de dados SQLite",
      ],
      video : "/videos/healthyFlow.mp4",
      codeLink: "https://github.com/seu-usuario/habits-dashboard",
    },
    {
      title: "Gym System",
      technologies: "Node.js (Express), React, Tailwind, Full Stack",
      description:
        "Sistema completo de academia em desenvolvimento, voltado para o gerenciamento de alunos, mensalidades e funcionários. O projeto é full stack, integrando um backend robusto em Node.js com Express, um frontend moderno em React + Tailwind e persistência de dados com SQLite. A solução busca oferecer uma plataforma escalável e intuitiva para controle administrativo, financeiro e operacional da academia. Ainda está em andamento, com novas funcionalidades sendo adicionadas continuamente.",
      video: "/videos/gymSystem.mp4",
      codeLink: "https://github.com/seu-usuario/gym-system",
    },
  ];

  return (
    <div
      id="projects"
      className="w-screen min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 text-gray-900 flex flex-col items-center justify-center px-6 py-20 font-serif"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -50, scale: 0.8, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 2, type: "spring", stiffness: 80 }}
        className="
          text-6xl font-extrabold mb-16 tracking-tight 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-black via-gray-900 to-black
          hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]
          hover:tracking-widest
          transition-all duration-700 ease-in-out
  "
      >
        Portfolio
      </motion.h2>

      {/* Grid de cards minimalistas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {project.video ? (
              <video
                src={project.video}
                className="object-cover h-80 w-full transition-transform duration-300 group-hover:scale-110"
                muted
                autoPlay
                loop
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="object-cover h-80 w-full transition-transform duration-300 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
            >
              {/* Botão fechar */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  className="rounded-xl mb-4 object-cover h-72 w-full shadow-md"
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-xl mb-4 object-cover h-72 w-full shadow-md"
                />
              )}

              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-sm italic mb-3 text-gray-600">
                {selectedProject.technologies}
              </p>
              <p className="text-base leading-relaxed mb-4 text-gray-700">
                {selectedProject.description}
              </p>

              {selectedProject.features && (
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
                  {selectedProject.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              )}

              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
              >
                <FaGithub className="text-xl" /> Ver código no GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}