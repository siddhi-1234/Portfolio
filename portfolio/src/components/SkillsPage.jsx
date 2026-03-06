import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Cloud,
  Terminal,
  Download,
  Database,
  Layout,
  Box,
  Lock,
  Globe,
  Menu, // Added for mobile nav
  X, // Added for mobile nav
} from "lucide-react";

// Enhanced SkillCard with staggered entrance and hover effects
const SkillCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    className={`bg-[#120d1d]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 h-full">{children}</div>
  </motion.div>
);

const SkillsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07050a] text-white selection:bg-[#a855f7]/30 font-sans overflow-x-hidden">
      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#a855f7]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6366f1]/10 blur-[120px]" />
      </div>

      {/* --- NAVBAR (Same as Projects Page) --- */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-8 md:py-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#a855f7]/10 rounded-xl flex items-center justify-center border border-[#a855f7]/20 group-hover:bg-[#a855f7]/20 transition-all">
            <Terminal size={20} className="text-[#a855f7]" />
          </div>
          <span className="text-xl font-black italic tracking-tighter uppercase">
            Siddhi
          </span>
        </div>

        {/* Desktop Nav */}
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
            className="text-[#a855f7] transition-colors uppercase font-black tracking-[0.2em]"
          >
            Skills
          </a>
          <button className="bg-[#a855f7] text-white px-8 py-2.5 rounded-full font-black hover:bg-[#9333ea] transition-all shadow-lg shadow-[#a855f7]/20">
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-400 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
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
            <a href="/About" className="text-lg font-bold">
              About
            </a>
            <a href="/Projects" className="text-lg font-bold">
              Projects
            </a>
            <a href="/Skills" className="text-[#a855f7] font-bold">
              Skills
            </a>
            <button className="bg-[#a855f7] text-white py-4 rounded-xl font-black uppercase tracking-widest">
              GET IN TOUCH
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 pb-20">
        {/* --- HEADER --- */}
        <header className="mb-16 md:mb-24 text-left max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-6 leading-tight"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#818cf8] to-[#fb7185] bg-clip-text text-transparent">
              Proficiency
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
          >
            A dynamic bento-style showcase of my full-stack expertise,
            specialized tools, and the technologies I'm currently mastering.
          </motion.p>
        </header>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 auto-rows-auto">
          {/* Frontend Section */}
          <SkillCard
            className="md:col-span-7 md:row-span-2 min-h-[340px]"
            delay={0.1}
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">
                  Frontend
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  Building immersive user interfaces
                </p>
              </div>
              <div className="p-3 bg-[#a855f7]/10 rounded-2xl">
                <Layout className="text-[#a855f7]" size={28} />
              </div>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-4 gap-8 md:mt-16">
              {[
                { name: "JS (ES6+)", icon: "JS", color: "text-yellow-400" },
                { name: "React", icon: "JS", color: "text-blue-400" },
                { name: "Tailwind", icon: "CSS", color: "text-cyan-400" },
                { name: "Next.js", icon: "HTML", color: "text-orange-400" },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center flex flex-col items-center group/icon"
                >
                  <div
                    className={`text-sm font-black mb-4 ${skill.color} p-4 bg-white/5 rounded-2xl w-full aspect-square flex items-center justify-center border border-white/5 group-hover/icon:border-white/20 transition-colors`}
                  >
                    {skill.icon}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover/icon:text-white transition-colors">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </SkillCard>

          {/* Core Languages Section */}
          <SkillCard
            className="md:col-span-5 md:row-span-3 min-h-[400px]"
            delay={0.2}
          >
            <div className="p-3 bg-[#a855f7]/10 rounded-2xl w-fit mb-8">
              <Code2 className="text-[#a855f7]" size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-10 tracking-tight">
              Core Languages
            </h3>
            <div className="space-y-8">
              {[
                { name: "TypeScript", color: "bg-blue-500", percent: 90 },
                { name: "Python", color: "bg-yellow-500", percent: 85 },
                { name: "Java", color: "bg-red-500", percent: 75 },
                { name: "C++", color: "bg-blue-600", percent: 70 },
              ].map((lang, i) => (
                <div key={i} className="group/lang cursor-default">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${lang.color}`} />
                      <span className="text-lg font-bold text-gray-300 group-hover/lang:text-white transition-colors">
                        {lang.name}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className={`h-full ${lang.color} opacity-60`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* Remaining cards (Cloud Systems, Backend, Tools) follow the same SkillCard structure... */}
        </div>

        {/* --- CTA --- */}
        <footer className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-500 mb-10 italic">
              Looking for a specific stack?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 px-14 py-6 bg-[#a855f7] rounded-full overflow-hidden transition-all shadow-2xl shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] via-[#9333ea] to-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative font-black uppercase tracking-[0.2em] text-xs">
                Download Full Resume
              </span>
              <Download
                size={20}
                className="relative group-hover:translate-y-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default SkillsPage;
