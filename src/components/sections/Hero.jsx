import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-start min-h-screen h-screen"
    >
      <motion.div
        className="mb-5 sm:mb-7.5 ml-1"
        initial="hidden"
        whileInView="visible"
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="text-base text-primary">Hi, I'm</h1>
      </motion.div>
      <motion.div
        className="mb-2"
        initial="hidden"
        whileInView="visible"
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-white big-heading font-extrabold">
          Aayush Dobriyal
        </h2>
      </motion.div>
      <motion.div
        className="mb-5"
        initial="hidden"
        whileInView="visible"
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-gray-400 big-heading font-extrabold">
          I build things for the web.
        </h2>
      </motion.div>
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{
          delay: 1.1,
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="text-gray-400 text-base sm:text-lg max-w-135">
          I’ m a MERN stack Developer with a serious passion for UI effects,
          animations and creating intuitive and dynamic user experiences and
          scalable web applications.
        </p>
      </motion.div>
      <motion.div
        className="flex"
        initial="hidden"
        whileInView="visible"
        transition={{
          delay: 1.2,
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <AnchorLink href='#projects' className="bg-primary text-tertiary px-6 py-2 rounded-l-sm hover:text-white transition duration-500 text-sm sm:text-base">View my work</AnchorLink>
        <AnchorLink href='#contact' className="border-r border-y border-primary text-white px-10 py-2 rounded-r-sm hover:text-primary transition duration-500 text-sm sm:text-base">Let's talk</AnchorLink>
      </motion.div>
    </section>
  );
};

export default Hero;
