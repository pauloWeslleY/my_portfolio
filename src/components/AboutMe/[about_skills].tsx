import { ReactElement } from "react";
import { FaHtml5 } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { FaCss3, FaGitAlt } from "react-icons/fa";
import {
   SiTypescript,
   SiReact,
   SiChakraui,
   SiJavascript,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

import { about } from "../../data/data.json";

interface SkillsProps {
   label: string;
   icon: ReactElement;
}

export const SKILLS: Array<SkillsProps> = [
   {
      icon: <FaHtml5 />,
      label: about.skillList.html,
   },
   {
      icon: <FaCss3 />,
      label: about.skillList.css,
   },
   {
      icon: <DiSass />,
      label: about.skillList.sass,
   },
   {
      icon: <SiJavascript />,
      label: about.skillList.js,
   },
   {
      icon: <SiTypescript />,
      label: about.skillList.ts,
   },
   {
      icon: <BsBootstrapFill />,
      label: about.skillList.bs,
   },
   {
      icon: <SiReact />,
      label: about.skillList.react,
   },
   {
      icon: <SiChakraui />,
      label: about.skillList.chakra,
   },
   {
      icon: <FaGitAlt />,
      label: about.skillList.git,
   },
];
