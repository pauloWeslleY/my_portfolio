import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { NavBar } from "../../NavBar/NavBar";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { PORTFOLIO_PAGES } from "../../../data/portfolio__pages_[db].json";

import styles from "../../../scss/app.module.scss";

export function Midia() {
   return (
      <section>
         <NavBar />

         <main className={styles.container}>
            <HeroTitle title={PORTFOLIO_PAGES.midia.title} />

            <section className={styles.hero__main}>
               <img src={PORTFOLIO_PAGES.midia.imageUrl} alt="Midia" />
               <h3>Descrição do Projeto</h3>
               <p>{PORTFOLIO_PAGES.midia.description}</p>
               <img src={PORTFOLIO_PAGES.midia.imageUrl2} alt="Fashion" />
               <p>{PORTFOLIO_PAGES.midia.description2}</p>
               <img src={PORTFOLIO_PAGES.midia.imageUrl3} alt="Fashion" />
               <img src={PORTFOLIO_PAGES.midia.imageUrl4} alt="Fashion" />
               <p>
                  link do site{" "}
                  <a
                     className={styles.hero__link}
                     href="https://wmidiaweb.vercel.app"
                     target="_blank"
                  >
                     wmidiaweb.vercel.app
                  </a>
                  .
               </p>
            </section>

            <ButtonLink title="Voltar" path="/works" />
         </main>
      </section>
   );
}
