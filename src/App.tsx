/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Instagram, 
  Mail, 
  MessageCircle, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Palette, 
  Cpu, 
  Layout,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-display font-bold text-emerald-400"
          whileHover={{ scale: 1.05 }}
        >
          Naurah<span className="text-white">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-emerald-100/70 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-emerald-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-emerald-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-700/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-32 h-32 border border-emerald-500/20 rounded-3xl rotate-12"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-emerald-400/10 rounded-full"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{ 
            y: [null, '-20%', '120%'],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Available for new projects
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-emerald-400">Naurah</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100/80 mb-4 font-medium">
            Student | Creative Developer | Digital Project Builder
          </p>
          <p className="text-lg text-emerald-100/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            I enjoy creating digital projects, interactive websites, and educational tools.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-2xl transition-colors flex items-center gap-2 group shadow-lg shadow-emerald-500/20"
            >
              View My Work
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-2xl transition-colors"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-20 w-64 h-64 border border-emerald-500/10 rounded-full hidden lg:block"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-20 w-96 h-96 border border-emerald-500/5 rounded-[40%] hidden lg:block"
      />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-emerald-500/30 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-2 border-emerald-400/20 rounded-[30%]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
                  <Layout size={80} className="text-emerald-400 relative z-10" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-2xl -z-10 blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              About <span className="text-emerald-400">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-emerald-100/70 leading-relaxed">
              <p>
                I am a student interested in technology, web development, creative visual projects, and digital innovation. My journey in the digital world is driven by a desire to innovate and build tools that make a difference.
              </p>
              <p>
                I specialize in creating digital projects that blend technical skills with creative design. Whether it's building educational platforms or interactive digital experiences, I strive for excellence and meaningful impact.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass p-4 rounded-2xl">
                <h4 className="text-emerald-400 font-bold text-2xl mb-1">2+</h4>
                <p className="text-sm text-emerald-100/50 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="glass p-4 rounded-2xl">
                <h4 className="text-emerald-400 font-bold text-2xl mb-1">10+</h4>
                <p className="text-sm text-emerald-100/50 uppercase tracking-wider">Projects Built</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, index, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl overflow-hidden flex flex-col h-full"
    >
      <div className="aspect-video bg-emerald-900/40 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="text-emerald-400/40"
        >
          {icon}
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-950/80 to-transparent" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest py-1 px-2 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-emerald-100/60 mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors">
            View Project <ArrowUpRight size={16} />
          </a>
          <div className="flex gap-3">
            <Github size={18} className="text-emerald-100/40 hover:text-white cursor-pointer transition-colors" />
            <ExternalLink size={18} className="text-emerald-100/40 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Tahfidz Management Application",
      description: "A web application that helps Islamic schools manage Quran memorization using the Sabaq, Sabqi, and Manzil method.",
      tags: ["Web App", "Education", "React"],
      icon: <Code size={100} />
    },
    {
      title: "Tahfidz Landing Page",
      description: "A landing page designed to promote the Tahfidz management application with a modern UI and payment integration.",
      tags: ["UI/UX", "Landing Page", "Design"],
      icon: <Layout size={100} />
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-emerald-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              My <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="text-emerald-100/60 max-w-xl">
              A selection of my recent work, focusing on educational tools and digital experiences.
            </p>
          </div>
          <motion.a 
            href="#" 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-emerald-400 font-bold"
          >
            View all projects <ChevronRight size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              title={project.title} 
              description={project.description} 
              tags={project.tags} 
              icon={project.icon} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://picsum.photos/seed/quran1/600/800",
    "https://picsum.photos/seed/islamic-art/800/600",
    "https://picsum.photos/seed/mosque-interior/600/600",
    "https://picsum.photos/seed/arabic-calligraphy/800/800",
    "https://picsum.photos/seed/education-islam/600/800",
    "https://picsum.photos/seed/tahfidz-learning/800/600",
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Portfolio <span className="text-emerald-400">Gallery</span>
          </h2>
          <p className="text-emerald-100/60 max-w-xl mx-auto">
            Visual documentation and creative assets from my Tahfidz and Islamic digital projects.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
              className="rounded-2xl overflow-hidden glass p-2 cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Web Design", icon: <Palette size={24} />, desc: "Creating beautiful, functional interfaces." },
    { name: "UI/UX", icon: <Layout size={24} />, desc: "Designing user-centered digital experiences." },
    { name: "Creative Technology", icon: <Cpu size={24} />, desc: "Exploring the intersection of art and code." },
    { name: "Digital Projects", icon: <Code size={24} />, desc: "Building scalable and interactive solutions." },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-emerald-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-emerald-100/60 max-w-xl mx-auto">
            The technical and creative toolkit I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
              className="glass p-8 rounded-3xl text-center flex flex-col items-center group transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-sm text-emerald-100/50 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] overflow-hidden p-8 md:p-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Let's <span className="text-emerald-400">Connect</span>
              </h2>
              <p className="text-lg text-emerald-100/60 mb-10 leading-relaxed">
                Have a project in mind or just want to say hello? I'm always open to new opportunities and interesting conversations.
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:naurahmukbitah@gmail.com" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-100/40 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-lg font-medium">naurahmukbitah@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/nachizu_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-100/40 uppercase font-bold tracking-widest">Instagram</p>
                    <p className="text-lg font-medium">@nachizu_</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/6281399951929" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-100/40 uppercase font-bold tracking-widest">WhatsApp</p>
                    <p className="text-lg font-medium">+62 813-9995-1929</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-emerald-100/40">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-emerald-100/40">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Your Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-emerald-100/40">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Your Message"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-emerald-100/40 text-sm">
          © 2026 Naurah Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-emerald-100/40 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-emerald-100/40 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-emerald-100/40 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      <BackgroundElements />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
