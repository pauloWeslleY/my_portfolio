import { NavBar } from "../../components/NavBar/NavBar";
import { HeroTitle } from "../../components/HeroTitle/HeroTitle";
import { ContactMe } from "../../components/ContactMe/ContactMe";
import { contact } from "../../data/contact_[data].json";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

import styles from "../../scss/app.module.scss";

export default function Contact() {
   return (
      <section>
         <NavBar />

         <section className={styles.container}>
            <HeroTitle title={contact.title} />

            <ContactMe />

            <ButtonLink title="Voltar ao ínicio" path="/" />
         </section>
      </section>
   );
}
