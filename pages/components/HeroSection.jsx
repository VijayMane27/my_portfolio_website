import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {

  const handleDownloadCV = () => {
    // Correcting the path to the PDF file
    const pdfPath = "/Resume/Vijay-Prakash-Mane.pdf"; // Assuming it's located in the 'public/Resume' directory
    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "Vijay-Prakash-Mane.pdf"); // Just the filename with extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              {" "}
              Hello, I'm{" "}
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
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Welcome to my portfolio! As a web developer, I transform ideas into
            interactive experiences.
          </p>
          <div>
            <ScrollLink
              to="contact" // This should match the name prop of your contact section Element
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me
              </button>
            </ScrollLink>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-400 text-white mt-3"
              onClick={handleDownloadCV} // Attach download CV function to onClick event
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="Hero-Image"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
