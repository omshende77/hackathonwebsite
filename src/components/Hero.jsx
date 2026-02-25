export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
            SGI Hackathon 2026
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Build innovative tech solutions. Collaborate with the best minds.
          Compete, learn, and showcase your skills.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/register"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-300/50"
          >
            Register Now
          </a>

          <a
            href="#themes"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-gray-300 text-gray-800 text-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600 hover:-translate-y-1"
          >
            View Themes
          </a>
        </div>
      </div>
    </section>
  );
}
