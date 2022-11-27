import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { NavBar } from "../../NavBar/NavBar";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/portfolio__pages_[db].json";

import styles from "../../../scss/app.module.scss";

export function Fashion() {
   return (
      <section>
         <NavBar />

         <main className={styles.container}>
            <HeroTitle title={PORTFOLIO_PAGES.fashion.title} />

            <section className={styles.hero__main}>
               <img src={PORTFOLIO_PAGES.fashion.imageUrl} alt="Fashion" />
               <h3>Descrição do Projeto</h3>
               <p>{PORTFOLIO_PAGES.fashion.description}</p>
               <img src={PORTFOLIO_PAGES.fashion.imageUrl2} alt="Fashion" />
            </section>

            <ButtonLink title="Voltar" path="/works" />
         </main>
      </section>
   );
}
