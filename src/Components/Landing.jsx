import './landing.css';
import Navbar from "./Navbar";
import Projects from "./Projects";
import FadeInSection2 from './FadeInSection2';
import logo from "./Images/logo2.png";

function Landing() {
  return (
    <div>
      <div id="wallpaper" className="wallpaper">
        <FadeInSection2>
          <div className="pt-40 text-center">
            {/* Centered Logo */}
            <img src={logo} className="w-24 mx-auto rounded" alt="logo" />
            
            {/* Heading & Description */}
            <h1 className="text-5xl font-bold text-white mt-6">
              Hi, I'm Kevin Kirui
            </h1>
            <p className="text-lg text-white mt-4 w-full max-w-2xl mx-auto">
              Focused on interfaces and experiences, working remotely from Nairobi, Kenya.
            </p>

            {/* Resume Button */}
            <div className="pt-10">
              <a
                href="https://1drv.ms/b/c/9273c3e03a8e1704/EUaIMB_0i6tOtXWAO9OfRGkBzZSrWU_1lSvy4aRTcKZL9A?e=QdBe73"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
                  View Resume
                </button>
              </a>
            </div>
          </div>
        </FadeInSection2>
      </div>
    </div>
  );
}

export default Landing;
