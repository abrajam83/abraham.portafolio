import React, { useRef } from 'react';
import { PostUnoWeb, PostDosWeb, Info1Web, Info2Web, Info3Web, Info4Web } from "../assets";
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
                México Unido <br /> Contra la <br /> Delincuencia
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
                MUCD es una organización comprometida con promover la paz y la seguridad en el país a través de investigaciones, campañas educativas y acciones de incidencia pública.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 w-full mt-10"
          initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          animate={isInView[0] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Imagen 1 */}
          <div className="bg-mucdBlue flex items-center justify-center px-16 py-10 lg:py-14 xl:py-40">
            <img
              src={Info1Web}
              alt="Imagen 1"
              className="w-full rounded-lg shadow-lg"
              style={{
                boxShadow: "0 10px 30px rgba(0, 51, 94, 1)",
              }}
            />
          </div>

          {/* Imagen 2 */}
          <div className="bg-mucdGreen flex items-center justify-center px-16 py-10 lg:py-14 xl:py-40">
            <img
              src={Info2Web}
              alt="Imagen 2"
              className="w-full rounded-lg shadow-lg"
              style={{
                boxShadow: "0 10px 30px rgba(0, 138, 122, 1)",
              }}
            />
          </div>
        </motion.div>
      </div>

      <div ref={sectionRefs[1]} className="div">
        {/* Contenedor de imágenes (ocupa todo el ancho de la pantalla) */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 w-full "
          initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
          animate={isInView[1] ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Imagen 3 */}
          <div className="bg-mucdGreen flex items-center justify-center px-16 lg:py-14 xl:py-40">
            <img
              src={Info4Web}
              alt="Imagen 3"
              className="w-full rounded-lg shadow-lg"
              style={{
                boxShadow: "0 10px 30px rgba(0, 138, 122, 1)",
              }}
            />
          </div>

          {/* Imagen 4 */}
          <div className="bg-mucdBlue flex items-center justify-center px-16 lg:py-14 xl:py-40">
            <img
              src={Info3Web}
              alt="Imagen 4"
              className="w-full rounded-lg shadow-lg"
              style={{
                boxShadow: "0 10px 30px rgba(0, 51, 94, 1)",
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={sectionRefs[2]}
        className="flex text-center md:text-start items-center max-w-screen-md mx-auto min-h-[400px] justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView[2] ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p className=" font-notosans font-light leading-relaxed md:text-lg text-textlight px-10">
          MUCD coadyuva en la solución de problemas de inseguridad, violencia e impunidad a través de la exigencia a autoridades, la propuesta de soluciones, la defensa de derechos humanos y la activación ciudadana. <br /> <br /> En este proyecto, colaboré en el diseño y desarrollo de infografías para sitio web y redes sociales que sintetizan y comunican de forma visual los resultados clave del estudio, facilitando su comprensión, lectura e impacto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        {/* Imagen 5 */}
        <div className="bg-mucdBlueLight flex items-center justify-center px-10 py-5">
          <motion.div
            ref={sectionRefs[3]}
            className="div"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView[3] ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <img src={PostUnoWeb} alt="Imagen 3" className="w-full mt-4" />
          </motion.div>
        </div>

        {/* Imagen 6 */}
        <div className="bg-mucdGreenLight flex items-center justify-center px-10 py-5">
          <motion.div
            ref={sectionRefs[4]}
            className="div"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView[4] ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <img src={PostDosWeb} alt="Imagen 4" className="w-full mt-4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MUCD;
