import React from "react";
import { IPLP1, IPLP2 } from "../assets";

function LaPaz() {
  return (
      <div className="container mx-auto p-4 max-w-screen-xl">

<div className="container mx-auto p-4 max-w-screen-xl">

{/* Contenedor para título y párrafo */}
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 h-[300px] md:h-[500px]">
  {/* Contenedor del título */}
  <div className="flex text-center md:text-start justify-center md:justify-start items-center mb-5">
    <h1 className="text-[40px] md:text-[60px] font-semibold font-montserrat leading-none">
      Índice de <br /> prosperidad <br /> La Paz.
    </h1>
  </div>

  {/* Contenedor del párrafo */}
  <div className="flex text-center md:text-start items-center">
    <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
    Con el IPLP se busca entender los principales factores que determinan la prosperidad en el municipio de La Paz, Baja California Sur (BCS) de acuerdo a la percepción y prioridades de sus propios habitantes. De esta forma, no solo se busca conocer estas prioridades, sino trazar rutas para alcanzar la prosperidad para los Paceños.
    </p>
  </div>
</div>
</div>
  
  
        <div className="container mx-auto rounded-2xl">
          {/* Aquí agregarías las imágenes específicas del proyecto */}
          <img src={IPLP1} alt="Imagen 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src={IPLP2} alt="Imagen 2" className="w-full h-auto rounded-lg shadow-md mt-4" />
        </div>
  
      </div>
    );
  }

export default LaPaz;
