import React from "react";
import { motion } from "framer-motion";
import projectList from "../../data/projectList";
import { useState } from "react";
import ProjectCard from "../ProjectCard";
import Pagination from "../Pagination";

const Projects = () => {
  const [page, setPage] = useState(1);
  return (
    <section id="projects" className="flex flex-col py-25">
      <motion.h1
        className="heading"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="text-primary">Pro</span>jects
      </motion.h1>
      <motion.h2
        className="text-lg sm:text-xl font-extrabold mb-6 text-gray-300"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Each project is a unique piece of development
      </motion.h2>
      <motion.div
        key={projectList.length * page}
        className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {projectList?.slice((page - 1) * 4, page * 4).map((project) => {
          return <ProjectCard key={project?.id} {...project} />;
        })}
      </motion.div>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={Math.ceil(projectList.length / 4)}
      />
    </section>
  );
};

export default Projects;
