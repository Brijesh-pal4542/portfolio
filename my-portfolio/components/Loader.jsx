import { useEffect, useState } from "react";

const lines = [
  { text: "$ git clone brijesh-pal/portfolio", color: "text-amber-300" },
  { text: "$ npm install", color: "text-amber-300" },
  { text: "installing dependencies... done", color: "text-green-600" },
  { text: "$ npm run build", color: "text-amber-300" },
  { text: "compiling modules... 100%", color: "text-green-600" },
  { text: "✓ build successful", color: "text-green-400" },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Loader({ onReveal, onDone }) {
  const [typedText, setTypedText] = useState([]);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function typeOneLine(text, index) {
      return new Promise((resolve) => {
        let charIndex = 0;
        const interval = setInterval(() => {
          charIndex++;
          setTypedText((prev) => {
            const next = [...prev];
            next[index] = text.slice(0, charIndex);
            return next;
          });
          if (charIndex >= text.length) {
            clearInterval(interval);
            resolve();
          }
        }, 22);
      });
    }

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        await typeOneLine(lines[i].text, i);
        await wait(180);
      }
      if (cancelled) return;
      await wait(400); // brief pause so the finished terminal is readable

      if (cancelled) return;
      setExiting(true);
      onReveal(); // tells App.jsx to start the scanline + clip-path reveal now

      await wait(600); // matches this component's own fade/scale-out duration
      if (!cancelled) onDone(); // tells App.jsx to unmount the loader entirely
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [onReveal, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FFCE1B] transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`w-80 rounded-lg overflow-hidden shadow-2xl font-mono transition-all duration-500 ${
          exiting ? "scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#2A2419]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E0574F]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5B93E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4CA65A]" />
          <span className="ml-2 text-[11px] text-[#A99B7E]">bash</span>
        </div>
        {/* body */}
        <div className="bg-[#1E1B16] p-3.5 text-xs leading-7 min-h-[130px] whitespace-pre-wrap">
          {lines.map((line, i) => (
            <div key={i} className={line.color}>
              {typedText[i] ?? ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loader;