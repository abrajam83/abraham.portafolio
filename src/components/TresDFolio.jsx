import React, { useState } from "react";
import ImageComparisonSlider from "./ImageComparisonSlider";
import {
  arrowLeftWhite,
  arrowRightWhite,
  esmeriladoraRender,
  envase,
  reconocimientosTruper,
  esmaTopRender,
  esmaTopWireframe,
  renderCerradura,
  jardinWireframe,
  jardinRender,
  renderDesbrozadoraExterior,
  portadasAura,
  renderMonitoreoCovid
} from "../assets";

let dragStartX = 0;

const TresDFolio = () => {
  const slides = [
    {
      type: "image",
      img: esmeriladoraRender,
      desc:
        "Modelado 3D de tipo hard-surface de una esmeriladora Truper, desarrollado con el objetivo de representar con precisión sus componentes internos y resaltar las funciones clave de la herramienta, optimizando su comprensión y comunicación visual.",
    },
    {
      type: "comparison",
      before: esmaTopRender,
      after: esmaTopWireframe,
      desc: "Comparativo: render vs wireframe",
    },
    {
      type: "image",
      img: envase,
      desc:
        "El proyecto consistió en realizar un análisis estructural del envase de anticongelante Quaker State. A partir de un estudio de uso y la forma en que se vierte el producto, se concluyó que el líquido suele derramarse debido a la línea de relleno, la boquilla y el material del envase. La propuesta de rediseño incorpora una inclinación y curvatura que facilitan verter el anticongelante, reduciendo derrames y desperdicio de producto.",
      extra:
        "Con este proyecto obtuve el 1er. lugar en la Cuarta Bienal Nacional de Diseño.",
    },
    {
      type: "image",
      img: reconocimientosTruper,
      desc:
        "Propuestas de reconocimientos para distribuidores autorizados Truper, modeladas en 3D con Cinema 4D. Estas piezas exploran ideas poco convencionales: desde la cabeza de un marro, hasta un hacha atravesando un bloque de madera. El modelado permitió materializar conceptos que, de otra manera, serían difíciles de imaginar, ofreciendo una visualización realista que facilita la toma de decisiones.",
    },
    {
      type: "image",
      img: renderCerradura,
      desc:
        "Modelado 3D en vista wireframe de una cerradura de sobreponer Hermex, desarrollado para el boletín informativo mensual de la marca Truper. El diseño tiene como objetivo desglosar visualmente los componentes internos de la cerradura, ofreciendo una representación diferente de cada parte y su función dentro del mecanismo.",
    },
    {
      type: "image",
      img: renderDesbrozadoraExterior,
      desc:
        "Modelado de escena con iluminación exterior para desbrozadoras Truper, abordando el reto técnico de lograr una visualización natural mediante el uso de librerías de follaje, pasto y árboles. El render combina elementos 3D con fotografías tomadas desde la perspectiva precisa, simulando de forma realista a los personajes en plena acción de uso de la herramienta.",
    },
    {
      type: "comparison",
      before: jardinRender,
      after: jardinWireframe,
      desc: "Comparativo: render vs wireframe",
    },
    {
      type: "image",
      img: portadasAura,
      desc:
        "Las imágenes presentan una serie de mini escenografías creadas para ilustrar las portadas de reportes ejecutivos elaborados para Aura, una consultora especializada en arte, cultura y economía creativa.",
    },
    {
      type: "image",
      img: renderMonitoreoCovid,
      desc:
        "Proyecto desarrollado para un sitio orientado a monitorear los hábitos alimenticios de la sociedad mexicana durante la pandemia por COVID-19. La pieza combina un lenguaje visual amigable con un enfoque informativo, utilizando recursos gráficos diseñados para captar la atención.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = slides[currentIndex];

  const nextSlide = () =>
    setCurrentIndex((p) => (p + 1) % slides.length);

  const prevSlide = () =>
    setCurrentIndex((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div>
      <div className="h-[1px] bg-gray950"></div>
      <div className="bg-black w-full min-h-[775px] px-8 pt-10 pb-24">
        <h1 className="text-white font-normal text-3xl mb-8">Modelado 3D</h1>

        {/* Carrusel */}
        <div className="flex flex-col">
          {/* Imagen + controles */}
          <div className="flex flex-col lg1140:flex-row w-full">
            {/* Imagen */}
            <div
              className="w-full lg1140:w-[70%] h-[300px] md:h-[500px] bg-gray-700 overflow-hidden rounded-lg relative"
              onTouchStart={(e) => (dragStartX = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const endX = e.changedTouches[0].clientX;
                if (dragStartX - endX > 50) nextSlide();
                if (endX - dragStartX > 50) prevSlide();
              }}
            >
              {current.type === "image" ? (
                <img
                  src={current.img}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  {/* Comparador solo en md o más grande */}
                  <div className="hidden md:block">
                    <ImageComparisonSlider
                      before={current.before}
                      after={current.after}
                      height={500}
                    />
                  </div>
                  {/* Imagen estática en mobile */}
                  <div className="md:hidden">
                    <img
                      src={current.before}
                      alt="Vista comparativa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Panel derecho (solo visible en lg1140+) */}
            <div className="hidden lg1140:flex w-[30%] flex-col justify-between pl-6">
              {/* Descripción */}
              <div className="flex-1 p-4 flex items-end">
                <div>
                  <p className="text-white text-sm leading-relaxed">{current.desc}</p>
                  {current.extra && (
                    <span className="block text-sm text-white mt-4">
                      {current.extra}
                    </span>
                  )}
                </div>
              </div>

              {/* Flechas */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition"
                  aria-label="Anterior"
                >
                  <img src={arrowLeftWhite} alt="Anterior" className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition"
                  aria-label="Siguiente"
                >
                  <img src={arrowRightWhite} alt="Siguiente" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex mt-4 space-x-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)} // Cambia el slide
                className={`w-14 h-0.5 cursor-pointer transition-colors duration-300 
        ${idx === currentIndex ? "bg-gray-800" : "bg-gray-500 hover:bg-gray-400"}`}
              />
            ))}
          </div>

          {/* Descripción (solo visible en mobile y hasta <1140px) */}
          <div className="lg1140:hidden mt-4">
            <p className="text-white text-sm leading-relaxed">{current.desc}</p>
            {current.extra && (
              <span className="block text-sm text-white mt-4">{current.extra}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TresDFolio;
