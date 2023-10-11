import { useEffect, useRef, useState } from "react";
import "./reset.css";
import "./App.css";
import Navbar from "./assets/Navbar";
import Landing from "./assets/Pages/Landing";
import About from "./assets/Pages/About";
import Education from "./assets/Pages/Education";

function App() {
  const [theme, setTheme] = useState("dark");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
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
      })
    }
  }

  const pages = [
    { page: "About", scroll: scrollToAbout },
    { page: "Education", scroll: scrollToEducation },
    { page: "Experience", scroll: scrollToAbout },
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
    }%, var(--background-spotlight) 0%, transparent 40%`,
      }}
    >
      <Navbar pages={pages} theme={theme} setTheme={setTheme} />
      <Landing scrollToAbout={scrollToAbout}></Landing>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
    </div>
  );
}

export default App;
