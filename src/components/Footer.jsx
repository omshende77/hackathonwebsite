import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Globe } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-black via-cyan-950 to-blue-950 text-gray-300 pt-20 sm:pt-24 pb-12 overflow-hidden px-4 sm:px-6">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[100px] sm:text-[160px] md:text-[220px] font-extrabold text-white/5 select-none tracking-widest">
          SGI
        </h1>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* CTA Section */}
        <div data-aos="fade-up">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Ready to Code for 24 Hours?
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Join{" "}
            <span className="text-white font-semibold">
              TechSprint – 24 Hrs Hackathon 2026
            </span>{" "}
            on 20th & 21st March 2026. Compete, collaborate, and build impactful
            solutions across five innovation themes.
          </p>

          <p className="mt-3 text-gray-500 text-sm">
            🏆 Winner ₹21,000 | Runner-Up ₹11,000 | Certificates for All
          </p>

          <div className="mt-8">
            <Link
              to="/register"
              className="inline-block px-8 py-3 rounded-xl font-semibold
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:scale-[1.05] transition duration-300
              shadow-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]"
            >
              Register Your Team
            </Link>
          </div>
        </div>

        {/* Divider Section */}
        <div className="mt-16 border-t border-white/10 pt-10 grid md:grid-cols-3 gap-8 text-sm text-gray-400">
          {/* Left - Copyright */}
          <div className="text-center md:text-left space-y-2">
            <p>© 2026 TechSprint – 24 Hrs Hackathon</p>
            <p>SGI MCA Department</p>
            <p className="text-gray-500">Bavdhan, Pune – 411021</p>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
            <Link to="/hackathon" className="hover:text-cyan-400 transition">
              Hackathon
            </Link>
            <Link to="/schedule" className="hover:text-cyan-400 transition">
              Schedule
            </Link>
            <Link to="/register" className="hover:text-cyan-400 transition">
              Register
            </Link>
          </div>

          {/* Right - Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Contact */}
            <div className="text-center md:text-right">
              <p>📧 techsprint@sgi.edu.in</p>
              <p>📞 +91 98765 43210</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-2">
              <a
                href="https://www.instagram.com/suryadatta_mca/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/suryadatta-mca-dept21-353143329/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 hover:text-blue-600 transition" />
              </a>

              <a
                href="https://www.youtube.com/@suryadattagroupofinstitute4568"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <Youtube className="w-6 h-6 hover:text-red-600 transition" />
              </a>

              <a
                href="https://www.suryadatta.org"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <Globe className="w-6 h-6 hover:text-green-500 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
