import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Themes from "./components/Themes";
import Timeline from "./components/Timeline";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Hackathon from "./pages/Hackathon";
import NotFound from "./pages/Notfound";
import Schedule from "./pages/Schedule";
import About from "./components/About";
import ScrollToTop from "./ScrollToTop";
import PrizePool from "./components/PrizePool";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Admin from "./pages/Admin";
import Round1Results from "./pages/Round1Results";
import FinalResults from "./pages/FinalResults";
import CheckStatus from "./pages/CheckStatus";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  // const [showConfetti, setShowConfetti] = useState(false);
  const [pieces, setPieces] = useState(0);

  useEffect(() => {
    const triggerConfetti = () => {
      // Start generating pieces
      setPieces(600);

      // Stop generating new pieces after 5 sec
      setTimeout(() => {
        setPieces(0);

        // Wait 5-6 sec then restart
        const nextTime = 5000 + Math.random() * 1000;
        setTimeout(triggerConfetti, nextTime);
      }, 5000);
    };

    triggerConfetti();
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  //admin shortcut: Ctrl + Shift + A
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isTyping =
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable;

      if (isTyping) return;

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        navigate("/admin");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <>
      <Confetti
        numberOfPieces={pieces}
        recycle={false}
        gravity={0.1}
        initialVelocityY={10}
        tweenDuration={8000}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Main Website */}
      {!showSplash && (
        <div className="min-h-screen bg-black">
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Themes />
                  <PrizePool />
                  <Stats />
                  <Timeline />
                  <FAQ />
                </>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/round1-results" element={<Round1Results />} />
            <Route path="/final-results" element={<FinalResults />} />
            <Route path="/check-status" element={<CheckStatus />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}
