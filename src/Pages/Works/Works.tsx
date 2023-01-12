import { HeroTitle } from "../../components/HeroTitle/HeroTitle";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { Portfolio } from "../../components/Portfolio/Portfolio";

import styles from "../../scss/app.module.scss";

export default function Works() {
   return (
      <main>
         <section className={styles.container}>
            <HeroTitle title="Trabalhos" />

            <Portfolio />

            <ButtonLink title="Voltar ao inicio" path="/" />
         </section>
      </main>
   );
}
