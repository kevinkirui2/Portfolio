import { useState } from "react";
import { Menu, X } from "lucide-react";
import Kevin from "./Images/work2.jpeg";
import Instagram from "./Images/instagram.png";
import Snapchat from "./Images/snapchat.png";
import Linko from "./Images/linkedin.png";
import FadeInSection from "./FadeInSection";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon - visible on small devices */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-slate-800 p-2 rounded-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`
          fixed top-0 left-0 h-full z-40 bg-slate-950 text-white 
          w-64 p-4 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block
        `}
      >
        <FadeInSection>
          <div className="flex flex-col">
            <img src={Kevin} alt="Kevin" className="w-1/2 rounded m-3" />

            <div className="flex flex-row items-start">
              <h1 className="text-2xl font-bold p-3">
                Kevin <br /> Kirui
              </h1>
              <p className="text-lg p-3 pt-3 border-l-4 border-indigo-500">
                Full Stack <br /> Developer
              </p>
            </div>

            <div className="mt-2">
              <p className="opacity-40">Hello There!</p>
              <p className="pt-2">
                I'm a full stack developer specializing in Laravel, React,
                Node.js, PHP, MySQL, and API implementation.
              </p>
            </div>

            <div className="flex flex-row pt-5">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-8 h-8 rounded-full m-3"
              />
              <img
                src={Snapchat}
                alt="Snapchat"
                className="w-8 h-8 rounded-full m-3"
              />
              <img
                src={Linko}
                alt="LinkedIn"
                className="w-8 h-8 rounded-full m-3"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
}

export default Sidebar;
