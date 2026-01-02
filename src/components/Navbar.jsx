import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
import { useEffect } from "react";
import { X, Menu } from "lucide-react";

const navLinks = ["home", "about", "projects", "contact"];

const Navbar = ({ setSelectedPage, selectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    isMenuToggled
      ? document.body.classList.add(`overflow-hidden`)
      : document.body.classList.remove(`overflow-hidden`);
  }, [isMenuToggled]);
  return (
    <header
      className={`${
        isTopOfPage ? "" : "bg-secondary/20 shadow-lg"
      } fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6.25 sm:px-12.5 md:px-37.5 transition duration-500 backdrop-blur-2xl`}
    >
      <nav className="flex items-center justify-between relative w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <a href="/" aria-label="home" className="text-3xl font-bold">
            AD
          </a>
        </motion.div>
        <motion.ul
          className="hidden md:flex items-center justify-between text-sm"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link}
                page={link}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
            );
          })}
        </motion.ul>
        <motion.button
          className="block md:hidden p-2 bg-primary hover:bg-primary/80 rounded-full cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          onClick={() => setIsMenuToggled(true)}
        >
          <Menu className=" w-5 h-5" />
        </motion.button>
        <AnimatePresence>
          {isMenuToggled && (
            <motion.div
              className="block md:hidden fixed top-0 left-0 h-screen w-full bg-secondary"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { y: "-100vh" },
                visible: {
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.5,
                  },
                },
                exit: {
                  y: "-100vh",
                  transition: {
                    type: "tween",
                    duration: 0.5,
                    delay: 0.3,
                  },
                },
              }}
            >
              <div className="flex justify-end px-12 py-6">
                <button
                  className="cursor-pointer"
                  onClick={() => setIsMenuToggled(false)}
                >
                  <X className=" w-8 h-8" />
                </button>
              </div>
              <motion.ul
                className="flex flex-col justify-center h-full items-center gap-10 text-xl sm:text-2xl text-tertiary"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                  exit: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {navLinks.map((link) => {
                  return (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: "50%" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.5,
                            ease: "easeOut", // Add ease-out easing function
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: "50%",
                          transition: {
                            duration: 0.1,
                            ease: "easeOut", // Add ease-out easing function
                          },
                        },
                      }}
                    >
                      <NavLink
                        key={link}
                        page={link}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        setIsMenuToggled={setIsMenuToggled}
                      />
                    </motion.div>
                  );
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
