import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const timeline = [
  {
    title: "Registrations Open",
    date: "10 March 2026",
    desc: "Teams can register online and complete payment to confirm participation.",
    extra:
      "Registration is confirmed only after successful payment verification. Team size: 2–4 members from the same institute.",
  },
  {
    title: "Round 1 – Idea Screening",
    date: "20 March 2026 (Morning)",
    desc: "Teams present their problem statement, proposed solution, and technology stack.",
    extra:
      "Evaluation based on innovation, feasibility, technical clarity, and relevance to the selected theme.",
  },
  {
    title: "24-Hour Coding Sprint Begins",
    date: "20 March 2026 (Post Screening)",
    desc: "Shortlisted teams begin the 24-hour continuous hackathon sprint.",
    extra:
      "Participants build a functional prototype / MVP under mentor supervision.",
  },
  {
    title: "Mid Evaluation & Mentor Reviews",
    date: "20–21 March 2026",
    desc: "Mentors conduct checkpoint reviews focusing on architecture, workflow, and performance.",
    extra:
      "Teams receive actionable feedback to refine features before final submission.",
  },
  {
    title: "Final Demo & Judging",
    date: "21 March 2026",
    desc: "Teams present live product demonstrations and final pitches to judges.",
    extra:
      "Evaluation based on functionality, innovation, UI/UX, scalability, and presentation skills.",
  },
  {
    title: "Prize Distribution & Closing Ceremony",
    date: "21 March 2026 (Evening)",
    desc: "Winners are announced followed by prize distribution ceremony.",
    extra:
      "🥇 Winner – ₹21,000 | 🥈 Runner-Up – ₹11,000 | Certificates for all participants.",
  },
];

export default function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="timeline"
      className="relative py-24 sm:py-28 bg-black text-white overflow-hidden scroll-mt-28 px-4 sm:px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">
        <div data-aos="fade-down">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Event Timeline
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Vertical Line (center desktop, left mobile) */}
          <div
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 md:-translate-x-1/2 w-1 h-full 
            bg-gradient-to-b from-cyan-400 to-blue-500 
            shadow-[0_0_20px_rgba(0,255,255,0.7)]"
          ></div>

          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`relative flex md:block`}
              >
                {/* Dot */}
                <div
                  className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 
                  w-5 h-5 bg-cyan-400 rounded-full border-4 border-black 
                  shadow-[0_0_20px_rgba(0,255,255,0.9)] z-20"
                ></div>

                {/* Card */}
                <div
                  className={`ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${
                    idx % 2 === 0 ? "md:text-right" : "md:ml-auto"
                  }`}
                >
                  <div
                    className="p-6 sm:p-8 rounded-3xl 
                    bg-white/5 backdrop-blur-xl border border-white/10 
                    transition duration-300 
                    hover:-translate-y-2 
                    hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
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
    </section>
  );
}
