import React from "react";
import { Link } from "react-router-dom";
import logoAb from "../assets/logoAb.svg"; // Ajusta la ruta al logo correctamente

function NavBar() {
  return (
    <nav className="bg-white text-black w-full p-4 shadow-md fixed z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 ">
        {/* Logo como enlace a la página principal */}
        <Link to="/" className="flex items-center">
          <img src={logoAb} alt="Logo" className="h-16 w-16" />
          <span className="text-normal font-barlow text-xl ml-2 font-normal"></span>
        </Link>

        {/* Menú de navegación */}
        <ul className="flex space-x-8">
          <li>
            <Link to="/project/gallery" className="hover:underline text-normal font-montserrat text-base font-normal">
              Portafolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline text-normal font-montserrat text-base font-normal">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
