import FadeInSection2 from "./FadeInSection2";
import Kktech from "./Images/kktech.png";
import Rvd from "./Images/riverside.png";
function Projects() {
  return (
    <div className=" bg-slate-950 text-center p-16  mr-5 text-white pt-20 w-full h-auto">
      <FadeInSection2>
      <div className="text-center  pb-12">
        <h1 className="text-3xl  font-bold p-5">Projects</h1>
        <p className="opacity-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores aperiam doloremque. Nesciunt praesentium perferendis vero totam</p>
      </div>
      <div className="">
        <div class="lg:max-w-full  border-r-4 border-green-500 lg:block sm:block p-3 rounded overflow-hidden mr-5 shadow-lg">
          <div className="p-5 text-center pl-10">
            <img class="w-full " src={Kktech} alt="Sunset in the mountains" />
          </div>
          <div class=" px-6 py-4">
            <div class="font-bold text-emerald-700 text-4xl mb-2">
              Kktech Innovations
            </div>

            <p className="font-bold text-white text-sm mb-2">Founder</p>
            
             <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Visit Website
            </span>
          </div>
          </div>
         
        </div>
        <br></br>
        <br></br>

        <div class="max-w-full  border-r-4 border-green-500  lg:block sm:block p-3 rounded overflow-hidden mr-5 shadow-lg">
          <div>
            <img class="w-full" src={Rvd} alt="Sunset in the mountains" />
          </div>
          <div class=" px-6 py-4">
            <div class="font-bold text-green-700 text-5xl mb-2">
              Riverside Hostels Website
            </div>
            <p className="font-bold text-white text-2xl mb-2">Developer</p>
           
             <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href=""></a>Visit Website
            </span>
          </div>
          </div>
         
        </div>
      </div>
      </FadeInSection2>
    </div>
  );
}
export default Projects;
