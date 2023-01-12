import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { ButtonLink } from "../../ButtonLink/ButtonLink";

import { PORTFOLIO_PAGES } from "../../../data/data.json";

import styles from "../../../scss/app.module.scss";

export function Orquidario() {
   return (
      <main className={styles.container}>
         <HeroTitle title={PORTFOLIO_PAGES.orquidario.title} />

         <section className={styles.hero__main}>
            <img src={PORTFOLIO_PAGES.orquidario.imageUrl2} alt="Orquidário" />
            <h3>Descrição do Projeto</h3>
            <p>{PORTFOLIO_PAGES.orquidario.description}</p>
            <img src={PORTFOLIO_PAGES.orquidario.imageUrl} alt="Orquidário" />
            <img src={PORTFOLIO_PAGES.orquidario.imageUrl3} alt="Orquidário" />
            <p>
               link do site{" "}
               <a
                  className={styles.hero__link}
                  href="https://orquidario.vercel.app"
                  target="_blank"
               >
                  orquidario.vercel.app
               </a>
               .
            </p>
         </section>

         <ButtonLink title="Voltar" path="/works" />
      </main>
   );
}
