import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import BTN from "./Images/btn.jpg";
import WDC from "./Images/wdc.png";
import Date from "./Images/calendar.png";
import FadeInSection2 from "./FadeInSection2";
function Experience() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-slate-900 text-white h-auto p-20 text-center">
        <FadeInSection2>
      <h1 className="text-3xl font-bold p-3">Professional Experience</h1>
      <p className="opacity-40 pb-14  ">
        A timeline of my professional journey, showcasing my growth and
        expertise in web development and design.
      </p>

      <div>
        <div className="max-w-md mx-auto bg-gray-950 rounded-2xl shadow-md p-4 transition-all">
          <div className="flex items-center space-x-4">
            {/* Image */}
            <img
              src={WDC}
              alt="Card"
              className="w-20 h-20 rounded-xl object-cover"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg  font-semibold">FullStack Developer </h3>
              <p className="text-gray-600 text-sm ">World Disaster Center</p>

               <div className="flex-1">
               <p className="text-gray-600 text-sm"> Remote - Austria</p>

              <p className="text-gray-600 text-sm">2025 - Present</p>
              
              
            </div>

            </div>
           
            {/* Toggle Arrow */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              {expanded ? <ChevronDown /> : <ChevronRight />}
            </button>
          </div>

          {/* Expanded Content */}
          {expanded && (
            <div className="mt-4 text-sm text-gray-700">
              Here is some more detailed information that is hidden until you
              click the arrow. You can customize this area with any content
              you'd like.
            </div>
          )}
        </div>
      </div>

          <br></br><br></br>

      <div className="max-w-md mx-auto bg-gray-950  rounded-2xl shadow-md p-4 transition-all">
          <div className="flex items-center space-x-4">
            {/* Image */}
            <img
              src={BTN}
              alt="Card"
              className="w-20 h-20 rounded-xl object-cover"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg  font-semibold">Software Dev(Intern)</h3>
              <p className="text-gray-600 text-sm">Baran Telcom Networks</p>

               <div className="flex-1">
               <p className="text-gray-600 text-sm">  Nairobi,Kenya</p>

              <p className="text-gray-600 text-sm"> May 2023 - August 2023</p>
              
              
            </div>
            </div>

            

            {/* Toggle Arrow */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              {expanded ? <ChevronDown /> : <ChevronRight />}
            </button>
          </div>

          {/* Expanded Content */}
          {expanded && (
            <div className="mt-4 text-sm text-gray-700">
              Here is some more detailed information that is hidden until you
              click the arrow. You can customize this area with any content
              you'd like.
            </div>
          )}
        </div>
        </FadeInSection2>
      </div>
    
  );
}
export default Experience;
