

import Sidebar from "./sidebar";
import Landing from "./Landing";
function Main(){
    return(
        <div className="flex justify-around flex-row">
            <div>
                <Sidebar/>
            </div>
        <div className="ml-72">
            <Landing/>
        </div>
           
           
        </div>
    )
}
export default Main;