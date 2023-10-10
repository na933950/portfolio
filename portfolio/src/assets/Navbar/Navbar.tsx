import { useState } from "react";
import styles from "./Navbar.module.css";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface Props {
  pages: string[];
  theme: string;
  setTheme: (s: string) => void;
}

const Navbar = ({ pages, theme, setTheme }: Props) => {

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  }
  
  const breakpoint = 680;

  window.addEventListener('resize', handleResize);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>NA</h2>
      </div>
      <div className={styles.pageContainer}>
        {breakpoint < pageWidth ? pages.map((page) => (
          <div className={styles.page}>
            <a href={page}>{page}</a>
          </div>
        )) : null}
        <button className={styles.themeBtn} onClick={handleThemeChange}>
          {theme == "dark" ? (
            <BsFillSunFill className={styles.btnContent}/>
          ) : (
            <BsFillMoonStarsFill className={styles.btnContent}/>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
