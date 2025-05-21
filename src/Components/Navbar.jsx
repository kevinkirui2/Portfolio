function Navbar(){
    return(
        <nav className="fixed w-full">
            <ul className="flex flex-row space-x-8 pt-5 text-white justify-end pr-5">   
                <li className=" opacity-90"><a href="#">Home</a></li>
                <li className=" opacity-90"><a href="#">Projects</a></li>
                <li className=" opacity-90"><a href="#">Work Experience</a></li>
                <li className=" opacity-90"><a href="#">Tools</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;