import Kevin from ".//Images/pic.jpeg";    
import Instagram from ".//Images/instagram.png";    
import Snapchat from ".//Images/snapchat.png";    
import Linko from ".//Images/linkedin.png";    
function Sidebar() {
  return (
    <div className="bg-sky-950 text-white w-1/3 h-full">
      <div className="flex flex-col items-left p-2">
        <img src={Kevin} alt="Kevin" className="w-1/2 rounded-1/2 m-3" />
        <div className="flex flex-row">
            <h1 className="text-2xl font-bold p-3">
          Kevin <br /> Kirui
        </h1>
        <p className="text-lg p-3 pt-3  border-l-4 border-indigo-500">Full Stack <br></br>Developer</p>

        </div>
        <div>
            <br></br>
            <p className="opacity-40">Hello There!</p>
           
            <p className="pt-2">I'm a full stack developer specializing in Laravel, React, Node.js, PHP, MySQL, and API implementation, with a focus on building scalable, efficient web applications.</p>
        </div>
        <div className="flex flex-row pt-5">
            <img src={Instagram} alt="Instagram" className="w-12 h-12 rounded-1/2 m-3" />
            <img src={Snapchat} alt="Instagram" className="w-12 h-12 rounded-1/2 m-3" />
             <img src={Linko} alt="Instagram" className="w-12 h-12 rounded-1/2 m-3" />
          </div>

        <div className="pt-5">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Download Resume</button>

        </div>
        
      </div>
    </div>
  );
}
export default Sidebar;
