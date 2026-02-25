export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white">
            SGI Techfest Hackathon 2026
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Empowering students to build innovative tech solutions and showcase
            their creativity.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-cyan-400">
                Home
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-cyan-400">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">
                Themes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">
                Schedule
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase">
            Contact
          </h4>
          <p className="mt-3 text-sm text-gray-400">
            Email: techfest@sgi.edu.in <br />
            Phone: +91 98765 43210
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © 2026 SGI Techfest. All rights reserved.
      </div>
    </footer>
  );
}
