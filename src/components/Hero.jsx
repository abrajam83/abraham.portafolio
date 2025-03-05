import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import heroImage from "../assets/logoAb.svg"

function Hero() {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col justify-center max-w-screen-xl min-h-screen pb-14 px-6">
        {/* Contenedor del texto */}
        <div className="w-full ">
          <h1 className="text-[160px] font-normal font-montserrat text-text tracking-tighter">
            Hola!
          </h1>
          <p className="text-lg mb-4 ml-3 font-notosans font-normal text-text max-w-2xl">
          Mi nombre es Abraham Maldonado, diseñador apasionado por participar en proyectos que aporten valor y generen un impacto positivo en las personas, a través de soluciones y productos útiles que respondan a sus necesidades. Me he especializado en aplicar metodologías centradas en el usuario que transforman desafíos en diseños innovadores, interfaces intuitivas y resultados que equilibran los objetivos comerciales con las expectativas del usuario. <br/> <br/>A continuación te comparto algunos de mis proyectos más relevantes.
          </p>
        </div>
        <button 
          className="flex flex-col p-4 text-white bg-black font-montserrat max-w-sm rounded-md ml-2 mt-10"
          onClick={() => navigate("/project/gallery")} // Redirige a /gallery
        >
          <h1>Portafolio</h1>
        </button>
        
      </div>
    </section>
  );
}

export default Hero;
