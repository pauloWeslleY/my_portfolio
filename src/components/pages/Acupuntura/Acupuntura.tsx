import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { NavBar } from "../../NavBar/NavBar";
import { ButtonLink } from "../../ButtonLink/ButtonLink";

import { PORTFOLIO_PAGES } from "../../../data/portfolio__pages_[db].json";

import styles from "../../../scss/app.module.scss";

export function Acupuntura() {
   return (
      <section>
         <NavBar />

         <main className={styles.container}>
            <HeroTitle title={PORTFOLIO_PAGES.acupuntura.title} />

            <section className={styles.hero__main}>
               <img
                  src={PORTFOLIO_PAGES.acupuntura.imageUrl}
                  alt="Acupuntura"
               />
               <h3>Descrição do Projeto</h3>
               <p>{PORTFOLIO_PAGES.acupuntura.description}</p>
               <p>{PORTFOLIO_PAGES.acupuntura.description1}</p>
               <img
                  src={PORTFOLIO_PAGES.acupuntura.imageUrl2}
                  alt="Acupuntura"
               />
               <p>{PORTFOLIO_PAGES.acupuntura.description2}</p>
               <img
                  src={PORTFOLIO_PAGES.acupuntura.imageUrl3}
                  alt="Acupuntura"
               />
               <p>
                  link do site{" "}
                  <a
                     className={styles.hero__link}
                     href="https://www.draacupuntura.com.br"
                     target="_blank"
                  >
                     www.draacupuntura.com.br
                  </a>
                  .
               </p>
               <img
                  src={PORTFOLIO_PAGES.acupuntura.imageUrl4}
                  alt="Acupuntura"
               />
               <img
                  src={PORTFOLIO_PAGES.acupuntura.imageUrl5}
                  alt="Acupuntura"
               />
            </section>

            <ButtonLink title="Voltar" path="/works" />
         </main>
      </section>
   );
}
