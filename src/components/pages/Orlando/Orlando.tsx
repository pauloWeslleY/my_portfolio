import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { NavBar } from "../../NavBar/NavBar";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/portfolio__pages_[db].json";

import styles from "../../../scss/app.module.scss";

export function Orlando() {
   return (
      <section>
         <NavBar />

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
      </section>
   );
}
