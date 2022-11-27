import { NavBar } from "../../components/NavBar/NavBar";
import { HeroTitle } from "../../components/HeroTitle/HeroTitle";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { Portfolio } from "../../components/Portfolio/Portfolio";

import styles from "../../scss/app.module.scss";

export default function Works() {
   return (
      <main>
         <NavBar />

         <section className={styles.container}>
            <HeroTitle title="Trabalhos" />

            <Portfolio />

            <ButtonLink title="Voltar ao ínicio" path="/" />
         </section>
      </main>
   );
}
