import React, { useRef } from 'react';
import { esmaBlack, boletinCerraduras, hazLuz, esma, esmaTop, envases, calentadorSolar, bomba, clavos, portada1, portada2, reconocimientos, cubosVinetas } from "../assets";
import { motion, useInView } from "framer-motion";

function Truper() {
    const sectionRefs = Array.from({ length: 9 }, () => useRef(null)); // Crear un arreglo con 4 referencias

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
                            transition={{ delay: 0.3, duration: 1 }}>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-montserrat leading-none">
                                Truper <br /> Herramientas
                            </h1>
                        </motion.div>

                        {/* Contenedor del párrafo */}
                        <motion.div
                            className="flex text-center md:text-start items-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                                Esta serie de trabajos desarrollados para Truper abarca diversas áreas del diseño, desde ilustración y modelado 3D hasta la creación de infografías y piezas de comunicación visual. Cada proyecto responde a objetivos específicos, ya sea en el diseño de portadas para catálogo —donde conceptualicé la identidad visual y la narrativa gráfica— o la producción de materiales publicitarios con un enfoque orientado a la marca y su posicionamiento.
                            </p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="grid grid-cols-1  w-full mt-10 mx-auto"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                    animate={isInView[0] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}>

                    <div className="bg-black flex items-center justify-center">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={esmaBlack}
                                alt="Imagen 1"
                                className="max-w-screen-xl w-full" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="bg-esmaFondo grid grid-cols-1 xl:grid-cols-2 w-full py-10"
            ref={sectionRefs[1]}>
                <div className="bg-esmaFondo flex items-center justify-center h-full ">
                    <motion.div
                        className=" w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <img src={esma} alt="Imagen 3" className="w-full object-cover" />
                    </motion.div>
                </div>

                <div className="bg-esmaFondo flex items-center justify-center h-full">
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <img src={esmaTop} alt="Imagen 4" className="w-full object-cover" />
                    </motion.div>
                </div>
            </div>

            <div className="div">
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full"
                ref={sectionRefs[2]}>

                    <div className="bg-white flex items-center justify-center px-20 lg:py-14 xl:py-20">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={boletinCerraduras}
                                alt="Imagen 3"
                                className="w-full" />
                        </motion.div>
                    </div>

                    <div className="bg-white flex items-center justify-center px-20 lg:py-14 xl:py-20">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={hazLuz}
                                alt="Imagen 4"
                                className="w-full" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="justify-center">
                <motion.div
                    ref={sectionRefs[3]}
                    className="grid grid-cols-1 w-full mx-auto"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                    animate={isInView[3] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    {/* Imagen 1 */}
                    <div className="bg-white flex items-center justify-center ">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[3] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={envases}
                                alt="Imagen 1"
                                className="max-w-screen-xl w-full md:py-5" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 w-full py-8">
                <div className="bg-slate-300 flex items-center justify-center px-10 py-40">
                    <motion.div
                        ref={sectionRefs[4]}
                        className="div"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[4] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <img src={calentadorSolar} alt="Imagen 3" className="w-full" />
                    </motion.div>
                </div>

                <div className="bg-slate-300  flex items-center justify-center px-10 py-40">
                    <motion.div
                        ref={sectionRefs[4]}
                        className="div"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[4] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <img src={bomba} alt="Imagen 4" className="w-full" />
                    </motion.div>
                </div>
            </div>

            <div className="justify-center py-20">
                <motion.div
                    ref={sectionRefs[5]}
                    className="grid grid-cols-1 w-full mx-auto"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                    animate={isInView[5] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    {/* Imagen 1 */}
                    <div className="bg-white flex items-center justify-center ">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[5] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={clavos}
                                alt="Imagen 1"
                                className="w-full md:py-5" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 w-full"
            ref={sectionRefs[6]}>
                <div className="bg-white flex items-center justify-center h-full">
                    <motion.div
                        className="h-full w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[6] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <img src={portada1} alt="Imagen 3" className="w-full  object-cover" />
                    </motion.div>
                </div>

                <div className="bg-white flex items-center justify-center h-full">
                    <motion.div
                        className="h-full w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[6] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <img src={portada2} alt="Imagen 4" className="w-full object-cover" />
                    </motion.div>
                </div>
            </div>

            <div className="justify-center py-20">
                <motion.div
                    ref={sectionRefs[7]}
                    className="grid grid-cols-1 w-full mx-auto"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                    animate={isInView[7] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    {/* Imagen 1 */}
                    <div className="bg-white flex items-center justify-center ">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[7] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={reconocimientos}
                                alt="Imagen 1"
                                className="w-full md:py-5" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="justify-center py-20">
                <motion.div
                    ref={sectionRefs[8]}
                    className="grid grid-cols-1 w-full mx-auto"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                    animate={isInView[8] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    {/* Imagen 1 */}
                    <div className="bg-white flex items-center justify-center ">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[8] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={cubosVinetas}
                                alt="Imagen 1"
                                className="w-full md:py-5" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
}

export default Truper;
