import React, { useEffect, useRef } from "react";
import {Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from "chart.js";
import data from "../data/sentimiento_conteo_general.json"; // Importar datos JSON
import ChartDataLabels from "chartjs-plugin-datalabels"; // Importar el plugin

// Registrar los componentes necesarios de Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend, ChartDataLabels);

const ConteoGeneral = () => {
  const chartRef = useRef(null); // Referencia al canvas
  const chartInstance = useRef(null); // Instancia de la gráfica

  useEffect(() => {
    const labels = data.sentimientos.map((item) => item.sentimiento); // Extraer etiquetas
    const conteos = data.sentimientos.map((item) => item.conteo); // Extraer valores

    const ctx = chartRef.current.getContext("2d"); // Obtener el contexto del canvas

    // Destruir la gráfica anterior si existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Crear la gráfica con Chart.js
    chartInstance.current = new Chart(ctx, {
      type: "bar", // Tipo de gráfica
      data: {
        labels: labels,
        datasets: [
          {
            label: "",
            data: conteos,
            backgroundColor: ["#276685", "#ACA49F", "#E00034"], // Colores personalizados
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y", // Orientación horizontal
        responsive: true,
        plugins: {
          legend: {
            display: false, // Posición de la leyenda6
          },
          
        datalabels: {
            anchor: "end", // Posiciona la etiqueta al final de la barra
            align: "right", // Alinea las etiquetas a la derecha
            color: "#000", // Color del texto
            formatter: (value) => value, // Muestra directamente el valor de la barra
            font: {
              size: 12, // Tamaño de la fuente
              weight: "bold", // Peso de la fuente
            },
          },
        },
        scales: {
          x: {
            stacked: true, // Habilitar apilado en el eje X
            
          },
          y: {
            stacked: true, // Habilitar apilado en el eje Y
            grid: {
                color: '#D4E0E7', // Color de la línea de la cuadrícula (eje X)
                lineWidth: 0.5,  // Ancho de las líneas de la cuadrícula
                drawOnChartArea: false, // No dibujar la cuadrícula en el área del gráfico
                borderColor: '#D4E0E7', // Color de la línea de borde del eje X
              },
          },
        },
      },
    });

    // Limpiar al desmontar el componente
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Ejecutar solo una vez al montar

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ConteoGeneral;
