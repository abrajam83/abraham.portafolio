import React, { useRef } from 'react';
import { Intro, InfoHD3, NueveOnceTitulo, celNueveOnce, mockupNueveOnce, pantallasNueveOnce } from "../assets";
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
                                911 <br /> México
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
                                En el año 2017 el Centro de atención de llamadas de emergencia 911 de la Ciudad de México, fue premiado en la categoría de “Mejor estrategia de Atención Ciudadana” por ser el único país con la Certificación Internacional ISO 9001-2008. Sin embargo esos mismos estándares no se han podido alcanzar en el servicio que ofrece la aplicación móvil.


                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>

            <div className="div">
                {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full "  >
                    {/* Imagen 3 */}
                    <div className="bg-nueveOnceBlue flex items-center justify-center px-20 lg:py-14 xl:py-30">
                        <motion.div className="div"
                            ref={sectionRefs[1]}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}>
                            <img
                                src={NueveOnceTitulo}
                                alt="Imagen 3"
                                className="w-full xl:pl-52"
                            />
                        </motion.div>
                    </div>

                    {/* Imagen 4 */}
                    <div className="bg-nueveOnceBlue flex items-center justify-center lg:py-14 xl:py-30">
                        <motion.div className="div"
                            ref={sectionRefs[1]}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView[1] ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 1 }}>
                            <img
                                src={celNueveOnce}
                                alt="Imagen 4"
                                className="w-full xl:pr-52"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className=" bg-white justify-center ">

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 min-h-[850px] h-[400px] lg:min-h-[600px] max-w-screen-xl mx-auto pt-10 lg:pt-20 ">

                    <motion.div className="flex text-center items-center md:text-start justify-center md:justify-start px-10 lg:py-10  "
                        ref={sectionRefs[2]}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <motion.div className='flex flex-col'>
                            <h1 className='text-xl font-bold text-nueveOnceBlue mb-8 '>
                                ¿Porqué?
                            </h1>
                            <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                                Queremos saber los intereses e inquietudes de los usuarios al enfrentar distintos escenarios en los cuáles se precisen los servicios de auxilio, para poder otorgarles una mejor experiencia que se adapte a sus necesidades actuales, adaptándonos a los cambios en el contexto nacional.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div className="flex text-center items-center lg:items-start md:text-start justify-center md:justify-start px-10 lg:py-10 "
                        ref={sectionRefs[2]}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}>
                        <motion.div className='flex flex-col'>
                            <h1 className='text-xl font-bold text-nueveOnceBlue mb-8'>
                                ¿Cómo?
                            </h1>
                            <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                                La investigación se realizó mediante 8 entrevistas cualitativas a profundidad, a usuarios de diferentes edades, que hayan utilizado alguna vez los servicios de emergencias del 911, o tengan experiencia en el uso de aplicaciones relacionadas como GPS, apps familiares de monitoreo y otros servicios de emergencia como Alerta Sísmica o Cruz Roja.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={sectionRefs[2]}
                        className="flex text-center items-center md:text-start mx-auto justify-center px-10 lg:py-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <motion.div className='flex flex-col'>
                            <h1 className='text-xl font-bold text-nueveOnceBlue mb-8'>
                                ¿Qué?
                            </h1>
                            <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight">
                                Con el resultado de la investigación y las entrevistas realizadas, creamos tres arquetipos de personas, para entender los posibles escenarios en los que nuestra plataforma se desenvuelve.
                                Realizando algunos mapeos, observamos que secciones, funciones y características necesitan especial atención e intervención para que la plataforma cumpla con las actuales demandas.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 w-full">

                {/* Imagen 5 */}
                <div className="bg-nueveOnceBlue flex items-center justify-center px-10 py-5">
                    <motion.div
                        ref={sectionRefs[3]}
                        className="div"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[3] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <img src={pantallasNueveOnce} alt="Imagen 3" className="w-full mt-4" />
                    </motion.div>
                </div>

                {/* Imagen 6 */}
                <div className="bg-nueveOnceBlue flex items-center justify-center">
                    <motion.div
                        ref={sectionRefs[4]}
                        className="div"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[4] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <img src={mockupNueveOnce} alt="Imagen 4" className="w-full" />
                        <p className="font-notosans font-light leading-relaxed md:text-lg text-white items-center text-center text-xl">
                            Para ver el reporte completo haz{" "}
                            <a
                                href="https://www.figma.com/proto/9yaZYDICSho4XjsS55xxwp/911_Reporte_Ux-Copy?page-id=0%3A1&node-id=13-348&starting-point-node-id=13%3A939&t=JsmMoXYA6ZJWb0ro-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-bold underline hover:text-blue-400 transition"
                            >
                                click aquí
                            </a>.
                        </p>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="grid grid-cols-1  w-full mt-10 mx-auto"
                initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                animate={isInView[0] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
            >
                {/* Imagen 1 */}
                <div className="bg-nueveOnceBlue flex items-center justify-center  lg:py-14 xl:py-40">
                    <motion.div
                        className="div"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView[0] ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9, duration: 1 }}
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <iframe   
                            width="450"
                            height="950"
                            src="https://embed.figma.com/proto/y6vcAXZRzlFJnzUyZmMatz/Proyecto_911?page-id=68%3A156&node-id=164-102&viewport=-16%2C-1370%2C0.49&scaling=scale-down&starting-point-node-id=164%3A102&embed-host=share"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </div>

            </motion.div>
        </div>


    );
}

export default MUCD;
