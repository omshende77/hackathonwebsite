import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const fullText = "© TechSprint – 24 Hrs Hackathon 2026";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const nextChar = fullText.charAt(index);
      if (!nextChar) {
        clearInterval(interval);
        setTimeout(() => onFinish(), 500);
        return;
      }
      setDisplayedText((prev) => prev + nextChar);
      index++;
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 sm:px-8 
    bg-gradient-to-br from-black via-cyan-950 to-blue-950 text-white"
    >
      {/* Icons Row */}
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-8 justify-center">
        {/* Icon 1 */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="w-16 h-16 sm:w-20 sm:h-20 
    flex items-center justify-center 
    rounded-full border border-cyan-400 
    bg-cyan-500/10 
    drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
        >
          <i className="bx bx-code-alt text-3xl sm:text-4xl text-cyan-400"></i>
        </div>

        {/* Icon 2 */}
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="w-16 h-16 sm:w-20 sm:h-20 
    flex items-center justify-center 
    rounded-full border border-cyan-400 
    bg-cyan-500/10 
    drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
        >
          <i className="bx bx-chip text-3xl sm:text-4xl text-cyan-400"></i>
        </div>

        {/* Icon 3 */}
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="w-16 h-16 sm:w-20 sm:h-20 
    flex items-center justify-center 
    rounded-full border border-cyan-400 
    bg-cyan-500/10 
    drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
        >
          <i className="bx bx-rocket text-3xl sm:text-4xl text-cyan-400"></i>
        </div>
      </div>
      {/* Main Title Line 1 */}
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-4 sm:mb-6"
      >
        Welcome To
      </h1>

      {/* Main Title Line 2 */}
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-4 sm:mb-6 flex flex-wrap justify-center"
      >
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          TechSprint
        </span>

        <span
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          &nbsp;2026
        </span>
      </h1>

      {/* Footer Typing */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="border border-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] rounded-lg p-3 sm:p-4 
        min-h-[2rem] w-full max-w-xs sm:max-w-sm md:max-w-md text-center"
      >
        <p className="text-cyan-400 text-lg sm:text-xl md:text-2xl opacity-90 break-words">
          {displayedText}
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
