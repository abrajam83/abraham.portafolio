import React, { useState } from "react";
import { Logofolio, LogoModal } from "../components";
import {
  exitPoll,
  fashion,
  hilandoDerechos,
  imaginesys,
  visionF,
  memoria,
  ToolkitVF01,
  ToolkitVF02,
  ToolkitVF03,
  ToolkitVF04,
  ToolkitFTIintro,
  ToolkitFTI01,
  ToolkitFTI02,
  ToolkitFTI03,
  ToolkitFTI04,
  ToolkitFTI05,
  ToolkitTMYMVlogo,
  ToolkitTMYMV01,
  ToolkitTMYMV02,
  ToolkitTMYMV03,
  ToolkitTMYMV04,
  ToolkitHDlogo,
  ToolkitHD01,
  ToolkitHD02,
  ToolkitHD03,
  ToolkitHD04,
  ToolkitHD05,
  ToolkitHD06,
  toolkitEP01,
  toolkitEP02,
  toolkitEP03,
  toolkitEP04,
  toolkitEP05,
  toolkitEP06,
  toolkitEP07,
  toolkitImaginesys01,
  toolkitImaginesys02,
  toolkitImaginesys03,
  toolkitImaginesys04
} from "../assets";

function LogoGallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const projects = [
    {
      id: "memoria", backgroundImage: memoria,
      images: [
        { title: "Logo", src: ToolkitTMYMVlogo },
        { title: "Toolkit", src: ToolkitTMYMV01 },
        { title: "Reportes", src: ToolkitTMYMV02 },
        { title: "Reporte Final", src: ToolkitTMYMV03 },
        { title: "Aplicaciones", src: ToolkitTMYMV04 },
      ],
    },
    {
      id: "hilando", backgroundImage: hilandoDerechos,
      images: [
        { title: "Logo", src: ToolkitHDlogo },
        { title: "Toolkit", src: ToolkitHD01 },
        { title: "Template para presentaciones", src: ToolkitHD02 },
        { title: "Reporte Final", src: ToolkitHD03 },
        { title: "Reporte Final", src: ToolkitHD04 },
        { title: "Reporte Final", src: ToolkitHD06 },
        { title: "Infografías", src: ToolkitHD05 },
      ],
    },

    {
      id: "fashion", backgroundImage: fashion,
      images: [
        { title: "Logo", src: ToolkitFTIintro },
        { title: "Reporte Final", src: ToolkitFTI03 },
        { title: "Reporte Final", src: ToolkitFTI04 },
        { title: "Presentaciones", src: ToolkitFTI02 },
        { title: "Brochure", src: ToolkitFTI01 },
        { title: "Posts redes", src: ToolkitFTI05 },
      ],
    },
    { 
      id: "exit", backgroundImage: exitPoll,
    images: [
        { title: "Logo", src: toolkitEP01 },
        { title: "Toolkit", src: toolkitEP02 },
        { title: "Reporte de frecuencias", src: toolkitEP03 },
        { title: "Manual del encuestador", src: toolkitEP04 },
        { title: "Infografía para cliente", src: toolkitEP05 },
        { title: "Infografías para encuestadores", src: toolkitEP06 },
        { title: "Tablero y reporte final", src: toolkitEP07 },
      ],
    },
    {
      id: "vision", backgroundImage: visionF,
      images: [
        { title: "Toolkit", src: ToolkitVF01 },
        { title: "Presentaciones", src: ToolkitVF02 },
        { title: "Reporte Final", src: ToolkitVF03 },
        { title: "Reporte Final", src: ToolkitVF04 },
      ],
    },
    { id: "imaginesys", backgroundImage: imaginesys,
       images: [
        { title: "Logo", src: toolkitImaginesys01 },
        { title: "Logo secundario", src: toolkitImaginesys02 },
        { title: "Webpage", src: toolkitImaginesys03 },
        { title: "Screens", src: toolkitImaginesys04 },
      ],
     },
  ];

  const handleOpenModal = (images) => {
    setModalImages(images);
    setActiveIndex(0);
    setModalOpen(true);
  };

  return (
    <div className="div">
      <div className="h-[1px] bg-gray950"></div>
    <div className="bg-black px-8 pt-10 pb-24">
      
      <h1 className="text-white font-normal text-3xl mb-8">Logofolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={project.id} onClick={() => handleOpenModal(project.images)}
            className="cursor-pointer">
            <Logofolio
              id={project.id}
              backgroundImage={project.backgroundImage}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <LogoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        images={modalImages}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
    </div>
  );
}

export default LogoGallery;
