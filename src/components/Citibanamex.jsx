import React, { useRef } from 'react';
import { Intro, InfoHD1, InfoHD2, InfoHD3, InfoHD4, LogoHD, hipotesis, target, proceso, entrevistasProfundidad, mapaTrayectoria1, mapaTrayectoria2, feedback, heuristicas, triangulacion, citiLap } from "../assets";
import { motion, useInView } from "framer-motion";
import Contacto from "../components/Contacto"

function MUCD() {
  const sectionRefs = Array.from({ length: 5 }, () => useRef(null)); // Crear un arreglo con 4 referencias

  const isInView = sectionRefs.map((ref, index) =>
    useInView(ref, {
      once: true, // Ejecutar la animación solo una vez
      threshold: index === 1 ? 0.1 : 0.5 // Umbral específico para index === 1
    })
  );

  return (
    <div className="bg-white w-full mt-24">
      {/* Contenedor principal centrado */}
      <div ref={sectionRefs[0]} className="div">
        <div className="container mx-auto p-4 max-w-screen-xl">
          {/* Contenedor para título y párrafo */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 h-[300px] md:h-[500px]">
            {/* Contenedor del título */}
            <motion.div
              className="flex text-center md:text-start justify-center md:justify-start items-center mb-5"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h1 className="text-[40px] md:text-[60px] font-semibold font-montserrat leading-none">
                Citibanamex <br /> 
                <span className="text-[20px] md:text-[30px] font-medium">Ux research</span>
              </h1>
            </motion.div>

            {/* Contenedor del párrafo */}
            <motion.div
              className="flex text-center md:text-start items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                En el primer semestre del 2022, México sufrió 85 mil millones de intentos de ciberataques, convirtiéndolo en el país con mayor número de ataques en Latinoamérica. <br/><br/>

                Una de cada tres personas es mayor de 65 años, quienes acuden a presentar una queja por fraude bancario en México, es decir, más de 50.000 usuarios vieron alguna merma en sus recursos por un presunto fraude o robo de identidad en la mayoría de los casos.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
        <motion.div
          className="grid grid-cols-1 w-full mt-10 mx-auto"
          initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
          animate={isInView[0] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {/* Imagen 1 */}
          <div className="grid grid-cols-1 items-center justify-center">
            <motion.div className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 1 }}
              style={{ position: 'relative', zIndex: 1 }}>
              <img
                src={hipotesis}
                alt="Hipotesis"
                className="max-w-[1200px] w-full" />
            </motion.div>

            <div className="flex items-center justify-center">
              <img
                src={target}
                alt="Target"
                className="max-w-[1200px] w-full"/>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={proceso}
                alt="Proceso"
                className="max-w-[1200px] w-full"/>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={entrevistasProfundidad}
                alt="Entrevistas"
                className="max-w-[1200px] w-full"/>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={mapaTrayectoria1}
                alt="Mapa de Trayectoria 1"
                className="max-w-[1200px] w-full"/>
            </div>

<div className=" bg-slate-200 justify-center">

            <div className="grid grid-cols-1 h-[400px] min-h-[700px] max-w-screen-lg mx-auto py-12 mb-5">

                <div className="flex justify-center  items-center">
                    <img
                        src={citiLap}
                        alt="Visita entrevista"   
                        className="w-full"
                    />
                </div>

                <div className="flex items-center mx-auto justify-center">
                    <p className="font-notosans font-light leading-relaxed md:text-lg text-enfoqueBlue items-center text-center text-base">
                            Para ver la investigación exploratoria haz{" "}
                            <a
                                href="https://www.figma.com/board/f0hysasDBAoc1aphDuRFVI/Abraham_Maldonado_Investigaci%C3%B3n_Exploratoria?node-id=0-1&t=VuTTcjIjQh2jY4q7-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-enfoqueBlue font-bold underline hover:text-blue-400 transition"
                            >
                                click aquí
                            </a>
                        </p>
                </div>
            </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={mapaTrayectoria2}
                alt="Mapa de Trayectoria 2"
                className="max-w-[1200px] w-full"/>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={feedback}
                alt="Feedback"
                className="max-w-[1200px] w-full"/>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={heuristicas}
                alt="Heuristicas"
                className="max-w-[1200px] w-full"/>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={triangulacion}
                alt="Triangulación"
                className="max-w-[1200px] w-full"/>
            </div>

          </div>
        </motion.div>
      </div>  
    </div>
  );
}

export default MUCD;
