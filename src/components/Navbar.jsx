import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const pressTimer = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hackathon", path: "/hackathon" },
    { name: "Schedule", path: "/schedule" },
    { name: "Register", path: "/register" },
    { name: "Check Status", path: "/check-status" },
  ];

  // 🔥 Long Press on Logo (Mobile Only)
  const handleTouchStart = () => {
    pressTimer.current = setTimeout(() => {
      navigate("/admin");
    }, 3000); // 3 seconds
  };

  const handleTouchEnd = () => {
    clearTimeout(pressTimer.current);
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 
      bg-black/70 backdrop-blur-xl border-b border-white/10 
      shadow-[0_0_20px_rgba(0,255,255,0.15)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="text-lg sm:text-2xl font-extrabold tracking-wide 
          bg-gradient-to-r from-cyan-400 to-blue-500 
          bg-clip-text text-transparent 
          hover:opacity-80 transition select-none"
        >
          TechSprint 2026
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative group transition duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/register"
          className="hidden md:inline-flex px-5 py-2 rounded-xl 
          bg-gradient-to-r from-cyan-500 to-blue-600 
          text-white font-semibold text-sm
          hover:scale-[1.05] transition 
          shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]"
        >
          Register Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl flex flex-col items-center gap-6 py-8 border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg transition ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="px-6 py-3 rounded-xl 
            bg-gradient-to-r from-cyan-500 to-blue-600 
            text-white font-semibold mt-4"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
