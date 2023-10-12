import {
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaGitAlt,
    FaStripeS
  } from "react-icons/fa";
  import {
    SiJavascript,
    SiTypescript,
    SiOpenai,
    SiExpress,
    SiMongodb,
    SiReact,
    SiOpencv,
    SiAndroidstudio,
    SiMongoosedotws,
  } from "react-icons/si";
  import { aiPoweredSearch, ftc, gopastries, natours } from "../../Images";

export interface ProjectObject {
    cat: string,
    name: string,
    github: string,
    description: string,
    link?: string,
    techs: (() => React.ReactNode)[],
    bgImg: string,
}

export const projects: ProjectObject[] = [
    {
        cat: "FULL STACK",
        name: "AI SEARCH",
        github: "https://github.com/na933950/Ai-Powered-Search",
        description: "An AI-driven search engine powered by the OpenAI and Metaphor APIs",
        techs: [SiReact, FaNodeJs, FaHtml5, FaCss3Alt, SiExpress, SiJavascript, SiTypescript, SiOpenai],
        bgImg: aiPoweredSearch,
    },
    {
        cat: "MACHINES",
        name: "FTC ROBOTICS",
        github: "https://github.com/Adabji/ftc_appmaster14875",
        description: "I was the lead programmer on FIRST FTC team #14875 - LightSpeed.",
        techs: [FaJava, SiOpencv, FaGitAlt ,SiAndroidstudio],
        link: "https://www.youtube.com/watch?v=RHDZxQdwyVo&ab_channel=FTCLightSpeed",
        bgImg: ftc,
    },
    {
        cat: "BACKEND",
        name: "NATOURS (UDEMY)",
        github: "https://github.com/na933950/natours",
        description: "Developing a mock North American Tours website using Pug templates, and with various backend tools",
        techs: [FaNodeJs, SiExpress, SiMongodb, SiMongoosedotws, SiJavascript, FaStripeS],
        bgImg: natours,
    },
    {
        cat: "FRONTEND",
        name: "GOPASTRIES",
        github: "https://github.com/na933950/gopastries",
        description: "I developed the website for a local bakery in Natick, MA!",
        techs: [SiReact, SiTypescript, FaHtml5, FaCss3Alt],
        link: "https://www.gopastries.com",
        bgImg: gopastries,
    },
]