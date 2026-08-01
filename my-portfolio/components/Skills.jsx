import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skillData = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Java", level: 90 },
      { name: "C", level: 80 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "FULL STACK",
    skills: [
      { name: "MERN Stack", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 95 },
      { name: "Mongo DB", level: 90 },
    ],
  },
];

const skills = [
  { name: "React", icon: FaReact },
  { name: "Java", icon: FaJava },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <div
      className="shrink-0 mx-3 rounded-full border border-amber-900 bg-amber-800
      px-6 py-3 flex items-center gap-3 whitespace-nowrap shadow-md
      hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <Icon className="text-2xl text-white" />
      <span className="font-medium text-amber-200">{skill.name}</span>
    </div>
  );
}

function Marquee({ reverse = false }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {Array.from({ length: 6 }).map((_, copy) => (
          <div key={copy} className="flex shrink-0">
            {skills.map((skill) => (
              <SkillCard key={skill.name + copy} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    // id="skills" — this is what Navbar's #skills link and the
    // scroll-spy IntersectionObserver actually need to find.
    <section id="skills" className="my-15 max-sm:my-25">
      {/* ---------- Section heading — same system as Hero/About ---------- */}
      <div className="text-center mb-12">
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-amber-700 mb-2">
          What I Bring
        </p>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-amber-950 text-shadow-sm text-shadow-amber-800">
          My
          <span className="block shade italic">Skillset</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
          <span className="h-3 w-3 rounded-full bg-amber-800 shade" />
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
        </div>
      </div>

      {/* ---------- Marquee: framed in a rounded/dot-grid panel so it
          reads as one of your site's "cards" rather than a stray strip ---------- */}
      <div className="relative overflow-hidden rounded-[3rem] dot-grid bg-amber-700/10 shadow-2xl h-50 py-10 flex flex-col justify-center">
        <div className="absolute left-0 top-0 h-full w-28 bg-linear-to-r from-amber-300 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-28 bg-linear-to-l from-amber-300 to-transparent z-10" />

        {/* Large screen: single row */}
        <div className="hidden lg:flex items-center justify-center">
          <Marquee />
        </div>

        {/* Small screen: two rows, opposite directions */}
        <div className="lg:hidden space-y-6">
          <Marquee />
          <Marquee reverse />
        </div>
      </div>

      {/* ---------- Technical stack cards ---------- */}
      <div className="mt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* fixed: gradient typo + swapped zinc -> amber to match palette */}
            <span className="px-5 py-2 rounded-full border border-amber-800 bg-linear-to-r from-amber-800 to-amber-600 text-sm text-amber-100 shade">
              Technical Stack
            </span>
            <p className="text-amber-900 mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my programming languages, frameworks,
              databases and engineering concepts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillData.map((category) => (
              <div
                key={category.title}
                className="bg-amber-400/90 dot-grid border border-amber-800 rounded-3xl p-8
                shadow-[0_0_40px_rgba(180,83,9,0.25)] hover:-translate-y-1.5
                transition-all duration-500"
              >
                {/* explicit dark text — card background is light amber,
                    so text can no longer rely on the page's default white */}
                <h2 className="font-bold text-xl mb-8 tracking-wide text-amber-950">
                  {category.title}
                </h2>

                <div className="space-y-7">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm text-amber-950">
                        <span>{skill.name}</span>
                        <span className="text-amber-800 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-amber-200 overflow-hidden">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="h-full rounded-full bg-linear-to-r
                          from-amber-600 via-amber-700 to-amber-900
                          transition-all duration-1000"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
