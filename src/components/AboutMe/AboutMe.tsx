import { FaHtml5 } from "react-icons/fa";
import { DiCss3Full, DiSass } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import {
   SiTypescript,
   SiReact,
   SiChakraui,
   SiJavascript,
} from "react-icons/si";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { about } from "../../data/data.json";

import styles from "./styles.module.scss";
import { ButtonLink } from "../ButtonLink/ButtonLink";

interface SkillsProps {
   label: string;
   icon: any;
}

export function AboutMe() {
   const SKILLS: Array<SkillsProps> = [
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
         icon: <BsGithub />,
         label: about.skillList.git,
      },
   ];

   return (
      <section className={styles.hero__about_container}>
         <h2>{about.subtitle}</h2>

         <hr />

         <section className={styles.hero__about}>
            <div className={styles.hero__about_image}></div>

            <section>
               <h3>{about.dataPerson.name_title}</h3>
               <p>{about.dataPerson.name}</p>
               <h3>{about.dataPerson.birthDate_title}</h3>
               <p>{about.dataPerson.birthDate}</p>
               <h3>{about.dataPerson.residence}</h3>
               <p>{about.dataPerson.country}</p>
               <h3>{about.dataPerson.languages_title}</h3>
               <p>{about.dataPerson.languages1}</p>
            </section>
         </section>

         <hr />

         <section className={styles.hero__description}>
            <h3>CV</h3>
            <p>{about.description}</p>
            <p>{about.description1}</p>
            <p>{about.description2}</p>
         </section>

         <hr />

         <section className={styles.hero__education}>
            <h2>{about.education}</h2>
            <h3>{about.courses.title}</h3>
            <p>{about.courses.course}</p>
            <p>{about.courses.course1}</p>
            <h3>{about.courses.date1}</h3>
            <p>{about.courses.course_finish}</p>
            <h3>{about.courses.date2}</h3>
            <p>{about.courses.course_finish1}</p>
         </section>

         <hr />

         <section className={styles.hero__about_skills}>
            <h2>{about.skillsTitle}</h2>
            <h3>{about.skillsSubTitle}</h3>
            <ul>
               {SKILLS.map((item, index) => (
                  <li key={index}>
                     {item.icon} {item.label}
                  </li>
               ))}
            </ul>
         </section>

         <hr />

         <section>
            <h2>{about.experienceWork}</h2>
            <h3>{about.experienceDate1}</h3>
            <p>{about.experienceDescription1}</p>
            <h3>{about.experienceDate2}</h3>
            <p>{about.experienceDescription2}</p>
         </section>

         <ButtonLink title="Voltar ao ínicio" path="/" />
      </section>
   );
}
