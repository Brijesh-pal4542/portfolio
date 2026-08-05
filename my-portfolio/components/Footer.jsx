import { ArrowUp } from "lucide-react";
import logo from "../src/assets/logo_B.jpg";
import github from "../src/assets/github.png";
import linkedin from "../src/assets/linkedin.jpg";
import leetcode from "../src/assets/leetcode.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/Brijesh-pal4542", icon: github, round: false },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/brijesh-pal-460b44378/", icon: linkedin, round: true },
  { name: "LeetCode", href: "https://leetcode.com/u/Brijesh_Pal/", icon: leetcode, round: true },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20">
      {/* ---- Back to top button — straddles the top edge of the footer,
          echoing the circular icon-badge pattern used in Skills/Journey ---- */}
      <div className="flex justify-center -mt-6 mb-8">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="h-12 w-12 rounded-full bg-amber-800 border-4 border-amber-300 shade shadow-lg shadow-amber-900/50 flex items-center justify-center hover:-translate-y-1.5 hover:bg-amber-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        >
          <ArrowUp size={20} className="text-white" strokeWidth={2.4} />
        </button>
      </div>

      <div className="w-full mx-auto dot-grid bg-amber-700/15 px-8 py-10">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* ---- Brand ---- */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Brijesh Pal logo"
                className="h-10 w-10 rounded-full border-2 border-amber-700 object-cover"
              />
              <span className="font-bold text-lg text-amber-950">Brijesh Pal</span>
            </div>
            <p className="text-sm text-amber-950/75 max-w-xs">
              Building impactful web experiences through clean code and
              thoughtful design.
            </p>
          </div>

          {/* ---- Quick links ---- */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-bold text-amber-950 mb-1 tracking-wide">
              Quick Links
            </h3>
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-amber-950/80 hover:text-amber-950 hover:translate-x-1 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ---- Socials ---- */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-bold text-amber-950 mb-1 tracking-wide">
              Let's Connect
            </h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="h-10 w-10 rounded-full bg-amber-800 shadow-md flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <img
                    src={s.icon}
                    alt=""
                    className={`h-5 w-5 object-cover ${s.round ? "rounded-full" : ""}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Divider + copyright ---- */}
        <div className="flex items-center gap-3 my-8">
          <span className="h-[1px] flex-1 bg-amber-800/30" />
          <span className="h-2 w-2 rounded-full bg-amber-800/60" />
          <span className="h-[1px] flex-1 bg-amber-800/30" />
        </div>

        <p className="text-center text-xs text-amber-950/70">
          © {year} Brijesh Pal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;