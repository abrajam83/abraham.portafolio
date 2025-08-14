import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { arrowLeft, arrowRight } from "../assets";

function LogoModal({ isOpen, onClose, images, activeIndex, setActiveIndex }) {
    const modalRef = useRef(null);

    // Cerrar con tecla ESC
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape" || e.key === "Esc") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;
    const currentImage = images[activeIndex];

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClickOutside} // <- escucha clics fuera
            >
                <div
                    ref={modalRef}
                    className="relative bg-white max-w-[1500px] w-full">
                    {/* Botón de cierre */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-4 text-black text-xl font-normal font-maison z-20"
                    >
                        ✕
                    </button>

                    {/* Flechas de navegación */}
                    <div className="absolute inset-y-0 w-full flex justify-between items-center z-10">
                        <button onClick={prev} className="p-2 hover:opacity-70 transition-opacity">
                            <img src={arrowLeft} alt="Anterior" className="w-8 h-8" />
                        </button>
                        <button onClick={next} className="p-2 hover:opacity-70 transition-opacity">
                            <img src={arrowRight} alt="Siguiente" className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Contenido del modal */}
                    <div className="p-10">
                        <h2 className="font-normal text-lg mb-2">{currentImage.title}</h2>
                        <img
                            src={currentImage.src}
                            alt={currentImage.title}
                            className="w-full h-auto mb-2 object-contain"
                        />

                        {/* Indicadores */}
                        <div className="flex justify-start gap-0.5 mb-4">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-0.5 w-14 rounded-sm ${idx === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

    );
}

export default LogoModal;
