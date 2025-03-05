import React, { useEffect, useRef } from "react";
import WordCloud from "wordcloud";
import palabras from "../data/palabras_negativas.json"; // Ajusta el path a tu archivo JSON

const NubePositiva = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const words = Object.entries(palabras).map(([text, value]) => [text, value]);

    // Definir color base en RGB (#276685)
    const baseColor = { r: 224, g: 0, b: 52 }; // RGB para #276685

    // Función para ajustar el color basado en la frecuencia (invertir el cálculo del ratio)
    const getColorBasedOnFrequency = (weight) => {
      const maxWeight = Math.max(...words.map(([, value]) => value)); // Obtener el valor máximo de la frecuencia
      const ratio = .9 - weight / maxWeight; // Invertir el ratio: las palabras más frecuentes tendrán ratio cercano a 0

      // Ajustar el color base hacia el blanco en función de la frecuencia
      const r = baseColor.r + (232 - baseColor.r) * ratio; // Interpolar entre el color base y blanco (255)
      const g = baseColor.g + (154 - baseColor.g) * ratio;
      const b = baseColor.b + (174 - baseColor.b) * ratio;

      // Retornar el color con el ajuste en RGB
      return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    };

    WordCloud(canvasRef.current, {
      list: words,
      gridSize: 10,
      weightFactor: 100,
      fontFamily: "Helvetica, sans-serif", // Cambiar a la fuente deseada
      fontWeight: "bold", // Configurar la fuente en bold
      color: (word, weight) => getColorBasedOnFrequency(weight), // Aplicar color con ajuste según frecuencia
      rotateRatio: 0.5, // Probabilidad de rotación
      rotationSteps: 2, // Rotación en 0° o 90°
      backgroundColor: "#ffffff", // Fondo blanco
      ellipticity: 1, // Forma cuadrada
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        width={660} // Anchura del lienzo
        height={600} // Altura del lienzo
        style={{ border: "0px solid #ddd" }}
      ></canvas>
    </div>
  );
};

export default NubePositiva;
