import FadeInSection2 from "./FadeInSection2";
import Kktech from "./Images/kktec.png";
import Rvd from "./Images/riverside.png";
import Kktech2 from "./Images/cheffset.png";
import Link from "./Images/link.png";
function Projects() {
  return (
    <div className=" bg-slate-950 text-center p-16  mr-5 text-white pt-20 w-full h-auto">
      <FadeInSection2>
        <div className="text-center  pb-12">
          <h1 className="text-3xl  font-bold p-5">Projects</h1>
          <p className="opacity-40">
          Some of the projects I have worked on in the past.
          </p>
        </div>
        <div className="">
          <div className="flex justify-end hover:cursor-pointer ">
              <a
                href="https://flashtech.co.ke/KKTECHINNOVATIONS/portfolio.php"
                target="_blank"
                rel="noopener noreferrer"
              >
            <img
              className="w-12 mr-10"
              src={Link}
              alt="Sunset in the mountains"
            />
            </a>
          </div>
         


            <div class="lg:max-w-full    border-r-4 border-green-500 lg:flex sm:block p-3 rounded overflow-hidden  shadow-lg">
            <div className="p-5 text-center ">
              <a
                href="https://flashtech.co.ke/KKTECHINNOVATIONS/portfolio.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={Kktech}
                  alt="Sunset in the mountains"
                />
              </a>{" "}
            </div>
            <div class="">
              <div class="font-bold text-white text-4xl mb-2">
                KKTECH Innovations
              </div>

              <p className="font-bold opacity-40 text-white text-sm mb-2">
             Personal business website, designed to showcase the projects  worked on and the services I offer. It serves as a portfolio for potential clients to explore my work, understand my skills, and view the various website development plans available. If you're interested in having a website built or want to collaborate,
              </p>

              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  PHP
                </span>
              </div>
            </div>
          </div>




         <div className="flex pt-10 justify-end hover:cursor-pointer ">
              <a
                href="https://cheffest-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <img
              className="w-12 mr-10"
              src={Link}
              alt="Sunset in the mountains"
            />
            </a>
          </div>
          
          <div class="lg:max-w-full pt-10   border-r-4 border-green-500 lg:flex sm:block p-3 rounded overflow-hidden  shadow-lg">
            <div className="p-5 text-center ">
              <a
                href="https://cheffest-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={Kktech2}
                  alt="Sunset in the mountains"
                />
              </a>{" "}
            </div>
            <div class="">
              <div class="font-bold text-white text-4xl mb-2">
                CHEFFEST GRILL AND RESTAURANT
              </div>

              <p className="font-bold opacity-40 text-white text-sm mb-2">
             Cheffset Grill and Restaurant is a modern React-based website that elegantly showcases the restaurant's description, diverse menu, engaging blog, and a contact section, offering users a clean and seamless browsing experience.
              </p>

              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  REACT
                </span>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>

           <div className="flex pt-10  justify-end hover:cursor-pointer ">
            <img
              className="w-12 mr-10"
              src={Link}
              alt="Sunset in the mountains"
            />
          </div>
          <div class="lg:max-w-full  border-r-4 border-green-500 lg:flex sm:block p-3 rounded overflow-hidden  shadow-lg">
            <div className="p-5 text-center ">
              <a
                href="https://flashtech.co.ke/KKTECHINNOVATIONS/portfolio.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-5/6"
                  src={Rvd}
                  alt="Sunset in the mountains"
                />
              </a>{" "}
            </div>
            <div class="">
              <div class="font-bold text-white text-4xl mb-2">
                RIVERSIDE HOSTELS
              </div>

              <p className="font-bold opacity-40 text-white text-sm mb-2">
               This is a booking platform for Riverside Hostel, allowing customers to reserve rooms online. Admins can verify payments and secure bookings. It also includes an eCare portal where tenants can check rent status and report room issues easily.
              </p>

              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  PHP
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
