import './landing.css';
import Navbar from "./Navbar";
import Projects from "./Projects";
import FadeInSection2 from './FadeInSection2';
function Landing(){

    return(
      
        <div>
        <div id='wallpaper' className="wallpaper">
           
         <FadeInSection2>
            <h1 className=' w-full text-5xl font-bold ml-3 text-white pt-40 text-center'>
            <span className='font-bold text-lg w-1/2  text-white pt-40 text-center'>Hi, I'm Kevin Kirui</span><br></br><br></br>Focused on interfaces and experiences, working remotely from Nairobi, Kenya.</h1>
             <div className="pt-10  text-center">
            <button className="bg-green-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"> <a href="https://1drv.ms/b/c/9273c3e03a8e1704/EUaIMB_0i6tOtXWAO9OfRGkBzZSrWU_1lSvy4aRTcKZL9A?e=QdBe73"> View Resume </a></button>
           
        </div>
        </FadeInSection2>
        </div>

        <div>

        
        </div>
        
        </div>
    )

}

export default Landing;