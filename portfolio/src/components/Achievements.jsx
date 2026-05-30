import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Menu,
  X,
  Crown,
  Trophy,
  FileBadge,
  LineChart,
  ExternalLink,
} from "lucide-react";

// Floating background particles component
const Particles = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] rounded-full blur-[2px]"
        style={{
          width: Math.random() * 6 + 3,
          height: Math.random() * 6 + 3,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [window.innerHeight + 50, -50],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const AchievementCard = ({ icon: Icon, title, items, links, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    whileHover={{ y: -10 }}
    className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg">
      <Icon className="text-white w-6 h-6 md:w-8 md:h-8" />
    </div>

    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
      {title}
    </h3>

    <ul className="space-y-4 md:space-y-6 mb-6 md:mb-8">
      {items.map((item, i) => (
        <li
          key={i}
          className="grid grid-cols-[1fr_2fr] sm:grid-cols-[120px_1fr] items-start gap-4 py-3 border-b border-white/5 last:border-none group/item hover:bg-[#00d4ff]/5 rounded-lg transition-all px-2"
        >
          {/* Rank Section */}
          <span className="font-bold text-xs md:text-sm bg-gradient-to-r from-[#ffd93d] to-[#ff6b9d] bg-clip-text text-transparent leading-tight pt-1">
            {item.rank}
          </span>

          {/* Description Section */}
          <span className="text-gray-300 text-xs md:text-sm leading-relaxed">
            {item.text}
          </span>
        </li>
      ))}
    </ul>

    {links && (
      <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-medium hover:bg-[#00d4ff]/20 transition-all"
          >
            {link.label} <ExternalLink size={10} />
          </a>
        ))}
      </div>
    )}
  </motion.div>
);

const Achievements = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { num: "500+", label: "Problems Solved" },
    { num: "10+", label: "Certifications" },
    { num: "2+", label: "Awards" },
    { num: "5+", label: "Competitions participated" },
  ];

  return (
    <div className="min-h-screen bg-[#07050a] text-white selection:bg-[#00d4ff]/30 overflow-x-hidden font-sans">
      <Particles />

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-6 md:py-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-lg flex items-center justify-center group-hover:bg-[#a855f7]/20 transition-all">
            <Terminal size={18} className="text-[#a855f7]" />
          </div>
          <span className="text-lg md:text-xl font-black italic tracking-tighter uppercase text-white">
            Siddhi
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-500">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/About" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/Projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="/Skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="/Experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a
            href="/Achievements"
            className="text-[#a855f7] font-black tracking-[0.2em]"
          >
            Achievements
          </a>
          <a href="/Contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <button
          className="lg:hidden text-gray-400 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-[#0d0a09]/95 backdrop-blur-2xl z-[60] p-8 flex flex-col justify-center gap-8 lg:hidden"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {[
              "Home",
              "About",
              "Projects",
              "Skills",
              "Experience",
              "Achievements",
            ].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item}`}
                className={`text-3xl font-black uppercase tracking-tighter italic ${item === "Achievements" ? "text-[#a855f7]" : "text-white/50"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-12 py-8 md:py-12">
        <header className="text-center mb-16 md:mb-24 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-4 md:mb-6 bg-gradient-to-r from-[#00d4ff] via-[#ff6b9d] to-[#ffd93d] bg-clip-text text-transparent"
          >
            Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-xl font-medium px-2"
          >
            Showcase of excellence in coding competitions, hackathons, and
            certifications.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-20 md:mb-32">
          <AchievementCard
            icon={Crown}
            title="Hackathon Participations"
            delay={0.1}
            items={[
              {
                rank: "Participated",
                text: "SIH-2023 - Smart India Hackathon",
              },
              {
                rank: "Participated",
                text: "SIH-2025 - Smart India Hackathon",
              },
            ]}
          />
          <AchievementCard
            icon={Trophy}
            title="Awards"
            delay={0.2}
            items={[
              {
                rank: "2nd Prize",
                text: "State Level Project Expo 2K24 held at MIT College of Computing, Pune. Awarded cash prize of ₹5000.",
              },
              {
                rank: "1st Rank",
                text: "Maintained Academic Excellence for 3 years throughout the Diploma program.",
              },
            ]}
          />
          <AchievementCard
            icon={FileBadge}
            title="Certifications"
            delay={0.3}
            items={[
              {
                rank: "Infosys Springboard",
                text: "Completed course in Python foundation, Various certifications in HTML,data science, CSS, and many more.",
              },
              {
                rank: "Forage",
                text: "GenAI powered data analytics job simulation",
              },
              {
                rank: "IBM SkillsBuild",
                text: "Participated in AI+Sustainability Job Readiness Program With IBM SkillsBuild ",
              },
              {
                rank: "Uniathena",
                text: "Basics of Microsoft Power BI by uniathena",
              },
              {
                rank: "Talent Battle",
                text: "Talent Battle certification in MongoDB",
              },
              {
                rank: "NPTEL",
                text: "NPTEL certifications in Programming with Gen-AI, effective writing ",
              },
            ]}
          />
          <AchievementCard
            icon={LineChart}
            title="Competitions"
            delay={0.4}
            items={[
              {
                rank: "WITchar-25",
                text: "Participated in WITchar-25 (National level technical Symposium) in WebTopia",
              },
              {
                rank: "WISOTECH-24",
                text: "Participated in WISOTECH-24(National level project competition) ",
              },
              {
                rank: "Kalpak-24",
                text: "Participated in Kalpak-24 in Idea Competition",
              },
              {
                rank: "Orchathon-23",
                text: "Participated in Orchathon-23(State level Technical Event) in Spinning Rival ",
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 py-12 md:py-20 border-y border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="block text-3xl md:text-6xl font-black bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] bg-clip-text text-transparent">
                {stat.num}
              </span>
              <span className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-widest mt-2 block italic">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
