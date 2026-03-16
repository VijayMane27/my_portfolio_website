import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const contacts = [
  {
    id: "linkedin",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "vijay-mane-2216a5204",
    display: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/vijay-mane-2216a5204/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2]/30 to-[#0A66C2]/5",
    border: "hover:border-[#0A66C2]/60",
    glow: "hover:shadow-[0_0_30px_rgba(10,102,194,0.3)]",
    badge: "LinkedIn",
  },
  {
    id: "email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
    label: "Email",
    value: "vijaymane1532@gmail.com",
    display: "vijaymane1532@gmail.com",
    href: "mailto:vijaymane1532@gmail.com",
    color: "#EA4335",
    gradient: "from-[#EA4335]/30 to-[#EA4335]/5",
    border: "hover:border-[#EA4335]/60",
    glow: "hover:shadow-[0_0_30px_rgba(234,67,53,0.3)]",
    badge: "Email",
  },
  {
    id: "mobile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
      </svg>
    ),
    label: "Mobile",
    value: "+91 8425993294",
    display: "+91 84259 93294",
    href: "tel:+918425993294",
    color: "#34D399",
    gradient: "from-[#34D399]/30 to-[#34D399]/5",
    border: "hover:border-[#34D399]/60",
    glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]",
    badge: "Call / WhatsApp",
  },
];

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="py-24 relative max-w-7xl mx-auto px-4 xl:px-16"
    >
      {/* Background glow */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-3/4 -left-4 transform -translate-x-1/2" />
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-900/30 to-transparent rounded-full h-60 w-60 z-0 blur-3xl absolute top-10 right-10" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-[#ADB7BE] text-lg max-w-xl mx-auto">
            I&apos;m open to new opportunities and collaborations. Reach out via any of the channels below — I&apos;ll get back to you soon!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <a
                href={contact.href}
                target={contact.id === "linkedin" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`group glass-panel p-8 rounded-3xl border border-white/10 ${contact.border} ${contact.glow} transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden cursor-pointer block`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${contact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl`} />

                {/* Icon */}
                <div
                  className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${contact.color}20`, border: `1px solid ${contact.color}40`, color: contact.color }}
                >
                  {contact.icon}
                </div>

                {/* Badge */}
                <span
                  className="relative z-10 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block"
                  style={{ backgroundColor: `${contact.color}20`, color: contact.color, border: `1px solid ${contact.color}30` }}
                >
                  {contact.badge}
                </span>

                {/* Display */}
                <p className="relative z-10 text-white font-bold text-lg mb-1 group-hover:text-white transition-colors">
                  {contact.display}
                </p>
                <p className="relative z-10 text-[#ADB7BE] text-sm">
                  {contact.label === "LinkedIn" ? "View Profile" : contact.label === "Email" ? "Send an Email" : "Call or WhatsApp"}
                </p>

                {/* Arrow */}
                <div className="relative z-10 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: contact.color }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-[#ADB7BE] text-sm mb-4">Also check out my work on</p>
          <Link href="https://github.com/VijayMane27">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/60 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 text-white font-medium group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:text-purple-400 transition-colors">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub — VijayMane27
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
