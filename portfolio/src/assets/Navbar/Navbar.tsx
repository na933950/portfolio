import { useState } from "react";
import styles from "./Navbar.module.css";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface Page {
  page: string;
  scroll: () => void;
}

interface Props {
  pages: Page[];
  theme: string;
  setTheme: (s: string) => void;
  scrollToLanding: () => void;
}

const Navbar = ({ pages, theme, setTheme, scrollToLanding }: Props) => {
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };

  const breakpoint = 680;

  window.addEventListener("resize", handleResize);

  const mobileNav = (
    <div className={styles.mobileNavContainer}>
      {pages.map(({ page, scroll }) => (
        <button className={styles.mobileNavOption} onClick={scroll}>
          <p>{page}</p>
        </button>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer} onClick={scrollToLanding}>
        <h2 className={styles.logo}>NA</h2>
      </div>
      {breakpoint < pageWidth ? null : mobileNav}
      <div className={styles.pageContainer}>
        {breakpoint < pageWidth
          ? pages.map(({ page, scroll }) => (
              <div className={styles.page}>
                <a onClick={scroll}>{page}</a>
              </div>
            ))
          : null}
        <button className={styles.themeBtn} onClick={handleThemeChange}>
          {theme == "dark" ? (
            <BsFillSunFill className={styles.btnContent} />
          ) : (
            <BsFillMoonStarsFill className={styles.btnContent} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
