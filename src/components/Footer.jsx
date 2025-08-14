import React, { useState } from "react";
import { arrowUp } from "../assets";
import Contacto from "../components/Contacto";

const Footer = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Ir al inicio de la página
      behavior: "smooth", // Scroll suave
    });
  };

  return (
    <div className="flex flex-col w-full mx-auto px-16 md:px-8 relative min-h-[600px] justify-center bg-black">
      {/* Botón VOLVER A ARRIBA */}
      <div
        className="absolute top-2 right-4 items-center space-x-2 cursor-pointer hidden sm:flex mt-14 px-16 md:px-8"
        onClick={scrollToTop}
      >
        {/* Texto */}
        <span className="font-maison text-white">P´ARRIBA</span>
        {/* Círculo con el ícono */}
        <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
          <img src={arrowUp} alt="Volver arriba" className="w-5 h-5" />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-left font-maison font-light text-base md:text-lg mt-10 text-white">
        ¿TIENES UN PROYECTO EN MENTE?
      </h1>

      {/* Palabra PLATIQUEMOS */}
      <div
        className="text-left font-maison text-gray100  mb-4 leading-none font-b ml-0 sm:-ml-2 lg:-ml-4"
        style={{ fontSize: "clamp(3rem, 7vw, 200px)" }}
      >
        PLATIQUEMOS
      </div>

      {/* Nuevo nivel del footer */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-t border-gray-300 pt-6 mt-10">
        {/* Botones */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4 sm:mb-0">
          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abraham-maldonado-vd/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-32 h-10 bg-black border border-white rounded-full text-white hover:text-black font-maison text-sm hover:bg-white transition flex justify-center items-center"
          >
            LINKEDIN
          </a>
        
        </div>

        {/* Nombre */}
        <span className="font-maison text-sm text-white text-center sm:text-left">
          Abraham Maldonado Jaramillo
        </span>

                {/* Modal de contacto */}
                <Contacto isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </div>
  );
};

export default Footer;
