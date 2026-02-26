import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  const [text, setText] = useState("");
  const fullText = "Welcome To SGI Hackathon 2026";

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typing);
      }
    }, 50);

    // Auto hide splash
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, [onFinish]);
  const iconVariants = {
    hidden: { y: -120, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3, // 500ms gap
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center 
      bg-gradient-to-br from-black via-cyan-950 to-blue-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse"></div>

      <div className="relative text-center px-6">
        {/* Icons Row */}
        <div className="flex justify-center gap-6 mb-10">
          {["🚀", "💡", "🤖"].map((icon, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="w-20 h-20 flex items-center justify-center 
      rounded-full border border-cyan-400/40 
      bg-cyan-500/10 text-3xl 
      shadow-[0_0_25px_rgba(0,255,255,0.5)]"
            >
              {icon}
            </motion.div>
          ))}
        </div>

        {/* Typing Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: text.length === fullText.length ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-gray-400 text-sm sm:text-lg"
        >
          24 Hours • Innovation • Impact
        </motion.p>
      </div>
    </motion.div>
  );
}
