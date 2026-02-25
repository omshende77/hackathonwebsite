const themes = [
  { title: "AI & Machine Learning", desc: "Intelligent systems & data-driven apps", icon: "🤖" },
  { title: "Web & App Development", desc: "Modern web & mobile experiences", icon: "🌐" },
  { title: "Cybersecurity", desc: "Security, privacy & protection", icon: "🛡️" },
  { title: "Open Innovation", desc: "Anything impactful and innovative", icon: "🚀" },
];

export default function Themes() {
  return (
    <section id="themes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Hackathon Themes
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Choose a track and build something amazing
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {themes.map((theme, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-200/40"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative">
                <div className="text-4xl">{theme.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {theme.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
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