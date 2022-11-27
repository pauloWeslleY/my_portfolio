import { NavBar } from "../../components/NavBar/NavBar";

import { home } from "../../data/data.json";

import styles from "./styles.module.scss";

export default function Home() {
   return (
      <main>
         <NavBar />

         <section className={styles.profile__front_hero}>
            <section className={styles.profile__picture}>
               <img src={home.imageUrl} alt={home.alt} />
            </section>
            <section className={styles.profile__title}>
               <h1>
                  {home.title} <br /> <span>{home.subtitle}</span>
               </h1>
               <h2>{home.description}</h2>
            </section>
         </section>
      </main>
   );
}
