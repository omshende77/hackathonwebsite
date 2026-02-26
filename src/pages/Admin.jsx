import { useEffect, useState } from "react";
import { db } from "../firebase";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Admin() {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [registrationOpen, setRegistrationOpen] = useState(true);

  const totalTeams = teams.length;
  const selectedTeams = teams.filter(
    (t) => t.round1Status === "Selected",
  ).length;

  const rejectedTeams = teams.filter(
    (t) => t.round1Status === "Rejected",
  ).length;

  const pendingTeams = teams.filter(
    (t) => !t.round1Status || t.round1Status === "Pending",
  ).length;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchTeams();
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    const docRef = doc(db, "settings", "eventConfig");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setRegistrationOpen(snapshot.data().registrationOpen);
    }
  };

  const toggleRegistration = async () => {
    try {
      const docRef = doc(db, "settings", "eventConfig");
      await updateDoc(docRef, {
        registrationOpen: !registrationOpen,
      });
      setRegistrationOpen(!registrationOpen);
    } catch (error) {
      console.error("Error updating registration status:", error);
    }
  };

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
      setTeams((prev) => prev.filter((team) => team.id !== id));
      alert("Team deleted successfully ❌");
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  const filteredTeams = teams.filter((team) => {
    const leader = team.members?.[0];
    return (
      team.teamName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.registrationId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leader?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leader?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leader?.college?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.theme?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleLogin = () => {
    if (password === "sgi@2026") {
      setIsAuthenticated(true);
    } else {
      alert("Wrong Password ❌");
    }
  };

  /* ================= LOGIN SCREEN ================= */

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div
          data-aos="zoom-in"
          className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            Admin Access
          </h2>

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20
            text-white placeholder-gray-400 focus:outline-none 
            focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition"
          />

          <button
            onClick={handleLogin}
            className="mt-6 w-full py-3 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Enter Dashboard
          </button>
        </div>
      </div>
    );
  }

  /* ================= DASHBOARD ================= */

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Manage hackathon registrations efficiently
        </p>
      </div>

      {/* Registration Toggle */}
      <div className="text-center mb-12" data-aos="fade-up">
        <button
          onClick={toggleRegistration}
          className={`px-6 py-3 rounded-xl font-semibold transition shadow-lg
            ${
              registrationOpen
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
          {registrationOpen ? "Close Registration" : "Open Registration"}
        </button>

        <p className="text-sm mt-3 text-gray-400">
          Current Status:{" "}
          <span
            className={registrationOpen ? "text-green-400" : "text-red-400"}
          >
            {registrationOpen ? "Open" : "Closed"}
          </span>
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12"
        data-aos="fade-up"
      >
        {[
          { label: "Total Teams", value: totalTeams, color: "text-cyan-400" },
          { label: "Pending", value: pendingTeams, color: "text-yellow-400" },
          { label: "Selected", value: selectedTeams, color: "text-green-400" },
          { label: "Rejected", value: rejectedTeams, color: "text-red-400" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-md"
          >
            <h3 className="text-gray-400 text-sm">{item.label}</h3>
            <p className={`text-2xl sm:text-3xl font-bold mt-2 ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto mb-8" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search by team, leader, email, college, track..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20
          focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
          text-white placeholder-gray-400 transition"
        />
      </div>

      {/* Table */}
      <div
        className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm text-left">
            <thead className="bg-white/10 text-gray-300 uppercase text-xs tracking-wider">
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
                <React.Fragment key={team.id}>
                  <tr className="border-t border-white/10 hover:bg-white/5 transition">
                    <td className="p-4 font-medium">{team.teamName}</td>

                    <td className="p-4">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-mono">
                        {team.registrationId || "-"}
                      </span>
                    </td>

                    <td className="p-4">{team.members?.[0]?.name || "-"}</td>
                    <td className="p-4">{team.members?.[0]?.email || "-"}</td>
                    <td className="p-4">{team.members?.[0]?.college || "-"}</td>
                    <td className="p-4">{team.theme || "-"}</td>

                    <td className="p-4 space-y-2">
                      <button
                        onClick={() =>
                          setExpandedRow(
                            expandedRow === team.id ? null : team.id,
                          )
                        }
                        className="w-full px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs hover:bg-cyan-500/30 transition"
                      >
                        {expandedRow === team.id ? "Hide Team" : "View Team"}
                      </button>

                      <button
                        onClick={() => handleDelete(team.id)}
                        className="w-full px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-xs transition"
                      >
                        Delete
                      </button>
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          team.round1Status === "Selected"
                            ? "bg-green-600/30 text-green-400"
                            : team.round1Status === "Rejected"
                              ? "bg-red-600/30 text-red-400"
                              : "bg-yellow-600/30 text-yellow-400"
                        }`}
                      >
                        {team.round1Status || "Pending"}
                      </span>

                      <select
                        className="mt-2 w-full bg-black border border-white/20 text-white px-2 py-1 rounded-lg text-xs"
                        value={team.round1Status || "Pending"}
                        onChange={async (e) => {
                          const newStatus = e.target.value;
                          try {
                            await updateDoc(doc(db, "registrations", team.id), {
                              round1Status: newStatus,
                            });
                            setTeams((prev) =>
                              prev.map((t) =>
                                t.id === team.id
                                  ? { ...t, round1Status: newStatus }
                                  : t,
                              ),
                            );
                          } catch (error) {
                            console.error("Error updating status:", error);
                          }
                        }}
                      >
                        <option>Pending</option>
                        <option>Selected</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>

                  {expandedRow === team.id && (
                    <tr className="bg-white/5">
                      <td colSpan="8" className="p-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {team.members?.map((member, index) => (
                            <div
                              key={index}
                              className="bg-black/40 border border-white/10 rounded-xl p-4"
                            >
                              <p className="text-cyan-400 font-semibold text-sm">
                                {member.role || `Member ${index + 1}`}
                              </p>
                              <p className="text-white text-sm">
                                {member.name}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {member.email}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {member.phone}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {member.college}
                              </p>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
