import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/60 backdrop-blur-xl border-b border-white/30 fixed top-0 left-0 z-50">
      <div className="text-xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
        SGI Hackathon 2026
      </div>

      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        {[
          { to: "/", label: "Home" },
          { to: "/hackathon", label: "Hackathon" },
          { to: "/#timeline", label: "Schedule" },
          { to: "/register", label: "Register" },
        ].map((link) => {
          const isActive = pathname === link.to;
          return (
            <Link key={link.label} to={link.to} className="relative group">
              <span
                className={`transition ${
                  isActive ? "text-cyan-600" : "group-hover:text-cyan-600"
                }`}
              >
                {link.label}
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-500 transition-all ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <Link
        to="/register"
        className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-cyan-300/50 hover:-translate-y-0.5"
      >
        Register
      </Link>
    </nav>
  );
}
