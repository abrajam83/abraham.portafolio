import React, { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from "chart.js";
import data from "../data/sentimientos_por_carrera.json";
import "chartjs-plugin-datalabels"; // Importar el plugin para etiquetas de datos

Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

const ConteoGeneral = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Extraer datos del JSON
    const carreras = data.carreras.map((carrera) => carrera.carrera);
    
    // Crear un objeto base para los conteos de sentimientos
    const conteosPorSentimiento = {
      Positivo: [],
      Neutro: [],
      Negativo: [],
    };

    // Rellenar los conteos por sentimiento
    data.carreras.forEach((carrera) => {
      const conteos = { Positivo: 0, Neutro: 0, Negativo: 0 };
      carrera.sentimientos.forEach((sentimiento) => {
        conteos[sentimiento.sentimiento] = sentimiento.conteo;
      });
      // Agregar los conteos al objeto base
      conteosPorSentimiento.Positivo.push(conteos.Positivo);
      conteosPorSentimiento.Neutro.push(conteos.Neutro);
      conteosPorSentimiento.Negativo.push(conteos.Negativo);
    });

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destruir la instancia previa si existe
    }

    // Crear la gráfica con Chart.js
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: carreras, // Carreras como etiquetas en el eje Y
        datasets: [
          {
            label: "Positivo",
            data: conteosPorSentimiento.Positivo,
            backgroundColor: "#276685", // Verde
          },
          {
            label: "Neutro",
            data: conteosPorSentimiento.Neutro,
            backgroundColor: "#ACA49F", // Amarillo
          },
          {
            label: "Negativo",
            data: conteosPorSentimiento.Negativo,
            backgroundColor: "#E00034", // Rojo
          },
        ],
      },
      options: {
        responsive: true, // Asegura que el gráfico se redimensione
        maintainAspectRatio: false, // Deshabilita la relación de aspecto fija
        indexAxis: "y", // Cambiar los ejes para un gráfico horizontal
        plugins: {
          legend: {
            position: "bottom", // Colocar la leyenda debajo
            align: "start", // Alinear la leyenda a la izquierda
            labels: {
                usePointStyle: true, // Usar estilos de puntos personalizados
                pointStyle: "circle", // Cambiar el estilo del punto a círculo
                
                font: {
                    size: 13, // Tamaño del texto
                  },
              },
          },
        
          datalabels: {
            // Desactivar la visualización de los valores sobre las barras
            display: false, // No mostrar los datos sobre las barras
          },
        },
        scales: {
          x: {
            stacked: true, // Configuración apilada en el eje X
            beginAtZero: true, // Empezar desde 0
            ticks: {
              callback: function (value) {
                // Mostrar los ticks solo si son mayores que 0
                return value === 0 ? "" : value;
              },
            },
          },
          y: {
            stacked: true, // Configuración apilada en el eje Y
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

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Limpiar instancia al desmontar
      }
    };
  }, []);

  return (
    <div className="p-4 bg-white w-full h-[800px] rounded-lg shadow-md">
      {/* Ajustar el tamaño del canvas dentro del contenedor */}
      <canvas ref={chartRef} style={{ display: "block", width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ConteoGeneral;
