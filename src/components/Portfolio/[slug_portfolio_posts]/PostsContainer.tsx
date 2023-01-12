import { ReactNode } from "react";

import styles from "../styles.module.scss";

interface PostsContainerProps {
   children: ReactNode;
}

export const PostsContainer = ({ children }: PostsContainerProps) => {
   return <div className={styles.container__posts}>{children}</div>;
};
