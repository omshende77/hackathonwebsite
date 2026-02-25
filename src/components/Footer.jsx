export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-cyan-950 to-blue-950 text-gray-300 pt-24 pb-12 overflow-hidden">

      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[150px] md:text-[220px] font-extrabold text-white/5 select-none tracking-widest">
          SGI
        </h1>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* CTA Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Ready to build the future?
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Join SGI Techfest Hackathon 2026 and showcase your innovation,
          creativity, and technical brilliance.
        </p>

        <div className="mt-8">
          <a
            href="/register"
            className="inline-block px-8 py-3 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-105 transition duration-300
            shadow-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]"
          >
            Register Now 
          </a>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">

          {/* Left */}
          <p>
            © 2026 SGI Techfest Hackathon. All rights reserved.
          </p>

          {/* Center Links */}
          <div className="flex gap-8">
            <a href="/" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="/hackathon" className="hover:text-cyan-400 transition">
              Hackathon
            </a>
            <a href="/schedule" className="hover:text-cyan-400 transition">
              Schedule
            </a>
            <a href="/register" className="hover:text-cyan-400 transition">
              Register
            </a>
          </div>

          {/* Right Contact */}
          <div className="text-center md:text-right">
            <p>techfest@sgi.edu.in</p>
            <p>+91 98765 43210</p>
          </div>

        </div>
      </div>
    </footer>
  );
}