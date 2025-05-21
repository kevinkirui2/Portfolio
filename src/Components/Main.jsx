import Sidebar from "./sidebar";
import Landing from "./Landing";
import Experience from "./Experience";
import Projects from "./Projects";
import Activities from "./Activities";
import FadeInSection from "./FadeInSection";

function Main() {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-full z-10">
        <Sidebar/>
      </div>

      <div className="ml-64 w-full">
        <Landing />
        <Projects />
        <Experience />
        <Activities />
      </div>
    </div>
  );
}

export default Main;
