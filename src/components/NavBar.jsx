import React from "react";
import { Link } from "react-router-dom";
import logoAb from "../assets/MiIdentidad/logoAb.svg"; // Ajusta la ruta al logo correctamente

function NavBar() {
  return (
    <nav className="bg-white text-black w-full p-6 fixed z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-8 ">
        {/* Logo como enlace a la página principal */}
        <Link to="/" className="flex items-center">
          <img src={logoAb} alt="Logo" className="h-16 w-16" />
          <span className="text-normal font-barlow text-xl ml-2 font-normal"></span>
        </Link>

        {/* Menú de navegación */}
        <ul className="flex space-x-8">
        <li>
            <Link to="/" className="hover:underline text-normal font-montserrat text-base font-normal">
              Volver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
