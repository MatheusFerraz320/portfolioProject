import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/MatheusFerraz320",
      icon: <FaGithub />,
      color: "hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/matheus-ferraz-6a1525379/",
      icon: <FaLinkedin />,
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      url: "mailto:matheusaugustosabinoferraz@outlook.com",
      icon: <FaEnvelope />,
      color: "hover:text-red-400"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5513991621955",
      icon: <FaWhatsapp />,
      color: "hover:text-green-400"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="hidden lg:flex fixed left-8 bottom-8 flex-col items-center gap-6 z-50 text-gray-400"
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl transition-all duration-300 transform hover:-translate-y-1 ${link.color}`}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
  );
}
