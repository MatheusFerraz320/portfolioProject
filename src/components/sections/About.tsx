"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface via-background to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
            Sobre Mim
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group flex-shrink-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface">
              <img
                src="/images/fotoMatheus.jpeg"
                alt="Matheus Ferraz"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              De Policial Militar a{" "}
              <span className="text-primary">Desenvolvedor Full-Stack</span>
            </h3>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Meu nome é{" "}
                <strong className="text-white">Matheus Ferraz</strong>. Durante
                anos atuei na Polícia Militar de São Paulo, onde aprendi
                disciplina, responsabilidade e tomada de decisão sob pressão.
              </p>

              <p>
                Quando decidi migrar para a tecnologia, não foi apenas uma troca
                de carreira. Foi uma escolha consciente de construir algo novo
                com o mesmo comprometimento e disciplina que sempre levei para
                minha profissão.
              </p>

              <p>
                Hoje já desenvolvi e desenvolvo aplicações full stack,
                estruturando APIs, modelando bancos de dados e criando
                interfaces que resolvem problemas reais. Já entreguei soluções
                completas do zero, com autenticação segura, arquitetura
                organizada e deploy em produção.
              </p>

              <p>
                Não me preocupo apenas em fazer funcionar. Me preocupo em fazer
                bem feito, com clareza, segurança e estrutura para crescer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
