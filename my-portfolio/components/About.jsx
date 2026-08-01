import {
  Search,
  Trophy,
  Code2,
  Puzzle,
  Building2,
  Target,
  Globe,
  Palette,
  Sparkles,
} from "lucide-react";

const badges = [
  { icon: Search, label: "Curious Learner" },
  { icon: Trophy, label: "160+ LeetCode Problems Solved" },
  { icon: Code2, label: "MERN Stack" },
  { icon: Puzzle, label: "Data Structures & Algorithms" },
  { icon: Building2, label: "Scalable Web Applications" },
  { icon: Target, label: "Detail Oriented" },
  { icon: Globe, label: "Modern Web" },
  { icon: Palette, label: "UI/UX" },
  { icon: Sparkles, label: "Crafting Experiences" },
];

function About() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="my-15 max-sm:my-25">
      {/* ---------- Section heading ---------- */}
      <div className="text-center mb-12 relative">
        {/* Eyebrow label — small spaced-out caps read as "editorial"
            and classy rather than just bumping up font size */}
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-amber-700 mb-2">
          Who I Am
        </p>

        {/* Two-tone split heading adds depth without a new color;
            italic second line gives it a signature/editorial feel */}
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-amber-950 text-shadow-sm text-shadow-amber-800">
          Get to know
          <span className="block shade italic">the developer</span>
        </h2>

        {/* line—dot—line divider echoes the circular theme used
            throughout (logo, buttons, profile image) */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
          <span className="h-3 w-3 rounded-full bg-amber-800 shade" />
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
        </div>
      </div>

      <div className="w-full md:flex md:gap-1 md:items-stretch">
        {/* ================= Bio column ================= */}
        <div className="w-full md:w-[50%] rounded-r-full dot-grid shadow-2xl p-7 font-serif text-amber-800 max-sm:rounded-b-full">
          <p className="md:text-xl max-w-prose">
            Hi, my name is <span className="shade font-bold">Brijesh Pal</span>{" "}
            and I'm a CSE (AIML) student. I'm driven by curiosity, creativity,
            and continuous growth.
          </p>
          <p className="md:text-xl mt-5 max-w-prose">
            I enjoy transforming ideas into meaningful digital experiences using
            the <span className="underline font-sans">MERN Stack</span>, while
            sharpening my problem-solving skills with Java and DSA. Every
            project I build teaches me something new, and every challenge pushes
            me to improve.
          </p>

          <blockquote className="relative mt-6 pl-6 border-l-4 border-amber-800 md:text-xl text-white font-normal italic max-w-prose">
            <span className="absolute -left-1 -top-3 text-4xl text-amber-800 font-serif not-italic">
              &ldquo;
            </span>
            Most projects follow trends. I'd rather build experiences that leave
            an impression.
          </blockquote>

          <p className="md:text-xl mt-5 max-w-prose">
            I love discussing technology, exploring modern tools, and constantly
            learning — because I believe the best developers never stop being
            students.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-amber-800 py-2 px-5 rounded-full cursor-pointer md:text-xl shadow-md shadow-amber-900 hover:-translate-y-1.5 duration-500 text-white mt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Get In Touch
          </button>
        </div>

        {/* ================= Achievements / badges column ================= */}
        <div className="w-full dot-grid md:w-[50%] rounded-l-full shadow-2xl p-7 max-sm:rounded-t-full mt-3 md:mt-0">
          <ul className="flex flex-wrap gap-2.5 justify-center md:justify-end">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label}>
                <span className="flex items-center gap-2 py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-lg bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-1.5 hover:bg-amber-800 hover:text-white duration-500 cursor-default">
                  <Icon size={18} strokeWidth={2.2} />
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
