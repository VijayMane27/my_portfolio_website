import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-white/10 text-white bg-background">
      <div className="container p-8 flex justify-between items-center mx-auto max-w-7xl">
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">VM Portfolio</span>
        <p className="text-[#ADB7BE] text-sm font-light">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
