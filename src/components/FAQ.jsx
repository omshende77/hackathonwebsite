import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is the team size allowed?",
    answer:
      "Each team can have 2 to 4 members. Individual participation is not allowed.",
  },
  {
    question: "Is the hackathon online or offline?",
    answer:
      "The hackathon will be conducted offline at Suryadatta Group of Institutes campus.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, participation is completely free of cost.",
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes, all participants will receive a participation certificate.",
  },
  {
    question: "Who can participate?",
    answer:
      "Students from any college or university are eligible to participate.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 mt-4">
          Everything you need to know before participating
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-white/10 transition"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="text-cyan-400 text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-400"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
