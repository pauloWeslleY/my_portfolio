import { HeroTitle } from "../../components/HeroTitle/HeroTitle";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { about } from "../../data/data.json";

import styles from "../../scss/app.module.scss";

export default function About() {
   return (
      <main>
         <section className={styles.container}>
            <HeroTitle title={about.title} />

            <AboutMe />
         </section>
      </main>
   );
}
