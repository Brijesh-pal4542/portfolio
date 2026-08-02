import { useState, useEffect, useRef } from "react";
import back from "../src/assets/back.png";
import logo from "../src/assets/logo_B.jpg";
import {
  Home,
  User,
  Code2,
  FolderKanban,
  Award,
  Mail,
} from "lucide-react";
// requires: npm install lucide-react

const menuItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const linkRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const index = menuItems.findIndex((item) => item.href === `#${active}`);
    const el = linkRefs.current[index];
    if (el) {
      setPillStyle({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    }
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [visible]);

  const isActive = (href) => href === `#${active}`;
  const panelWidth = visible ? "w-full" : "w-0";

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    setVisible(false);
  };

  const setLinkRef = (index) => (el) => {
    linkRefs.current[index] = el;
  };

  return (
    <>
      {/* ================= Desktop / floating navbar ================= */}
      <div
        className={`sticky z-50 mx-auto w-full transition-all duration-500 ${
          scrolled ? "top-2 max-w-4xl" : "top-3 max-w-5xl"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-2 rounded-full border border-amber-300/50 bg-amber-500/90 backdrop-blur-md px-2 py-1.5 font-extrabold transition-shadow duration-500 ${
            scrolled ? "shadow-lg shadow-amber-900/40" : "shadow-sm shadow-amber-800/60"
          }`}
        >
          <div className="relative flex items-center shrink-0">
            <span className="absolute inset-0 rounded-full bg-amber-300 opacity-40 animate-ping [animation-duration:3s]"></span>
            <img
              className="relative h-10 w-10 md:h-11 md:w-11 rounded-full border-2 border-amber-700 object-cover hover:scale-105 transition-transform duration-300"
              src={logo}
              alt="Brijesh Pal logo"
            />
          </div>

          <div className="md:hidden flex-1 text-center py-1.5 bg-amber-600 rounded-full border-2 border-amber-700 shade">
            #Brijesh Pal
          </div>

          <div className="max-md:hidden relative flex items-center gap-1 bg-amber-600/70 rounded-full border border-amber-700/60 px-1.5 py-1">
            <span
              className="absolute top-1 bottom-1 rounded-full bg-amber-950 shade transition-all duration-500 ease-out"
              style={pillStyle}
            ></span>

            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const activeLink = isActive(item.href);
              return (
                <a
                  key={item.name}
                  ref={setLinkRef(index)}
                  href={item.href}
                  className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-base transition-colors duration-300 ${
                    activeLink ? "text-white" : "text-amber-950 hover:text-amber-800"
                  }`}
                >
                  <Icon size={15} strokeWidth={2.4} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="max-md:hidden shrink-0 bg-amber-800 text-white px-5 py-1.5 rounded-full text-sm shadow-md shadow-amber-900 hover:-translate-y-0.5 hover:bg-amber-900 transition-all duration-300"
          >
            Hire Me
          </a>

          <button
            onClick={() => setVisible(!visible)}
            aria-label={visible ? "Close menu" : "Open menu"}
            aria-expanded={visible}
            className="md:hidden shrink-0 relative flex flex-col justify-center items-center gap-1.5 h-10 w-10 bg-amber-800 rounded-full shade shadow-md shadow-amber-800 hover:bg-amber-700 duration-300"
          >
            <span
              className={`block h-0.5 w-5 bg-white rounded-full transition-transform duration-300 ${
                visible ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-white rounded-full transition-opacity duration-300 ${
                visible ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-white rounded-full transition-transform duration-300 ${
                visible ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* ================= Mobile full-screen menu ================= */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-screen z-50 overflow-hidden dot-grid bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shade transition-all duration-500 overscroll-none ${panelWidth}`}
        >
      
        <div
          onClick={() => setVisible(false)}
          className="flex items-center rounded-full m-4 w-fit gap-3 py-2.5 px-5 cursor-pointer bg-amber-950/70 border border-amber-300/40 hover:bg-amber-900 duration-300"
        >
          <img src={back} className="h-4 rotate-180" alt="" />
          <p className="text-sm tracking-wide">Back</p>
        </div>

        <ul className="flex flex-col mt-6 px-4 gap-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const activeLink = isActive(item.href);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setVisible(false)}
                  style={{ animationDelay: visible ? `${index * 100}ms` : "0ms" }}
                  className={`flex items-center gap-4 py-3 px-5 rounded-full text-xl font-semibold transition-colors duration-300 ${
                    visible ? "opacity-0 animate-nav-enter" : "opacity-100"
                  } ${activeLink ? "bg-amber-950 text-white" : "hover:bg-amber-300/50 text-amber-950"}`}
                >
                  <Icon size={20} strokeWidth={2.2} />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;