import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { NavBar } from "../../NavBar/NavBar";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/portfolio__pages_[db].json";

import styles from "../../../scss/app.module.scss";

export function PontoCursos() {
   return (
      <section>
         <NavBar />

         <main className={styles.container}>
            <HeroTitle title={PORTFOLIO_PAGES.pontocursos.title} />

            <section className={styles.hero__main}>
               <img
                  src={PORTFOLIO_PAGES.pontocursos.imageUrl}
                  alt="Ponto Cursos"
               />
               <h3>Descrição do Projeto</h3>
               <p>{PORTFOLIO_PAGES.pontocursos.description}</p>
               <img
                  src={PORTFOLIO_PAGES.pontocursos.imageUrl2}
                  alt="Ponto Cursos"
               />
               <img
                  src={PORTFOLIO_PAGES.pontocursos.imageUrl3}
                  alt="Ponto Cursos"
               />
               <p>
                  link do site{" "}
                  <a
                     className={styles.hero__link}
                     href="https://ponto-cursos.netlify.app"
                     target="_blank"
                  >
                     ponto-cursos.netlify.app
                  </a>
                  .
               </p>
            </section>

            <ButtonLink title="Voltar" path="/works" />
         </main>
      </section>
   );
}
