import { motion } from "framer-motion";
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-neutral-950 text-white flex items-center justify-center overflow-hidden font-sans"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300"
        >
          Full-Stack Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-pulse"
        >
          Matheus Ferraz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Transformando ideias em experiências digitais 
          <span className="text-white font-semibold"> modernas</span> e 
          <span className="text-white font-semibold"> de alto impacto</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            Ver Projetos
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Sobre Mim
          </a>
        </motion.div>

        {/* SOCIAL ICONS (VISIBLE ON MOBILE/TABLET) */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex lg:hidden justify-center gap-8 mt-12"
        >
          <a href="https://github.com/MatheusFerraz320" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/matheus-ferraz-6a1525379/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:matheusaugustosabinoferraz@outlook.com" className="text-3xl text-gray-400 hover:text-red-400 transition-colors">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/5513991621955" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-green-400 transition-colors">
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <FaChevronDown className="text-2xl" />
      </motion.div>
    </section>
  );
}