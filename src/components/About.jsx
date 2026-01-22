import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

export default function About() {
  return (
    <div
      id="about"
      className="w-screen min-h-screen bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#2c2c2c]
             text-white flex flex-col items-center px-6 py-20 font-[Montserrat]"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 hover:text-gray-300 hover:scale-105 transition"
      >
        Sobre Mim
      </motion.h2>

      {/* Foto + Texto */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-16 mb-16 max-w-5xl"
      >
        <motion.img
          variants={item}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          src="/images/fotoMatheus.jpeg"
          alt="Foto de Matheus"
          className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-gray-700"
        />

        <motion.div
          variants={container}
          className="max-w-3xl text-lg md:text-xl leading-relaxed space-y-6 text-center md:text-left text-gray-300"
        >
          <motion.p variants={item}>
            Meu nome é <span className="font-semibold">Matheus Ferraz</span>, tenho 25 anos e trago uma trajetória única: servi como <span className="border-b border-gray-500">Policial Militar em São Paulo por 6 anos</span>, sempre movido pela disciplina e dedicação. Paralelamente, mantive minha paixão por tecnologia, que me levou a ingressar na faculdade de <span className="italic">Análise e Desenvolvimento de Sistemas</span>.
          </motion.p>

          <motion.p variants={item}>
            Atuei em <span className="border-b border-gray-500">projetos freelancers</span> e colaborei com outros desenvolvedores, adquirindo experiência prática e entregando soluções completas. Já desenvolvi desde <span className="italic">landing pages responsivas com integração de pagamentos e foco em conversão</span>, até sistemas fullstack criados em equipe ou como parte de projetos acadêmicos.
          </motion.p>

          <motion.p variants={item}>
            Minha missão é <span className="border-b border-gray-500">transformar ideias em linhas de código</span> e entregar projetos impactantes, sempre buscando excelência, inovação e resultados reais para clientes e empresas.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cursos + Formação */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-8 text-left"
      >
        {/* Card 1 */}
        <motion.div
          variants={item}
          animate={{ y: [0, -8, 0], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 25px rgba(255,255,255,0.1)", "0 0 0 rgba(0,0,0,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-black via-gray-900 to-gray-700 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-200">Cursos</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-400">
            <li>
              <span className="font-semibold">Harvard University – edX</span> <br />
              CS50x: Introduction to Computer Science – projeto final fullstack.
            </li>
            <li>
              <span className="font-semibold">React.js – freeCodeCamp</span> <br />
              Curso completo com projetos práticos e interfaces responsivas.
            </li>
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={item}
          animate={{ y: [0, -8, 0], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 25px rgba(255,255,255,0.1)", "0 0 0 rgba(0,0,0,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-black via-gray-900 to-gray-700 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-200">Formação Acadêmica</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-400">
            <li>
              <span className="font-semibold">Tecnólogo em Análise e Desenvolvimento de Sistemas</span> <br />
              Centro Universitário Leonardo da Vinci – em andamento, conclusão prevista 2027.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}