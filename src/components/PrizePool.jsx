import React from "react";
import { motion } from "framer-motion";

export default function PrizePool() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-24">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1
          className="text-3xl sm:text-5xl font-extrabold 
        bg-gradient-to-r from-yellow-400 to-orange-500 
        bg-clip-text text-transparent"
        >
          Prizes & Recognition
        </h1>
        <p className="text-gray-400 mt-4 text-sm sm:text-lg">
          Celebrating Innovation & Excellence at TechSprint 2026
        </p>
      </motion.div>

      {/* Prize Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
      >
        {/* Winner */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 
          backdrop-blur-xl border border-yellow-400/40 
          rounded-3xl p-8 sm:p-10 text-center 
          shadow-lg shadow-yellow-500/20 transition duration-500"
        >
          {/* subtle glow pulse */}
          <div className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-2xl opacity-40 animate-pulse pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 relative z-10">
            🥇 Winner
          </h2>
          <p className="text-4xl sm:text-5xl font-extrabold text-yellow-300 relative z-10">
            ₹21,000
          </p>
          <p className="text-gray-300 mt-6 text-sm sm:text-base relative z-10">
            Trophy + Certificate of Excellence
          </p>
        </motion.div>

        {/* Runner-Up */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 backdrop-blur-xl 
          border border-white/10 rounded-3xl 
          p-8 sm:p-10 text-center 
          shadow-lg hover:shadow-blue-500/20 
          transition duration-500"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
            🥈 Runner-Up
          </h2>
          <p className="text-4xl sm:text-5xl font-extrabold text-blue-300">
            ₹11,000
          </p>
          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Trophy + Certificate of Excellence
          </p>
        </motion.div>
      </motion.div>

      {/* Participation Recognition */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-4xl mx-auto text-center"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
            🎓 Participation Certificates
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            All teams participating in TechSprint – 24 Hrs Hackathon 2026 will
            receive official certificates of participation in recognition of
            their effort, innovation, and dedication.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
