import React, { useEffect, useState, useRef } from "react";

function Counter({ end, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);

  // Trigger animation only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-3xl sm:text-5xl font-bold text-cyan-400">
        {count}
        {suffix}
      </h2>
      <p className="text-gray-400 mt-3 text-sm sm:text-base">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="bg-black text-white py-24 px-4 sm:px-6">
      <h1
        className="text-3xl sm:text-4xl font-bold text-center mb-16 
      bg-gradient-to-r from-cyan-400 to-blue-500 
      bg-clip-text text-transparent"
      >
        Event Highlights
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
        <Counter end={24} label="Hours of Coding" />
        <Counter end={2} label="Screening Rounds" />
        <Counter end={5} label="Innovation Themes" />
        <Counter end={32} label="Total Prize Value (₹K)" />
        <Counter end={4} label="Max Team Members" />
        <Counter end={1000} label="Registration Fee (₹)" />
      </div>
    </div>
  );
}
