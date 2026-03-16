import React, { useState } from "react";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const CustomNavbar = () => {
  const [navbaropen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4 max-w-7xl">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
        >
          VIJAY MANE
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbaropen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbaropen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default CustomNavbar;
