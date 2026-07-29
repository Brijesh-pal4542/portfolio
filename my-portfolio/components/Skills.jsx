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
      className="
      shrink-0
      mx-3
      rounded-full
      border
      border-amber-900
      bg-amber-800
      px-6
      py-3
      flex
      items-center
      gap-3
      whitespace-nowrap
      shadow-md
      hover:-translate-y-1
      hover:shadow-xl
      transition-all
      duration-300
      "
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
        className={`
        flex
        w-max
        ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
        hover:[animation-play-state:paused]
        `}
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
    <div>
      <div className="text-center block text-5xl border-l-4 bg-linear-to-r from-amber-800 to bg-amber-400 font-bold shade md:text-6xl mb-2">
        My Skillset
      </div>

      <section className="relative overflow-hidden h-50 space-y-8">
        <div className="absolute left-0 top-0 h-full w-28 bg-linear-to-r from-amber-300 to-transparent z-10" />

        <div className="absolute right-0 top-0 h-full w-28 bg-linear-to-l from-amber-300 to-transparent z-10" />
        {/* Large Screen */}

        <div className="hidden lg:block my-10">
          <Marquee />
        </div>

        {/* Small Screen */}

        <div className="lg:hidden space-y-6 my-10">
          <Marquee />
          <Marquee reverse />
        </div>
      </section>

      <section className="min-h-screen text-white max-md:py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <div className="text-center mb-16">
            <span className="px-5 py-2 rounded-full border border-zinc-700 bg-linear-to-r from-amber-950 to bg-amber-600 text-sm text-zinc-300">
              Technical Stack
            </span>

            <p className="text-amber-900 mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my programming languages, frameworks,
              databases and engineering concepts.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillData.map((category) => (
              <div
                key={category.title}
                className="bg-[#ffcc00]/90 border rounded-3xl p-8
            border-red-500/40
              shadow-[0_0_40px_rgba(255,0,0,0.15)]
              transition-all duration-500"
              >
                <h2 className="font-bold text-xl mb-8 tracking-wide">
                  {category.title}
                </h2>

                <div className="space-y-7">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>{skill.name}</span>
                        <span className="text-amber-600">{skill.level}%</span>
                      </div>

                      <div className="w-full h-2 rounded-full bg-amber-500 overflow-hidden">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="h-full rounded-full bg-linear-to-r
                        from-red-600 via-red-500 to-amber-800
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
      </section>
    </div>
  );
}
