import styles from "./styles.module.scss";

interface TitleProps {
   title: string;
}

export function HeroTitle({ title }: TitleProps) {
   return (
      <section className={styles.hero__title}>
         <h2>{title}</h2>
      </section>
   );
}
