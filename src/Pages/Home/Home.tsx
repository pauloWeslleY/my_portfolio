import { home } from "../../data/data.json";

import styles from "./styles.module.scss";

export default function Home() {
   return (
      <main>
         <section className={styles.profile__front_hero}>
            <div className={styles.profile__picture}>
               <img src={home.imageUrl} alt={home.alt} />
            </div>
            <div className={styles.profile__title}>
               <h1>
                  {home.title} <span>{home.subtitle}</span>
               </h1>
               <h2>{home.description}</h2>
            </div>
         </section>
      </main>
   );
}
