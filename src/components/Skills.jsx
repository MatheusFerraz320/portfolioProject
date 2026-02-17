import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiPostgresql, SiFastapi } from "react-icons/si";

// Lista de skills separada para fácil manutenção
const SKILLS_DATA = [
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 bg-neutral-950 text-white flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Título */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
            Tecnologias & Ferramentas
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid de Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-default group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {skill.icon}
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}