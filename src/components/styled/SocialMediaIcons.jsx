import React from "react";
import { motion } from "framer-motion";

import { Linkedin, Github, Instagram } from "lucide-react";

const smi = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/aayd/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "github",
    link: "https://github.com/Tweekaayush",
    icon: <Github className="w-5 h-5" />,
  },
];

const SocialMediaIcons = () => {
  return (
    <motion.div
      className="hidden md:block fixed bottom-28 left-7.5 lg:left-15 after:fixed after:bottom-0 after:left-10.25 after:lg:left-17.75 after:w-px after:h-22.5 after:bg-primary-t after:rounded-full"
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
      <ul className="flex flex-col gap-6">
        {smi.map((item) => {
          return (
            <li key={item.name} className="hover:transform hover:-translate-y-1 transition duration-300">
              <a
                href={item.link}
                target="_blank"
                className="text-primary-t hover:text-primary cursor-pointer"
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SocialMediaIcons;
