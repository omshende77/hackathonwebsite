const timeline = [
  { title: "Registrations Open", date: "10 March 2026", desc: "Register & form teams" },
  { title: "Idea Submission", date: "20 March 2026", desc: "Submit ideas" },
  { title: "Hackathon Day", date: "25 March 2026", desc: "Build & code" },
  { title: "Final Presentations", date: "26 March 2026", desc: "Present to judges" },
  { title: "Results & Prizes", date: "27 March 2026", desc: "Winners announced" },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Event Timeline
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-cyan-600 mt-1 font-medium">
                {item.date}
              </p>
              <p className="mt-2 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}