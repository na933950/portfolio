import { useEffect, useState } from 'react'
import './reset.css';
import './App.css'
import Navbar from './assets/Navbar';
import About from './assets/Pages/About';

function App() {
  const [theme, setTheme] = useState('dark');
  const pages = ["About", "Education", "Projects", "Experience"]
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  window.addEventListener('mousemove', (event: MouseEvent) => {
    setMouseX(event.pageX);
    setMouseY(event.pageY);
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container" style={{backgroundImage: `radial-gradient(circle at ${mouseX / window.innerWidth * 100}% 
    ${mouseY / window.innerHeight * 100}%, var(--background-spotlight) 0%, transparent 40%`
  }}>
      <Navbar pages={pages} theme={theme} setTheme={setTheme}/>
      <About></About>
    </div>
  )
}

export default App
