import { useEffect, useState } from "react";

export default function Countdown() {
  const eventDate = new Date("2026-03-20T09:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex justify-center mt-20">
        <h2 className="text-4xl font-bold text-green-400 animate-pulse">
          🚀 Hackathon Started!
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4">
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center 
      bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
      bg-clip-text text-transparent pb-4"
      >
        Hackathon Begins In
      </h2>

      {/* Timer Boxes */}
      <div className="flex justify-center gap-6 md:gap-10 flex-wrap mb-4">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="relative 
            bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20
            border border-cyan-400/40
            backdrop-blur-xl
            rounded-3xl
            p-8
            w-28 md:w-36
            text-center
            shadow-[0_0_30px_rgba(0,255,255,0.3)]
            hover:scale-105
            transition-all duration-300"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_10px_cyan]">
              {timeLeft[unit]}
            </div>

            <div className="text-xs md:text-sm uppercase tracking-widest text-cyan-300 mt-3">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
