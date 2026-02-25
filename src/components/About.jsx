export default function About() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 
      w-[600px] h-[600px] 
      bg-cyan-500/10 blur-[200px] 
      rounded-full pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SGI Hackathon 2026
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            SGI Hackathon 2026 is a 24-hour innovation sprint designed to bring
            together passionate developers, designers, and innovators to solve
            real-world challenges using cutting-edge technology.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Participants collaborate in teams to build impactful solutions in
            domains like Artificial Intelligence, Web Development,
            Cybersecurity, IoT, Blockchain, and Cloud Computing. This event
            fosters creativity, teamwork, and problem-solving under high-energy
            conditions.
          </p>

          {/* Highlights */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-gray-300">24 Hours of Non-Stop Innovation</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-gray-300">₹50K+ Prize Pool</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-gray-300">Industry Mentors & Judges</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-gray-300">Networking & Career Opportunities</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10 
          backdrop-blur-xl bg-white/5 shadow-[0_0_60px_rgba(0,255,255,0.20)]"
          >
            <img
              src="/imgw.png"
              alt="Hackathon Event"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
