import { useState } from "react";
import back from "../src/assets/back.png";
import logo from "../src/assets/logo_B.jpg";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="flex flex-wrap justify-between md:justify-evenly h-12 w-full md:h-13">
      {/*-----Navlinks to home, about etc.-----*/}
      <div className="flex h-full w-[60%] md:min-w-175 bg-amber-500 p-1 rounded-full font-extrabold shadow-sm shadow-amber-800">
        <img
          className="h-full w-10 mr-0.5 md:w-13 rounded-full border-2 border-amber-700"
          src={logo}
          alt=""
        ></img>
        <div className="md:hidden flex justify-center py-1.5 h-full w-full bg-amber-600 rounded-full border-2 border-amber-700 shade cursor-pointer">
          #Brijesh Pal
        </div>
        <div className="max-md:hidden flex justify-center h-full w-full bg-amber-600 rounded-full border-2 border-amber-700 shade">
          <ul className="flex w-full justify-evenly text-xl">
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

      {/*-------Menu button for small screen-------*/}
      <button
        onClick={() => setVisible(!visible)}
        className="md:hidden text-2xl font-bold h-full bg-amber-800 opacity-90 p-1 rounded cursor-pointer shade shadow-md shadow-amber-800 hover:bg-amber-700 duration-300"
      >
        &#9776;
      </button>

      {/*------Menu links for small screen------*/}
      <div
        className={`fixed top-0 right-0 h-screen z-50 overflow-hidden bg-amber-400 shade transition-all ${visible ? "w-full" : "w-0"} duration-500 overscroll-none`}
      >
        <div
          onClick={() => setVisible(false)}
          className="flex items-center rounded-full m-2 w-25 h-10 gap-4 p-3 cursor-pointer bg-[#800020c9] border-2 hover:bg-amber-700 duration-750"
        >
          <img src={back} className="h-4 rotate-180" alt="" />
          <p>Back</p>
        </div>
        <ul>
          <hr />

          {menuItems.map((item, index) => (
            <div key={item.name}>
              <li
                onClick={() => setVisible(false)}
                style={{
                  animationDelay: visible ? `${index * 120}ms` : "0ms",
                }}
                className={`py-2 pl-6 hover:bg-amber-300 transition-colors duration-300 cursor-pointer ${visible ? "opacity-0 animate-nav-enter" :"opacity-100"}`}
              >
                <a href={item.href}>{item.name}</a>
              </li>

              <hr />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
