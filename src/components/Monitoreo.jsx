import React, { useRef } from 'react';
import { Intro, InfoHD1, InfoHD2, InfoHD3, InfoHD4, LogoHD, monitoreoLanding, monitoreoBlog, monitoreoGrafica, boy } from "../assets";
import { motion, useInView } from "framer-motion";

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
                            className="flex flex-col text-center md:text-start justify-center  mb-5"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-montserrat leading-none">
                                Micrositio Simo 
                            </h1>
                            <h1 className="text-[40px] md:text-[40px] font-semibold font-montserrat leading-none">
                                 Monitoreo COVID-19
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
                            El micrositio SIMO fue diseñado como una herramienta de mapeo para analizar los hábitos de consumo, los cambios en el comportamiento, así como las actitudes y emociones de la sociedad. Su objetivo era proporcionar información clave que permitiera al sector público y privado fortalecer el vínculo con sus audiencias y tomar decisiones más acertadas.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
                <motion.div
                    className="grid grid-cols-1  w-full mt-10 mx-auto"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                    animate={isInView[0] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    {/* Imagen 1 */}
                    <div className="bg-verdeSimo1 flex items-center justify-center px-16 py-10 lg:py-12 xl:py-30">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={monitoreoLanding}
                                alt="Imagen 1"
                                className="w-full max-w-screen-xl" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="div">
                {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full "  >
                    {/* Imagen 3 */}
                    <div className="bg-verdeSimo3 flex items-center justify-center px-20 lg:py-14 xl:py-30">
                        <motion.div className="div"
                            ref={sectionRefs[1]}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={monitoreoGrafica}
                                alt="Imagen 3"
                                className="w-full"
                            />
                        </motion.div>
                    </div>

                    {/* Imagen 4 */}
                    <div className="bg-verdeSimo2 flex items-center justify-center px-20 lg:py-14 xl:py-30">
                        <motion.div className="div"
                            ref={sectionRefs[1]}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={monitoreoBlog}
                                alt="Imagen 4"
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

<div className=" bg-white justify-center">

            <div className="  grid grid-cols-1 md:grid-cols-2 md:gap-10 h-[400px] min-h-[600px] max-w-screen-xl mx-auto">

                <motion.div className="flex justify-center md:justify-start items-center p-28 "
                    ref={sectionRefs[2]}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 1 }}>
                    <img
                        src={boy}
                        alt="Imagen 4"
                        className="w-full"
                    />
                </motion.div>

                <motion.div
                    ref={sectionRefs[2]}
                    className="flex text-center md:text-start items-center mx-auto justify-center p-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                    El prototipo del micrositio fue realizado en Figma, incorporando el diseño de personajes creados en Cinema 4D. Esta decisión respondió a la tendencia de diseño de aquel entonces, que evitaba el uso de fotografías de personas, optando en su lugar por ilustraciones y modelos tridimensionales para mantener una estética neutral y atemporal.

                    </p>
                </motion.div>
            </div>
            </div>

        </div>
    );
}

export default MUCD;
