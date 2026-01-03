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

const SocialMediaIcons = () => {
  return (
    <motion.div
      className="hidden md:block fixed bottom-25 left-5.5 lg:left-13 after:fixed after:bottom-0 after:left-10.25 after:lg:left-17.75 after:w-px after:h-22.5 after:bg-gray-500 after:rounded-full"
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
      <ul className="flex flex-col gap-2">
        {smi.map((item) => {
          return (
            <li
              key={item.name}
              className="p-2.5 text-gray-500 hover:text-primary hover:transform hover:-translate-y-1 transition duration-300 cursor-pointer"
            >
              <a href={item.link}>{item.icon}</a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SocialMediaIcons;
