import { useState, useEffect, useRef } from "react";
import back from "../src/assets/back.png";
import logo from "../src/assets/logo_B.jpg";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const panelRef = useRef(null);

  // Scroll-aware shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + allow Escape to close, while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setVisible(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [visible]);

  const isActive = (href) => href === `#${active}`;

  return (
    <div
      className={`sticky top-2 z-50 flex flex-wrap justify-between md:justify-evenly h-12 w-full md:h-13 transition-shadow duration-300 ${
        scrolled ? "drop-shadow-[0_4px_20px_rgba(120,53,15,0.45)]" : ""
      }`}
    >
      {/*-----Navlinks to home, about etc.-----*/}
      <div className="flex h-full w-[60%] md:min-w-175 bg-amber-500 p-1 rounded-full font-extrabold shadow-sm shadow-amber-800">
        <img
          className="h-full w-10 mr-0.5 md:w-13 rounded-full border-2 border-amber-700 object-cover"
          src={logo}
          alt="Brijesh Pal logo"
        />
        <div className="md:hidden flex justify-center items-center py-1.5 h-full w-full bg-amber-600 rounded-full border-2 border-amber-700 shade cursor-default">
          #Brijesh Pal
        </div>
        <div className="max-md:hidden flex justify-center h-full w-full bg-amber-600 rounded-full border-2 border-amber-700 shade">
          <ul className="flex w-full justify-evenly text-xl">
            {menuItems.map((item) => (
              <li key={item.name} className="relative p-2">
                <a
                  href={item.href}
                  className="rounded-full px-1 transition-colors duration-200 hover:text-amber-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*-------Menu button for small screen-------*/}
      <button
        onClick={() => setVisible(!visible)}
        aria-label={visible ? "Close menu" : "Open menu"}
        aria-expanded={visible}
        className="md:hidden relative flex flex-col justify-center items-center gap-1.5 h-full w-12 bg-amber-800 opacity-90 rounded cursor-pointer shade shadow-md shadow-amber-800 hover:bg-amber-700 duration-300"
      >
        <span
          className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
            visible ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded-full transition-opacity duration-300 ${
            visible ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
            visible ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/*------Menu links for small screen------*/}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-screen z-50 overflow-hidden bg-amber-400 shade transition-all ${
          visible ? "w-full" : "w-0"
        } duration-500 overscroll-none`}
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
              <a
                href={item.href}
                onClick={() => setVisible(false)}
                style={{
                  animationDelay: visible ? `${index * 120}ms` : "0ms",
                }}
                className={`block py-2 pl-6 hover:bg-amber-300 transition-colors duration-300 cursor-pointer ${
                  visible ? "opacity-0 animate-nav-enter" : "opacity-100"
                } ${isActive(item.href) ? "bg-amber-300/60" : ""}`}
              >
                {item.name}
              </a>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
