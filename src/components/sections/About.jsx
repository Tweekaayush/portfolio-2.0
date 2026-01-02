import React from "react";
import { motion } from "framer-motion";
import css from "/Tech/CSS3.png";
import html from "/Tech/HTML5.png";
import express from "/Tech/express.png";
import js from "/Tech/JavaScript.png";
import mongodb from "/Tech/mongodb.png";
import node from "/Tech/node.png";
import react from "/Tech/React.png";
import redux from "/Tech/redux.png";
import tailwind from "/Tech/tailwind.png";

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="flex flex-col py-25"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center gap-4 md:flex-row w-full mb-10">
          <div className="mb-10 md:mb-0 md:basis-2/5 md:order-2">
            <img
              src="/images/IMG_1733.JPG"
              alt="aayush dobriyal"
              className="about-img"
            />
          </div>
          <div className="md:basis-3/5 md:order-1">
            <h1 className="heading">
              About <span className="text-primary">Me</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-extrabold mb-6 text-gray-300">
              A passionate MERN Stack Developer based in Delhi NCR, India
            </h2>
            <p>
              I have serious passion for UI effects, animations and creating
              intuitive and dynamic user experiences and scalable web
              applications. With a toolbox filled with MongoDB, ExpressJs,
              React, NodeJs and Redux, I thrive on turning design concepts into
              seamless and interactive web experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-10">
            Here's some of the technologies that I've been working with:
          </p>
          <ul className="flex items-center flex-wrap gap-10 w-full">
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img
                src="/Tech/mongodb.png"
                alt="mongodb"
                className="w-full h-full"
              />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img
                src="/Tech/express.png"
                alt="express"
                className="w-full h-full"
              />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img
                src="/Tech/React.png"
                alt="react"
                className="w-full h-full"
              />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img src="/Tech/node.png" alt="node" className="w-full h-full" />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img
                src="/Tech/redux.png"
                alt="redux"
                className="w-full h-full"
              />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img
                src="/Tech/tailwind.png"
                alt="tailwind"
                className="w-full h-full"
              />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img
                src="/Tech/HTML5.png"
                alt="HTML5"
                className="w-full h-full"
              />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img src="/Tech/CSS3.png" alt="CSS3" className="w-full h-full" />
            </li>
            <li className="w-7 h-7 sm:w-9 sm:h-9">
              <img
                src="/Tech/JavaScript.png"
                alt="JavaScript"
                className="w-full h-full"
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
