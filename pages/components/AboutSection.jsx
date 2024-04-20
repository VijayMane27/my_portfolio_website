import React, { useTransition, useState } from "react";
import Image from "next/image";
import Tabbutton from "./Tabbutton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const TAB_DATA = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next</li>
          <li>React Native</li>
          <li>Python</li>
        </ul>
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
