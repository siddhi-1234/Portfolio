import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  Download,
  AtSign,
  Code2,
  Zap,
  Globe,
  Github,
  Linkedin,
  Database,
  Cpu,
  Terminal,
  Layers,
  Menu,
  X,
  Code2Icon,
} from "lucide-react";

const Background = () => (
  <div className="fixed inset-0 z-0 bg-[#050606]">
    <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>

    {/* Responsive Spotlights */}
    <div
      className="absolute top-[-5%] left-[-10%] w-[100%] md:w-[70%] h-[60%] rounded-full blur-[80px] md:blur-[120px] opacity-[0.12]"
      style={{
        background: "radial-gradient(circle, #007200 0%, transparent 80%)",
      }}
    />
    <div
      className="absolute bottom-[-10%] right-[-5%] w-[100%] md:w-[60%] h-[70%] rounded-full blur-[100px] md:blur-[140px] opacity-[0.15]"
      style={{
        background: "radial-gradient(circle, #7c3aed 0%, transparent 80%)",
      }}
    />

    {/* Orbital Lines - Scaled for mobile */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1400px] h-[800px] md:h-[1400px] pointer-events-none">
      <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-[0.03]">
        <circle
          cx="500"
          cy="500"
          r="150"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <circle
          cx="500"
          cy="500"
          r="280"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="15 10"
        />
        <circle
          cx="500"
          cy="500"
          r="420"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <circle
          cx="500"
          cy="500"
          r="580"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="30 20"
        />
      </svg>
    </div>
  </div>
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden font-sans">
      <Background />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-6 md:px-10 py-6 md:py-10 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
              <Code2 size={20} className="text-emerald-400" />
            </div>
            <span className="font-black tracking-tighter text-xl uppercase">
              Siddhi
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="/About" className="hover:text-white transition-all">
              About
            </a>
            <a href="/Projects" className="hover:text-white transition-all">
              Projects
            </a>
            <a href="/Skills" className="hover:text-white transition-all">
              Skills
            </a>
            <a href="/Experience" className="hover:text-white transition-all">
              Experience
            </a>
            <a href="/Achievements" className="hover:text-white transition-all">
              Achievements
            </a>
            <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-full hover:bg-white/10 transition-all font-bold text-[10px] tracking-widest border-b-white/20 shadow-lg">
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 z-50 p-8 flex flex-col gap-6 md:hidden"
            >
              <a href="/About" className="text-lg font-bold">
                About
              </a>
              <a href="/Projects" className="text-lg font-bold">
                Projects
              </a>
              <a href="/Skills" className="text-lg font-bold">
                Skills
              </a>
              <a href="/Experience" className="text-lg font-bold">
                Experience
              </a>
              <a href="/Achievements" className="text-lg font-bold">
                Achievements
              </a>
              <button className="bg-emerald-500 text-black py-4 rounded-xl font-black">
                GET IN TOUCH
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Body */}
        <main className="max-w-[1440px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-4 items-center pt-4 md:pt-8 pb-20">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[9px] md:text-[10px] font-black text-emerald-400 uppercase tracking-[0.25em]"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
              SYSTEM READY: LOOKING FOR INTERNSHIPS & Jobs
            </motion.div>

            <h1 className="text-[50px] sm:text-[75px] md:text-[100px] leading-[0.8] font-black uppercase tracking-tighter">
              Siddhi <br />
              <span className="bg-gradient-to-r from-[#34d399] via-[#818cf8] to-[#fb7185] bg-clip-text text-transparent">
                Patil
              </span>
            </h1>

            <div className="space-y-4">
              {/* --- TYPING ANIMATION SECTION --- */}
              <div className="text-xl md:text-2xl font-bold tracking-tight text-white flex flex-wrap justify-center lg:justify-start items-center gap-2">
                <Typewriter
                  options={{
                    strings: [
                      "Computer Science Student",
                      "Full Stack Developer",
                      "Problem Solver",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-white",
                    cursorClassName: "text-cyber-emerald",
                  }}
                />
              </div>
              <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base md:text-lg font-medium">
                Engineering robust digital ecosystems through clean architecture
                and creative problem-solving. Currently bridging the gap between
                hardware logic and modern web interfaces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 items-center lg:items-start justify-center lg:justify-start">
              <a
                href="/Resume1.pdf" // Put your actual file path here
                download="Resume1.pdf" // This forces the browser to download the file
                className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-white/5 cursor-pointer"
              >
                Download Resume <Download size={20} strokeWidth={3} />
              </a>
              <button className="w-full sm:w-auto bg-white/5 border border-white/10 px-10 py-4 md:py-5 rounded-full font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-white border-t-white/10 shadow-lg backdrop-blur-md">
                Contact Me <AtSign size={20} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mt-12 lg:mt-0">
            {/* Terminal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-[1.3/1] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 bg-[#07090a] shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
                className="w-full h-full object-cover opacity-25 mix-blend-screen grayscale"
                alt="Code"
              />
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1 opacity-60">
                  Efficiency
                </p>
                <p className="text-2xl md:text-3xl font-black font-mono tracking-tighter text-white italic">
                  O(log n)
                </p>
              </div>
            </motion.div>

            {/* Floating Glass Cards - Adjusted positioning for Mobile */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 md:top-10 md:-right-8 z-20 bg-[#121415]/80 backdrop-blur-3xl border border-white/10 border-t-white/20 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-5 shadow-2xl"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-500/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-emerald-500/20">
                <Zap className="text-emerald-400 fill-emerald-400" size={20} />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] leading-none mb-1">
                  Projects
                </p>
                <p className="text-xl md:text-3xl font-black text-white">3+</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 -left-4 md:-bottom-6 md:-left-10 z-20 bg-[#121415]/80 backdrop-blur-3xl border border-white/10 border-t-white/20 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-5 shadow-2xl"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-purple-500/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-purple-500/20">
                <Cpu className="text-purple-400" size={20} />
              </div>
              <div>
                <p className="font-extrabold text-sm md:text-lg text-white leading-none mb-1">
                  Coding Questions Solved
                </p>
                <p className="text-[15px] md:text-[15px] text-gray-500 font-bold uppercase tracking-widest">
                  100+
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer Area */}
        <footer className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex gap-4">
              {[Terminal, Database, Globe, Layers].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-pointer group shadow-lg"
                >
                  <Icon
                    size={22}
                    className="text-gray-500 group-hover:text-emerald-400 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-8 md:gap-12 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">
            <a
              href="https://github.com/siddhi-1234"
              className="flex items-center gap-2 hover:text-white transition-all"
            >
              <Github size={18} /> GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/siddhi-patil-21869b301"
              className="flex items-center gap-2 hover:text-white transition-all"
            >
              <Linkedin size={18} /> LINKEDIN
            </a>
            <a
              href="https://leetcode.com/u/Siddhi_Patil27/"
              className="flex items-center gap-2 hover:text-white transition-all"
            >
              <Code2Icon size={18} /> Leetcode
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
