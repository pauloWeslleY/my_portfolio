import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/data.json";

import styles from "../../../scss/app.module.scss";

export function PontoCursos() {
   return (
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
   );
}
