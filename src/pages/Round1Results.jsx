import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Round1Results() {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchSelectedTeams();
  }, []);

  const fetchSelectedTeams = async () => {
    const q = query(
      collection(db, "registrations"),
      where("round1Status", "==", "Selected"),
    );

    const snapshot = await getDocs(q);

    const teams = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setSelectedTeams(teams);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div data-aos="fade-down">
          <h1 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Round 1 Results
          </h1>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Shortlisted Teams for the Final 24-Hour Hackathon
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="mt-16" data-aos="fade-up">
            <div className="animate-pulse text-gray-400">
              Loading results...
            </div>
          </div>
        ) : selectedTeams.length === 0 ? (
          <div
            className="mt-16 p-6 rounded-2xl bg-yellow-600/20 border border-yellow-400 text-yellow-300"
            data-aos="fade-up"
          >
            Results will be announced soon.
          </div>
        ) : (
          <div className="mt-14 grid gap-6" data-aos="fade-up">
            {selectedTeams.map((team, index) => (
              <div
                key={team.id}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl 
                hover:border-cyan-400 transition duration-300"
              >
                <h2 className="text-lg sm:text-xl font-semibold">
                  <span className="text-cyan-400 mr-2">{index + 1}.</span>
                  {team.teamName}
                </h2>

                <p className="text-cyan-400 mt-2 text-sm sm:text-base font-mono">
                  {team.registrationId}
                </p>

                <p className="text-gray-400 mt-2 text-sm">
                  Theme: {team.theme}
                </p>

                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  Team Leader: {team.members?.[0]?.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
