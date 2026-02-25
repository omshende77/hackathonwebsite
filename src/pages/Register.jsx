export default function Register() {
  return (
    <div className="relative min-h-screen bg-black text-white pt-28 pb-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[160px]" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <h1
          className="text-5xl font-extrabold text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Hackathon Registration
        </h1>

        <p className="text-center text-gray-400 mt-4">
          Register your team for SGI Hackathon 2026
        </p>

        {/* Form */}
        <form
          className="mt-14 bg-white/5 backdrop-blur-xl p-10 rounded-3xl 
        border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.2)] space-y-6"
        >
          {[
            {
              label: "Team Name",
              type: "text",
              placeholder: "Enter your team name",
            },
            {
              label: "Team Leader Name",
              type: "text",
              placeholder: "Enter leader's name",
            },
            { label: "Email", type: "email", placeholder: "leader@email.com" },
            {
              label: "Phone Number",
              type: "tel",
              placeholder: "10-digit mobile number",
            },
            {
              label: "College Name",
              type: "text",
              placeholder: "Your college name",
            },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-300">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
                text-white placeholder-gray-400
                focus:outline-none focus:border-cyan-400
                focus:ring-2 focus:ring-cyan-400/40
                transition duration-300"
              />
            </div>
          ))}

          {/* Track Select */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Hackathon Track
            </label>
            <select
              className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
              text-white focus:outline-none focus:border-cyan-400
              focus:ring-2 focus:ring-cyan-400/40 transition duration-300"
            >
              <option className="bg-black">AI & Machine Learning</option>
              <option className="bg-black">Web & App Development</option>
              <option className="bg-black">Cybersecurity</option>
              <option className="bg-black">Open Innovation</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full mt-6 py-4 rounded-2xl font-semibold text-lg
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-105 transition duration-300
            shadow-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]"
          >
            Submit Registration 
          </button>
        </form>
      </div>
    </div>
  );
}
