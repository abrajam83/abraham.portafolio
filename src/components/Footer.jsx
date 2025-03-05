import React from 'react';
import { arrowUp } from "../assets";

const Footer = () => {
  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Ir al inicio de la página
      behavior: "smooth", // Scroll suave
    });
  };

  return (
    <div className="flex flex-col w-full max-w-[1280px] mx-auto px-16 md:px-4 relative min-h-[700px] justify-center">
      {/* Botón VOLVER A ARRIBA */}
      <div
        className="absolute top-2 right-4 items-center space-x-2 cursor-pointer hidden sm:flex mt-14"
        onClick={scrollToTop}
      >
        {/* Texto */}
        <span className="font-montserrat text-gray-600">P´ARRIBA</span>
        {/* Círculo con el ícono */}
        <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
          <img src={arrowUp} alt="Volver arriba" className="w-5 h-5" />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-left font-montserrat font-normal text-base md:text-lg mt-10 text-text">
        ¿TIENES UN PROYECTO EN MENTE?
      </h1>

      {/* Palabra PLATIQUEMOS */}
      <div
        className="text-left font-montserrat text-gray100 tracking-tighter mb-4 leading-none font-medium ml-0 sm:-ml-2 lg:-ml-4"
        style={{ fontSize: "clamp(3rem, 7vw, 200px)" }}
      >
        PLATIQUEMOS
      </div>

      {/* Nuevo nivel del footer */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-t border-gray-300 pt-6 mt-10">
        {/* Botones */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4 sm:mb-0">
          {/* Botón LinkedIn */}
          <button className="w-full sm:w-32 h-10 bg-white border border-black rounded-full text-black font-montserrat text-sm hover:bg-gray-100 transition mb-2 sm:mb-0">
            LINKEDIN
          </button>
          {/* Botón Escríbeme */}
          <button className="w-full sm:w-32 h-10 bg-white border border-black rounded-full text-black font-montserrat text-sm hover:bg-gray-100 transition">
            ESCRÍBEME
          </button>
        </div>

        {/* Nombre */}
        <span className="font-montserrat text-sm text-gray-600 text-center sm:text-left">
          Abraham Maldonado
        </span>
      </div>
    </div>
  );
};

export default Footer;
