import { useEffect, useRef, useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.png";

// Lucide dropped brand icons (GitHub, etc.) — this is a minimal
// inline replacement so we don't need an extra package just for one icon.
function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      {...props}
    >
      <path
        d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53
      0-.26-.01-1.13-.02-2.04-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67
      1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.69-1.47-2.44-.28-5-1.22-5-5.42
      0-1.2.43-2.18 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.4 10.4 0 0 1 5.5 0
      c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.76 1.13 1.74 1.13 2.94 0 4.21-2.56 5.14-5.01 5.41
      .39.34.74 1.02.74 2.06 0 1.49-.01 2.68-.01 3.05 0 .29.2.64.76.53
      4.36-1.45 7.5-5.55 7.5-10.39C23.02 5.24 18.27.5 12 .5Z"
      />
    </svg>
  );
}
// Replace title/description/tags/links with your real project data.
// image: leave null until you have a screenshot — a placeholder
// block renders automatically when it's null.
const projects = [
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker built with React that helps users manage daily expenses, monitor spending habits, and track budgets efficiently.",
    tags: ["React", "Vite", "Local Storage"],
    image: project1,
    github: "https://github.com/Brijesh-pal4542/Expense-Tracker",
    live: "https://expense-tracker-3uo3-5nf4ask92-brijesh-pal-s-projects.vercel.app/",
  },
  {
    title: "E-commerce Store",
    description:
      "The application delivers a complete online shopping experience, allowing users to browse products, manage their cart, place orders through multiple payment methods, and track purchases in real time.",
    tags: ["MERN", "JWT Auth", "tailwindCSS", "Cloudinary"],
    image: project2,
    github: "https://github.com/Brijesh-pal4542/e-commerce",
    live: "https://e-commercefrontend-ivory.vercel.app/",
  },
];

function ProjectCard({ project, index, inView }) {
  return (
    <div
      style={{ transitionDelay: inView ? `${index * 150}ms` : "0ms" }}
      className={`group relative bg-amber-400/90 dot-grid border border-amber-800 rounded-3xl overflow-hidden
      shadow-[0_0_40px_rgba(180,83,9,0.2)] hover:shadow-[0_0_55px_rgba(180,83,9,0.4)]
      transition-all duration-700 ease-out hover:-translate-y-2
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* ---- Image / placeholder ---- */}
      <div className="h-48 w-full bg-amber-700/40 border-b border-amber-800 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // Placeholder shown until a real screenshot is added
          <div className="flex flex-col items-center gap-2 text-amber-950/60">
            <FolderGit2 size={36} strokeWidth={1.5} />
            <span className="text-xs tracking-wide">Project preview</span>
          </div>
        )}
      </div>

      {/* ---- Content ---- */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-amber-950 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-amber-950/80 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-amber-800 text-amber-100 shade"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-800 text-amber-950 text-sm font-medium hover:bg-amber-800 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <GithubIcon />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-800 text-white text-sm font-medium hover:bg-amber-900 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger the staggered card reveal once, the first time the
  // section scrolls into view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="my-15 max-sm:my-25 px-6">
      {/* ---------- Section heading — same system as Hero/About/Skills ---------- */}
      <div className="text-center mb-12">
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-amber-700 mb-2">
          What I've Built
        </p>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-amber-950 text-shadow-sm text-shadow-amber-800">
          Featured
          <span className="block shade italic">Projects</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
          <span className="h-3 w-3 rounded-full bg-amber-800 shade" />
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
        </div>
      </div>

      {/* ---------- Cards ---------- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            inView={inView}
          />
        ))}
      </div>

      {/* ---------- View All Projects ---------- */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/Brijesh-pal4542"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-amber-800 text-amber-950 font-medium hover:bg-amber-800 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md shadow-amber-800/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        >
          <FolderGit2 size={18} />
          View All Projects
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
