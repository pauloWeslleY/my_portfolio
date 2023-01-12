import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Works from "../Pages/Works/Works";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

import { NavBar } from "../components/NavBar/NavBar";

import { Acupuntura } from "../components/pages/Acupuntura/Acupuntura";
import { Serralheria } from "../components/pages/Serralheria/Serralheria";
import { Orquidario } from "../components/pages/Orquidario/Orquidario";
import { Orlando } from "../components/pages/Orlando/Orlando";
import { Midia } from "../components/pages/Midia/Midia";
import { Fashion } from "../components/pages/Fashion/Fashion";
import { PontoCursos } from "../components/pages/PontoCursos/PontoCursos";
import { Restaurants } from "../components/pages/Restaurants/Restaurants";

export function AppRoutes() {
   return (
      <BrowserRouter>
         <NavBar />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/acupuntura" element={<Acupuntura />} />
            <Route path="/serralheria" element={<Serralheria />} />
            <Route path="/orquidario" element={<Orquidario />} />
            <Route path="/orlando" element={<Orlando />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/midia" element={<Midia />} />
            <Route path="/pontocursos" element={<PontoCursos />} />
            <Route path="/restaurants" element={<Restaurants />} />
         </Routes>
      </BrowserRouter>
   );
}
