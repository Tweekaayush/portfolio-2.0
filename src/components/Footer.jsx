import React from "react";
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

const Footer = () => {
  return (
    <footer className="px-6.25 py-2.5 flex flex-col items-center text-gray-400">
      <ul className="flex md:hidden gap-4 sm:pb-2.5">
        {smi.map((item) => {
          return (
            <li
              key={item.name}
              className="p-2.5 hover:transform hover:-translate-y-1 hover:text-primary transition duration-300 cursor-pointer"
            >
              {item.icon}
            </li>
          );
        })}
      </ul>
      <p className="text-sm sm:text-base sm:p-2.5 hover:text-primary transition duration-300 cursor-pointer">
        Designed & Built by Aayush Dobriyal.
      </p>
    </footer>
  );
};

export default Footer;
