import { Link } from "react-router-dom";
import { PortfolioProps } from "../../@types/PortfolioProps";

import styles from "./styles.module.scss";

export function PortfolioPost({
   title,
   description,
   imageUrl,
}: PortfolioProps) {
   return (
      <section
         className={styles.portfolio__container}
         style={{ backgroundImage: "url(" + imageUrl + ")" }}
      >
         <Link to={`/${title}`}>
            <div className={styles.portfolio__blackbox}>
               <div className={styles.portfolio__blackbox_text}>
                  <h2>{title}</h2>
                  <span>{description}</span>
               </div>
            </div>
         </Link>
      </section>
   );
}
