"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Users,
  ArrowRight,
} from "lucide-react";

import logo from "./Images/logo2.png";
import Vida from "./Images/VideoDem0.mp4";
import Vida2 from "./Images/TeaApp.mp4";
import Vida3 from "./Images/cheff.mp4";
import Vida4 from "./Images/riverside2.mp4";

const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

  const aboutCards = [
    {
      icon: <Code className="w-7 h-7 text-cyan-400" />,
      title: "Full-Stack Development",
      desc: "Expertise in modern frameworks including React, Laravel, Next.js, and Node.js for end-to-end web solutions.",
    },
    {
      icon: <Users className="w-7 h-7 text-cyan-400" />,
      title: "Team Collaboration",
      desc: "Experience working with cross-functional teams and agile methodologies to deliver quality projects.",
    },
    {
      icon: <ExternalLink className="w-7 h-7 text-cyan-400" />,
      title: "Problem Solving",
      desc: "Turning complex requirements into elegant, scalable solutions with clean code.",
    },
  ];

  const experiences = [
    {
      company: "World Disaster Center",
      role: "Full-Stack Developer (Intern)",
      period: "April 2025 - May 2025",
      desc: "Worked on the backend development of a roster management system. Created APIs to fetch and serve data for the roster page, implementing functionality to ensure data is properly stored and maintained in the database.",
    },
    {
      company: "Baran Telcom Networks",
      role: "Software Developer (Intern)",
      period: "May 2023 - August 2023",
      desc: "As a web developer, I designed and built websites for small businesses and clients across various industries. Handled projects end-to-end, from consultations and design mockups to development, deployment, and post-launch support.",
    },
  ];

  const projects = [
    {
      src: Vida4,
      title: "Riverside Hostel Management System",
      desc: "A comprehensive management system for tenant tracking and admin operations. Tenants can view rent balances and raise issues, while admins manage all records and updates.",
      tags: [{ label: "PHP", color: "bg-violet-500" }],
    },
    {
      src: Vida,
      title: "GameXchange",
      desc: "An e-commerce platform for video game exchange between buyers and sellers. Features secure transactions, game listings, and admin management capabilities.",
      tags: [{ label: "Laravel", color: "bg-red-500" }],
    },
    {
      src: Vida2,
      title: "Chai App — Tea Farm Management",
      desc: "A comprehensive management system for tea farm operations. Supervisors manage workers and production data, while owners gain insights into farm performance and metrics.",
      tags: [
        { label: "React", color: "bg-cyan-600" },
        { label: "Node.js", color: "bg-amber-500" },
      ],
    },
    {
      src: Vida3,
      title: "Cheffset Restaurant",
      desc: "A professional restaurant website showcasing an elegant menu and services. Built with React for a smooth user experience and responsive design.",
      tags: [{ label: "React", color: "bg-cyan-600" }],
    },
  ];

  const skillSections = [
    {
      title: "Programming Languages",
      cols: "grid-cols-3",
      techs: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      cols: "grid-cols-2",
      techs: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
        { src: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png", label: "Tailwind" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg", label: "Laravel" },
      ],
    },
    {
      title: "Databases",
      cols: "grid-cols-2",
      techs: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ── NAVIGATION ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center py-5">

            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
              Kevin Kirui
            </div>

            <div className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex space-x-5 items-center">
              <a href="https://github.com/kevinkirui2" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/kevin-kirui-6b4a3a1bb/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="min-h-screen  items-center pt-20 justify-center relative overflow-hidden"
      >


        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <img className="w-20 mb-8 rounded-xl shadow-lg shadow-cyan-500/10" src={logo} alt="logo" />
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Portfolio</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  I'm Kevin Kirui,
                </span>
                <br />
                <span className="text-slate-100">A FullStack Backend(Major) Developer</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
                Focused on creating elegant solutions to complex problems. I specialize in building
                modern web applications with React, Laravel, and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-medium group"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-medium"
                >
                  Get In Touch
                </button>
              </div>
            </div>

          

          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-6 h-6 text-slate-600" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Who I Am</span>
              <span className="w-8 h-px bg-cyan-400" />
            </div>
            <h2 className="text-5xl font-bold text-slate-100 mb-4">About Me</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Tools and methods I rely on to solve problems and ship great software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Career</span>
              <span className="w-8 h-px bg-cyan-400" />
            </div>
            <h2 className="text-5xl font-bold text-slate-100 mb-4">Experience</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </div>

          <div className="space-y-6 max-w-3xl">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="group relative p-8 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.company}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.role}</p>
                    </div>
                    <span className="mt-2 md:mt-0 md:ml-4 text-slate-500 text-sm font-medium whitespace-nowrap bg-slate-700/50 px-3 py-1 rounded-full self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Work</span>
              <span className="w-8 h-px bg-cyan-400" />
            </div>
            <h2 className="text-5xl font-bold text-slate-100 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Showcasing my recent work and technical expertise
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500 bg-slate-800/30"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                  <video
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    src={project.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div>
                      <p className="text-2xl font-bold mb-2 text-slate-100">{project.title}</p>
                      <p className="text-slate-300 mb-4 leading-relaxed max-w-xl text-sm">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.label}
                            className={`inline-block px-4 py-1.5 ${tag.color} text-white rounded-full text-xs font-semibold tracking-wide`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Toolkit</span>
              <span className="w-8 h-px bg-cyan-400" />
            </div>
            <h2 className="text-5xl font-bold text-slate-100 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Languages, frameworks, and tools I use to build modern applications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillSections.map((section) => (
              <div
                key={section.title}
                className="bg-slate-800/40 backdrop-blur-md p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-100 mb-8 text-center tracking-tight">
                  {section.title}
                </h3>
                <div className={`grid ${section.cols} gap-6`}>
                  {section.techs.map((tech) => (
                    <div
                      key={tech.label}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 rounded-lg bg-slate-700/60 border border-slate-600/40 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all">
                        <img className="w-9 h-9" src={tech.src} alt={tech.label} />
                      </div>
                      <p className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                        {tech.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Let's Connect</span>
            <span className="w-8 h-px bg-cyan-400" />
          </div>
          <h2 className="text-5xl font-bold mb-6 text-slate-100">Let's Work Together</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas
            to life. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://1drv.ms/b/c/9273c3e03a8e1704/EWkwflDdJ9lCq0oDbpB_P8AB7fXagCPE7K7qJZvjWpWbjQ?e=CcXzK5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Resume
            </a>
            <a
              href="https://github.com/kevinkirui2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 bg-slate-950 text-slate-500 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-center md:text-left">
              &copy; 2025 Kevin Kirui. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/kevinkirui2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-kirui-6b4a3a1bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Main;