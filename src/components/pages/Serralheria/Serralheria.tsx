import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { NavBar } from "../../NavBar/NavBar";
import { ButtonLink } from "../../ButtonLink/ButtonLink";

import { PORTFOLIO_PAGES } from "../../../data/portfolio__pages_[db].json";

import styles from "../../../scss/app.module.scss";

export function Serralheria() {
   return (
      <section>
         <NavBar />

         <main className={styles.container}>
            <HeroTitle title={PORTFOLIO_PAGES.serralheria.title} />

            <section className={styles.hero__main}>
               <img
                  src={PORTFOLIO_PAGES.serralheria.imageUrl}
                  alt="Serralheria"
               />
               <h3>Descrição do Projeto</h3>
               <p>{PORTFOLIO_PAGES.serralheria.description}</p>
               <img
                  src={PORTFOLIO_PAGES.serralheria.imageUrl2}
                  alt="Serralheria"
               />
               <p>
                  link do site{" "}
                  <a
                     className={styles.hero__link}
                     href="https://serralheriakarson.vercel.app"
                     target="_blank"
                  >
                     serralheriakarson.vercel.app
                  </a>
                  .
               </p>
            </section>

            <ButtonLink title="Voltar" path="/works" />
         </main>
      </section>
   );
}
