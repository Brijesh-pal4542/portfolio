function About() {
  return (
    <div className="my-15">
      <div className="text-center block text-5xl border-l-4 bg-linear-to-r from-amber-800 to bg-amber-400 font-bold shade md:text-6xl">
        About me
      </div>
      <div className="w-full md:flex md:gap-1">
        <div className="h-[50%] w-full md:w-[50%] md:h-full rounded-r-full dot-grid shadow-2xl p-7 font-serif text-amber-800">
          <p className="md:text-xl">
            I'm <span className="shade">Brijesh</span> driven by curiosity,
            creativity, and continuous growth.
          </p>
          <p className="md:text-xl mt-5">
            I enjoy transforming ideas into meaningful digital experiences using
            the <span className="underline font-sans">MERN Stack</span> while
            sharpening my problem-solving skills with Java and DSA. Every
            project I build teaches me something new, and every challenge pushes
            me to improve.
          </p>
          <p className="md:text-xl mt-5 text-white font-normal">
            "Most PROJECTS follow trends. I'd rather build experiences that
            leave an impression."
          </p>
          <p className="md:text-xl mt-5">
            I love discussing technology, exploring modern tools, and constantly
            learning because I believe the best developers never stop being
            students.
          </p>
        </div>
        <div className="w-full dot-grid md:w-[50%] rounded-l-full shadow-2xl text-right p-7">
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            ✨ Crafting Experiences
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            🔍 Curious Learner
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            🎯 Purpose Driven
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            💻 MERN Stack
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            🧩 Data Structure and Algorithm
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            🏗️ Scalable Applications
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            🎯 Detail Oriented
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            🌐 Modern Web
          </button>
          <button className="py-1.5 px-4 border-2 border-amber-800 rounded-full md:text-xl bg-amber-500 shadow-md shadow-amber-600 hover:-translate-y-2 duration-500 hover:bg-amber-800 m-2.5">
            🎨 UI/UX
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
