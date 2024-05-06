// ProjectSection.jsx

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Team-11 Admin Panel",
    description:
      "Led the development of Team 11 app's admin pages, prize distribution system, and authentication model using Next.js, HTML, and CSS. Implemented robust solutions to enhance user experience and ensure secure authentication, contributing to the app's overall functionality and success",
    image: "images/projects/team11.png",
    gitUrl: "https://github.com/VijayMane27/team11_dev",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Teacher's Diary",
    description:
      "Developed a comprehensive Teacher's Diary app using React Native for a seamless mobile experience. Implemented features allowing teachers to save lecture notes, manage attendance records, and download the data.",
    image: "images/projects/Teacher-Diary.png",
    gitUrl: "https://github.com/VijayMane27/diary",
    tag: ["All", "Mobile"],
  },
  {
    id: 3,
    title: "Stock Prediction Using Streamlit",
    description:
      "Developing a stock prediction application using Streamlit to visualize and forecast stock prices based on historical data and machine learning models. The project aims to provide users with insights and predictions to make informed investment decisions.",
    image: "images/projects/streamlit-stock-forcast.png",
    gitUrl: "https://github.com/VijayMane27/stocksforcast",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Cricket Player Photo Scraping",
    description:
      "Creating a Python-based photo scraping tool to collect and organize cricketers' photos from various sources. The project simplifies the process of gathering images for cricket enthusiasts and analysts.",
    image: "images/projects/photo-scrapping.jpg",
    gitUrl: "https://github.com/VijayMane27/PlayerPhotoScrapping",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All"); // Initial state for selected tag
  const ref = useRef(null);

  const isInview = useInView(ref);

  const buttonStyles = (tag) =>
    selectedTag === tag
      ? "text-white border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer"
      : "text-[#ADB7BE] border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer";

  const filteredProjects =
    selectedTag === "All"
      ? projectData
      : projectData.filter((project) => project.tag.includes(selectedTag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button
          className={`${buttonStyles(
            "All"
          )} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
          onClick={() => setSelectedTag("All")}
        >
          All
        </button>
        <button
          className={`${buttonStyles(
            "Web"
          )} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
          onClick={() => setSelectedTag("Web")}
        >
          Web
        </button>
        <button
          className={`${buttonStyles(
            "Mobile"
          )} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
          onClick={() => setSelectedTag("Mobile")}
        >
          Mobile
        </button>
      </div>

      <div ref={ref} className="flex flex-wrap justify-between">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="w-full md:w-1/3 p-4">
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInview ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
              />
            </motion.li>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
