import React, { useEffect, useState } from "react";

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end]);

  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-cyan-400">{count}+</h2>
      <p className="text-gray-400 mt-3">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="bg-black text-white py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Event Highlights
      </h1>

      <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        <Counter end={500} label="Participants" />
        <Counter end={100} label="Teams" />
        <Counter end={24} label="Hours of Innovation" />
        <Counter end={15} label="Mentors & Judges" />
      </div>
    </div>
  );
}
