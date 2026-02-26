import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NotFound() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div data-aos="zoom-in" className="max-w-xl">
        {/* 404 Number */}
        <h1
          className="text-7xl sm:text-8xl md:text-9xl font-extrabold 
        bg-gradient-to-r from-cyan-400 to-blue-500 
        bg-clip-text text-transparent"
        >
          404
        </h1>

        {/* Message */}
        <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 rounded-xl font-semibold
          bg-gradient-to-r from-cyan-500 to-blue-600
          hover:scale-[1.05] active:scale-[0.98] transition duration-300 shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
