import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const tracks = [
  {
    title: "Agritech Revolution",
    desc: "Smart farming, food innovation, and technology-driven agriculture solutions.",
    icon: "🌾",
  },
  {
    title: "Next-Gen HealthTech",
    desc: "Digital healthcare, smart diagnosis, and patient-centered innovations.",
    icon: "🏥",
  },
  {
    title: "GreenTech & Climate Action",
    desc: "Sustainable technologies addressing climate change and environmental impact.",
    icon: "🌱",
  },
  {
    title: "Women Safety & Empowerment Tech",
    desc: "Secure, inclusive, and empowering digital safety solutions.",
    icon: "🛡️",
  },
  {
    title: "MindTech",
    desc: "Mental wellness innovations and emotional health support systems.",
    icon: "🧠",
  },
];

export default function Hackathon() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-28 pb-28 bg-black text-white overflow-hidden px-4 sm:px-6">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto text-center" data-aos="fade-down">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          TechSprint – 24 Hrs Hackathon 2026
        </h1>

        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Code. Create. Collaborate. Vibe. <br />A high-energy 24-hour
          national-level hackathon bringing together innovators, coders,
          designers, and problem solvers.
        </p>

        <p className="mt-4 text-cyan-400 font-semibold">
          📅 20th & 21st March 2026 | Offline Event
        </p>

        <Link
          to="/round1-results"
          className="inline-block mt-8 px-6 py-3 rounded-xl font-semibold
          bg-gradient-to-r from-cyan-500 to-blue-600
          hover:scale-[1.03] transition"
        >
          View Round 1 Results
        </Link>
      </section>

      {/* TRACKS */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-cyan-400"
          data-aos="fade-up"
        >
          Hackathon Themes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative p-6 sm:p-8 rounded-3xl 
              bg-white/5 backdrop-blur-xl border border-white/10
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
            >
              <div className="text-4xl sm:text-5xl group-hover:scale-110 transition">
                {track.icon}
              </div>

              <h3 className="mt-6 text-lg sm:text-xl font-semibold group-hover:text-cyan-400 transition">
                {track.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT FLOW */}
      <section className="max-w-5xl mx-auto mt-28" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-cyan-400">
          Event Flow
        </h2>

        <ul className="mt-10 space-y-4 text-gray-300">
          {[
            "Inauguration & Problem Statement Release",
            "24-Hour Continuous Coding Sprint",
            "Mid-Evaluation & Mentor Check-ins",
            "Final Submission & Live Demo",
            "Judging & Prize Distribution",
          ].map((item, idx) => (
            <li
              key={idx}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              ✓ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* RULES */}
      <section className="max-w-5xl mx-auto mt-28" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-cyan-400">
          Rules & Guidelines
        </h2>

        <ul className="mt-10 space-y-4 text-gray-300 text-sm sm:text-base">
          {[
            "Team size: 2–4 members (same institute only)",
            "Registration Fee: ₹1000 per Team",
            "All development must happen during the hackathon",
            "Pre-written custom code is not allowed",
            "Open-source libraries allowed with attribution",
            "AI tools like ChatGPT & Copilot are permitted",
            "No refunds under any circumstances",
          ].map((rule, idx) => (
            <li
              key={idx}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
            >
              <span className="text-cyan-400 font-semibold mr-2">✓</span>
              {rule}
            </li>
          ))}
        </ul>
      </section>

      {/* PRIZES */}
      <section
        className="max-w-5xl mx-auto mt-28 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">
          Prizes & Recognition
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">🥇 Winner</h3>
            <p className="mt-4 text-gray-300 text-lg">₹21,000</p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">🥈 Runner-Up</h3>
            <p className="mt-4 text-gray-300 text-lg">₹11,000</p>
          </div>
        </div>

        <p className="mt-6 text-gray-400">
          🎓 Certificates will be provided to all participants.
        </p>
      </section>

      {/* ELIGIBILITY */}
      <section
        className="max-w-4xl mx-auto mt-28 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">
          Eligibility
        </h2>

        <p className="mt-6 text-gray-400">
          Open to Undergraduate & Postgraduate students from Engineering,
          Management, Arts, Commerce, Science & all other streams.
        </p>
      </section>
    </div>
  );
}
