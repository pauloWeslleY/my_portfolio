import { ReactElement } from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { contact } from "../../data/data.json";

import styles from "./styles.module.scss";

interface SocialProps {
   link: string;
   icon: ReactElement;
}

export function ContactMe() {
   const SOCIAL_LINKS: Array<SocialProps> = [
      {
         icon: <BsInstagram />,
         link: "https://www.instagram.com/weslley.lima_13/",
      },
      {
         icon: <BsLinkedin />,
         link: "https://www.linkedin.com/in/paulo-weslley-de-lima-firmino-17851a17b/",
      },
      {
         icon: <BsGithub />,
         link: "https://github.com/pauloWeslleY",
      },
   ];

   return (
      <section className={styles.hero__contact}>
         <section>
            <h3>
               <MdOutlineMail /> {contact.email_title}
            </h3>
            <p>{contact.email}</p>
            <h3>
               <FiPhoneCall /> {contact.phone}
            </h3>
            <p>{contact.cellphone}</p>
            <h3>{contact.social}</h3>
         </section>

         <section className={styles.hero__contact_social}>
            {SOCIAL_LINKS.map((item, index) => (
               <a key={index} href={item.link} target="blank">
                  {item.icon}
               </a>
            ))}
         </section>
      </section>
   );
}
