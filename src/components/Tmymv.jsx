import React, { useRef } from 'react';
import { LogoHD, tmymv1, tmymv2, ilustracionesTmymv1, ilustracionesTmymv2, tmymvLogoAnimado } from "../assets";
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
                            className="flex text-center md:text-start justify-center md:justify-start items-center mb-5"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-montserrat leading-none">
                                Tu memoria <br /> y mi voz
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
                            La plataforma “Tu memoria y mi voz. Narrativas de la desaparición en México” forma parte del proyecto de investigación “Garantías de no repetición: Construyendo la narrativa y memoria colectiva en torno a la desaparición de personas en México” que SIMO Consulting realizó en colaboración con EnfoqueDH Políticas Públicas en Derechos Humanos, programa financiado por la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID). 


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
                    <div className="bg-enfoqueBlue flex items-center justify-center  ">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={tmymvLogoAnimado}
                                alt="Logo"
                                className="max-w-screen-lg" />
                        </motion.div>
                    </div>

                </motion.div>
            </div>

            <div className="div">
                {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full "  >
                    {/* Imagen 3 */}
                    <div className="bg-enfoquelightBlue flex items-center justify-center px-20 lg:py-14 xl:py-30">
                        <motion.div className="div"
                            ref={sectionRefs[1]}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={tmymv1}
                                alt="Imagen 3"
                                className="w-full"
                            />
                        </motion.div>
                    </div>

                    {/* Imagen 4 */}
                    <div className="bg-enfoqueYellow flex items-center justify-center px-20 lg:py-14 xl:py-30">
                        <motion.div className="div"
                            ref={sectionRefs[1]}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={tmymv2}
                                alt="Imagen 4"
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

<div className=" bg-hilandocream justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 h-[400px] min-h-[600px] max-w-screen-xl mx-auto">

                <motion.div className="flex justify-center md:justify-start items-center p-40"
                    ref={sectionRefs[2]}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 1 }}>
                    <img
                        src={LogoHD}
                        alt="Imagen 4"
                        className="w-full mb-4"
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
                        Las trabajadoras de la industria de la indumentaria en México viven de manera cotidiana una serie de violaciones a sus derechos laborales derivado de la falta de conocimientos en torno a ellos, la normalización de la violencia en sus espacios de trabajo y la falta de mecanismos de exigibilidad que impulsen a las empresas a respetar, garantizar y proteger los mismos a lo largo de toda la cadena de valor de la industria.

                    </p>
                </motion.div>
            </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 w-full">

                {/* Imagen 5 */}
                <div className="bg-enfoqueredBase flex items-center justify-center px-10 py-5">
                    <motion.div
                        ref={sectionRefs[3]}
                        className="div"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[3] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <img src={ilustracionesTmymv1} alt="Imagen 3" className="w-full mt-4" />
                    </motion.div>
                </div>

                {/* Imagen 6 */}
                <div className="bg-enfoqueredBase  flex items-center justify-center px-10 py-5">
                    <motion.div
                        ref={sectionRefs[4]}
                        className="div"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[4] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <img src={ilustracionesTmymv2} alt="Imagen 4" className="w-full mt-4" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default MUCD;
