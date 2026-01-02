import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const NavLink = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <motion.li
      className="p-2.5"
      variants={{
        hidden: { opacity: 0, y: -25 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-primary" : "text-white"
        } hover:text-primary transition duration-500 capitalize`}
        href={`#${lowerCasePage}`}
        onClick={() => [
          setSelectedPage(lowerCasePage),
          setIsMenuToggled(false),
        ]}
      >
        {page}
      </AnchorLink>
    </motion.li>
  );
};

export default NavLink;
