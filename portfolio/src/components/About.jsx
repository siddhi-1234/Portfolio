import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  School,
  Calendar,
  Terminal,
  Menu,
  X,
  Mail,
  TimerIcon,
  Computer,
} from "lucide-react";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0a09] text-[#e7e5e4] relative overflow-x-hidden font-sans selection:bg-[#f97316]/30">
      {/* --- MATCHING NAVBAR FROM HERO --- */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-10 py-6 md:py-10 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-[#f97316]/10 border border-[#f97316]/20 rounded-lg flex items-center justify-center group-hover:bg-[#f97316]/20 transition-all">
            <Terminal size={18} className="text-[#f97316]" />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase italic text-white">
            Siddhi
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/About" className="text-[#f97316]">
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
            className="hover:text-white transition-colors"
          >
            Achievements
          </a>
          <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-full hover:bg-white/10 transition-all font-bold text-[10px] tracking-widest border-b-white/20 shadow-lg text-white">
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
            className="absolute top-24 left-0 w-full bg-[#0d0a09]/95 backdrop-blur-xl border-b border-white/10 z-50 p-8 flex flex-col gap-6 md:hidden"
          >
            <a href="/" className="text-lg font-bold">
              Home
            </a>
            <a href="/About" className="text-[#f97316] font-bold">
              About
            </a>
            <a href="/Projects" className="text-lg font-bold text-gray-400">
              Projects
            </a>
            <a href="/Skills" className="text-lg font-bold text-gray-400">
              Skills
            </a>
            <a href="/Experience" className="text-lg font-bold text-gray-400">
              Experience
            </a>
            <a href="/Achievements" className="text-lg font-bold text-gray-400">
              Achievements
            </a>
            <button className="bg-[#f97316] text-white py-4 rounded-xl font-black uppercase tracking-widest">
              GET IN TOUCH
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN BENTO GRID --- */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
        {/* Left: Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-7 relative group overflow-hidden rounded-[2.5rem] bg-[#1c1917] border border-white/5 h-[350px] md:h-[500px] w-full"
        >
          <img
            src="Siddhii.jpeg"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700"
            alt="Profile"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a09] via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-8 left-8 space-y-3 z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[10px] font-bold text-[#f97316] uppercase tracking-widest">
              Available for work
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
              Siddhi Patil
            </h1>
            <p className="text-stone-400 text-sm font-medium">
              Full Stack Developer & AI/ML Enthusiast
            </p>
          </div>
        </motion.div>

        {/* Right: Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5 bg-[#1c1917] rounded-[2.5rem] p-8 border border-white/5 flex flex-col justify-center gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="p-4 bg-stone-800 rounded-2xl text-[#f97316] shadow-lg shadow-[#f97316]/5">
              <GraduationCap />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                Degree
              </p>
              <p className="font-bold text-lg text-white">
                Btech Computer Science
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-4 bg-stone-800 rounded-2xl text-[#f97316] shadow-lg shadow-[#f97316]/5">
              <School />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                College
              </p>
              <p className="font-bold text-lg text-white">
                Walchand Institute of Technology, Solapur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-4 bg-stone-800 rounded-2xl text-[#f97316] shadow-lg shadow-[#f97316]/5">
              <TimerIcon />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                Current Year
              </p>
              <p className="font-bold text-lg text-white">3rd Year</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-4 bg-stone-800 rounded-2xl text-[#f97316] shadow-lg shadow-[#f97316]/5">
              <Calendar />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                Year
              </p>
              <p className="font-bold text-lg text-white">2027</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-4 bg-stone-800 rounded-2xl text-[#f97316] shadow-lg shadow-[#f97316]/5">
              <Computer />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                Technical Interests
              </p>
              <p className="font-bold text-lg text-white">
                Full stack web development, AI/ML
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="max-w-6xl mx-auto mt-20 px-6 md:px-10 pb-12">
        {/* Short Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 border-t border-white/5"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase italic tracking-tighter">
              About!
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              I am a passionate software developer dedicated to building
              high-performance web applications. With a focus on clean code and
              intuitive user experiences, I transform complex problems into
              elegant digital solutions. I am always eager to learn new
              technologies and collaborate on innovative projects.
            </p>
          </div>
          <div className="flex md:justify-end items-center">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                Drop a message
              </p>
              <a
                href="mailto:hello@siddhi.com"
                className="text-lg font-bold text-[#f97316] hover:underline flex items-center gap-2"
              >
                <Mail size={18} /> siddhip979@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 font-bold uppercase tracking-widest gap-6 pt-8 border-t border-white/5">
          <div>© 2027 Siddhi Patil. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default About;
