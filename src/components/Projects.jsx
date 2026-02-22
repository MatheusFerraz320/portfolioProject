import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

// ==========================================
// CONFIGURAÇÃO & DADOS
// ==========================================
// Centralizei os projetos para facilitar a manutenção.
// Adicionei tags para filtro e "featured" para destaque.

const PROJECTS_DATA = [
  {
    id: "email-classifier",
    title: "Email Classifier (IA)",
    category: "AI / Full-Stack",
    featured: true,
    technologies: ["Python", "FastAPI", "IA Zero-Shot", "React", "Tailwind"],
    description: "Aplicação inteligente que classifica e-mails automaticamente em produtivos ou improdutivos utilizando IA Zero-Shot. Oferece score de confiança e sugestão de resposta.",
    features: [
      "Classificação automática via IA",
      "Score de confiança e justificativa",
      "Sugestão de resposta automática",
      "Upload de arquivos .txt e .pdf"
    ],
    video: "/videos/emailClassifier.mp4",
    codeLink: "https://github.com/seu-usuario/email-classifier",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    id: "personal-tracker",
    title: "Personal Tracker",
    category: "Full-Stack",
    featured: true,
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Tailwind"],
    description: "Sistema de gestão para personal trainers. Permite controle total de alunos, treinos e pagamentos, com autenticação segura e banco de dados relacional.",
    features: [
      "Autenticação JWT & Bcrypt",
      "Gestão de Treinos e Alunos",
      "Banco de dados PostgreSQL",
      "Deploy em produção"
    ],
    video: "/videos/personalTracker.mp4",
    codeLink: "Projeto Comercial",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "gym-system",
    title: "Gym System",
    category: "Full-Stack",
    featured: false,
    technologies: ["Node.js", "Express", "React", "Tailwind", "SQLite"],
    description: "Sistema robusto para gerenciamento de academias, cobrindo mensalidades, fichas de treino e controle de acesso.",
    video: "/videos/gymSystem.mp4",
    codeLink: "https://github.com/seu-usuario/gym-system",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    id: "websites",
    title: "Pro Websites / Landing Pages",
    category: "Front-end",
    featured: false,
    technologies: ["React", "Tailwind", "SEO", "Performance"],
    description: "Coleção de landing pages de alta conversão desenvolvidas para clientes, com foco em SEO, performance e design responsivo.",
    video: "/videos/landingPage.mp4",
    codeLink: "Projeto Comercial",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: "habits",
    title: "Habits Dashboard",
    category: "Full-Stack",
    featured: false,
    technologies: ["Python (Flask)", "SQLite", "Bootstrap", "HTML/CSS"],
    description: "Dashboard para rastreamento de hábitos diários. Projeto final do curso CS50x de Harvard, focado em lógica e persistência de dados.",
    video: "/videos/healthyFlow.mp4",
    codeLink: "https://github.com/seu-usuario/habits-dashboard",
    gradient: "from-pink-500 to-rose-500"
  }
];

const CATEGORIES = ["Todos", "Full-Stack", "Front-end", "AI / Full-Stack"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("Todos");

  // Filtra os projetos com base na categoria selecionada
  const filteredProjects = PROJECTS_DATA.filter((project) => 
    filter === "Todos" ? true : project.category === filter
  );

  return (
    <section id="projects" className="relative w-full min-h-screen bg-neutral-950 text-gray-100 py-24 px-4 overflow-hidden font-sans">
      
      {/* BACKGROUND GLOW */}
      {/* Adicionei 'blobs' de luz para dar profundidade ao fundo preto */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-6"
          >
            Projetos Selecionados
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma vitrine de soluções reais, focadas em performance e experiência do usuário.
          </p>
        </div>

        {/* FILTROS */}
        {/* Botões simples para filtrar a lista sem recarregar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-neutral-900/50 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500"
              >
                {/* Mídia do Card */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10 opacity-80" />
                  
                  {project.video ? (
                    <video
                      src={project.video}
                      muted loop playsInline
                      onMouseOver={(e) => e.target.play()}
                      onMouseOut={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                  )}

                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-xs font-bold px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 relative z-20 -mt-12">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack (Resumida) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-600 px-2 py-1">+</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Ver detalhes <FaPlay className="text-[10px]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* MODAL DE DETALHES */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              layoutId={selectedProject.id}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              
              {/* Esquerda: Mídia */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative group">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls autoPlay className="w-full h-full object-contain max-h-[50vh] md:max-h-full"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${selectedProject.gradient}`} />
                )}
                {/* Botão Fechar Mobile */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:hidden p-2 bg-black/50 rounded-full text-white z-50"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Direita: Info */}
              <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto custom-scrollbar bg-neutral-900">
                 {/* Botão Fechar Desktop */}
                 <button 
                  onClick={() => setSelectedProject(null)}
                  className="hidden md:block self-end p-2 text-gray-400 hover:text-white transition-colors mb-4"
                >
                  <FaTimes size={20} />
                </button>

                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <span className="text-indigo-400 text-sm font-semibold mb-6 block">{selectedProject.category}</span>

                <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                  {selectedProject.description}
                </p>

                {selectedProject.features && (
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                       <FaLayerGroup /> Destaques
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-white/10">
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub size={20} />
                    {selectedProject.codeLink.includes("http") ? "Ver Código" : "Projeto Comercial"}
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}