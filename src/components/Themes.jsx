import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const themes = [
  {
    title: "Agritech Revolution",
    desc: "Smart farming, food innovation, crop monitoring, and tech-driven agricultural transformation.",
    icon: "🌾",
  },
  {
    title: "Next-Gen HealthTech",
    desc: "Digital healthcare solutions, smart diagnosis systems, and patient-centric innovation.",
    icon: "🏥",
  },
  {
    title: "GreenTech & Climate Action",
    desc: "Sustainable technologies tackling climate change and environmental challenges.",
    icon: "🌱",
  },
  {
    title: "Women Safety & Empowerment Tech",
    desc: "Secure, inclusive technologies promoting safety and empowerment.",
    icon: "🛡️",
  },
  {
    title: "MindTech",
    desc: "Mental wellness innovations, emotional support systems, and well-being platforms.",
    icon: "🧠",
  },
];

export default function Themes() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="themes"
      className="relative py-24 sm:py-28 bg-black text-white overflow-hidden px-4 sm:px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center" data-aos="fade-down">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Innovation Themes
          </h2>

          <p className="text-center text-gray-400 mt-4 text-sm sm:text-lg max-w-2xl mx-auto">
            Choose a domain, solve real-world problems, and build impactful
            solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {themes.map((theme, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative p-6 sm:p-8 rounded-3xl 
              bg-white/5 backdrop-blur-xl border border-white/10 
              transition-all duration-500 
              hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 
                group-hover:opacity-100 transition duration-500 
                bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
              ></div>

              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition duration-300">
                  {theme.icon}
                </div>

                <h3 className="mt-6 text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition">
                  {theme.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
