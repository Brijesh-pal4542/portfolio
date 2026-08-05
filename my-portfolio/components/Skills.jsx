import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { Code2, Layers, Server } from "lucide-react";

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

// Turns a raw percentage into a human label, since "90%" alone
// doesn't tell a visitor much at a glance.
function proficiencyLabel(level) {
  if (level >= 90) return "Advanced";
  if (level >= 75) return "Proficient";
  return "Familiar";
}

// Paired with skillData — one icon per category, in the same order.
const categoryIcons = [Code2, Layers, Server];

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
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  // Triggers the section's own slide-up once, the first time it
  // scrolls into view — separate from the techStackRef/inView pair,
  // which still controls the bar-fill animation deeper inside.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [inView, setInView] = useState(false);
  const techStackRef = useRef(null);

  // Trigger the bar-fill animation only once, the first time this
  // block scrolls into view — rather than bars being fully drawn
  // on page load with nothing to animate from.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (techStackRef.current) observer.observe(techStackRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    // id="skills" — this is what Navbar's #skills link and the
    // scroll-spy IntersectionObserver actually need to find.
    <section
      id="skills"
      ref={sectionRef}
      className={`my-15 max-sm:my-25 transition-all duration-700 ease-out ${
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-24"
      }`}
    >
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
          <span className="h-0.5 w-12 md:w-20 bg-amber-800/60 rounded-full" />
          <span className="h-3 w-3 rounded-full bg-amber-800 shade" />
          <span className="h-0.5 w-12 md:w-20 bg-amber-800/60 rounded-full" />
        </div>
      </div>

      {/* ---------- Marquee: framed in a rounded/dot-grid panel so it
          reads as one of your site's "cards" rather than a stray strip ---------- */}
      <div className="relative overflow-hidden h-50 py-10 flex flex-col justify-center">
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
      <div ref={techStackRef} className="mt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-5 py-2 rounded-full border border-amber-800 bg-linear-to-r from-amber-800 to-amber-600 text-sm text-amber-100 shade">
              Technical Stack
            </span>
            <p className="text-amber-900 mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my programming languages, frameworks,
              databases and engineering concepts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillData.map((category, catIndex) => {
              const Icon = categoryIcons[catIndex] ?? Code2;
              return (
                <div
                  key={category.title}
                  className="relative dot-grid border rounded-b-4xl p-8 pt-10
            shadow-[0_0_40px_rgba(180,83,9,0.25)] hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(180,83,9,0.4)]
            transition-all duration-500"
                >
                  {/* Circular icon badge straddling the top border —
                reinforces the circular theme on every card */}
                  <div className="absolute -top-6 left-8 h-12 w-12 rounded-full bg-amber-800 border-4 border-amber-300 shade flex items-center justify-center shadow-md">
                    <Icon size={20} className="text-white" strokeWidth={2.2} />
                  </div>

                  {/* Numbered tag — justified since these three categories
                are a genuine sequence (languages -> stack -> backend) */}
                  <span className="absolute top-4 right-6 font-serif text-3xl font-bold text-amber-700/30">
                    {String(catIndex + 1).padStart(2, "0")}
                  </span>

                  <h2 className="font-bold text-xl mb-8 tracking-wide text-amber-950">
                    {category.title}
                  </h2>

                  <div className="space-y-7">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-baseline mb-2 text-sm text-amber-950">
                          <span className="font-semibold">{skill.name}</span>
                          <span className="text-right">
                            <span className="text-amber-800 font-semibold">
                              {skill.level}%
                            </span>
                            <span className="block text-[11px] text-amber-800/70">
                              {proficiencyLabel(skill.level)}
                            </span>
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-amber-200 overflow-hidden">
                          <div
                            style={{ width: inView ? `${skill.level}%` : "0%" }}
                            className="h-full rounded-full bg-linear-to-r
                      from-amber-600 via-amber-700 to-amber-900
                      transition-all duration-1000 ease-out"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
