import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hackathon", path: "/hackathon" },
    { name: "Schedule", path: "/schedule" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav
      className="w-full px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 
    bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.2)]"
    >
      {/* Logo */}
      <div
        className="text-2xl font-extrabold tracking-wider 
      bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 
      drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] border border-cyan-400/20 px-3 py-1 rounded-lg"
      >
        SGI Hackathon 2026
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`relative transition duration-300 ${
              location.pathname === link.path
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }`}
          >
            {link.name}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300 ${
                location.pathname === link.path
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        to="/register"
        className="hidden md:inline-flex px-6 py-2.5 rounded-xl 
        bg-gradient-to-r from-cyan-500 to-blue-600 
        text-white font-semibold 
        shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] 
        hover:scale-105 transition duration-300"
      >
        Register 
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-cyan-400 cursor-pointer">
        {open ? (
          <X size={28} onClick={() => setOpen(false)} />
        ) : (
          <Menu size={28} onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center gap-6 py-8 md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-300 text-lg hover:text-cyan-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
