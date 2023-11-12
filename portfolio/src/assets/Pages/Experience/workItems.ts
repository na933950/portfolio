import { linkHealth } from "../../Images";
import { FaPython, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiJupyter,
  SiPandas,
  SiPlotly,
  SiScipy,
  SiNumpy,
  SiSupabase,
} from "react-icons/si";

interface WorkItems {
  logo: string;
  companyName: string;
  title: string;
  location: string;
  date: string;
  description: string;
  techs: React.ReactNode[];
}

const workItems: WorkItems[] = [
  {
    logo: linkHealth,
    companyName: "Link Health",
    title: "Backend Developer Intern",
    location: "Boston, MA/Remote",
    date: "September 2023 - Present",
    description:
      "We are developing a web application which will assist individuals in registering them for federal welfare programs! My responsibilities are focused in the middleware/routing and security. We are using Supabase on top of PostgreSQL for a fully built security system, and when individuals input their information, we will efficiently determine what programs they are eligible for and remotely register them for as many as possible. My work has included the implementation of BFS and DFS recursive algorithms to effectively determine eligibility and what questions to ask users",
    techs: [
      FaHtml5(),
      FaCss3Alt(),
      FaNodeJs(),
      SiJavascript(),
      SiTypescript(),
      SiSupabase(),
      SiPostgresql(),
      SiExpress(),
    ],
  },
  {
    logo: linkHealth,
    companyName: "Link Health",
    title: "Data Science Team Lead (Intern)",
    location: "Boston, MA/Remote",
    date: "December 2022 - Present",
    description:
      "I have been the team lead on multiple research/data science projects. One of these was focused on improving Link Health's outreach to underserved individuals. Using public datasets, we were able to identify over 70,000 individuals which Link Health could contact to register them for the Affordable Connectivity Program (ACP). Currently, I am leading a project where we are training a multilinear model based on US Census Bureau data to predict health outcomes by internet access, and a variety of demographic, economic, and social features. This work should be published soon!",
    techs: [
      FaPython(),
      SiJupyter(),
      SiPandas(),
      SiPlotly(),
      SiScipy(),
      SiNumpy(),
    ],
  },
];

export default workItems;
