import styles from "./Footer.module.css";
import resume from "../../resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

interface Page {
    page: string,
    scroll: () => void,
}

interface Props {
    pages: Page[]
    scrollTop: () => void,
}

const Footer = ({ pages, scrollTop }: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.personalContainer}>
            <h5 onClick={scrollTop}><b>Noah Abji</b></h5>
            <p>CS @ UC Berkeley - 2025</p>
            <a href="mailto:noah.abji@gmail.com">noah.abji@gmail.com</a>
            <div className={styles.linksContainer}>
              <a href="https://www.github.com/na933950" target="blank"><h4 className={styles.link}><FaGithub /></h4></a>
              <a href="https://www.linkedin.com/in/noah-abji-418b7321b/" target="blank"><h4 className={styles.link}><FaLinkedin /></h4></a>
              <a href={resume} target="blank"><h4 className={styles.link}><FiFileText /></h4></a>
            </div>
        </div>
        <div className={styles.pageContainer}>
            <h5><b>Learn About Me</b></h5>
            {pages.map((p) => (
                <p className={styles.page} onClick={p.scroll}>{p.page}</p>
            ))}
        </div>
    </div>
  )
}

export default Footer