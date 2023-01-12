import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { ButtonLink } from "../../ButtonLink/ButtonLink";

import { PORTFOLIO_PAGES } from "../../../data/data.json";

import styles from "../../../scss/app.module.scss";

export function Acupuntura() {
   return (
      <main className={styles.container}>
         <HeroTitle title={PORTFOLIO_PAGES.acupuntura.title} />

         <section className={styles.hero__main}>
            <img src={PORTFOLIO_PAGES.acupuntura.imageUrl} alt="Acupuntura" />
            <h3>Descrição do Projeto</h3>
            <p>{PORTFOLIO_PAGES.acupuntura.description}</p>
            <p>{PORTFOLIO_PAGES.acupuntura.description1}</p>
            <img src={PORTFOLIO_PAGES.acupuntura.imageUrl2} alt="Acupuntura" />
            <p>{PORTFOLIO_PAGES.acupuntura.description2}</p>
            <img src={PORTFOLIO_PAGES.acupuntura.imageUrl3} alt="Acupuntura" />
            <p>
               link do site{" "}
               <a
                  className={styles.hero__link}
                  href="https://acupuntura.vercel.app"
                  target="_blank"
               >
                  acupuntura.vercel.app
               </a>
               .
            </p>
            <img src={PORTFOLIO_PAGES.acupuntura.imageUrl4} alt="Acupuntura" />
            <img src={PORTFOLIO_PAGES.acupuntura.imageUrl5} alt="Acupuntura" />
         </section>

         <ButtonLink title="Voltar" path="/works" />
      </main>
   );
}
