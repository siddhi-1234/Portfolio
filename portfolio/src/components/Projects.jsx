import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Terminal,
  X,
  PlayCircle,
  Eye,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle2, // Added missing icon
  Mail,
} from "lucide-react";

// Modal Component with Info and Photo Gallery Views
// Modal Component with Info and Photo Gallery Views
const ProjectModal = ({ project, isOpen, onClose }) => {
  const [viewPhotos, setViewPhotos] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (!isOpen || !project) return null;

  const handleClose = () => {
    setViewPhotos(false);
    setCurrentPhotoIndex(0);
    onClose();
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length,
    );
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-[#07050a]/95 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl bg-[#120d1d] border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh] md:max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white"
          >
            <X size={20} />
          </button>

          {!viewPhotos ? (
            /* --- INFO VIEW --- */
            <>
              <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto bg-[#0a0a0a] relative overflow-hidden shrink-0">
                <img
                  src={project.image}
                  className="w-full h-full object-cover opacity-60"
                  alt={project.title}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <PlayCircle
                      size={32}
                      className="md:w-12 md:h-12 text-[#a855f7]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="space-y-6 md:space-y-8 text-left">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 text-white">
                      {project.title}{" "}
                      <span className="text-[#a855f7]">
                        {project.highlight}
                      </span>
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full text-[9px] md:text-[10px] font-black text-[#a855f7] uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2 italic">
                        The Challenge
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a855f7] mb-3 italic">
                        Technical Solution & Features
                      </p>
                      <div className="space-y-2 md:space-y-3">
                        {project.solutionSteps ? (
                          project.solutionSteps.map((step, i) => (
                            <div
                              key={i}
                              className="flex gap-3 items-start group"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-[#a855f7] mt-1 shrink-0 opacity-70"
                              />
                              <p className="text-[11px] md:text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                                <span className="font-bold text-gray-100">
                                  {step.title}:
                                </span>{" "}
                                {step.desc}
                              </p>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                            {project.solution}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all font-black uppercase text-[10px] tracking-widest text-white"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <button
                      onClick={() => setViewPhotos(true)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 md:py-4 bg-[#a855f7] rounded-xl md:rounded-2xl hover:bg-[#9333ea] transition-all font-black uppercase text-[10px] tracking-widest text-white"
                    >
                      <Eye size={16} /> View Photos
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* --- PHOTO GALLERY VIEW --- */
            <div className="w-full h-full flex flex-col items-center justify-center bg-black relative p-4 md:p-12">
              <button
                onClick={() => setViewPhotos(false)}
                className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all z-[110] text-white"
              >
                <Info size={14} /> Back to Info
              </button>

              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <motion.img
                  key={currentPhotoIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  src={project.gallery[currentPhotoIndex]}
                  className="max-w-full max-h-[60vh] md:max-h-[70vh] rounded-xl md:rounded-3xl object-contain shadow-2xl"
                />

                <button
                  onClick={prevPhoto}
                  className="absolute left-0 md:left-4 p-2 md:p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all backdrop-blur-md text-white"
                >
                  <ChevronLeft size={24} className="md:w-8 md:h-8" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-0 md:right-4 p-2 md:p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all backdrop-blur-md text-white"
                >
                  <ChevronRight size={24} className="md:w-8 md:h-8" />
                </button>
              </div>

              <div className="mt-4 md:mt-8 flex gap-2">
                {project.gallery.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                      idx === currentPhotoIndex
                        ? "bg-[#a855f7] w-4 md:w-6"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MindNest",
      highlight: "Mental Health Platform",
      challenge:
        "MindNest is a digital mental health and psychological support system designed for students in higher education. The platform provides an accessible, safe, and user-friendly space for emotional support and well-being tracking.",
      solutionSteps: [
        {
          title: "Student Auth",
          desc: "Firebase Authentication for privacy.",
        },
        {
          title: "Mood Tracker",
          desc: "Daily mood logging with a simplified, calming UI.",
        },
        {
          title: "Digital Journal",
          desc: "Full CRUD system to write and manage personal entries.",
        },
        {
          title: "AI Chatbot",
          desc: "Mental Health support powered by Dialogflow.",
        },
        {
          title: "Self-Help",
          desc: "Guided meditation, relaxation content, and wellness resources.",
        },
        {
          title: "Booking",
          desc: "Appointment booking with counselors and real-time chat.",
        },
        {
          title: "Admin Tools",
          desc: "Counselor dashboard with mood stats and resource management.",
        },
      ],
      tags: [
        "Firebase",
        "React",
        "Dialogflow",
        "Node.js",
        "Tailwind CSS",
        "Express",
        "MongoDB",
      ],
      github: "https://github.com/siddhi-1234/MindNest",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNzUwwYcLqySlLP2u_J2j_BGqfcDSqS8N_A&s",
      gallery: [
        "./MindNest-StudentLogin.png",
        "./MindNest-Student.png",
        "./MindNest-Resources.png",
        "./MindNest-Journal.png",
        "./MindNest-EmergencySection.png",
        "./MindNest-CounsellorPortal.png",
        "./MindNest-CounsellorLogin.png",
        "./MindNest-CounsellorDashboard.png",
        "./MindNest-chatbot.png",
        "./MindNest-Breathing.png",
        "./MindNest-Appointments.png",
        "./MindNest-AdminLogin.png",
        "./MindNest-AdminDashboard.png",
      ],
    },
    {
      title: "EcoFuel-Connect",
      highlight: "CNG Portal",
      challenge:
        "Solving the daily problem of accessing CNG pump locations and availability to save energy and time.",
      solution:
        "A portal where users can easily locate CNG pumps in any city and check real-time availability. Includes pump login, registration, and integrated maps to avoid crowds and save energy.",
      tags: ["VB.NET", "SQL Server", "HTML", "CSS"],
      github: "https://github.com/siddhi-1234/CNG-Portal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjYOmL8xbf3AKwNqaHIocvpFVXKL-5xQECQ&s",
      gallery: [
        "./CNG- Home page.png",
        "./CNG- Search pump.png",
        "./CNG- Pump registration.png",
        "./CNG- Pump login.png",
        "./CNG- Maps.png",
        "./CNG- Database.png",
      ],
    },
    {
      title: "Resume Builder",
      highlight: "A modern, responsive Resume Builder",
      challenge:
        "Creating a user-friendly, customizable resume builder that allows users to easily create resume",
      solution:
        "A simple and interactive Resume Builder using HTML, CSS, and JavaScript. Users can input their details and generate a formatted resume instantly.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/siddhi-1234/Resume-builder",
      image:
        "https://jpinfotech.org/wp-content/uploads/2021/12/Online-Resume-Builder.png",
      gallery: [
        "./Resume-Home.png",
        "./Resume-Feature.png",
        "./Resume-Banner.png",
        "./Resume-Contact.png",
        "./Resume-reviews.png",
        "./Resume-Signup.png",
        "./Resume-Templ.png",
        "./Resume-Templates.png",
        "./Resume-Variety.png",
        "./Resume.png",
      ],
    },
    {
      title: "Synthesia",
      highlight: "Music Streaming Website",
      challenge:
        "Developing a seamless, real-time music management platform that balances complex player controls with secure user data persistence.",
      solutionSteps: [
        {
          title: "MERN Architecture",
          desc: "Full-stack integration using MongoDB, Express, React, and Node.js with RESTful API communication.",
        },
        {
          title: "User Experience",
          desc: "Interactive UI featuring search functionality, shuffle playback, and real-time volume/player controls.",
        },
        {
          title: "Security",
          desc: "JWT-based user authentication (Signup/Login) with protected routes for secure data access.",
        },
        {
          title: "Data Persistence",
          desc: "Persistent 'Favorites' management allowing users to save and remove songs via a MongoDB database.",
        },
        {
          title: "Responsive Design",
          desc: "Fully optimized mobile-first interface ensuring a smooth experience across all device sizes.",
        },
      ],
      tags: ["React", "MongoDB", "Node.js", "Express", "JWT"],
      github: "https://github.com/siddhi-1234/Synthesia",
      image:
        "https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg",
      gallery: [
        "Music-Signup.png",
        "Music-Login.png",
        "Music-Home.png",
        "Music-Favourites.png",
        "Music-Search.png",
        "Music-EditProfile.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#07050a] text-white selection:bg-[#a855f7]/30 overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#a855f7]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6366f1]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
        <nav className="flex justify-between items-center mb-12 md:mb-24">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#a855f7]/10 rounded-lg md:rounded-xl flex items-center justify-center border border-[#a855f7]/20">
              <Terminal size={18} className="md:w-5 md:h-5 text-[#a855f7]" />
            </div>
            <span className="text-lg md:text-xl font-black italic tracking-tighter uppercase">
              Siddhi
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <a
              href="/"
              className="hover:text-white transition-colors uppercase"
            >
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
              className="text-[#8753b8] hover:text-[#c1a8d8] transition-colors uppercase font-black tracking-[0.2em]"
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
              className="hover:text-white transition-colors uppercase"
            >
              Experience
            </a>
          </div>
          {/* Mobile indicator for nav could go here */}
        </nav>

        <header className="max-w-3xl mb-12 md:mb-24 text-left">
          <h1 className="text-4xl sm:text-6xl md:text-[80px] font-black leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8 italic">
            Creative{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
              Project
            </span>{" "}
            <br /> Showcases
          </h1>
          <p className="text-gray-500 text-base md:text-xl font-medium leading-relaxed max-w-2xl">
            A curated collection of technical explorations focusing on
            high-performance architecture and immersive user interfaces.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-[#120d1d]/80 backdrop-blur-xl border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-6 flex flex-col h-full group text-left shadow-2xl"
            >
              <div className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden mb-6 md:mb-8 border border-white/5 bg-[#0a0a0a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight">
                {project.title}{" "}
                <span className="text-[#a855f7]">{project.highlight}</span>
              </h3>

              <div className="mt-auto pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-gray-500 hover:text-white p-2 bg-white/5 rounded-full transition-all border border-white/10"
                >
                  <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="max-w-7xl mx-auto mt-12 md:mt-20 pb-8 md:pb-12 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 py-10 md:py-12 border-t border-white/5"
          >
            <div className="text-left space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase italic tracking-tighter">
                Let's Connect
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed max-w-md">
                Interested in collaboration or have a project in mind? I'm
                always looking for new opportunities to build meaningful digital
                experiences.
              </p>
            </div>
            <div className="flex md:justify-end items-center">
              <div className="flex flex-col gap-2 items-start md:items-end w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Drop a message
                </p>
                <a
                  href="mailto:hello@siddhi.com"
                  className="text-base md:text-lg font-bold text-[#a855f7] hover:underline flex items-center gap-2 truncate max-w-full"
                >
                  <Mail size={18} className="shrink-0" /> siddhip979@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </footer>

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
};

export default Projects;
