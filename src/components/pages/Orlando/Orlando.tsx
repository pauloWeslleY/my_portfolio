import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/data.json";

import styles from "../../../scss/app.module.scss";

export function Orlando() {
   return (
      <main className={styles.container}>
         <HeroTitle title={PORTFOLIO_PAGES.orlando.title} />

         <section className={styles.hero__main}>
            <img src={PORTFOLIO_PAGES.orlando.imageUrl} alt="Orlando" />
            <h3>Descrição do Projeto</h3>
            <p>{PORTFOLIO_PAGES.orlando.description}</p>
            <p>{PORTFOLIO_PAGES.orlando.description1}</p>
            <img src={PORTFOLIO_PAGES.orlando.imageUrl2} alt="Orlando" />
            <img src={PORTFOLIO_PAGES.orlando.imageUrl3} alt="Orlando" />
         </section>

         <ButtonLink title="Voltar" path="/works" />
      </main>
   );
}
