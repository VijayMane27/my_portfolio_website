import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const pdfPath = "/Vijay-Prakash-Mane.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "Vijay-Prakash-Mane.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="mb-6">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 inline-block mb-6 shadow-glow-primary">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-white mb-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Vijay Mane",
                1000,
                "Web Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl font-light leading-relaxed">
            I transform complex ideas into elegant, interactive digital experiences. 
            Building modern web applications that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="w-full sm:w-auto"
            >
              <button className="px-8 py-4 w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:shadow-glow-primary text-white font-semibold transition-all duration-300 hover:scale-105">
                Hire Me
              </button>
            </ScrollLink>
            <button
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-[#33353F] hover:border-white text-white font-semibold transition-all duration-300 hover:bg-white/5 group"
              onClick={handleDownloadCV}
            >
              <span className="flex items-center justify-center gap-2 group-hover:text-primary-400 transition-colors">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-4 place-self-center mt-12 lg:mt-0"
        >
          <div className="relative">
            {/* Glowing background blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            
            <div className="rounded-full bg-[#181818] w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] relative border border-white/10 animate-float shadow-2xl z-10 overflow-hidden">
               <Image
                  src="/images/avatar.png"
                  alt="Hero Image - Avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full scale-110"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
