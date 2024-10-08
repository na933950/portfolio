import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJupyter,
  SiPandas,
  SiPlotly,
  SiScipy,
  SiNumpy,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiKotlin } from "react-icons/si";

export interface TechStackObject {
  comp: React.ReactNode;
  name: string;
}

export const languages = [
  { comp: FaPython(), name: "Python" },
  { comp: SiJavascript(), name: "JavaScript" },
  { comp: FaJava(), name: "Java" },
  { comp: SiTypescript(), name: "TypeScript" },
  { comp: BsFiletypeSql(), name: "SQL" },
  { comp: FaC(), name: "C" },
  { comp: SiKotlin(), name: "Kotlin" },
];

export const webdev = [
  { comp: FaReact(), name: "ReactJS" },
  { comp: FaHtml5(), name: "HTML5" },
  { comp: FaCss3Alt(), name: "CSS3" },
  { comp: FaNodeJs(), name: "Node.js" },
  { comp: SiExpress(), name: "Express.js" },
  { comp: SiMongodb(), name: "MongoDB" },
  { comp: SiPostgresql(), name: "PostgreSQL" },
];

export const datascience = [
  { comp: SiJupyter(), name: "Jupyter" },
  { comp: SiPandas(), name: "Pandas" },
  { comp: SiPlotly(), name: "Plotly" },
  { comp: SiScipy(), name: "Scipy" },
  { comp: SiNumpy(), name: "Numpy" },
];
