import { Link } from "react-router-dom";
import { PortfolioProps } from "../../@types/PortfolioProps";

import styles from "./styles.module.scss";

interface PortfolioPostProps {
   posts: PortfolioProps;
}

export function PortfolioPost({ posts }: PortfolioPostProps) {
   const { title, description, imageUrl, path } = posts;

   return (
      <article
         className={styles.portfolio__container}
         style={{ backgroundImage: `url(${imageUrl})` }}
      >
         <Link to={`/${path}`}>
            <div className={styles.portfolio__blackbox}>
               <div className={styles.portfolio__blackbox_text}>
                  <h2>{title}</h2>
                  <span>{description}</span>
               </div>
            </div>
         </Link>
      </article>
   );
}
