import { HeroTitle } from "../../HeroTitle/HeroTitle";
import { ButtonLink } from "../../ButtonLink/ButtonLink";

import { PORTFOLIO_PAGES } from "../../../data/data.json";

import styles from "../../../scss/app.module.scss";

export function Serralheria() {
   return (
      <main className={styles.container}>
         <HeroTitle title={PORTFOLIO_PAGES.serralheria.title} />

         <section className={styles.hero__main}>
            <img src={PORTFOLIO_PAGES.serralheria.imageUrl} alt="Serralheria" />
            <h3>Descrição do Projeto</h3>
            <p>{PORTFOLIO_PAGES.serralheria.description}</p>
            <img
               src={PORTFOLIO_PAGES.serralheria.imageUrl2}
               alt="Serralheria"
            />
            <p>
               link para a versão atualizada do site{" "}
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
   );
}
