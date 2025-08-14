import React, { useState, useRef } from "react";
import { arrowLeftWhite, arrowRightWhite } from "../assets";

const ImageComparisonSlider = ({ before, after, height = 500 }) => {
  const [position, setPosition] = useState(50); // % inicial
  const containerRef = useRef(null);

  const handleMove = (e) => {
    e.preventDefault(); // evita scroll en móviles al arrastrar
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const clientX = e.touches?.[0]?.clientX ?? e.clientX;
    let pos = ((clientX - bounds.left) / bounds.width) * 100;
    pos = Math.max(0, Math.min(pos, 100)); // clamp 0–100
    setPosition(pos);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden cursor-ew-resize"
      style={{ height }}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onMouseDown={handleMove}
      onTouchStart={handleMove}
      onTouchMove={handleMove}
    >
      {/* Imagen base (before) fija */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Imagen superior (after) recortada, también fija */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Línea divisoria */}
      <div
        className="absolute top-0 bottom-0 w-[1px] bg-black "
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* Handler circular */}
     <div
        className="absolute top-1/2 bg-opacity-60 bg-black border-2 border-gray-100 rounded-full shadow-lg flex items-center justify-center cursor-pointer p-1"
        style={{
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <img src={arrowLeftWhite} alt="Left" className="w-4 h-4 mr-1" />
        <img src={arrowRightWhite} alt="Right" className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
