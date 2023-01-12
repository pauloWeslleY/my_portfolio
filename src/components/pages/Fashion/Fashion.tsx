import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/data.json";

import styles from "../../../scss/app.module.scss";

export function Fashion() {
   return (
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
   );
}
