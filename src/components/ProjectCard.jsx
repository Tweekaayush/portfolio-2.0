import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ img, title, description, link, tech }) => {
  return (
    <motion.div
      className="w-full rounded-md overflow-hidden border-4 border-secondary bg-secondary flex flex-col transition duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-xl group"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <div className="aspect-video overflow-hidden rounded-sm relative">
        <div className="absolute w-full h-full top-0 left-0 bg-primary/20 group-hover:bg-transparent transition duration-500"></div>
        <img className="w-full object-contain" src={img} alt={title} />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h1 className="text-base sm:text-lg text-primary mb-4 uppercase font-bold">
          {title}
        </h1>
        <p className="text-sm sm:text-base mb-4 tracking-wide">{description}</p>
        <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
          {tech.map((t) => {
            return (
              <li key={t} className="text-white font-semibold text-sm sm:text-base">
                {t}
              </li>
            );
          })}
        </ul>
        <a
          href={link}
          target="_blank"
          className="button-1 text-center rounded-sm mt-auto text-base sm:text-lg"
        >
          Visit
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
