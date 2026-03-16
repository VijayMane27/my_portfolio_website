import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { img: "html.svg", name: "HTML5", color: "#E34F26", bg: "rgba(227,79,38,0.1)" },
  { img: "css.svg", name: "CSS3", color: "#1572B6", bg: "rgba(21,114,182,0.1)" },
  { img: "javascript.svg", name: "JavaScript", color: "#F7DF1E", bg: "rgba(247,223,30,0.1)" },
  { img: "react.svg", name: "React.js", color: "#61DAFB", bg: "rgba(97,218,251,0.1)" },
  { img: "nextjs.svg", name: "Next.js", color: "#ffffff", bg: "rgba(255,255,255,0.08)" },
  { img: "nodejs.svg", name: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.1)" },
  { img: "mongodb.svg", name: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.1)" },
  { img: "postgresql.svg", name: "PostgreSQL", color: "#336791", bg: "rgba(51,103,145,0.1)" },
  { img: "git.svg", name: "Git", color: "#F05032", bg: "rgba(240,80,50,0.1)" },
  { img: "python.svg", name: "Python", color: "#3776AB", bg: "rgba(55,118,171,0.1)" },
  { name: "TypeScript", color: "#3178C6", bg: "rgba(49,120,198,0.1)", letter: "TS" },
  { name: "Redux", color: "#764ABC", bg: "rgba(118,74,188,0.1)", letter: "Rx" },
  { name: "REST API", color: "#FF6B6B", bg: "rgba(255,107,107,0.1)", letter: "API" },
  { name: "Tailwind", color: "#38BDF8", bg: "rgba(56,189,248,0.1)", letter: "TW" },
];

const timeline = [
  {
    year: "2024 – Present",
    role: "Full Stack Developer",
    company: "Professional Work",
    desc: "Building scalable web apps with React, Next.js, Node.js & PostgreSQL. Delivered CRM systems, e-commerce platforms, and booking management tools.",
    icon: "💼",
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "Early Experience",
    desc: "Gained hands-on experience with component libraries, REST APIs, and state management using Redux.",
    icon: "🚀",
  },
  {
    year: "2020 – 2023",
    role: "B.Sc. Information Technology",
    company: "V. G. Vaze College",
    desc: "Studied core CS fundamentals, databases, algorithms, and software engineering principles.",
    icon: "🎓",
  },
];

const stats = [
  { label: "Projects Delivered", value: 5, suffix: "+", icon: "🚀" },
  { label: "Years Experience", value: 3, suffix: "+", icon: "⚡" },
  { label: "Lines of Code", value: 50, suffix: "k+", icon: "💻" },
];

const techIcons = [
  { img: "html.svg", name: "HTML" },
  { img: "css.svg", name: "CSS" },
  { img: "javascript.svg", name: "JS" },
  { img: "react.svg", name: "React" },
  { img: "nextjs.svg", name: "Next.js" },
  { img: "nodejs.svg", name: "Node" },
  { img: "mongodb.svg", name: "Mongo" },
  { img: "postgresql.svg", name: "PG" },
  { img: "git.svg", name: "Git" },
  { img: "python.svg", name: "Python" },
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
      {count}{suffix}
    </span>
  );
}

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="text-white py-20" id="about" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 xl:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 inline-block mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 mb-4">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
            A passionate Full Stack Developer who turns ideas into powerful digital experiences.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-2xl text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-[#ADB7BE] text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content: Bio + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">👨‍💻</span> My Story
            </h3>
            <p className="text-[#ADB7BE] leading-relaxed mb-4">
              Hi! I&apos;m <strong className="text-white">Vijay Mane</strong>, a Full Stack Developer from Mumbai with 3 years of experience building
              scalable web applications. I specialize in the JavaScript ecosystem — from React frontends to Node.js backends.
            </p>
            <p className="text-[#ADB7BE] leading-relaxed mb-6">
              I&apos;ve shipped production apps across CRM systems, e-commerce platforms, pet booking tools, and fantasy sports platforms.
              I care deeply about clean code, smooth UI, and real-world impact.
            </p>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:border-purple-500/60 transition-all duration-200">
                  <img src={`/images/icons/${t.img}`} alt={t.name} className="w-4 h-4" />
                  <span className="text-xs text-[#ADB7BE]">{t.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skill Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">⚡</span> Tech Stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                  style={{ backgroundColor: skill.bg, borderColor: `${skill.color}30` }}
                  whileHover={{ borderColor: skill.color, boxShadow: `0 0 16px ${skill.color}40` }}
                >
                  {skill.img ? (
                    <img src={`/images/icons/${skill.img}`} alt={skill.name} className="w-8 h-8 mb-2" />
                  ) : (
                    <span className="text-base font-bold mb-2" style={{ color: skill.color }}>{skill.letter}</span>
                  )}
                  <span className="text-[10px] font-medium text-center leading-tight" style={{ color: skill.color }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-3xl">🗺️</span> My Journey
          </h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="relative flex flex-col md:flex-row gap-4 md:gap-8 md:pl-16"
                >
                  {/* Icon Dot */}
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-[#1a1a2e] border-2 border-purple-500 flex items-center justify-center text-xl hidden md:flex z-10">
                    {item.icon}
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-lg font-bold text-white">{item.role}</span>
                        <span className="text-[#ADB7BE] text-sm ml-2">@ {item.company}</span>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-[#ADB7BE] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-10 glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4"
        >
          <div className="text-4xl">🏆</div>
          <div>
            <p className="text-white font-semibold">Critical Thinking and Problem Solving</p>
            <p className="text-[#ADB7BE] text-sm">Certified by Tata Power Skill Development Institute (TPSDI)</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
