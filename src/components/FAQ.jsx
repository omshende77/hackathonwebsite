import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What is the team size allowed?",
    answer:
      "Each team must consist of 2 to 4 members (including the team leader). Individual participation is not allowed.",
  },
  {
    question: "Can members be from different colleges?",
    answer:
      "No. All team members must belong to the same college or institute. Inter-college teams are not permitted.",
  },
  {
    question: "Is the hackathon online or offline?",
    answer:
      "The hackathon will be conducted offline (on-campus) on 20th & 21st March 2026.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "Yes. The registration fee is ₹1000 per team. Registration is confirmed only after successful payment verification. No refunds will be issued.",
  },
  {
    question: "What are the screening rounds?",
    answer:
      "Round 1 (20th March 2026): Idea Screening – Teams present their problem statement, solution, and tech stack. Shortlisted teams qualify for the 24-hour coding round.",
  },
  {
    question: "When does the 24-hour hackathon start?",
    answer:
      "The 24-hour coding sprint begins after Round 1 screening on 20th March 2026 and continues till 21st March 2026.",
  },
  {
    question: "Can we use open-source libraries?",
    answer:
      "Yes. Use of open-source libraries, frameworks, and APIs is allowed with proper attribution.",
  },
  {
    question: "Is pre-written code allowed?",
    answer:
      "No. Pre-written custom code or pre-developed prototypes are strictly prohibited. All development must happen during the hackathon.",
  },
  {
    question: "Are AI tools like ChatGPT allowed?",
    answer:
      "Yes. AI tools such as ChatGPT and GitHub Copilot are permitted during development.",
  },
  {
    question: "What are the prizes?",
    answer:
      "Winner: ₹21,000 | Runner-Up: ₹11,000. All participants will receive certificates.",
  },
  {
    question: "Who is eligible to participate?",
    answer:
      "Undergraduate and Postgraduate students from Engineering, Management, Arts, Commerce, Science, and other streams are eligible.",
  },
  {
    question: "Will mentors guide the teams?",
    answer:
      "Yes. Mentors will conduct mid-evaluation check-ins and provide technical guidance during the 24-hour sprint.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-24">
      {/* Title */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Everything you need to know before participating in TechSprint – 24
          Hrs Hackathon 2026
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-5">
        {faqData.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition hover:border-cyan-400"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center hover:bg-white/10 transition"
            >
              <span className="text-sm sm:text-lg font-medium pr-4">
                {item.question}
              </span>
              <span className="text-cyan-400 text-2xl font-light">
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
                  className="px-5 sm:px-6 pb-5 text-gray-400 text-sm sm:text-base leading-relaxed"
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
