import { PortfolioPost } from "./PortfolioPost";

import { PORTFOLIO_PROPS } from "../../data/portfolio_posts_[props]";

import styles from "./styles.module.scss";

export function Portfolio() {
   return (
      <section className={styles.hero__container}>
         {PORTFOLIO_PROPS.map((posts, index) => (
            <PortfolioPost
               key={index}
               title={posts.title}
               description={posts.description}
               imageUrl={posts.imageUrl}
            />
         ))}
      </section>
   );
}
