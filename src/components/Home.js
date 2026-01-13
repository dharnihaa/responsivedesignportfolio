import { useEffect, useState } from "react";

const Home = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondLine(true);
    }, 3300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0f172a] text-[#f0f9ff] flex items-center justify-center px-4 sm:px-6 pt-24 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* TEXT CONTENT */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
            Hi, I'm <span className="text-[#38bdf8]">Dharniha.S</span>
          </h2>

          {showSecondLine && (
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#a5b4fc] mt-4">
              A Full Stack Developer
            </h3>
          )}

          <p className="mt-6 text-base sm:text-lg md:text-xl leading-7 text-[#cbd5e1]">
            I am a passionate developer focused on building scalable, modern web
            applications that combine beautiful design with efficient logic.
            Skilled in React, Tailwind CSS, Node.js, and Spring Boot, I strive
            to create seamless user experiences by turning complex ideas into
            functional, elegant code.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="/niha resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-200 hover:bg-blue-300 text-[#0f172a] px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg text-center"
            >
              Resume
            </a>

            <button
              onClick={scrollToContact}
              className="bg-blue-200 hover:bg-blue-300 text-[#0f172a] px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/niha pic.jpeg"
            alt="Dharniha"
            className="
              w-64 sm:w-72 md:w-80 lg:w-96
              rounded-2xl shadow-xl object-cover
              border-4 border-[#475569]
              transition duration-300 hover:scale-105
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
