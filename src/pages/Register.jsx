export default function Register() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Hackathon Registration
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Register your team to participate in SGI Techfest Hackathon 2026
        </p>

        <form className="mt-10 bg-white p-8 rounded-2xl shadow-md space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Team Name
            </label>
            <input
              type="text"
              placeholder="Enter your team name"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Team Leader Name
            </label>
            <input
              type="text"
              placeholder="Enter leader's name"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="leader@email.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              College Name
            </label>
            <input
              type="text"
              placeholder="Your college name"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hackathon Track
            </label>
            <select className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option>AI & Machine Learning</option>
              <option>Web & App Development</option>
              <option>Cybersecurity</option>
              <option>Open Innovation</option>
            </select>
          </div>

          <button
            type="button"
            className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
