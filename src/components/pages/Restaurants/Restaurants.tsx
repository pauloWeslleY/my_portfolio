import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { NavBar } from "../../NavBar/NavBar";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/data.json";

import styles from "../../../scss/app.module.scss";

export function Restaurants() {
   return (
      <main className={styles.container}>
         <HeroTitle title={PORTFOLIO_PAGES.restaurants.title} />

         <section className={styles.hero__main}>
            <img src={PORTFOLIO_PAGES.restaurants.imageUrl} alt="Restaurants" />
            <h3>Descrição do Projeto</h3>
            <p>{PORTFOLIO_PAGES.restaurants.description}</p>
            <img
               src={PORTFOLIO_PAGES.restaurants.imageUrl2}
               alt="Restaurants"
            />
         </section>

         <ButtonLink title="Voltar" path="/works" />
      </main>
   );
}
