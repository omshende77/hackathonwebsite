import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
export default function Admin() {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const totalTeams = teams.length;
  const selectedTeams = teams.filter((t) => t.status === "Selected").length;
  const rejectedTeams = teams.filter((t) => t.status === "Rejected").length;
  const pendingTeams = teams.filter(
    (t) => !t.status || t.status === "Pending",
  ).length;

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const querySnapshot = await getDocs(collection(db, "registrations"));

    const teamsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setTeams(teamsData);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "registrations", id));

      // Remove from UI immediately
      setTeams((prev) => prev.filter((team) => team.id !== id));

      alert("Team deleted successfully ❌");
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  const filteredTeams = teams.filter((team) =>
    Object.values(team).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, "registrations", id), {
        status: newStatus,
      });

      // Update UI instantly
      setTeams((prev) =>
        prev.map((team) =>
          team.id === id ? { ...team, status: newStatus } : team,
        ),
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleLogin = () => {
    if (password === "sgi@2026") {
      setIsAuthenticated(true);
    } else {
      alert("Wrong Password ❌");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Admin Access</h2>

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
          text-white placeholder-gray-400 focus:border-cyan-400"
          />

          <button
            onClick={handleLogin}
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
          >
            Enter Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-28 px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-gray-400 mt-4">
          Manage hackathon registrations efficiently
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Total Teams</h3>
          <p className="text-3xl font-bold text-cyan-400 mt-2">{totalTeams}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Pending</h3>
          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {pendingTeams}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Selected</h3>
          <p className="text-3xl font-bold text-green-400 mt-2">
            {selectedTeams}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Rejected</h3>
          <p className="text-3xl font-bold text-red-400 mt-2">
            {rejectedTeams}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by team, leader, email, college, track..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
    focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
    text-white placeholder-gray-400"
        />
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/10 text-gray-300">
            <tr>
              <th className="p-4">Team</th>
              <th className="p-4">Reg ID</th>
              <th className="p-4">Leader</th>
              <th className="p-4">Email</th>
              <th className="p-4">College</th>
              <th className="p-4">Track</th>
              <th className="p-4">Action</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredTeams.map((team) => (
              <tr
                key={team.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-4">{team.teamName}</td>

                <td className="p-4">
                  <div className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-sm font-mono inline-block">
                    {team.registrationId || "-"}
                  </div>
                </td>

                <td className="p-4">{team.leaderName}</td>
                <td className="p-4">{team.email}</td>
                <td className="p-4">{team.college}</td>
                <td className="p-4">{team.track}</td>

                <td className="p-4">
                  <button
                    onClick={() => handleDelete(team.id)}
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
      ${
        team.status === "Selected"
          ? "bg-green-600/30 text-green-400"
          : team.status === "Rejected"
            ? "bg-red-600/30 text-red-400"
            : "bg-yellow-600/30 text-yellow-400"
      }`}
                  >
                    {team.status || "Pending"}
                  </span>

                  <div className="mt-3 flex justify-center gap-2">
                    <select
                      value={team.status || "Pending"}
                      onChange={(e) =>
                        handleStatusChange(team.id, e.target.value)
                      }
                      className="mt-2 px-2 py-1 rounded bg-black border border-white/20 text-white"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
