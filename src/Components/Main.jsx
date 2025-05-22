import Sidebar from "./sidebar";
import Landing from "./Landing";
import Experience from "./Experience";
import Projects from "./Projects";
import Activities from "./Activities";
import FadeInSection from "./FadeInSection";
import Footer from "./Footer";

function Main() {
  return (
    <div className="flex">
      <div className="fixed overflow-auto left-0 top-0 h-100px h-screen z-10">
        <Sidebar/>
      </div>

      <div className="lg:ml-64 sm:max-w-full ">
        <Landing />
        <Projects />
        <Experience />
        <Activities />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
