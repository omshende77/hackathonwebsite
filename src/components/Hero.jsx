import Globe from "./Globe";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Confetti from "react-confetti"; // if you are using this library
import AOS from "aos";
import "aos/dist/aos.css";
import Countdown from "../components/Countdown";

export default function Hero() {
  const today = new Date();
  const resultDate = new Date("2026-03-20T18:00:00");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/ChatGPT Image Feb 25, 2026, 04_48_47 PM.png"
        alt="TechSprint Hackathon Hero"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glow Accent */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 
        w-[500px] h-[500px] 
        bg-cyan-500/20 blur-[180px] 
        rounded-full pointer-events-none"
      ></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20">
        {/* TOP TITLE */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2
            className="text-lg sm:text-2xl md:text-3xl 
            font-bold uppercase tracking-[0.18em]"
          >
            Suryadatta Group of Institutes
          </h2>

          <h3
            className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent soft-glow"
          >
            TechSprint – 24 Hrs Hackathon 2026
          </h3>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            20th & 21st March 2026 | MCA Department
          </p>

          {today >= resultDate && (
            <div className="mt-8">
              <Link
                to="/round1-results"
                className="inline-block px-8 py-3 rounded-xl 
                font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:scale-[1.05] transition"
              >
                🎉 View Round 1 Results
              </Link>
            </div>
          )}
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div data-aos="fade-right">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full 
              border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm mb-6"
            >
              🚀 24-Hour National Level Innovation Sprint
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Code. <br />
              Create. <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Collaborate.
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-sm sm:text-lg max-w-xl leading-relaxed">
              Begin with Idea Screening on 20th March 2026 and qualify for the
              24-hour coding marathon. Build a working MVP, receive mentor
              guidance, and present your innovation to expert judges.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-8 sm:px-12 py-4 rounded-xl font-semibold 
  bg-gradient-to-r from-cyan-500 to-blue-600
  hover:scale-[1.05] transition
  shadow-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] inline-block"
              >
                Register Your Team →
              </Link>

              <Link
                to="/hackathon"
                className="px-8 py-4 rounded-xl border border-white/20 
  hover:border-cyan-400 hover:text-cyan-400
  transition inline-block"
              >
                Explore Themes
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-xs sm:text-sm text-gray-400">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  ₹21,000
                </p>
                Winner Prize
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  ₹11,000
                </p>
                Runner-Up
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  24 Hours
                </p>
                Coding Sprint
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="hidden lg:flex items-center justify-center h-[500px]"
            data-aos="fade-left"
          >
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}
