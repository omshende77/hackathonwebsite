import Globe from "./Globe";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/ChatGPT Image Feb 25, 2026, 04_48_47 PM.png"
        alt="Hackathon Hero"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Glow Accent */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 
      w-[600px] h-[600px] 
      bg-cyan-500/20 blur-[200px] 
      rounded-full pointer-events-none"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1500px] mx-auto pl-20 pt-32 pb-20">

        {/* CENTERED NEON HEADING (Now Inside Flow) */}
        <div className="text-center mb-20 px-6 md:px-16">
          <h2
            className="neon-flicker 
            text-2xl sm:text-3xl md:text-4xl 
            font-bold uppercase 
            tracking-[0.18em] 
            leading-snug"
          >
            Suryadatta Group of Institutes <br />
            Hackathon 2026
          </h2>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full 
              border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-sm mb-6"
            >
              🚀 24-Hour Innovation Sprint
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Build <br />
              Solutions <br />
              That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Transform
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Join SGI Hackathon 2026. Collaborate, innovate, and create impactful
              tech solutions in a high-energy 24-hour coding marathon.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="/register"
                className="px-16 py-5 rounded-xl font-semibold 
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:scale-105 transition duration-300
                shadow-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]"
              >
                Register Now →
              </a>

              <a
                href="/hackathon"
                className="px-10 py-5 rounded-xl border border-white/20 
                hover:border-cyan-400 hover:text-cyan-400
                transition duration-300"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 flex gap-12 text-sm text-gray-400">
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                Participants
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100+</p>
                Teams
              </div>
              <div>
                <p className="text-2xl font-bold text-white">₹50K+</p>
                Prize Pool
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center justify-center h-[550px]">
            <Globe />
          </div>

        </div>
      </div>
    </section>
  );
}