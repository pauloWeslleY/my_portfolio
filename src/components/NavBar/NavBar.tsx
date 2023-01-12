import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

import "./NavBar.scss";

type NavProps = {
   label: string;
   title: string;
   path: string;
};

export function NavBar() {
   const [menuMobile, setMenuMobile] = useState(false);

   const NAV_ITEMS: Array<NavProps> = [
      {
         label: "Home",
         title: "Página de Principal",
         path: "",
      },
      {
         label: "Trabalhos",
         title: "Página de Trabalhos",
         path: "works",
      },
      {
         label: "Sobre",
         title: "Página Sobre Mim",
         path: "about",
      },
      {
         label: "Contatos",
         title: "Página de Contatos",
         path: "contact",
      },
   ];

   return (
      <nav className={`navigation ${menuMobile ? "menuMobile" : ""}`}>
         <ul>
            {NAV_ITEMS.map((item, index) => (
               <Link
                  to={`/${item.path}`}
                  key={index}
                  title={item.title}
                  onClick={() => setMenuMobile(!menuMobile)}
               >
                  <li>{item.label}</li>
               </Link>
            ))}
            <li
               className="threeline-icon"
               onClick={() => setMenuMobile(!menuMobile)}
            >
               <span className="iconOpen">
                  <List size={32} />
               </span>
               <span className="iconClose">
                  <X size={32} />
               </span>
            </li>
         </ul>
      </nav>
   );
}
