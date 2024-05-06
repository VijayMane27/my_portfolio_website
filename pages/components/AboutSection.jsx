import React, { useTransition, useState } from "react";
import Image from "next/image";
import Tabbutton from "./Tabbutton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/css.svg"
              alt="CSS"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">CSS</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/git.svg"
              alt="Git"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">Git</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/github.svg"
              alt="GitHub"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">GitHub</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/nodejs.svg"
              alt="Node.js"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">Node.js</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/postgresql.svg"
              alt="PostgreSQL"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">PostgreSQL</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/mongodb.svg"
              alt="MongoDB"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">MongoDB</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/javascript.svg"
              alt="JavaScript"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/react.svg"
              alt="React"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">React</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/nextjs.svg"
              alt="Next"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">Next</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <img
              src="/images/icons/python.svg"
              alt="Python"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-center">Python</p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul>
          <li>Bachelor's Degree in IT</li>
          <li>V. G. Vaze College OF Art, Commerce And Science</li>
        </ul>
      ),
    },
    {
      title: "Certification",
      id: "certification",
      content: (
        <ul className="list-disc pl-2">
          <li>
            Critical Thinking and Problem Solving : Tata Power Skill Development
            Institute (TPSDI)
          </li>
        </ul>
      ),
    },
  ];
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am Full Stack Developer with a strong foundation in web
            development technologies. Eager to apply practical skills in
            building modern and scalable web applications. Proficient in
            utilizing the JavaScript, React,Next,Redux, HTML, CSS, and Git for
            front-end development, Node.js and TypeORM for server-side logic,
            and MongoDB and Postgres SQL for efficient database management.I am
            a quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </Tabbutton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
