import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

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
        Skills
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
    </div>
  );
}
