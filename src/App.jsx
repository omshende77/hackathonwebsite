import { Routes, Route } from "react-router-dom";
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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Round1Results from "./pages/Round1Results";
import FinalResults from "./pages/FinalResults";
import CheckStatus from "./pages/CheckStatus";
export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        navigate("/admin");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <ScrollToTop /> {/* 👈 MOVE HERE */}
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
  );
}
