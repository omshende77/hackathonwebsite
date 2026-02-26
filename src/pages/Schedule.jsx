import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Schedule() {
  const events = [
    {
      title: "Registrations Open",
      date: "10 March 2026",
      desc: "Teams can register and complete payment to confirm participation.",
      extra:
        "Registration is confirmed only after successful payment verification. No refunds will be issued.",
    },
    {
      title: "Round 1 – Idea Screening",
      date: "20 March 2026 (Morning Session)",
      desc: "Teams present their problem statement, proposed solution, and technology stack.",
      extra:
        "Evaluation based on innovation, feasibility, technical clarity, and relevance to theme.",
    },
    {
      title: "24-Hour Hackathon Begins",
      date: "20 March 2026 (Post Screening)",
      desc: "Shortlisted teams begin the continuous 24-hour coding sprint.",
      highlight: true,
      extra:
        "Mentor check-ins, mid-evaluation reviews, and architecture guidance throughout the event.",
    },
    {
      title: "Prototype Development & Final Demo",
      date: "21 March 2026",
      desc: "Teams complete MVP, finalize features, and prepare for live product demonstration.",
      extra:
        "Judging based on functionality, innovation, UI/UX, scalability, and presentation skills.",
    },
    {
      title: "Final Results & Prize Distribution",
      date: "21 March 2026 (Closing Ceremony)",
      desc: "Winners announced followed by prize distribution and certificates.",
      extra:
        "₹21,000 for Winner | ₹11,000 for Runner-Up | Certificates for all participants.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-28 bg-black text-white overflow-hidden px-4 sm:px-6">
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="text-center">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold 
          bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Event Schedule
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Important milestones and key stages of TechSprint – 24 Hrs Hackathon
            2026
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 md:-translate-x-1/2 w-1 h-full 
            bg-gradient-to-b from-cyan-400 to-blue-500 
            shadow-[0_0_20px_rgba(0,255,255,0.7)]"
          ></div>

          <div className="space-y-16">
            {events.map((item, idx) => (
              <div
                key={idx}
                className="relative flex md:block"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Dot */}
                <div
                  className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 
                  w-5 h-5 bg-cyan-400 rounded-full 
                  border-4 border-black 
                  shadow-[0_0_20px_rgba(0,255,255,0.9)] z-20"
                ></div>

                {/* Card */}
                <div
                  className={`ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${
                    idx % 2 === 0 ? "md:text-right" : "md:ml-auto"
                  }`}
                >
                  <div
                    className={`p-6 sm:p-8 rounded-3xl backdrop-blur-xl border transition duration-300 
                    ${
                      item.highlight
                        ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.5)]"
                        : "bg-white/5 border-white/10 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                    }`}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
                      {item.date}
                    </p>

                    <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>

                    <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.extra}
                    </p>
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
