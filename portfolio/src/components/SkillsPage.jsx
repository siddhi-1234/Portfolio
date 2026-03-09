import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Terminal,
  Database,
  Layout,
  Menu,
  X,
} from "lucide-react";

// Interactive SkillCard component
const SkillCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`bg-[#120d1d]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 h-full">{children}</div>
  </motion.div>
);

const SkillsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07050a] text-white selection:bg-[#a855f7]/30 overflow-x-hidden font-sans">
      {/* --- BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#a855f7]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6366f1]/5 blur-[120px]" />
      </div>

      {/* --- MATCHING NAVBAR FROM PROJECTS PAGE --- */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-8 md:py-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#a855f7]/10 rounded-xl flex items-center justify-center border border-[#a855f7]/20 group-hover:bg-[#a855f7]/20 transition-all">
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
            className="text-[#a855f7] hover:text-[#b382e0] transition-colors uppercase font-black tracking-[0.2em]"
          >
            Skills
          </a>
          <a
            href="/Experience"
            className="hover:text-white transition-colors uppercase"
          >
            Experience
          </a>
          <a
            href="/Achievements"
            className="hover:text-white transition-colors uppercase"
          >
            Achievements
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
            <a href="/About" className="text-lg font-bold">
              About
            </a>
            <a href="/Projects" className="text-lg font-bold">
              Projects
            </a>
            <a href="/Skills" className="text-[#a855f7] font-bold">
              Skills
            </a>
            <a href="/Experience" className="text-lg font-bold">
              Experience
            </a>
            <a href="/Achievements" className="text-lg font-bold">
              Achievements
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 pb-24">
        {/* --- PAGE HEADER --- */}
        <header className="mb-16 md:mb-24 text-left max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-6 leading-none"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#818cf8] to-[#fb7185] bg-clip-text text-transparent">
              Proficiency
            </span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            A dynamic showcase of my full-stack expertise, specialized tools,
            and the technologies I'm currently mastering.
          </p>
        </header>

        {/* --- SKILLS BENTO GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
          {/* Frontend Section */}
          <SkillCard className="md:col-span-7 md:row-span-1 min-h-[280px]">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-3xl font-bold mb-2">Frontend</h3>
                <p className="text-gray-500 text-sm">
                  Building immersive user interfaces
                </p>
              </div>
              <Layout className="text-[#a855f7]" size={32} />
            </div>

            {/* FIXED: Responsive Grid Columns */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 mt-8 justify-items-center">
              {[
                { name: "JS ", color: "text-yellow-400" },
                { name: "React", color: "text-blue-400" },
                { name: "Tailwind CSS", color: "text-cyan-400" },
                { name: "HTML", color: "text-orange-400" },
                { name: "Bootstrap", color: "text-purple-400" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center group/skill w-full max-w-[80px]"
                >
                  <div
                    className={`text-sm font-black mb-3 ${s.color} bg-white/5 rounded-2xl aspect-square flex items-center justify-center border border-white/5 group-hover/skill:border-white/20 transition-all`}
                  >
                    {s.name.split(" ")[0]}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-gray-500 truncate">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* Core Languages Section */}
          <SkillCard className="md:col-span-5 md:row-span-2">
            <div className="flex gap-2 mb-8">
              <div className="text-[#a855f7]">
                <Code2 size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-10">Core Languages</h3>
            <div className="space-y-8">
              {[
                { name: "C", color: "bg-blue-500" },
                { name: "Python", color: "bg-yellow-500" },
                { name: "Java", color: "bg-red-500" },
                { name: "C++", color: "bg-blue-600" },
              ].map((lang, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group/lang cursor-default"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${lang.color} shadow-lg`}
                  />
                  <span className="text-xl font-bold text-gray-300 group-hover/lang:text-white transition-colors">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-24 pt-8 border-t border-white/5 italic text-gray-600 text-[10px] uppercase tracking-widest">
              Optimizing for performance & scalability
            </div>
          </SkillCard>

          {/* Backend & Cloud Section */}
          <SkillCard className="md:col-span-7 md:row-span-1">
            <h3 className="text-3xl font-bold mb-2">Backend</h3>
            <p className="text-gray-500 text-sm mb-12">
              Architecting secure and resilient server-side systems.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-8">
              {[
                {
                  title: "Node.js / Express (Currently Learning)",
                  sub: "RESTful APIs",
                  icon: <Server size={20} />,
                },
                {
                  title: "MongoDB & SQL",
                  sub: "Data Modeling",
                  icon: <Database size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center group/item">
                  <div className="p-4 bg-white/5 rounded-2xl text-[#a855f7] group-hover/item:bg-[#a855f7]/10 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-200">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase font-black">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* Developer Tools Section */}
          {/* Developer Tools Section - Updated to name tools instead of icons */}
          <SkillCard className="md:col-span-7 md:row-span-1 flex flex-col items-start gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">
                Developer Tools
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4">
              {["Git & GitHub", "VS Code", "Postman", "Firebase"].map(
                (tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-center hover:bg-[#a855f7]/10 hover:border-[#a855f7]/30 transition-all cursor-default"
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">
                      {tool}
                    </span>
                  </motion.div>
                ),
              )}
            </div>
          </SkillCard>
        </div>

        {/* --- CTA SECTION --- */}
        <footer className="mt-32 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-600 mb-10 italic">
            Let's Build Something Amazing Together! Looking forward to
            connecting and creating innovative solutions.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SkillsPage;
