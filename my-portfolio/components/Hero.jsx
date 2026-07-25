import hero_image from "../src/assets/hero_image.jpeg";
import github from "../src/assets/github.png";
import leetcode from "../src/assets/leetcode.png";
import linkedin from "../src/assets/linkedin.jpg";
import { useState, useEffect } from "react";

function Hero() {
  const texts = [
    "// Building impactful web experiences through clean code, thoughtful design, and continuous innovation.",
    "// Learning relentlessly, coding passionately, and building solutions that create real-world impact.",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;

    const interval = setInterval(() => {
      setDisplayText(texts[textIndex].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === texts[textIndex].length) {
        clearInterval(interval);

        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className="h-170 w-full my-5 dot-grid  md:flex px-5 md:justify-evenly">
      <div className="flex my-6 max-md:justify-center md:items-center h-[50%] md:h-full md:m-10 p-1 bg-amber-700 rounded-full dot-grid shadow-md shadow-amber-700 hover:-translate-y-1.5 duration-600">
        <img
          className="h-full rounded-full md:h-[90%] shadow-2xl shadow-amber-400 hover:translate-y-1.5 duration-600"
          src={hero_image}
          alt=""
        />
      </div>
      <div className="flex flex-col max-md:text-center md:justify-center h-[50%] w-full md:h-full md:w-[50%] max-md:mt-3 md:ml-10">
        <h4 className="font-bold shade">
          Hello there<span className="font-normal">...</span>
        </h4>
        <h1 className="text-4xl md:text-6xl font-extrabold text-shadow-sm text-shadow-amber-800 text-amber-950">
          I'm Brijesh Pal,
        </h1>
        <div className="h-40">
          <p className="font-normal text-4xl md:6xl">Web Developer</p>
          <p className="my-3 font-medium text-amber-600">{displayText}</p>
        </div>
        <div className="my-5">
          <button className="mx-3 bg-amber-800 py-2 px-5 rounded-full cursor-pointer md:text-xl shadow-md shadow-amber-900 hover:-translate-y-1.5 duration-500">
            My Work
          </button>
          <button className="mx-3 py-1.5 px-4 border-2 border-amber-800 rounded-full cursor-grab md:text-xl shade bg-amber-500 shadow-md shadow-amber-600">
            My Resume
          </button>
        </div>
        <div className="h-12 flex gap-4 max-md:justify-center md:mx-5 my-3">
          <div className="h-full w-12 animate-[float_3s_ease-in-out_0s_infinite] rounded-full shadow-xl shadow-slate-900/10 text-center">
            <a href="https://github.com/Brijesh-pal4542">
              <img src={github} alt="" />
            </a>
          </div>
          <div className="h-full w-12 animate-[float_3s_ease-in-out_0.5s_infinite] rounded-full shadow-xl shadow-slate-900/10 text-center">
            <a href="https://www.linkedin.com/in/brijesh-pal-460b44378/">
              <img className="rounded-full" src={linkedin} alt="" />
            </a>
          </div>
          <div className="h-full w-12 animate-[float_3s_ease-in-out_0.10s_infinite] rounded-full shadow-xl shadow-slate-900/10 text-center">
            <a href="https://leetcode.com/u/Brijesh_Pal/">
              <img className="rounded-full" src={leetcode} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
