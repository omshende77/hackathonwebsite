export default function Schedule() {
  const events = [
    {
      title: "Registrations Open",
      date: "10 March 2026",
      desc: "Register & form teams",
    },
    {
      title: "Idea Submission",
      date: "20 March 2026",
      desc: "Submit ideas",
    },
    {
      title: "Hackathon Day",
      date: "25 March 2026",
      desc: "Build & code",
      highlight: true,
    },
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

  return (
    <div className="relative min-h-screen pt-28 pb-28 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <h1
          className="text-5xl md:text-6xl font-extrabold text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Event Schedule
        </h1>

        <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
          Important milestones and key dates for SGI Hackathon 2026
        </p>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Glow Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 md:-translate-x-1/2 w-1 h-full 
          bg-gradient-to-b from-cyan-400 to-blue-500 
          shadow-[0_0_20px_rgba(0,255,255,0.7)]"
          ></div>

          <div className="space-y-16">
            {events.map((item, idx) => (
              <div key={idx} className="relative flex md:block">
                {/* Center Dot */}
                <div
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 
      w-6 h-6 bg-cyan-400 rounded-full 
      border-4 border-black 
      shadow-[0_0_20px_rgba(0,255,255,0.9)] z-20"
                ></div>

                {/* Connector Line */}
                <div
                  className={`hidden md:block absolute top-3 h-[3px] bg-white ${
                    idx % 2 === 0
                      ? "left-1/2 right-[50%] ml-3"
                      : "right-1/2 left-[50%] mr-3"
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    idx % 2 === 0
                      ? "md:pr-0 md:text-right"
                      : "md:pl-0 md:ml-auto"
                  }`}
                >
                  <div
                    className={`p-6 rounded-3xl backdrop-blur-xl border transition duration-300 
        ${
          item.highlight
            ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.5)]"
            : "bg-white/5 border-white/10 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
        }`}
                  >
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 font-medium">
                      {item.date}
                    </p>
                    <p className="mt-3 text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
