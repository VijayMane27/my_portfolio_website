import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Team 11 Platform",
    subtitle: "Fantasy Sports Platform",
    emoji: "🏏",
    description:
      "A full-featured fantasy sports platform with admin panel, prize distribution system, and KYC authentication workflows. Built to handle scalable API-driven data operations.",
    bullets: [
      "Worked with PostgreSQL and TypeORM for API-driven data",
      "Built Admin Panel, Prize Distribution & Auth with Next.js",
      "Implemented secure KYC authentication workflows",
      "Optimized API performance for scalable operations",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "TypeORM", "Tailwind CSS", "Material UI"],
    gitUrl: "",
    color: "#a855f7",
    gradient: "from-purple-600/20 via-purple-500/5 to-transparent",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "CRM System",
    subtitle: "Customer Relationship Management",
    emoji: "📊",
    description:
      "Production-grade CRM platform with dynamic form builder, multi-tenant architecture, and CSV-based bulk lead upload. Supports multiple companies with role-based access.",
    bullets: [
      "Built with React.js (Material UI) + Node.js + MongoDB",
      "Dynamic form builder—no code changes needed",
      "CSV-based bulk lead upload via RESTful APIs",
      "Multi-tenant architecture with role-based access",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Material UI", "REST API"],
    gitUrl: "https://app.silgatecrm.com",
    color: "#06b6d4",
    gradient: "from-cyan-600/20 via-cyan-500/5 to-transparent",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "JITCO",
    subtitle: "B2B E-commerce Platform",
    emoji: "🛒",
    description:
      "A Next.js-based B2B e-commerce platform with a React admin panel. Centralized management for orders, inventory, enquiries, contracts, and supplier data.",
    bullets: [
      "Next.js e-commerce platform + React admin panel",
      "Redux for global state management",
      "Responsive and SEO-optimized UI components",
      "Orders, inventory, enquiries & supplier management",
    ],
    tech: ["Next.js", "React.js", "Redux", "SEO", "Tailwind CSS"],
    gitUrl: "https://jitco.in",
    color: "#f59e0b",
    gradient: "from-amber-600/20 via-amber-500/5 to-transparent",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "PawZenco",
    subtitle: "Pet Booking Management",
    emoji: "🐾",
    description:
      "A pet booking management system handling appointments and customer interactions. Supports grooming, daycare, training, and veterinary visit scheduling.",
    bullets: [
      "Service scheduling for grooming, daycare, training",
      "Responsive frontend with React.js + JavaScript",
      "Clean UI using shadcn/ui component library",
      "Customer interaction & appointment management",
    ],
    tech: ["React.js", "JavaScript", "shadcn/ui", "REST API"],
    gitUrl: "https://app.pawzenco.com",
    color: "#10b981",
    gradient: "from-emerald-600/20 via-emerald-500/5 to-transparent",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Teacher's Diary",
    subtitle: "Mobile App",
    emoji: "📓",
    description:
      "A comprehensive Teacher's Diary mobile app built with React Native. Teachers can save lecture notes, manage attendance records, and download data seamlessly.",
    bullets: [
      "Built with React Native for cross-platform mobile",
      "Save lecture notes & manage attendance records",
      "Download/export data functionality",
      "Seamless and intuitive mobile UX",
    ],
    tech: ["React Native", "JavaScript", "Mobile"],
    gitUrl: "https://github.com/VijayMane27/diary",
    color: "#ec4899",
    gradient: "from-pink-600/20 via-pink-500/5 to-transparent",
    tag: ["All", "Mobile"],
  },
];

const filters = ["All", "Web", "Mobile"];

const ProjectCard = ({ project, index, isInView }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <div
        className={`relative transition-all duration-700 cursor-pointer`}
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* ──── FRONT ──── */}
        <div
          className={`rounded-3xl border border-white/10 p-6 h-full min-h-[320px] flex flex-col justify-between relative overflow-hidden group transition-opacity duration-300 ${flipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          style={{ backfaceVisibility: "hidden", backgroundColor: "#0f0f1a" }}
        >
          {/* Gradient glow bg */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 pointer-events-none rounded-3xl`} />
          {/* Top border glow */}
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

          <div className="relative z-10">
            {/* Number + emoji */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-5xl">{project.emoji}</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full border" style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}15` }}>
                0{project.id}
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-white mb-1">{project.title}</h3>
            <p className="text-xs font-medium mb-4" style={{ color: project.color }}>{project.subtitle}</p>
            <p className="text-[#ADB7BE] text-sm leading-relaxed line-clamp-3">{project.description}</p>
          </div>

          {/* Tech tags */}
          <div className="relative z-10 mt-5">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((t, i) => (
                <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#ADB7BE]">
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#ADB7BE]">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Flip hint */}
            <div className="flex items-center gap-1.5 text-[11px]" style={{ color: project.color }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Tap to see details
            </div>
          </div>
        </div>

        {/* ──── BACK ──── */}
        <div
          className={`absolute inset-0 rounded-3xl border p-6 flex flex-col justify-between overflow-hidden transition-opacity duration-300 ${flipped ? "opacity-100 z-10" : "opacity-0 pointer-events-none"}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", borderColor: `${project.color}40`, backgroundColor: "#0f0f1a" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 pointer-events-none rounded-3xl`} />
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-extrabold text-white">{project.title}</h3>
              <button
                onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
                className="text-[10px] px-2 py-1 rounded-full border border-white/20 text-white/60 hover:text-white transition-colors"
              >
                ✕ Close
              </button>
            </div>

            <ul className="space-y-2 mb-4">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#ADB7BE]">
                  <span className="mt-0.5 text-xs" style={{ color: project.color }}>▶</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.gitUrl && (
            <div className="relative z-10 mt-4">
              <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}50` }}
                >
                  {project.gitUrl.includes("github.com") ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      View Code
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                      </svg>
                      Live Demo
                    </>
                  )}
                </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filteredProjects =
    selectedTag === "All"
      ? projectData
      : projectData.filter((p) => p.tag.includes(selectedTag));

  return (
    <section className="py-8" id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
        ref={ref}
      >
        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 inline-block mb-4">
          What I&apos;ve Built
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 mb-4">
          My Projects
        </h2>
        <p className="text-[#ADB7BE] max-w-lg mx-auto text-base">
          Click any card to flip it and see full details, tech stack, and links.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex justify-center gap-3 mb-10"
      >
        {filters.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              selectedTag === tag
                ? "bg-gradient-to-r from-primary-500 to-secondary-500 border-transparent text-white shadow-glow-primary"
                : "bg-white/5 border-white/10 text-[#ADB7BE] hover:border-white/30 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center text-xs text-white/20 mt-10"
      >
        💡 Click a project card to flip it
      </motion.p>
    </section>
  );
};

export default ProjectSection;
