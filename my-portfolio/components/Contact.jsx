import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Check, X } from "lucide-react";
import githubIcon from "../src/assets/github.png";
import linkedinIcon from "../src/assets/linkedin.jpg";
import leetcodeIcon from "../src/assets/leetcode.png";

// Replace these three with your actual EmailJS IDs from step 2 above.
const SERVICE_ID = "service_iugml17";
const TEMPLATE_ID = "template_f3jk343";
const PUBLIC_KEY = "qrJg2-VtoxaIPl1EJ";

const contactInfo = [
  { icon: Mail, label: "kundanpal9082@gmail.com" },
  { icon: Phone, label: "+91 9621114542" },
  { icon: MapPin, label: "India" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/Brijesh-pal4542", icon: githubIcon, round: false },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/brijesh-pal-460b44378/", icon: linkedinIcon, round: true },
  { name: "LeetCode", href: "https://leetcode.com/u/Brijesh_Pal/", icon: leetcodeIcon, round: true },
];

function FloatingInput({ id, label, type = "text", textarea = false, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative mb-6">
      <Tag
        id={id}
        type={textarea ? undefined : type}
        rows={textarea ? 3 : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className="w-full bg-transparent border-0 border-b-2 border-amber-800/40 focus:border-amber-950 outline-none py-1.5 text-amber-950 transition-colors duration-300 resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 pointer-events-none transition-all duration-200 text-amber-700 ${
          floated ? "-top-4 text-xs text-amber-950" : "top-1.5 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="my-15 max-sm:my-25 px-6">
      {/* ---------- Section heading ---------- */}
      <div className="text-center mb-14">
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-amber-700 mb-2">
          Let's Talk
        </p>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-amber-950 text-shadow-sm text-shadow-amber-800">
          Get In
          <span className="block shade italic">Touch</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
          <span className="h-3 w-3 rounded-full bg-amber-800 shade" />
          <span className="h-[2px] w-12 md:w-20 bg-amber-800/60 rounded-full" />
        </div>
      </div>

      <div
        className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* ---- Contact info card ---- */}
        <div className="bg-amber-400/60 dot-grid border border-amber-800 rounded-3xl p-7 shadow-[0_0_30px_rgba(180,83,9,0.2)]">
          <ul className="space-y-4 mb-6">
            {contactInfo.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-full bg-amber-800 shade flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-white" />
                </span>
                <span className="text-sm text-amber-950">{label}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="h-9 w-9 rounded-full shadow-md flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <img
                  src={s.icon}
                  alt=""
                  className={`h-9 w-9 object-cover ${s.round ? "rounded-full" : ""}`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* ---- Form card ---- */}
        <div className="bg-amber-400/60 dot-grid border border-amber-800 rounded-3xl p-7 shadow-[0_0_30px_rgba(180,83,9,0.2)]">
          <form onSubmit={handleSubmit}>
            <FloatingInput id="name" label="Name" value={form.name} onChange={handleChange("name")} />
            <FloatingInput id="email" label="Email" type="email" value={form.email} onChange={handleChange("email")} />
            <FloatingInput id="message" label="Message" textarea value={form.message} onChange={handleChange("message")} />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 bg-amber-800 text-white py-2.5 rounded-full font-medium shadow-md shadow-amber-900 hover:-translate-y-0.5 hover:bg-amber-900 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              {status === "sending" && "Sending..."}
              {status === "success" && (
                <>
                  <Check size={18} /> Sent!
                </>
              )}
              {status === "error" && (
                <>
                  <X size={18} /> Failed — try again
                </>
              )}
              {status === "idle" && (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;