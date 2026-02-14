import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  //  Padroniza: todo projeto tem `videos` (array) OU `image` (string)
  const projects = [
    {
      title: "Email Classifier (IA) – Produtivo vs Improdutivo",
      technologies:
        "Python, FastAPI, Pydantic, IA Zero-Shot, HTML, Tailwind, JavaScript",
      description:
        "Aplicação full stack que utiliza Inteligência Artificial para classificar e-mails automaticamente em produtivos ou improdutivos. A API retorna categoria, score de confiança e resposta sugerida, com validações robustas e documentação via Swagger.",
      features: [
        "Classificação automática com IA Zero-Shot",
        "Score de confiança e justificativa",
        "Resposta sugerida automaticamente",
        "Upload de arquivos .txt e .pdf",
        "API documentada com Swagger (OpenAPI)",
      ],
      videos: ["/videos/emailClassifier.mp4"], 
      codeLink: "https://github.com/seu-usuario/email-classifier",
    },

    {
      title: "Personal Tracker",
      technologies:
        "React.js, Tailwind CSS, Node.js (Express), PostgreSQL (Supabase), JWT, Bcrypt",
      description:
        "Sistema fullstack para gestão de aulas e treinos profissionais, desenvolvido para atender uma necessidade real de organização e controle de uma profissional de educação física. A aplicação permite gerenciamento completo de treinos, autenticação segura e persistência de dados em banco relacional em produção.",
      features: [
        "Autenticação segura com JWT",
        "Criptografia de senhas com Bcrypt",
        "Middleware de autorização para rotas privadas",
        "Cadastro, listagem e exclusão de treinos",
        "Relacionamento entre usuários e treinos (PostgreSQL)",
        "API REST estruturada com separação clara de responsabilidades",
        "Deploy em ambiente real (Frontend + Backend + Banco em nuvem)",
      ],
      videos: ["/videos/personalTracker.mp4"],
      codeLink: "Projeto comercial (código privado).",
    },

    {
      title: "Professional Websites / Landing Pages",
      technologies: "HTML, CSS, JavaScript, React.js, Tailwind",
      description:
        "Sites profissionais e landing pages responsivas, otimizadas para SEO e performance, com código limpo e boas práticas.",
      videos: ["/videos/landingPage.mp4", "/videos/languagePage.mp4"],
      codeLink: "Projeto comercial (código privado).",
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
      videos: ["/videos/healthyFlow.mp4"],
      codeLink: "https://github.com/seu-usuario/habits-dashboard",
    },

    {
      title: "Gym System",
      technologies: "Node.js (Express), React, Tailwind, Full Stack",
      description:
        "Sistema completo de academia em desenvolvimento, voltado para o gerenciamento de alunos, mensalidades e funcionários.",
      videos: ["/videos/gymSystem.mp4"],
      codeLink: "https://github.com/seu-usuario/gym-system",
    },
  ];

  // CARD: pega o primeiro vídeo se existir, senão usa imagem
  const getCardMedia = (project) => {
    if (project.videos?.length) return { type: "video", src: project.videos[0] };
    return { type: "image", src: project.image };
  };

  // MODAL: se tiver vídeos, retorna a lista; senão retorna uma lista com imagem
  const getModalMedia = (project) => {
    if (project.videos?.length) return project.videos.map((src) => ({ type: "video", src }));
    return [{ type: "image", src: project.image }];
  };

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
        transition={{ duration: 1.2, type: "spring", stiffness: 90 }}
        className="text-6xl font-extrabold mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-900 to-black"
      >
        Portfolio
      </motion.h2>

      {/* Grid de cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl">
        {projects.map((project, index) => {
          const media = getCardMedia(project);

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group"
            >
              {media.type === "video" ? (
                <video
                  src={media.src}
                  className="object-cover h-80 w-full transition-transform duration-300 group-hover:scale-110"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={media.src}
                  alt={project.title}
                  className="object-cover h-80 w-full transition-transform duration-300 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)} 
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()} // não fecha clicando dentro
            >
              {/* Botão fechar */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                aria-label="Fechar modal"
              >
                ✕
              </button>

              {/*  MODAL: renderiza todos os vídeos (ou imagem se não tiver) */}
              {getModalMedia(selectedProject).map((m) =>
                m.type === "video" ? (
                  <video
                    key={m.src}
                    src={m.src}
                    controls
                    className="rounded-xl mb-4 object-cover h-72 w-full shadow-md"
                  />
                ) : (
                  <img
                    key={m.src}
                    src={m.src}
                    alt={selectedProject.title}
                    className="rounded-xl mb-4 object-cover h-72 w-full shadow-md"
                  />
                )
              )}

              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>

              <p className="text-sm italic mb-3 text-gray-600">
                {selectedProject.technologies}
              </p>

              <p className="text-base leading-relaxed mb-4 text-gray-700">
                {selectedProject.description}
              </p>

              {selectedProject.features?.length ? (
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
                  {selectedProject.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              ) : null}

              
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition break-all"
              >
                <FaGithub className="text-xl" /> {selectedProject.codeLink}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
