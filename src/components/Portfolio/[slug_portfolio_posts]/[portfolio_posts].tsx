import { PortfolioProps } from "../../../@types/PortfolioProps";

import {
   SiPhp,
   SiJavascript,
   SiReact,
   SiJquery,
   SiHtml5,
   SiAngularjs,
   SiMysql,
   SiAngular,
   SiTypescript,
} from "react-icons/si";
import { FaSass, FaCss3 } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript1, DiMaterializecss } from "react-icons/di";

import { PostsContainer } from "./PostsContainer";

export const PORTFOLIO_PROPS: Array<PortfolioProps> = [
   {
      path: "acupuntura",
      title: "Acupuntura",
      description: (
         <PostsContainer>
            <SiHtml5 /> <FaSass /> <SiJavascript /> <SiJquery />
            <BsFillBootstrapFill />
         </PostsContainer>
      ),
      imageUrl: "/images/acupuntura.jpg",
   },
   {
      path: "orquidario",
      title: "Orquidario Iara",
      description: (
         <PostsContainer>
            <SiPhp /> <DiJavascript1 /> <FaSass /> <SiJquery />
            <DiMaterializecss />
         </PostsContainer>
      ),
      imageUrl: "/images/orquidario.jpg",
   },
   {
      path: "serralheria",
      title: "Serralheria Karson",
      description: (
         <PostsContainer>
            <SiReact /> <DiJavascript1 /> <FaSass /> <BsFillBootstrapFill />
         </PostsContainer>
      ),
      imageUrl: "/images/karson.jpg",
   },
   {
      path: "orlando",
      title: "Orlando City",
      description: (
         <PostsContainer>
            <SiHtml5 /> <FaCss3 /> <DiJavascript1 /> <SiJquery />
            <BsFillBootstrapFill /> <SiAngularjs /> <SiPhp /> <SiMysql />
         </PostsContainer>
      ),
      imageUrl: "/images/orlando.jpg",
   },
   {
      path: "midia",
      title: "Midia",
      description: (
         <PostsContainer>
            <SiHtml5 /> <FaCss3 /> <DiJavascript1 /> <SiJquery />
            <BsFillBootstrapFill />
         </PostsContainer>
      ),
      imageUrl: "/images/midia.jpg",
   },
   {
      path: "pontocursos",
      title: "Ponto Cursos",
      description: (
         <PostsContainer>
            <SiHtml5 /> <FaCss3 /> <DiJavascript1 /> <BsFillBootstrapFill />
         </PostsContainer>
      ),
      imageUrl: "/images/pontocursos.jpg",
   },
   {
      path: "fashion",
      title: "Fashion",
      description: (
         <PostsContainer>
            <SiHtml5 /> <FaCss3 />
         </PostsContainer>
      ),
      imageUrl: "/images/fashion.jpg",
   },
   {
      path: "restaurants",
      title: "Meat App",
      description: (
         <PostsContainer>
            <SiAngular /> <SiTypescript /> <FaCss3 />
         </PostsContainer>
      ),
      imageUrl: "/images/restaurants.jpg",
   },
];
