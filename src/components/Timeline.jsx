const timeline = [
  {
    title: "Registrations Open",
    date: "10 March 2026",
    desc: "Register & form teams",
  },
  { title: "Idea Submission", date: "20 March 2026", desc: "Submit ideas" },
  { title: "Hackathon Day", date: "25 March 2026", desc: "Build & code" },
  {
    title: "Final Presentations",
    date: "26 March 2026",
    desc: "Present to judges",
  },
  {
    title: "Results & Prizes",
    date: "27 March 2026",
    desc: "Winners announced",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-28 bg-black text-white overflow-hidden scroll-mt-28"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Event Timeline
        </h2>

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full 
          bg-gradient-to-b from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(0,255,255,0.7)]"
          ></div>

          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Card */}
                <div
                  className="w-full md:w-5/12 p-6 rounded-3xl 
                bg-white/5 backdrop-blur-xl border border-white/10 
                hover:-translate-y-2 transition duration-300 
                hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]"
                >
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 font-medium">
                    {item.date}
                  </p>
                  <p className="mt-3 text-gray-300">{item.desc}</p>
                </div>

                {/* Circle Dot */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 
                bg-cyan-400 rounded-full border-4 border-black 
                shadow-[0_0_20px_rgba(0,255,255,0.9)]"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
