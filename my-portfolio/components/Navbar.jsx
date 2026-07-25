import { useState } from "react";
import back from "../src/assets/back.png";

function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-wrap justify-between h-12 w-full md:h-13">
      <div className="flex h-full w-[60%] md:min-w-175 bg-[#800020c9] p-1 rounded-full font-extrabold">
        <img
          className="h-full w-10 mr-0.5 md:w-13 rounded-full border-2"
          src="logo_B.jpg"
          alt=""
        ></img>
        <div className="md:hidden flex justify-center py-1.5 h-full w-full bg-[#800020c9] rounded-full border-2 shade">
          Brijesh Pal
        </div>
        <div className="max-md:hidden flex justify-center py-0.5 h-full w-full bg-[#800020c9] rounded-full border-2 shade">
          <ul className="flex w-full justify-evenly">
            <li className="p-2 rounded-full hover:text-amber-200">
              <a href="#home">Home</a>
            </li>
            <li className="p-2 rounded-full hover:text-amber-200">
              <a href="#about">About</a>
            </li>
            <li className="p-2 rounded-full hover:text-amber-200">
              <a href="#skills">Skills</a>
            </li>
            <li className="p-2 rounded-full hover:text-amber-200">
              <a href="#proje">Projects</a>
            </li>
            <li className="p-2 rounded-full hover:text-amber-200">
              <a href="#certi">Certificates</a>
            </li>
            <li className="p-2 rounded-full hover:text-amber-200">
              <a href="#conta">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={() => setVisible(!visible)}
        className="md:hidden text-2xl font-bold h-full bg-amber-900 opacity-90 p-1 rounded cursor-pointer shade hover:bg-amber-700 duration-900"
      >
        &#9776;
      </button>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-amber-400 shade transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div
          onClick={() => setVisible(false)}
          className="flex items-center rounded-full m-2 w-25 h-10 gap-4 p-3 cursor-pointer bg-[#800020c9] border-2 hover:bg-amber-700 duration-750"
        >
          <img src={back} className="h-4 rotate-180" alt="" />
          <p>Back</p>
        </div>
        <ul>
          <hr/>
          <li onClick={()=>setVisible(!visible)} className="py-2 pl-6 hover:bg-amber-300 duration-990"><a href="#home">Home</a></li><hr/>
          <li onClick={()=>setVisible(!visible)} className="py-2 pl-6 hover:bg-amber-300 duration-990"><a href="#about">About</a></li><hr/>
          <li onClick={()=>setVisible(!visible)} className="py-2 pl-6 hover:bg-amber-300 duration-990"><a href="#skills">Skills</a></li><hr/>
          <li onClick={()=>setVisible(!visible)} className="py-2 pl-6 hover:bg-amber-300 duration-990"><a href="#projects">Projects</a></li><hr/>
          <li onClick={()=>setVisible(!visible)} className="py-2 pl-6 hover:bg-amber-300 duration-990"><a href="#certificates">Certificates</a></li><hr/>
          <li onClick={()=>setVisible(!visible)} className="py-2 pl-6 hover:bg-amber-300 duration-990"><a href="#contact">Contact</a></li><hr/>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
