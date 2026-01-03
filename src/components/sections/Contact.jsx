import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          to_name: "Aayush Dobriyal",
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Your email has been sent successfully!");
        },
        (error) => {
          toast.error(
            "There was an error while sending your email. Please try again later."
          );
        }
      );
  };
  return (
    <section id="contact" className="flex gap-16 py-25">
      <motion.div
        className="hidden md:block w-1/3"
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
        }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src="/images/image.png" alt="vector" className="w-full" />
      </motion.div>
      <motion.div className="w-full md:w-2/3" initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5,
          }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          viewport={{ once: true, amount: 0.5 }}>
        <h1
          className="heading"
        >
          Let's <span className="text-primary">Talk</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-10 w-full max-w-175"
        >
          <input
            type="text"
            name="user_name"
            id="name"
            value={formData.user_name}
            onChange={handleInput}
            placeholder="Your Name..."
            className="w-full bg-secondary p-4 rounded-md placeholder:text-[#8994b0] border border-secondary text-white outline-none focus:border-primary transition duration-300 text-sm sm:text-base"
          />

          <input
            type="email"
            name="user_email"
            id="email"
            value={formData.user_email}
            onChange={handleInput}
            placeholder="Example@gmail.com"
            className="text-sm sm:text-base w-full bg-secondary p-4 rounded-md placeholder:text-[#8994b0] border border-secondary text-white outline-none focus:border-primary transition duration-300"
          />

          <textarea
            name="message"
            id="description"
            value={formData.message}
            onChange={handleInput}
            placeholder="Your Message..."
            cols={30}
            rows={10}
            className="text-sm sm:text-base w-full bg-secondary p-4 rounded-md placeholder:text-[#8994b0] border border-secondary text-white outline-none focus:border-primary transition duration-300"
          />

          <button
            type="submit"
            className="button-1 rounded-sm capitalize tracking-wider"
          >
            submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
