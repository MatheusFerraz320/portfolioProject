import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaGithub, FaPlay, FaTimes, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

// ==========================================
// DADOS (mantém os seus PROJECTS_DATA e CATEGORIES)
// ==========================================
const PROJECTS_DATA = [
  {
    id: "email-classifier",
    title: "Email Classifier (IA)",
    category: "AI / Full-Stack",
    featured: true,
    technologies: ["Python", "FastAPI", "IA Zero-Shot", "React", "Tailwind"],
    description:
      "Aplicação inteligente que classifica e-mails automaticamente em produtivos ou improdutivos utilizando IA Zero-Shot. Oferece score de confiança e sugestão de resposta.",
    features: [
      "Classificação automática via IA",
      "Score de confiança e justificativa",
      "Sugestão de resposta automática",
      "Upload de arquivos .txt e .pdf",
    ],
    video: "/videos/emailClassifier.mp4",
    codeLink: "https://github.com/seu-usuario/email-classifier",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "personal-tracker",
    title: "Personal Tracker",
    category: "Full-Stack",
    featured: true,
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Tailwind"],
    description:
      "Sistema de gestão para personal trainers. Permite controle total de alunos, treinos e pagamentos, com autenticação segura e banco de dados relacional.",
    features: [
      "Autenticação JWT & Bcrypt",
      "Gestão de Treinos e Alunos",
      "Banco de dados PostgreSQL",
      "Deploy em produção",
    ],
    video: "/videos/personalTracker.mp4",
    codeLink: "Projeto Comercial",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "gym-system",
    title: "Gym System",
    category: "Full-Stack",
    featured: false,
    technologies: ["Node.js", "Express", "React", "Tailwind", "SQLite"],
    description:
      "Sistema robusto para gerenciamento de academias, cobrindo mensalidades, fichas de treino e controle de acesso.",
    video: "/videos/gymSystem.mp4",
    codeLink: "https://github.com/seu-usuario/gym-system",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: "websites",
    title: "Pro Websites / Landing Pages",
    category: "Front-end",
    featured: false,
    technologies: ["React", "Tailwind", "SEO", "Performance"],
    description:
      "Coleção de landing pages de alta conversão desenvolvidas para clientes, com foco em SEO, performance e design responsivo.",
    video: "/videos/landingPage.mp4",
    codeLink: "Projeto Comercial",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: "habits",
    title: "Habits Dashboard",
    category: "Full-Stack",
    featured: false,
    technologies: ["Python (Flask)", "SQLite", "Bootstrap", "HTML/CSS"],
    description:
      "Dashboard para rastreamento de hábitos diários. Projeto final do curso CS50x de Harvard, focado em lógica e persistência de dados.",
    video: "/videos/healthyFlow.mp4",
    codeLink: "https://github.com/seu-usuario/habits-dashboard",
    gradient: "from-pink-500 to-rose-500",
  },
];

const CATEGORIES = ["Todos", "Full-Stack", "Front-end", "AI / Full-Stack"];

// ==========================================
// HOOK: detecta mobile (viewport)
// ==========================================
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, [breakpoint]);

  return isMobile;
}

// ==========================================
// HOOK: IntersectionObserver p/ lazy-load
// ==========================================
function useInView(ref, { rootMargin = "200px" } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, rootMargin]);

  return inView;
}

// ==========================================
// CARD MEDIA: super leve na grid
// - Mobile: não renderiza <video>
// - Desktop: renderiza <video> só em hover + quando está em view
// ==========================================
function ProjectMedia({ project, isMobile }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(wrapRef);
  const [hovered, setHovered] = useState(false);

  // no mobile: sem video na grid
  const shouldShowVideo = !isMobile && inView && hovered && project.video;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (shouldShowVideo) {
      // tenta tocar — se o browser bloquear, fica só no preview
      v.currentTime = 0;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [shouldShowVideo]);

  return (
    <div
      ref={wrapRef}
      className="relative h-52 sm:h-56 md:h-60 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10 opacity-80" />

      {/* Placeholder/Poster (sempre) */}
      <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />

      {/* Video só quando precisa (desktop) */}
      {shouldShowVideo && (
        <video
          ref={videoRef}
          src={project.video}
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover transform scale-105"
        />
      )}

      {/* Overlay “Preview” no mobile */}
      {isMobile && project.video && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-2 bg-black/55 backdrop-blur-md rounded-full border border-white/10 text-white">
            <FaPlay className="text-[10px]" /> Preview
          </span>
        </div>
      )}

      <div className="absolute top-4 right-4 z-20">
        <span className="text-xs font-bold px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white shadow-lg">
          {project.category}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("Todos");
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => (filter === "Todos" ? true : p.category === filter));
  }, [filter]);

  // trava scroll quando modal abre (melhora UX mobile)
  useEffect(() => {
    if (!selectedProject) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative w-full bg-neutral-950 text-gray-100 py-20 sm:py-24 px-4 overflow-hidden font-sans"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-4 sm:mb-6"
          >
            Projetos Selecionados
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Uma vitrine de soluções reais, focadas em performance e experiência do usuário.
          </p>
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                  : "bg-neutral-900/50 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.button
                key={project.id}
                type="button"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                exit={reduceMotion ? {} : { opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedProject(project)}
                className="text-left group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.45)] transition-all duration-500"
              >
                <ProjectMedia project={project} isMobile={isMobile} />

                {/* Conteúdo */}
                <div className="p-5 sm:p-6 relative z-20 -mt-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] text-gray-600 px-2 py-1">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Ver detalhes <FaPlay className="text-[10px]" />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? {} : { opacity: 1 }}
            exit={reduceMotion ? {} : { opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={reduceMotion ? false : { scale: 0.98, opacity: 0, y: 10 }}
              animate={reduceMotion ? {} : { scale: 1, opacity: 1, y: 0 }}
              exit={reduceMotion ? {} : { scale: 0.98, opacity: 0, y: 10 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Media */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain max-h-[45vh] md:max-h-full"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${selectedProject.gradient}`} />
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 md:hidden p-2 bg-black/50 rounded-full text-white z-50"
                  aria-label="Fechar"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Info */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col overflow-y-auto bg-neutral-900">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="hidden md:block self-end p-2 text-gray-400 hover:text-white transition-colors mb-2"
                  aria-label="Fechar"
                >
                  <FaTimes size={20} />
                </button>

                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <span className="text-indigo-400 text-sm font-semibold mb-5 block">
                  {selectedProject.category}
                </span>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm">{selectedProject.description}</p>

                {selectedProject.features?.length ? (
                  <div className="mb-6">
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
                ) : null}

                <div className="mt-auto pt-5 border-t border-white/10">
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub size={20} />
                    {selectedProject.codeLink?.includes?.("http") ? "Ver Código" : "Projeto Comercial"}
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