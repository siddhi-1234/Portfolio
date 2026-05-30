import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Menu,
  X,
  Send,
  Mail,
  Linkedin,
  Github,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const Contacts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Pull email from env
    const myEmail = process.env.REACT_APP_CONTACT_EMAIL;

    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#07050a] text-white selection:bg-[#a855f7]/30 overflow-x-hidden font-sans">
      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#a855f7]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6366f1]/10 blur-[120px]" />
      </div>

      {/* --- REUSED NAVBAR --- */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-8 md:py-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-xl flex items-center justify-center group-hover:bg-[#a855f7]/20 transition-all">
            <Terminal size={20} className="text-[#a855f7]" />
          </div>
          <span className="text-xl font-black italic tracking-tighter uppercase text-white">
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
          <a
            href="/Contact"
            className="text-[#a855f7] transition-colors uppercase font-black tracking-[0.2em]"
          >
            Contact
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
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item}`}
                className={`text-3xl font-black uppercase tracking-tighter italic ${item === "Contact" ? "text-[#a855f7]" : "text-white/50"}`}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 py-12">
        {/* --- HEADER --- */}
        <header className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-6 leading-none bg-gradient-to-r from-[#00d4ff] via-[#ff6b9d] to-[#ffd93d] bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed px-4"
          >
            Let's collaborate on something amazing. Whether it's a project,
            opportunity, or just a chat about tech.
          </motion.p>
        </header>

        {/* --- MAIN CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#00d4ff]/20">
              <Send className="text-white w-8 h-8" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">
              Connect Directly
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  val: "Send an Email",
                  href: `mailto:${process.env.REACT_APP_CONTACT_EMAIL}`,
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  val: "View Profile",
                  href: process.env.REACT_APP_LINKEDIN_URL,
                },
                {
                  icon: <Github size={20} />,
                  label: "GitHub",
                  val: "View Projects",
                  href: process.env.REACT_APP_GITHUB_URL,
                },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all group/link"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
                    {link.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover/link:text-[#00d4ff] transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm font-bold text-gray-200 truncate">
                      {link.val}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b9d] to-[#ffd93d] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#ff6b9d]/20">
              <MessageSquare className="text-white w-8 h-8" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">
              Send Message
            </h3>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 p-6 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-2xl flex items-center gap-4"
                >
                  <CheckCircle className="text-[#00ff88] shrink-0" size={24} />
                  <div>
                    <p className="text-[#00ff88] font-bold text-sm">
                      Message Sent!
                    </p>
                    <p className="text-[#00ff88]/70 text-xs mt-1">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Your Email" },
                { name: "subject", type: "text", placeholder: "Subject" },
              ].map((field) => (
                <div key={field.name} className="relative group">
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/50 focus:bg-white/10 transition-all"
                  />
                </div>
              ))}
              <div className="relative group">
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-[#00d4ff] to-[#ff6b9d] rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#00d4ff]/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="text-center py-12 border-t border-white/5">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 Developer Portfolio. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Contacts;
