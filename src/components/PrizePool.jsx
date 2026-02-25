import React from "react";
import { motion } from "framer-motion";

export default function PrizePool() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Prize Pool
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Compete. Innovate. Win Big.
        </p>
      </div>

      {/* Prize Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* 2nd Prize */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-lg hover:shadow-blue-500/30 transition duration-500"
        >
          <h2 className="text-2xl font-bold text-gray-300 mb-4">
            🥈 2nd Prize
          </h2>
          <p className="text-4xl font-extrabold text-blue-400">₹25,000</p>
          <p className="text-gray-400 mt-4">Certificate + Trophy</p>
        </motion.div>

        {/* 1st Prize (Highlighted) */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-gradient-to-b from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-400 rounded-3xl p-10 text-center shadow-2xl shadow-yellow-500/40 transition duration-500"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            🥇 1st Prize
          </h2>
          <p className="text-5xl font-extrabold text-yellow-300">₹50,000</p>
          <p className="text-gray-300 mt-6 text-lg">
            Certificate + Trophy + Goodies
          </p>
        </motion.div>

        {/* 3rd Prize */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-lg hover:shadow-purple-500/30 transition duration-500"
        >
          <h2 className="text-2xl font-bold text-gray-300 mb-4">
            🥉 3rd Prize
          </h2>
          <p className="text-4xl font-extrabold text-purple-400">₹10,000</p>
          <p className="text-gray-400 mt-4">Certificate + Trophy</p>
        </motion.div>
      </div>

      {/* Special Awards */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">
          Special Awards
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300">
            🚀 Best Innovation Award
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300">
            💡 Best UI/UX Design
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300">
            🤖 Best AI Solution
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300">
            🌱 Social Impact Award
          </div>
        </div>
      </div>
    </div>
  );
}
