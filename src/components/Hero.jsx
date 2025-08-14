import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { motion } from "framer-motion";
import { arrowUp, eyeBackground } from "../assets";


function Hero() {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <section className="relative bg-black rounded-tl-xl rounded-tr-xl overflow-hidden min-h-screen z-[-20] ">

      <img
        src={eyeBackground}
        alt="Fondo"
        className="absolute inset-0 w-full h-full bg-no-repeat object-cover scale-[1.5] translate-y-[-5%] z-[-10] translate-x-[-25%] opacity-80"
        style={{ backgroundImage: `url(${eyeBackground})` }}
      />

      <div className="container mx-auto flex flex-col justify-center max-w-screen-2xl min-h-screen px-12 md:px-20 lg:px-48">
        {/* Contenedor del texto */}

        <div className="w-full mt-8">
          <h1 className="text-[70px] font-bold font-maison text-white tracking-normal leading-none">
            Hola!
          </h1>
          <h2 className="text-[50px] font-normal font-maison text-white tracking-normal leading-none">
            Soy Abraham
          </h2>
          <p className="text-2xl mb-16 font-playfair text-stone-400 italic mt-2">
            Visual & brand designer
          </p>
          <p className="text-[18px] font-maison font-normal text-slate-200 max-w-md leading-tight tracking-wide">
            Transformo ideas en soluciones visuales <br /> que conectan, comunican y generan impacto.
          </p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="max-w-6 mt-14">
          <img src={arrowUp} alt="Scroll" className="rotate-180" />
        </motion.div>


      </div>
    </section>
  );
}

export default Hero;

{/* <button 
          className="flex flex-col p-4 text-white bg-black font-montserrat max-w-[300px] rounded-xl mt-10"
          onClick={() => navigate("/project/gallery")} // Redirige a /gallery
        >
          <h1>Portafolio</h1>
        </button> */}