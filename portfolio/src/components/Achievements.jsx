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
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] rounded-full blur-[2px]"
        style={{
          width: Math.random() * 8 + 4,
          height: Math.random() * 8 + 4,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [window.innerHeight + 100, -100],
          x: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 15,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 10,
        }}
      />
    ))}
  </div>
);

const AchievementCard = ({ icon: Icon, title, items, links, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -20, scale: 1.02 }}
    className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group border-b-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-400"
  >
    {/* Shine effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

    <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#00d4ff]/30">
      <Icon className="text-white w-8 h-8" />
    </div>

    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6 tracking-tight">
      {title}
    </h3>

    <ul className="space-y-4 mb-8">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-4 py-3 border-b border-white/5 last:border-none group/item hover:bg-[#00d4ff]/10 hover:px-4 rounded-xl transition-all duration-300"
        >
          <span className="font-bold text-sm min-w-[60px] bg-gradient-to-r from-[#ffd93d] to-[#ff6b9d] bg-clip-text text-transparent">
            {item.rank}
          </span>
          <span className="text-gray-300 text-sm flex-1 leading-tight">
            {item.text}
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full text-gray-400">
            {item.badge}
          </span>
        </li>
      ))}
    </ul>

    {links && (
      <div className="flex flex-wrap gap-3 pt-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
          >
            {link.label} <ExternalLink size={12} />
          </a>
        ))}
      </div>
    )}
  </motion.div>
);

const Achievements = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { num: "12+", label: "Hackathons Won" },
    { num: "2500+", label: "Problems Solved" },
    { num: "15", label: "Certifications" },
    { num: "Top 1%", label: "Global Rank" },
  ];

  return (
    <div className="min-h-screen bg-[#07050a] text-white selection:bg-[#00d4ff]/30 overflow-x-hidden font-sans">
      <Particles />

      {/* --- MATCHING NAVBAR FROM PROJECTS PAGE --- */}
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
            className="text-[#a855f7] transition-colors uppercase font-black tracking-[0.2em]"
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
            <a
              href="/Achievements"
              className="text-[#a855f7] font-bold tracking-widest uppercase"
            >
              Achievements
            </a>
            <button className="bg-[#a855f7] text-white py-4 rounded-xl font-black uppercase tracking-widest">
              GET IN TOUCH
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12 py-12">
        {/* --- HEADER --- */}
        <header className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-6 leading-none bg-gradient-to-r from-[#00d4ff] via-[#ff6b9d] to-[#ffd93d] bg-clip-text text-transparent"
          >
            Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl font-medium"
          >
            Showcase of excellence in coding competitions, hackathons, and
            certifications.
          </motion.p>
        </header>

        {/* --- ACHIEVEMENTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32">
          <AchievementCard
            icon={Crown}
            title="Hackathon Victories"
            delay={0.1}
            items={[
              {
                rank: "🥇 1st",
                text: "Smart City Challenge 2025 - IIT Bombay",
                badge: "🏆 Winner",
              },
              {
                rank: "🥈 2nd",
                text: "FinTech Revolution Hackathon - HDFC",
                badge: "₹50K Prize",
              },
              {
                rank: "🥉 3rd",
                text: "AI for Social Good - NASSCOM",
                badge: "🌟 Top 3",
              },
            ]}
          />
          <AchievementCard
            icon={Trophy}
            title="Contest Rankings"
            delay={0.2}
            items={[
              {
                rank: "#47",
                text: "Codeforces Round #892 (Div. 2)",
                badge: "🌍 Global",
              },
              {
                rank: "#12",
                text: "LeetCode Weekly Contest #312",
                badge: "🇮🇳 India #3",
              },
              {
                rank: "Top 1%",
                text: "HackerRank 30 Days of Code",
                badge: "⭐ 5-Star",
              },
            ]}
            links={[
              { label: "Codeforces", url: "#" },
              { label: "LeetCode", url: "#" },
            ]}
          />
          <AchievementCard
            icon={FileBadge}
            title="Professional Certs"
            delay={0.3}
            items={[
              {
                rank: "✅ ML",
                text: "Machine Learning - Andrew Ng",
                badge: "96% Score",
              },
              {
                rank: "✅ Web",
                text: "Full Stack Web Dev - NPTEL (IITM)",
                badge: "Elite+100",
              },
              {
                rank: "✅ Dev",
                text: "System Design - Gaurav Sen",
                badge: "4.8⭐",
              },
            ]}
          />
          <AchievementCard
            icon={LineChart}
            title="CP Performance"
            delay={0.4}
            items={[
              {
                rank: "1870",
                text: "Codeforces Rating (Expert)",
                badge: "🔥 +240",
              },
              {
                rank: "Silver",
                text: "LeetCode Contest Performance",
                badge: "🥈 Top 5%",
              },
              {
                rank: "1200+",
                text: "Total DSA Problems Solved",
                badge: "📈 85% Acc",
              },
            ]}
          />
        </div>

        {/* --- STATS ROW --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <span className="block text-4xl md:text-6xl font-black bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                {stat.num}
              </span>
              <span className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-4 block italic">
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
