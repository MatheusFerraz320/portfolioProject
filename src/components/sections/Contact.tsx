"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    name: "GitHub",
    url: "https://github.com/MatheusFerraz320",
    icon: <FaGithub size={24} />,
    color: "hover:text-white",
    label: "/MatheusFerraz320",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matheus-ferraz-6a1525379/",
    icon: <FaLinkedin size={24} />,
    color: "hover:text-blue-400",
    label: "in/matheus-ferraz",
  },
  {
    name: "Email",
    url: "mailto:matheusaugustosabinoferraz@outlook.com",
    icon: <FaEnvelope size={24} />,
    color: "hover:text-red-400",
    label: "matheusaugustosabinoferraz@outlook.com",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5513991621955",
    icon: <FaWhatsapp size={24} />,
    color: "hover:text-green-400",
    label: "+55 13 99162-1955",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4">
            Entre em Contato
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Vamos transformar sua ideia em solução digital. Me mande uma
            mensagem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-6 rounded-xl bg-surface border border-border ${contact.color} transition-all duration-300 group hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]`}
            >
              <div className="flex-shrink-0">{contact.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white">{contact.name}</p>
                <p className="text-sm text-text-secondary truncate">
                  {contact.label}
                </p>
              </div>
              <FaArrowRight className="text-text-muted group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-text-secondary text-sm">
            Disponivel para projetos freelancers, colaboração e novas
            oportunidades.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
