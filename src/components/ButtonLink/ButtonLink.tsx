import { Link as BtnLink } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

import styles from "./styles.module.scss";

interface ButtonLinkProps {
   title: string;
   path: string;
}

export function ButtonLink({ title, path }: ButtonLinkProps) {
   return (
      <BtnLink to={`${path}`} className={styles.button__link}>
         <MdKeyboardArrowLeft /> {title}
      </BtnLink>
   );
}
