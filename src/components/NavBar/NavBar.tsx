import { useState } from "react";
import { Link } from "react-router-dom";

import MenuBar from "../../assets/menu.svg";

import "./NavBar.scss";

type NavProps = {
   id: number;
   label: string;
   title: string;
   path: any;
};

export function NavBar() {
   const [menuMobile, setMenuMobile] = useState(false);

   const NAV_ITEMS: Array<NavProps> = [
      {
         id: 1,
         label: "Home",
         title: "Página de Principal",
         path: "",
      },
      {
         id: 2,
         label: "Trabalhos",
         title: "Página de Trabalhos",
         path: "works",
      },
      {
         id: 3,
         label: "Sobre Mim",
         title: "Página Sobre Mim",
         path: "about",
      },
      {
         id: 4,
         label: "Contatos",
         title: "Página de Contatos",
         path: "contact",
      },
   ];

   return (
      <nav className={`navigation ${menuMobile ? "menuMobile" : ""}`}>
         <ul>
            {NAV_ITEMS.map((item) => (
               <li key={item.id}>
                  <Link to={`/${item.path}`} title={item.title}>
                     {item.label}
                  </Link>
               </li>
            ))}
            <li
               className="threeline-icon"
               onClick={() => setMenuMobile(!menuMobile)}
            >
               <img className="iconOpen" src={MenuBar} alt="Ícone do menu" />
               <svg
                  className="iconClose"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M30 10L10 30M10 10L30 30"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  ></path>
               </svg>
            </li>
         </ul>
      </nav>
   );
}
