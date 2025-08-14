import React, { useRef } from 'react';
import { simoReferentes, benchComparativo, evaluacionHeuristica, scrollTrigger, propuestaDos, propuestaDos1, webSimoVF1, webSimoVF2, simoLap } from "../assets";
import { motion, useInView } from "framer-motion";

function SIMO() {
    const sectionRefs = [...Array(8)].map(() => useRef(null));

    // Aplicar useInView de forma correcta
    const isInView = sectionRefs.map((ref, index) => {
        return useInView(ref, { once: true, threshold: index === 1 ? 0.1 : 0.5 });
    });

    return (
        <div className="bg-white w-full mt-24">
            {/* Contenedor principal centrado */}
            
                <div className="container mx-auto p-4 max-w-screen-xl" ref={sectionRefs[0]}>
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
                                Rediseño web <br /> Simo
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
                                El rediseño del sitio web de SIMO surge con el objetivo de fortalecer su vínculo con usuarios y clientes potenciales, ofreciendo una plataforma intuitiva, rápida y efectiva. <br /><br />A través de un análisis de referentes, un benchmark comparativo y una evaluación del sitio actual, identificamos oportunidades de mejora para optimizar la experiencia del usuario. Los hallazgos nos permitieron redefinir la estructura y el diseño del sitio, asegurando que comunique eficazmente los valores de la institución y se convierta en una herramienta funcional y accesible.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div className=" bg-slate-100 justify-center"
                    ref={sectionRefs[1]}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 1 }}>

                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 min-h-[850px] h-[400px] lg:min-h-[600px] max-w-screen-xl mx-auto pt-10 lg:pt-20 ">

                        <motion.div className="flex items-center lg:items-start text-center md:text-start md:justify-start px-12 lg:pr-0 sm:pr-12 lg:py-10  "
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <motion.div className='flex flex-col'>
                                <h1 className='text-xl font-bold text-verdeSimo2 mb-8 '>
                                    ¿Porqué?
                                </h1>
                                <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                                    Queremos que la plataforma web de Simo sea un vínculo con usuarios y potenciales clientes. Buscamos que en ella, encuentren la solución que mejor se adapte a sus necesidades, brindándoles una experiencia amigable, rápida y efectiva que refleje los valores que representan a la institución.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div className="flex items-center text-center lg:items-start md:text-start md:justify-start px-12 sm:px-10 lg:py-10 "
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <motion.div className='flex flex-col'>
                                <h1 className='text-xl font-bold text-verdeSimo2 mb-8'>
                                    ¿Cómo?
                                </h1>
                                <p className="font-notosans font-light leading-relaxed md:text-lg text-textlight">
                                    La investigación se realizó mediante el análisis de referentes en el mismo rubro, realizando un benchmark comparativo, y una evaluación del sitio actual, con el objetivo de detectar posibles soluciones y pain points que requieren atención, para ofrecer una mejor experiencia.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex items-center text-center lg:items-start md:text-start mx-auto pl-12 lg:pl-0 sm:pr-12 lg:py-10 "
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <motion.div className='flex flex-col'>
                                <h1 className='text-xl font-bold text-verdeSimo2 mb-8'>
                                    ¿Qué?
                                </h1>
                                <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                                    Con el resultado de la investigación entendimos aspectos esenciales a considerar en el diseño y organización del contenido, así como la importancia de contar con una plataforma funcional que sirva como herramienta de comunicación.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
                <motion.div
                    ref={sectionRefs[2]}
                    className="grid grid-cols-1 w-full mx-auto"
                    initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                    animate={isInView[2] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >

                    {/* Imagen 1 */}
                    <div className="bg-verdeSimo2 grid grid-cols-1 items-center justify-center px-16 py-10  w-full mx-auto">

                        <h1 className='flex font-bold text-white items-center justify-center text-base md:text-2xl font-montserrat'>
                            Referentes
                        </h1>

                        <motion.div className="flex items-center justify-center w-full"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}
                            style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={simoReferentes}
                                alt="Imagen 1"
                                className="max-w-[1280px] w-full object-contain" />
                        </motion.div>
                    </div>
                </motion.div>
            

            <motion.div className="div"
                ref={sectionRefs[3]}>
                {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full "  >
                    {/* Imagen 3 */}
                    <div className="bg-verdeSimo4 flex items-center justify-center px-20 lg:py-14 xl:py-30">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[3] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={benchComparativo}
                                alt="Imagen 3"
                                className="w-full"
                            />
                            <p className="font-notosans font-light leading-relaxed md:text-lg text-white items-center text-center text-xl mt-10">
                                Para ver el reporte completo haz{" "}
                                <a
                                    href="https://www.figma.com/proto/jH5AftqUGnuZpa0NCaq5p0/Reporte_Web_Simo?page-id=0%3A1&node-id=1-750&p=f&viewport=289%2C283%2C0.26&t=R4WO5kKrAxrO3YfA-1&scaling=min-zoom&content-scaling=fixed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold underline hover:text-verdeSimo3 transition"
                                >
                                    click aquí
                                </a>
                            </p>
                        </motion.div>
                    </div>

                    {/* Imagen 4 */}
                    <div className="bg-verdeSimo4 flex items-center justify-center px-20 lg:py-14 xl:py-30">
                        <motion.div className="div"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[3] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img
                                src={evaluacionHeuristica}
                                alt="Imagen 4"
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>


            <div className=" bg-verdeSimo3 justify-center"
                ref={sectionRefs[4]}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 min-h-[600px] max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

                    {/* Contenedor de la imagen */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[4] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <img
                            src={scrollTrigger}
                            alt="Imagen 4"
                            className="w-full max-w-[clamp(200px,30vw,400px)] self-end md:self-center mb-4 md:mb-0"
                        />
                    </motion.div>

                    {/* Contenedor del texto */}
                    <motion.div
                        className="flex items-center justify-center md:justify-start self-start md:self-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[4] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <p className="font-notosans font-light leading-relaxed text-center md:text-start text-[clamp(16px,1.2vw,18px)] text-white max-w-[clamp(250px,90%,600px)]">
                            La propuesta contemplaba el uso de storytelling interactivo, donde los elementos como textos e imágenes aparecerían progresivamente conforme el usuario se desplazara hacia abajo, sin embargo no fue posible continuar por este camino  debido a las necesidades de la empresa. Se requería que la página de inicio se abordaran múltiples aspectos clave, lo que implicaba incluir varias secciones que incentivaran la navegación.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="w-full bg-verdeSimo2 py-10" ref={sectionRefs[5]}>
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center max-w-[90%] mx-auto gap-10">

                    {/* Sección Izquierda (Texto + Imagen) */}
                    <div className="flex flex-col items-center px-5">
                        <p className="font-notosans font-light leading-relaxed text-center md:text-start text-[clamp(16px,1.2vw,18px)] text-white max-w-[600px] mt-10 md:mt-16 ">
                            En la siguiente fase, se desarrolló una propuesta que integra de manera organizada las secciones clave. Esta versión tenía como objetivo dirigir al usuario a través de llamadas a la acción claras, invitándolo a conocer los servicios, explorar la trayectoria y revisar proyectos previos. Además, se incluyó una sección para fomentar la recolección de datos, ofreciendo una asesoría gratuita como incentivo para generar contacto con potenciales clientes.
                        </p>

                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[5] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <img src={propuestaDos} alt="Imagen 3" className="w-full max-w-[650px] mx-auto" />
                        </motion.div>
                    </div>

                    {/* Sección Derecha (Solo Imagen) */}
                    <div className="flex justify-center items-center px-5">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[5] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}>
                            <img src={propuestaDos1} alt="Imagen 4" className="w-full max-w-[800px] mx-auto" />
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="w-full bg-verdeSimo3 py-10" ref={sectionRefs[6]}>
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center max-w-[90%] mx-auto gap-10">

                    {/* Sección Izquierda (Texto + Imagen) */}
                    <div className="flex justify-center items-center px-5">

                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[6] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <img src={webSimoVF1} alt="Imagen 3" className="w-full max-w-[800px] mx-auto" />
                        </motion.div>
                    </div>

                    {/* Sección Derecha (Solo Imagen) */}
                    <div className="flex flex-col  items-center px-5">

                        <p className="font-notosans font-light leading-relaxed text-center md:text-start text-[clamp(16px,1.2vw,18px)] text-white max-w-[600px] mt-10 md:mt-16 ">
                            Actualmente se está desarrollando la propuesta final, integrando los mejores elementos de las versiones anteriores. Esta versión pone énfasis especial en el tono y claridad de comunicación, asegurando una experiencia fluida que guíe al usuario de manera intuitiva a través de los servicios, trayectoria y puntos de contacto clave.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[6] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <img src={webSimoVF2} alt="Imagen 4" className="w-full max-w-[680px] mx-auto" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className=" bg-verdeSimo2 justify-center" ref={sectionRefs[7]}>

                <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] md:gap-10 h-[400px] min-h-[700px] max-w-screen-2xl mx-auto">

                    <motion.div className="flex justify-center md:justify-start items-center md:self-end "    
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[7] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <img
                            src={simoLap}
                            alt="Visita Simo"
                            className="w-full"/>
                    </motion.div>

                    <motion.div  
                        className="flex text-center md:text-start items-center mx-auto justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[7] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <p className="font-notosans font-light leading-relaxed md:text-lg text-white items-center text-center text-xl">
                            Para ver el avance del sitio haz{" "}
                            <a
                                href="https://abrajam83.github.io/simo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-bold underline hover:text-verdeSimo1 transition"
                            >
                                click aquí
                            </a>
                        </p>
                    </motion.div>
                </div>
            </div>


        </div>
    );
}

export default SIMO;
