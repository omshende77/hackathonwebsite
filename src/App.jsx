import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Themes from "./components/Themes";
import Timeline from "./components/Timeline";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Hackathon from "./pages/Hackathon";
import NotFound from "./pages/Notfound";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Themes />
              <Timeline />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
