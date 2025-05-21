import Vscode from "./Images/vscode.png";
import Figma from "./Images/figma.png";
import js from "./Images/js.png";
import Laravel from "./Images/laravel.png";
import FadeInSection2 from "./FadeInSection2";
function Activities() {
  return (
    <div>
       
      <div className=" bg-slate-950 text-left p-20 text-white pt-20 w-full h-auto">
         <FadeInSection2>
        <h1 className="text-3xl  font-bold p-5">Production Tools</h1>

        <div className="flex flex-row gap-5 ">
          <div className="bg-slate-900 rounded w-1/4 p-10  flex-row text-left">
            <img className="text-left" width={100} src={Vscode} alt="" />
            <p>Visual Studio Code</p>
          </div>
          <div className="bg-slate-900 rounded w-1/4 p-10  flex-row text-left">
            <img className="text-left" width={150} src={Figma} alt="" />
            <br></br>
            <p>Figma</p>
          </div>
          <div className="bg-slate-900 rounded w-1/4 p-10  flex-row text-left">
            <img className="text-left" width={150} src={js} alt="" />
            <p>Express JS</p>
          </div>
           <div className="bg-slate-900 rounded w-1/4 p-10  flex-row text-left">
            <img className="text-left" width={80} src={Laravel} alt="" />
            <br></br>
            <p>Laravel</p>
          </div>
          
        </div>
        </FadeInSection2>
      </div>
      
    </div>
  );
}
export default Activities;
