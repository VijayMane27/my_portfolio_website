import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Team-11 Admin Panel",
    description:
      "Led the development of Team 11 app's admin pages, prize distribution system, and authentication model using Next.js, HTML, and CSS. Implemented robust solutions to enhance user experience and ensure secure authentication, contributing to the app's overall functionality and success",
    image: "images/projects/team11.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Teacher's Diary",
    description:
      "Developed a comprehensive Teacher's Diary app using React Native for a seamless mobile experience. Implemented features allowing teachers to save lecture notes, manage attendance records, and download the data.",
    image: "images/projects/Teacher-Diary.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 3,
    title: "Stock Preadicition Using Streamlit",
    description:
      "Developing a stock prediction application using Streamlit to visualize and forecast stock prices based on historical data and machine learning models. The project aims to provide users with insights and predictions to make informed investment decisions.",
    image: "images/projects/streamlit-stock-forcast.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Cricket Player Photo Scrapping",
    description:
      "Creating a Python-based photo scraping tool to collect and organize cricketers' photos from various sources. The project simplifies the process of gathering images for cricket enthusiasts and analysts.",
    image: "images/projects/photo-scrapping.jpg",
    tag: ["All", "Web"],
  },
];

export const ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
          />
        ))}
      </div>
    </>
  );
};
