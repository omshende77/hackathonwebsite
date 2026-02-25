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
    <div className="pt-28 pb-20 bg-slate-50">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
            Hackathon 2026
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          24-hour innovation sprint to build impactful tech solutions
        </p>
      </section>

      {/* Tracks */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Tracks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-200/40"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative">
                <div className="text-4xl">{track.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {track.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{track.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rules */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Rules & Guidelines
        </h2>

        <ul className="mt-8 space-y-4">
          {[
            "Team size: 2–4 members",
            "All code must be written during the hackathon",
            "Use of open-source libraries is allowed",
            "Plagiarism or pre-built projects are not allowed",
            "Teams must submit a working prototype",
          ].map((rule, idx) => (
            <li
              key={idx}
              className="p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 transition"
            >
              ✅ {rule}
            </li>
          ))}
        </ul>
      </section>

      {/* Prizes */}
      <section className="max-w-5xl mx-auto px-6 mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Prizes & Recognition
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            { title: "🥇 Winner", prize: "₹25,000 + Trophy" },
            { title: "🥈 Runner-up", prize: "₹15,000" },
            { title: "🥉 2nd Runner-up", prize: "₹10,000" },
          ].map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.prize}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          FAQs
        </h2>

        <div className="mt-8 space-y-4">
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
              className="p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 transition"
            >
              <h4 className="font-semibold text-gray-900">{faq.q}</h4>
              <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
