const themes = [
  {
    title: "AI & Machine Learning",
    desc: "Intelligent systems & data-driven apps",
    icon: "🤖",
  },
  {
    title: "Web & App Development",
    desc: "Modern web & mobile experiences",
    icon: "🌐",
  },
  {
    title: "Cybersecurity",
    desc: "Security, privacy & protection",
    icon: "🛡️",
  },
  {
    title: "Open Innovation",
    desc: "Anything impactful and innovative",
    icon: "🚀",
  },
];

export default function Themes() {
  return (
    <section
      id="themes"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Hackathon Themes
        </h2>

        <p className="text-center text-gray-400 mt-4 text-lg">
          Choose your battleground and build something extraordinary
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {themes.map((theme, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl 
              bg-white/5 backdrop-blur-xl border border-white/10 
              transition-all duration-500 
              hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]"
            >
              {/* Hover Glow Border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 
              group-hover:opacity-100 transition duration-500 
              bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
              ></div>

              <div className="relative z-10">
                <div className="text-5xl group-hover:scale-110 transition duration-300">
                  {theme.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-cyan-400 transition">
                  {theme.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
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
