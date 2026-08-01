import hero_image from "../src/assets/hero_image.jpeg";
import github from "../src/assets/github.png";
import leetcode from "../src/assets/leetcode.png";
import linkedin from "../src/assets/linkedin.jpg";
import { useState, useEffect } from "react";

const texts = [
  "// Building impactful web experiences through clean code, thoughtful design, and continuous innovation.",
  "// Learning relentlessly, coding passionately, and building solutions that create real-world impact.",
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Brijesh-pal4542",
    icon: github,
    delay: "0s",
    round: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/brijesh-pal-460b44378/",
    icon: linkedin,
    delay: "0.5s",
    round: true,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Brijesh_Pal/",
    icon: leetcode,
    delay: "0.10s",
    round: true,
  },
];

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Type-then-erase-then-next-line effect
  useEffect(() => {
    const current = texts[textIndex];
    const speed = isDeleting ? 30 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="h-auto md:h-170 w-full my-5 dot-grid md:flex px-5 md:justify-evenly shadow-2xl rounded-full"
    >
      {/* ---------- Profile image ---------- */}
      <div className="flex my-6 max-md:justify-center md:items-center h-auto md:h-[90%] md:m-10 p-1 bg-amber-700 rounded-full dot-grid shadow-md shadow-amber-700 hover:-translate-y-1.5 duration-600">
        <img
          className="h-64 md:h-[80%] rounded-full shadow-2xl shadow-amber-400 hover:translate-y-1.5 duration-600 object-cover"
          src={hero_image}
          alt="Portrait of Brijesh Pal"
        />
      </div>

      {/* ---------- Text content ---------- */}
      <div className="flex flex-col max-md:text-center md:justify-center h-auto w-full md:h-full md:w-[50%] max-md:mt-3 md:ml-10">
        {/* Eyebrow — same tracked-caps treatment as the About section,
            so both sections read as one designed system */}
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-amber-700 mb-2 max-md:mb-1">
          Hello there
        </p>

        {/* Name — serif + two-tone split, mirroring About's heading style */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-amber-950 text-shadow-sm text-shadow-amber-800 leading-tight">
          I'm Brijesh Pal
          <span className="block shade italic text-4xl md:text-6xl mt-1">
            Web Developer
          </span>
        </h1>

        {/* Divider — line–dot–line, echoing the circular theme
            (logo, buttons, social icons) instead of a plain rule */}
        <div className="flex items-center gap-3 mt-5 max-md:justify-center">
          <span className="h-[2px] w-10 md:w-16 bg-amber-800/60 rounded-full" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-800 shade" />
        </div>

        {/* Typewriter line */}
        <div className="min-h-40">
          <p className="my-4 min-h-16 font-medium text-amber-600">
            {displayText}
            <span className="ml-0.5 animate-pulse">▍</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="my-5">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="mx-3 inline-block bg-amber-800 py-2 px-5 rounded-full cursor-pointer md:text-xl shadow-md shadow-amber-900 hover:-translate-y-1.5 duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            My Work
          </a>
          {/* swap href for your actual resume file path */}
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 inline-block py-1.5 px-4 border-2 border-amber-800 rounded-full cursor-pointer md:text-xl shade bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-1.5 duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            My Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="h-12 flex gap-4 max-md:justify-center md:mx-5 my-3">
          {socials.map((s) => (
            <div
              key={s.name}
              style={{ animationDelay: s.delay }}
              className="h-full w-12 animate-[float_3s_ease-in-out_infinite] rounded-full shadow-xl shadow-slate-900/10 text-center"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-full block"
              >
                <img
                  className={s.round ? "rounded-full" : ""}
                  src={s.icon}
                  alt={s.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
