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

// Using placeholder paths - replace with actual image paths when available
import logo from "./Images/logo2.png";
import kev from "./Images/kevin.jpeg";

import Vida from "./Images/VideoDem0.mp4";
import Vida2 from "./Images/TeaApp.mp4";
import Vida3 from "./Images/cheff.mp4";
import Vida4 from "./Images/riverside2.mp4";


const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [IsHovered, setIsHovered] = useState(false);
  const [IsHovered2, setIsHovered2] = useState(false);

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center py-5">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Kevin Kirui</div>
            <div className="hidden md:flex space-x-10">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase() ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex space-x-5 items-center">
              <a href="https://github.com/kevinkirui2" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-kirui-6b4a3a1bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              </a>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img className="w-20 mb-8 rounded-xl shadow-lg" src={logo} alt="logo" />
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-balance">
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">I'm Kevin Kirui,</span><br />
                <span className="text-gray-900">A Software Developer</span>
              </h1>

              <p className="text-lg text-gray-700 max-w-2xl leading-relaxed mb-10">
                Focused on creating elegant solutions to complex problems. I specialize in building modern web applications with React, Laravel, and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium group"
                >
                  View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <img src={kev} alt="Kevin" className="w-full max-w-sm rounded-2xl shadow-2xl object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tools and methods I rely on to solve problems and ship great software
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expertise in modern frameworks including React, Laravel, Next.js, and Node.js for end-to-end web solutions.
              </p>
            </div>
            <div className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience working with cross-functional teams and agile methodologies to deliver quality projects.
              </p>
            </div>
            <div className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ExternalLink className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Problem Solving</h3>
              <p className="text-gray-600 leading-relaxed">
                Turning complex requirements into elegant, scalable solutions with clean code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </div>
          <div className="space-y-6 max-w-3xl">
            {/* Experience Item 1 */}
            <div className="group relative p-8 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      World Disaster Center
                    </h3>
                    <p className="text-blue-600 font-semibold">Full-Stack Developer (Intern)</p>
                  </div>
                  <span className="text-gray-600 font-medium text-sm md:text-right whitespace-nowrap md:ml-4">
                    April 2025 - May 2025
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Worked on the backend development of a roster management system. Created APIs to fetch and serve data for the roster page, implementing functionality to ensure data is properly stored and maintained in the database.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="group relative p-8 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Baran Telcom Networks
                    </h3>
                    <p className="text-blue-600 font-semibold">Software Developer (Intern)</p>
                  </div>
                  <span className="text-gray-600 font-medium text-sm md:text-right whitespace-nowrap md:ml-4">
                    May 2023 - August 2023
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  As a web developer, I designed and built websites for small businesses and clients across various industries. Handled projects end-to-end, from consultations and design mockups to development, deployment, and post-launch support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing my recent work and technical expertise
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 bg-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={Vida4}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-2">
                      Riverside Hostel Management System
                    </p>
                    <p className="text-gray-200 mb-4 leading-relaxed max-w-xl">
                      A comprehensive management system for tenant tracking and admin operations. Tenants can view rent balances and raise issues, while admins manage all records and updates.
                    </p>
                    <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
                      PHP
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* GameXchange Project */}
            <div
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 bg-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={Vida}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-2">
                      GameXchange
                    </p>
                    <p className="text-gray-200 mb-4 leading-relaxed max-w-xl">
                      An e-commerce platform for video game exchange between buyers and sellers. Features secure transactions, game listings, and admin management capabilities.
                    </p>
                    <span className="inline-block px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium">
                      Laravel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chai App Project */}
            <div
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 bg-white"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={Vida2}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-2">
                      Chai App - Tea Farm Management
                    </p>
                    <p className="text-gray-200 mb-4 leading-relaxed max-w-xl">
                      A comprehensive management system for tea farm operations. Supervisors manage workers and production data, while owners gain insights into farm performance and metrics.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                        React
                      </span>
                      <span className="inline-block px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-medium">
                        Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cheffset Restaurant */}
            <div
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 bg-white"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={Vida3}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-2">
                      Cheffset Restaurant
                    </p>
                    <p className="text-gray-200 mb-4 leading-relaxed max-w-xl">
                      A professional restaurant website showcasing an elegant menu and services. Built with React for a smooth user experience and responsive design.
                    </p>
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                      React
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Languages, frameworks, and tools I use to build modern applications
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Programming Languages
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
                ].map((tech) => (
                  <div key={tech.label} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400/20 to-indigo-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <img className="w-10 h-10" src={tech.src} alt={tech.label} />
                    </div>
                    <p className="text-sm font-medium text-gray-200">{tech.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
                  { src: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png", label: "Tailwind" },
                  { src: "https://th.bing.com/th/id/R.b3b644aa4995aee815fb831d715c4c68?rik=xmFh2anLSp0SDQ&pid", label: "Laravel" },
                ].map((tech) => (
                  <div key={tech.label} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400/20 to-indigo-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <img className="w-10 h-10" src={tech.src} alt={tech.label} />
                    </div>
                    <p className="text-sm font-medium text-gray-200">{tech.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Databases
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
                ].map((tech) => (
                  <div key={tech.label} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400/20 to-indigo-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <img className="w-10 h-10" src={tech.src} alt={tech.label} />
                    </div>
                    <p className="text-sm font-medium text-gray-200">{tech.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://1drv.ms/b/c/9273c3e03a8e1704/EWkwflDdJ9lCq0oDbpB_P8AB7fXagCPE7K7qJZvjWpWbjQ?e=CcXzK5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Resume
            </a>
            <a
              href="https://github.com/kevinkirui2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm">&copy; 2025 Kevin Kirui. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/kevinkirui2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kevin-kirui-6b4a3a1bb/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
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
