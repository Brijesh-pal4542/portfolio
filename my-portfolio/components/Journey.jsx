import { useEffect, useRef, useState } from "react";
import { GraduationCap, Code2, Trophy, Briefcase, Rocket } from "lucide-react";

// Replace title/date/description with your real milestones —
// lorem text below is a placeholder (~3 lines each, 15 lines total).
const milestones = [
  {
    icon: GraduationCap,
    date: "2024",
    title: "Started CSE (AIML)",
    description:
      "Began my Bachelor's journey in Computer Science with a specialization in Artificial Intelligence & Machine Learning. This marked the start of building a strong foundation in programming, problem-solving, and modern software development while exploring emerging technologies.",
  },
  {
    icon: Code2,
    date: "2024",
    title: "Learned Frontend",
    description:
      "Learned the fundamentals of HTML, CSS, JavaScript, and React to create responsive and user-friendly web applications. Focused on writing clean, reusable code and developing intuitive user interfaces using Tailwind CSS and modern frontend practices.",
  },
  {
    icon: Trophy,
    date: "2025",
    title: "160+ LeetCode Problems",
    description:
      "Strengthened my Data Structures and Algorithms skills by solving over 160 coding problems in Java. Improved analytical thinking, optimized solutions for time and space complexity, and built confidence for technical interviews and competitive programming.",
  },
  {
    icon: Briefcase,
    date: "2025",
    title: "Learned MERN Stack",
    description:
      "Expanded from frontend to full-stack development by learning MongoDB, Express.js, React, and Node.js. Built complete web applications with authentication, REST APIs, database integration, image uploads, and payment gateways, gaining practical experience in real-world software development.",
  },
  {
    icon: Rocket,
    date: "2026",
    title: "Building This Portfolio",
    description:
      "Designed and developed a modern, responsive portfolio to showcase my projects, technical skills, and development journey. The portfolio reflects my focus on clean UI/UX, interactive animations, performance optimization, and my continuous commitment to learning and building impactful applications.",
  },
];

function JourneyNode({ milestone, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const Icon = milestone.icon;
  const isRight = index % 2 === 0; // alternates card side on desktop only

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center mb-14 last:mb-0
      ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* ---- Node icon, sits on the line ---- */}
      <div
        className={`absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2
        h-10 w-10 rounded-full bg-amber-800 border-4 border-amber-300 shade
        flex items-center justify-center shadow-md z-10 transition-all duration-500
        ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      >
        <Icon size={16} className="text-white" strokeWidth={2.4} />
      </div>

      {/* ---- Content card ---- */}
      <div
        className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2.5rem)]
        ${isRight ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="bg-amber-400/90 dot-grid border border-amber-800 rounded-2xl p-5 shadow-[0_0_30px_rgba(180,83,9,0.2)]">
          <span className="inline-block px-3 py-0.5 rounded-full bg-amber-800 text-amber-100 text-xs font-semibold shade mb-2">
            {milestone.date}
          </span>
          <h3 className="font-bold text-lg text-amber-950 mb-1">
            {milestone.title}
          </h3>
          <p className="text-sm text-amber-950/80 leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Journey() {
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef(null);

  // Grows the connecting line's fill in sync with how far the user
  // has scrolled through the section, rather than a single fixed
  // reveal — so it feels tied to scroll, not just a one-shot animation.
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height;
      const scrolled = viewportH * 0.75 - rect.top;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      setLineProgress(progress * 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="journey" className="my-15 max-sm:my-25 px-6">
      {/* ---------- Section heading ---------- */}
      <div className="text-center mb-16">
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-amber-700 mb-2">
          How I Got Here
        </p>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-amber-950 text-shadow-sm text-shadow-amber-800">
          My
          <span className="block shade italic">Journey</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
          <span className="h-3 w-3 rounded-full bg-amber-800 shade" />
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
        </div>
      </div>

      <div ref={sectionRef} className="relative max-w-3xl mx-auto">
        {/* ---- Base track (full height, faint) ---- */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-amber-800/25 rounded-full" />

        {/* ---- Filled track (grows with scroll progress) ---- */}
        <div
          className="absolute left-4 md:left-1/2 top-0 w-1 -translate-x-1/2 bg-amber-800 rounded-full transition-[height] duration-300 ease-out"
          style={{ height: `${lineProgress}%` }}
        />

        {milestones.map((milestone, index) => (
          <JourneyNode
            key={milestone.title}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Journey;
