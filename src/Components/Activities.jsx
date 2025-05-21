import Vscode from "./Images/vscode.png";
import Figma from "./Images/figma.png";
import js from "./Images/js.png";
import Laravel from "./Images/laravel.png";
import FadeInSection2 from "./FadeInSection2";

function Activities() {
  return (
    <div className="bg-slate-950 text-white w-full h-auto p-10">
      <FadeInSection2>
        <h1 className="text-3xl font-bold mb-8">Production Tools</h1>

        <div className="flex flex-wrap gap-6">
          {/* Card 1 */}
          <div className="bg-slate-900 rounded p-6 w-full lg:w-1/4">
            <img className="mb-4" width={100} src={Vscode} alt="Vscode" />
            <p>Visual Studio Code</p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 rounded p-6 w-full lg:w-1/4">
            <img className="mb-4" width={120} src={Figma} alt="Figma" />
            <p>Figma</p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 rounded p-6 w-full lg:w-1/4">
            <img className="mb-4" width={120} src={js} alt="Express JS" />
            <p>Express JS</p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900 rounded p-6 w-full lg:w-1/4">
            <img className="mb-4" width={70} src={Laravel} alt="Laravel" />
            <p>Laravel</p>
          </div>
        </div>
      </FadeInSection2>
    </div>
  );
}

export default Activities;
