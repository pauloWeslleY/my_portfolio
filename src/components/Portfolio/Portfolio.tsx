import { PortfolioPost } from "./PortfolioPost";

import { PORTFOLIO_PROPS } from "./[slug_portfolio_posts]/[portfolio_posts]";

import styles from "./styles.module.scss";

export function Portfolio() {
   return (
      <section className={styles.hero__container}>
         {PORTFOLIO_PROPS.map((posts, index) => (
            <PortfolioPost key={index} posts={posts} />
         ))}
      </section>
   );
}
