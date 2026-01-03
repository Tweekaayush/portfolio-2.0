import React from "react";
import { motion } from "framer-motion";

import { Linkedin, Github, Instagram } from "lucide-react";

const smi = [
  {
    name: "linkedin",
    link: "https://linkedin.com",
    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    name: "github",
    link: "https://github.com",
    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    name: "instagram",
    link: "https://instagram.com",
    icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
];

const StyledLink = () => {
  return (
    <motion.div
      className="hidden md:block fixed bottom-48 -right-12 lg:-right-4.5 after:fixed after:bottom-0 after:right-10 after:lg:right-17.5 after:w-px after:h-22.5 after:bg-primary-t after:rounded-full"
      initial="hidden"
      whileInView="visible"
      transition={{
        delay: 1.5,
        duration: 0.5,
      }}
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <div className="transform rotate-90 hover:-translate-y-1 transition duration-300">
        <a
          href="mailto:aayush.dl8901@gmail.com"
          className="text-sm text-primary-t hover:text-primary transition duration-300"
        >
          aayush.dl8901@gmail.com
        </a>
      </div>
    </motion.div>
  );
};

export default StyledLink;
