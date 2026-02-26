import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative py-24 sm:py-28 bg-black text-white overflow-hidden px-4 sm:px-6">
      {/* Background Glow */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 
        w-[600px] h-[600px] 
        bg-cyan-500/10 blur-[200px] 
        rounded-full pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE - TEXT */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              TechSprint – 24 Hrs Hackathon 2026
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            TechSprint – 24 Hrs Hackathon 2026 is a national-level innovation
            challenge organized by the MCA Department, bringing together
            passionate developers, designers, and problem-solvers for an intense
            24-hour coding experience.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
            The event begins with Round 1 Idea Screening on 20th March 2026,
            where teams present their problem statement and proposed solution.
            Shortlisted teams then advance to the 24-hour on-campus hackathon
            sprint (20th–21st March 2026) to build a functional prototype or MVP
            under mentor guidance and expert evaluation.
          </p>

          {/* Highlights */}
          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></span>
              <p className="text-gray-300">
                24 Hours of Continuous Coding & Innovation
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></span>
              <p className="text-gray-300">
                Winner: ₹21,000 | Runner-Up: ₹11,000
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></span>
              <p className="text-gray-300">
                Real-world problem statements across 5 innovation themes
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></span>
              <p className="text-gray-300">
                Mentor reviews, mid-evaluations & live product demos
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></span>
              <p className="text-gray-300">
                Open to Undergraduate & Postgraduate students (All Streams)
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div data-aos="fade-left" className="relative">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10 
            backdrop-blur-xl bg-white/5 shadow-[0_0_60px_rgba(0,255,255,0.20)]"
          >
            <img
              src="/imgw.png"
              alt="TechSprint Hackathon Event"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
