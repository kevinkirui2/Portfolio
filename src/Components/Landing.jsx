import './landing.css';
import Navbar from "./Navbar";
function Landing(){

    return(
      
        
        <div id='wallpaper' className="wallpaper">
            <Navbar/>
         
            <h1 className=' w-full text-5xl font-bold text-white pt-40 text-center'>
            <span className='font-bold text-sm w-1/2 text-white pt-40 text-center'>Software Engineer & Digital Events Curator</span><br></br><br></br>Focused on interfaces and experiences, working remotely from Nairobi, Kenya.</h1>
        </div>
    )

}

export default Landing;