import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Logofolio({ id, backgroundImage, index }) {
  return (
    <div className="relative group block overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gray500 z-0"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 0.6,
          delay: index * 0.15, // fondo arranca antes
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      />

      {/* Imagen del logo con retraso adicional */}
      <motion.div
        className="relative z-10 w-full pt-[56.25%]" // 16:9 ratio
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: index * 0.15 + 0.3, // aparece después del fondo
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </motion.div>
    </div>
  );
}

export default Logofolio;
