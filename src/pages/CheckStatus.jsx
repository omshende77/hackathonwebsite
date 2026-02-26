import { useState, useEffect } from "react";
import { db } from "../firebase";
import AOS from "aos";
import "aos/dist/aos.css";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function CheckStatus() {
  const [regId, setRegId] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(false);
  const today = new Date();
  const round1Date = new Date("2026-03-20T09:00:00");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleCheck = async () => {
    if (!regId) {
      alert("Please enter Registration ID");
      return;
    }

    setLoading(true);

    const q = query(
      collection(db, "registrations"),
      where("registrationId", "==", regId.trim()),
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      setTeamData(snapshot.docs[0].data());
    } else {
      setTeamData(null);
      alert("No registration found with this ID");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-20">
      <div
        data-aos="zoom-in"
        className="w-full max-w-lg bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl"
      >
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Check Registration Status
        </h1>

        {/* Input */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Registration ID (SGI-XXXXXX)"
            value={regId}
            onChange={(e) => setRegId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20
            focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
            text-white placeholder-gray-400 transition"
          />

          <button
            onClick={handleCheck}
            className="w-full py-3 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-[1.02] active:scale-[0.98] transition duration-300"
          >
            {loading ? "Checking..." : "Check Status"}
          </button>
        </div>

        {/* Result Section */}
        {teamData && (
          <div
            data-aos="fade-up"
            className="mt-10 text-left bg-black/40 p-6 rounded-2xl border border-white/10 space-y-4"
          >
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <span className="text-gray-400">Team:</span>{" "}
                <span className="font-semibold text-white">
                  {teamData.teamName}
                </span>
              </p>

              <p>
                <span className="text-gray-400">Team Leader:</span>{" "}
                <span className="text-white font-semibold">
                  {teamData.members?.[0]?.name || "-"}
                </span>
              </p>

              <p>
                <span className="text-gray-400">Theme:</span>{" "}
                <span className="text-white">
                  {teamData.theme || "-"}
                </span>
              </p>

              <p>
                <span className="text-gray-400">Final Round:</span>{" "}
                <span className="font-semibold text-cyan-400">
                  {teamData.finalStatus || "Not Started"}
                </span>
              </p>
            </div>

            {/* Status Messages */}
            {teamData.round1Status === "Pending" && today < round1Date && (
              <div className="mt-4 p-4 rounded-xl bg-yellow-600/20 border border-yellow-400 text-yellow-300 text-sm sm:text-base">
                📅 Round 1 screening will begin on 20th March 2026.
                <br />
                Results will be updated after evaluation.
              </div>
            )}

            {teamData.round1Status === "Pending" && today >= round1Date && (
              <div className="mt-4 p-4 rounded-xl bg-yellow-600/20 border border-yellow-400 text-yellow-300 text-sm sm:text-base">
                ⏳ Your submission is currently under review.
                <br />
                Please check back later for results.
              </div>
            )}

            {teamData.round1Status === "Selected" && (
              <div className="mt-4 p-4 rounded-xl bg-green-600/20 border border-green-400 text-green-300 text-sm sm:text-base">
                🎉 Congratulations! Your team has been shortlisted for the Final
                Round.
                <br />
                Please prepare for the 24-Hour Hackathon.
              </div>
            )}

            {teamData.round1Status === "Rejected" && (
              <div className="mt-4 p-4 rounded-xl bg-red-600/20 border border-red-400 text-red-300 text-sm sm:text-base">
                Thank you for participating.
                <br />
                Unfortunately, your team was not shortlisted for the final
                round.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}