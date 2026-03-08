import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Menu,
  X,
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// Floating background elements component
const FloatingBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/10 rounded-full"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [window.innerHeight, -200],
          x: [0, Math.random() * 100 - 50],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 10,
        }}
      />
    ))}
  </div>
);

const Experience = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const experiences = [
    {
      company: "Google India",
      logoText: "GP",
      role: "Frontend Developer Intern",
      period: "Jun 2025 - Aug 2025",
      desc: "Developed responsive web applications using React and TypeScript. Optimized component performance resulting in 40% faster load times for Workspace features.",
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
      color: "from-blue-500 to-emerald-500",
    },
    {
      company: "Microsoft India",
      logoText: "MS",
      role: "Full Stack Developer Intern",
      period: "Jan 2025 - May 2025",
      desc: "Built scalable RESTful APIs using .NET Core and deployed microservices on Azure. Implemented CI/CD pipelines reducing deployment time by 60%.",
      skills: [".NET Core", "Azure", "Docker", "SQL Server"],
      color: "from-[#f093fb] to-[#f5576c]",
    },
    {
      company: "Amazon India",
      logoText: "AM",
      role: "SDE Intern",
      period: "Summer 2024",
      desc: "Designed and implemented distributed systems for high-traffic e-commerce platform. Worked on AWS Lambda functions processing 1M+ requests daily.",
      skills: ["AWS", "Python", "DynamoDB", "Kubernetes"],
      color: "from-[#667eea] to-[#764ba2]",
    },
    {
      company: "TCS Digital",
      logoText: "TS",
      role: "Web Developer",
      period: "2023 - 2024",
      desc: "Delivered enterprise web applications for Fortune 500 clients. Led frontend development team of 5 developers. Implemented pixel-perfect responsive designs.",
      skills: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS"],
      color: "from-orange-400 to-rose-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07050a] text-white selection:bg-[#a855f7]/30 overflow-x-hidden font-sans">
      <FloatingBackground />

      {/* --- REUSED NAVBAR --- */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-8 md:py-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-xl flex items-center justify-center group-hover:bg-[#a855f7]/20 transition-all">
            <Terminal size={20} className="text-[#a855f7]" />
          </div>
          <span className="text-xl font-black italic tracking-tighter uppercase">
            Siddhi
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-gray-500">
          <a href="/" className="hover:text-white transition-colors uppercase">
            Home
          </a>
          <a
            href="/About"
            className="hover:text-white transition-colors uppercase"
          >
            About
          </a>
          <a
            href="/Projects"
            className="hover:text-white transition-colors uppercase"
          >
            Projects
          </a>
          <a
            href="/Skills"
            className="hover:text-white transition-colors uppercase"
          >
            Skills
          </a>
          <a
            href="/Experience"
            className="text-[#a855f7] transition-colors uppercase font-black tracking-[0.2em]"
          >
            Experience
          </a>
        </div>

        <button
          className="lg:hidden text-gray-400 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-[#0d0a09]/95 backdrop-blur-xl border-b border-white/10 z-50 p-8 flex flex-col gap-6 lg:hidden"
          >
            <a href="/" className="text-lg font-bold">
              Home
            </a>
            <a href="/Experience" className="text-[#a855f7] font-bold">
              Experience
            </a>
            <button className="bg-[#a855f7] text-white py-4 rounded-xl font-black uppercase tracking-widest">
              Contact Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 pb-24">
        {/* --- HEADER --- */}
        <header className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-6 leading-none"
          >
            Work{" "}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#818cf8] to-[#fb7185] bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#a855f7] to-[#fb7185] mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            Professional journey with hands-on experience across diverse
            industries and technologies
          </p>
        </header>

        {/* --- EXPERIENCE TIMELINE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-[#120d1d]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl group overflow-hidden"
            >
              {/* Animated corner accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`}
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-black/20`}
                >
                  {exp.logoText}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#a855f7] transition-colors">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                    <Calendar size={14} className="text-[#a855f7]" />
                    {exp.period}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#a855f7] text-[11px] font-black uppercase tracking-wider mb-4">
                  <Sparkles size={12} /> {exp.role}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 hover:bg-[#a855f7]/20 border border-white/5 rounded-lg text-[10px] font-bold text-gray-400 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <footer className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-12 rounded-[3rem] bg-gradient-to-br from-[#120d1d] to-[#07050a] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#a855f7]/10 blur-[100px] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Looking for a dedicated developer?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
              I'm currently looking for new opportunities to contribute to
              innovative projects and grow with a professional team.
            </p>
            <a
              href="mailto:hello@siddhi.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#a855f7] rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#a855f7]/20"
            >
              Get In Touch <ChevronRight size={18} />
            </a>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default Experience;
