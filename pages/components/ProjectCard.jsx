// ProjectCard.jsx
import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl }) => {
  return (
    <div className="group relative rounded-xl bg-[#181818] border border-[#33353F] p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden cursor-default">
      {/* Subtle purple gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative z-10 flex-grow">
        <h5 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h5>
        <div className="text-[#ADB7BE] text-sm leading-relaxed">
          {description}
        </div>
      </div>
      
      {gitUrl && (
        <div className="mt-6 relative z-10 flex justify-end">
          <Link href={gitUrl}>
            <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#ADB7BE] hover:text-white hover:text-primary-400 transition-colors duration-200">
              <CodeBracketIcon className="h-5 w-5" />
              <span>{gitUrl.includes('github.com') ? 'View Code' : 'Live Demo'}</span>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
