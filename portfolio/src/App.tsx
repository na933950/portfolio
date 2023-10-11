import { useEffect, useRef, useState } from "react";
import "./reset.css";
import "./App.css";
import Navbar from "./assets/Navbar";
import Landing from "./assets/Pages/Landing";
import About from "./assets/Pages/About";
import Education from "./assets/Pages/Education";
import Experience from "./assets/Pages/Experience";

function App() {
  const [theme, setTheme] = useState("dark");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const scrollToLanding = () => {
    if (landingRef.current) {
      window.scrollTo({
        top: landingRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToEducation = () => {
    if (educationRef.current) {
      window.scrollTo({
        top: educationRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToExperience = () => {
    if (experienceRef.current) {
      window.scrollTo({
        top: experienceRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const pages = [
    { page: "About", scroll: scrollToAbout },
    { page: "Education", scroll: scrollToEducation },
    { page: "Experience", scroll: scrollToExperience },
    { page: "Projects", scroll: scrollToAbout },
  ];

  window.addEventListener("mousemove", (event: MouseEvent) => {
    setMouseX(event.pageX);
    setMouseY(event.pageY);
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `radial-gradient(circle at ${
          (mouseX / window.innerWidth) * 100
        }% 
    ${
      (mouseY / document.body.scrollHeight) * 100
    }%, var(--background-spotlight) 0%, transparent 10%`,
      }}
    >
      <div ref={landingRef}>
        <Navbar pages={pages} theme={theme} setTheme={setTheme} scrollToLanding={scrollToLanding}/>
      </div>
      <Landing scrollToAbout={scrollToAbout}></Landing>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
    </div>
  );
}

export default App;
