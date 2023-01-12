import { HeroTitle } from "../../components/HeroTitle/HeroTitle";
import { ContactMe } from "../../components/ContactMe/ContactMe";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { contact } from "../../data/data.json";

import styles from "../../scss/app.module.scss";

export default function Contact() {
   return (
      <main>
         <section className={styles.container}>
            <HeroTitle title={contact.title} />

            <ContactMe />

            <ButtonLink title="Voltar ao inicio" path="/" />
         </section>
      </main>
   );
}
