import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import { MucdCover, LaPazCover, HilandoCover, NueveOnce, iberoCoverNlp, iberoCoverClusters, monitoreoCover, tmymvCover, citiCover, simoCover, truperCover, monitoreoCover2 } from "../assets";
import { motion } from "framer-motion";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", "Diseño", "Ux/Ui", "Data Analytics"];

  const projects = [
    {
      id: "tmymv",
      backgroundImage: tmymvCover,
      category: "Ux/Ui"
    },
    {
      id: "nueveonce",
      backgroundImage: NueveOnce,
      category: "Ux/Ui"
    },
    {
      id: "simo",
      backgroundImage: simoCover,
      category: "Ux/Ui"
    },
    {
      id: "citibanamex",
      backgroundImage: citiCover,
      category: "Ux/Ui"
    },
    {
      id: "monitoreo",
      backgroundImage: monitoreoCover2,
      category: "Ux/Ui"
    },
  ];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="div">
      <div className="h-[1px] bg-gray950"></div>
    
    <div className="mx-auto px-8  pt-10 pb-24 bg-black">
      <h1 className="text-white font-normal text-3xl mb-8">Ux | Ui</h1>
       {/* Botones de filtro */}
    

     {/* Galería de proyectos */}
     <motion.div 
     layout
     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center ">
        {filteredProjects.map((project) => (
          <motion.div
          key={project.id} 
            layout 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}>
          <GalleryItem
            key={project.id}
            id={project.id}
            backgroundImage={project.backgroundImage}
          />
          </motion.div>
        ))}
      </motion.div>


    </div>
    </div>
  );
}

export default Gallery;
