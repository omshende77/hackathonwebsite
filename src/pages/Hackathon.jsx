const tracks = [
  {
    title: "AI & Machine Learning",
    desc: "Build intelligent systems, recommendation engines, chatbots, or data-driven apps.",
    icon: "🤖",
  },
  {
    title: "Web & App Development",
    desc: "Create scalable web platforms, mobile apps, or productivity tools.",
    icon: "🌐",
  },
  {
    title: "Cybersecurity",
    desc: "Work on security tools, vulnerability scanners, privacy-first applications.",
    icon: "🛡️",
  },
  {
    title: "Open Innovation",
    desc: "Solve any real-world problem with an innovative tech solution.",
    icon: "🚀",
  },
];

export default function Hackathon() {
  return (
    <div className="pt-28 pb-28 bg-black text-white overflow-hidden">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Hackathon 2026
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          A 24-hour innovation sprint to build impactful tech solutions,
          collaborate with brilliant minds, and push your limits.
        </p>
      </section>

      {/* TRACKS */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400">
          Tracks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl 
              bg-white/5 backdrop-blur-xl border border-white/10
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]"
            >
              <div className="text-5xl group-hover:scale-110 transition">
                {track.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold group-hover:text-cyan-400 transition">
                {track.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RULES */}
      <section className="max-w-4xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-bold text-center text-cyan-400">
          Rules & Guidelines
        </h2>

        <ul className="mt-10 space-y-5">
          {[
            "Team size: 2–4 members",
            "All code must be written during the hackathon",
            "Use of open-source libraries is allowed",
            "Plagiarism or pre-built projects are not allowed",
            "Teams must submit a working prototype",
          ].map((rule, idx) => (
            <li
              key={idx}
              className="p-5 rounded-2xl bg-white/5 border border-white/10
              hover:border-cyan-400 transition duration-300"
            >
              <span className="text-cyan-400 font-semibold mr-2">✓</span>
              {rule}
            </li>
          ))}
        </ul>
      </section>

      {/* PRIZES */}
      <section className="max-w-5xl mx-auto px-6 mt-28 text-center">
        <h2 className="text-3xl font-bold text-cyan-400">
          Prizes & Recognition
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
          {[
            { title: "🥇 Winner", prize: "₹25,000 + Trophy" },
            { title: "🥈 Runner-up", prize: "₹15,000" },
            { title: "🥉 2nd Runner-up", prize: "₹10,000" },
          ].map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10
              border border-cyan-400/20
              hover:scale-105 transition duration-300
              hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]"
            >
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-4 text-gray-300 text-lg">{p.prize}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-bold text-center text-cyan-400">FAQs</h2>

        <div className="mt-10 space-y-5">
          {[
            {
              q: "Who can participate?",
              a: "All undergraduate and postgraduate students are eligible.",
            },
            {
              q: "Is there any registration fee?",
              a: "No, participation is completely free.",
            },
            {
              q: "Can we participate online?",
              a: "The hackathon is conducted on campus.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10
              hover:border-cyan-400 transition duration-300"
            >
              <h4 className="font-semibold text-lg">{faq.q}</h4>
              <p className="mt-3 text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
