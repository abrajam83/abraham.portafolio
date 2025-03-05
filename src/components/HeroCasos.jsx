import React from "react";
import heroImage from "../assets/logoAb.svg"
function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex items-center max-w-screen-xl min-h-screen pb-14">
        {/* Contenedor del texto */}
        <div className="w-full">
          <h1 className="text-[80px] font-normal font-montserrat text-text tracking-tighter">
            Proyectos a profundidad
          </h1>
          <p className="text-lg mb-4 ml-3 font-notosans font-normal text-text md:w-1/2">
          En esta sección, te cuento algunas de mis historias profesionales más relevantes. Proyectos donde mi creatividad y esfuerzo se han traducido en soluciones concretas que marcan una diferencia.
          </p>

        </div>

        
      </div>
    </section>
  );
}

export default Hero;
