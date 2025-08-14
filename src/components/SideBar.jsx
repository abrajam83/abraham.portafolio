import React from "react";
import { motion } from "framer-motion";
import { logoAb, LinkedinLogo } from "../assets";

function SideBar() {
  return (
    <motion.div className="h-full z-20"
     initial={{ x: -200,  opacity: 0 }}        // desde la izquierda, invisible
      animate={{ x: 0, opacity: 1 }}           // posición normal, visible
      transition={{ duration: 0.6, ease: "easeOut" }}  // transición suave
    >
      <div className="h-full w-[400px] bg-white flex flex-row justify-between px-6 rounded-r-xl">
        {/* Parte superior */}
        <div className="flex w-[70px] h-[70px]">
          <img
            src={logoAb}
            alt="Mi logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex text-sm whitespace-nowrap tracking-widest items-center text-black">
          Abraham Maldonado
        </div>

        <div className="flex items-center ">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-200">
            <img
              src={LinkedinLogo}
              alt="LinkedIn"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default SideBar;
