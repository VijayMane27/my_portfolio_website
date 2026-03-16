// NavLink.jsx
import { Link as ScrollLink } from "react-scroll";
import React from "react";

const NavLink = ({ href, title }) => {
  // Check if href is defined before calling slice method
  const to = href ? href.slice(1) : "";

  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg font-medium rounded md:p-0 hover:text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
