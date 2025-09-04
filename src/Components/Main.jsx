import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Calendar, Code, Users, ArrowRight } from 'lucide-react';
import logo from "./Images/logo2.png";
import kev from "./Images/kevin.jpeg";
import Kktech2 from "./Images/cheffset.png";
import Vida from "./Images/VideoDem0.mp4";

import dex   from "./Images/dex1.png";
import dex1 from "./Images/dexter2.png";


const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
   const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">
              Kevin Kirui
              </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <a href="https://www.linkedin.com/in/kevin-kirui-6b4a3a1bb/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer"> <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" /></a>
              <Mail className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-12 justify-center relative ">
             <div className="w-full md:w-1/2 hidden md:block">
  <img src={kev} alt="Kevin" className="w-3/4 rounded-lg m-3" />
</div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="">
            <img className="w-24 mx-auto mb-6 rounded" src={logo} alt="logo" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              I'm a Software Developer
            </h1>
           
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Focused on creating elegant solutions to complex problems, I specialize in building 
              modern web applications with cutting-edge technologies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row pt-6 gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </button>
        
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">
              Tools and methods I rely on to solve problems and ship great software
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
              <p className="text-gray-600">
                Expertise in modern frameworks including React, Laravel etc
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-gray-600">
                Experience working with cross-functional teams and agile methodologies
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
              <p className="text-gray-600">
                Turning complex requirements into elegant, scalable solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">
              My professional journey and career milestones
            </p>
          </div>
          <div className="space-y-12">
            {/* Treehouse */}
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex">

              </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">World Disaster Center</h3>
                  <span className="text-blue-600 font-semibold">Full-Stack Developer (Intern)<br></br> <span className="text-gray-600 font-semibold">April 2025 - May 2025</span> <br></br> </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                              Worked on the backend development of a roster management system. Responsible for creating APIs to fetch and serve data for the roster page, as well as implementing functionality to ensure that data is properly stored and maintained in the database.

                </p>
            </div>

            {/* Zapeture Creations */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Baran Telcom Networks</h3>
                <span className="text-blue-600 font-semibold">Software Dev(Intern)<br></br> <span className="text-gray-600 font-semibold">May 2023 - August 2023</span> <br></br> </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As a freelance web developer, I designed and built websites for small businesses and 
                private clients across various industries. I handled projects end-to-end, from initial 
                consultations and design mockups to development, deployment, and post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-xl text-gray-600">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Church Website Project */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48"> 
                <img
                  className=""
                  src={Kktech2}
                  alt="Sunset in the mountains"
                /> </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">  CHEFFEST GRILL AND RESTAURANT</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                               Cheffset Grill and Restaurant is a modern React-based website that elegantly showcases the restaurant's description, diverse menu, engaging blog, and a contact section, offering users a clean and seamless browsing experience.
.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-blue-600 font-semibold">REACT</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Additional project placeholders */}
            <div 
      className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-50 relative">
        <video
          className="w-full h-full object-cover"
          src={Vida}
          autoPlay
          muted
          loop
          playsInline
        />
      
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
            <div className="text-white text-center p-4">

              <p className="text-sm opacity-90">GameXchange</p>
              <p className="text-xs opacity-75 mt-1"> GameXchange is your premier destination for digital gaming excellence. We've revolutionized the way gamers discover, purchase, and enjoy their favorite titles.

          With over a decade of experience in the gaming industry, we pride ourselves on offering the latest releases, classic favorites, and exclusive deals that can't be found anywhere else.</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">GameXchange</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
         
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-red-600 font-semibold">LARAVEL</span>
          {/* <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" /> */}
        </div>
      </div>
    </div>
         
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="skills" className="text-center mb-16">
            <h2 className="text-4xl border-b-4 p-2 w-1/4 mx-auto border-indigo-500  font-bold mb-4">Skills</h2>
            <p className="text-xl pt-4 text-gray-300">
            Tools and methods I rely on to solve problems and ship great software.
            </p>
          </div>
         <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl  border-l-4 p-2 w-1/4 border-indigo-500  font-bold text-gray-900 mb-6 text-center">Programming Languages</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  <p className="text-sm font-medium text-gray-700">HTML</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  <p className="text-sm font-medium text-gray-700">CSS</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <p className="text-sm font-medium text-gray-700">JavaScript</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                  <p className="text-sm font-medium text-gray-700">PHP</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors col-span-2">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  <p className="text-sm font-medium text-gray-700">TypeScript</p>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white	 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl border-l-4 p-2 w-1/4  border-indigo-500 font-bold text-gray-900 mb-6 text-center">Frameworks</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://th.bing.com/th/id/R.b3b644aa4995aee815fb831d715c4c68?rik=xmFh2anLSp0SDQ&pid" alt="Laravel" />
                  <p className="text-sm font-medium text-gray-700">Laravel</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <p className="text-sm font-medium text-gray-700">React</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png" alt="Tailwind CSS" />
                  <p className="text-sm font-medium text-gray-700">Tailwind</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                  <p className="text-sm font-medium text-gray-700">Next.js</p>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl border-l-4 p-2 w-1/4  border-indigo-500 font-bold text-gray-900 mb-6 text-center">Databases</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                  <p className="text-sm font-medium text-gray-700">MongoDB</p>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <img className="w-12 h-12 mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  <p className="text-sm font-medium text-gray-700">MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
             <a href="mailto:kiruikev99@gmail.com" target="_blank" rel="noopener noreferrer">  Get In Touch </a>
            </button>
            <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <Github className="w-4 h-4" />
              <a href="https://github.com/kevinkirui2" target="_blank" rel="noopener noreferrer"> View GitHub</a>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2025 Kevin Kirui . All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;