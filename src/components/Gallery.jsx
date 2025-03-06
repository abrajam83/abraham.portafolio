import React from "react";
import GalleryItem from "./GalleryItem";
import { MucdCover, LaPazCover, HilandoCover, NueveOnce, iberoCover, monitoreoCover, tmymvCover } from "../assets";

function Gallery() {
  const projects = [
    {
      id: "mucd",
      backgroundImage: MucdCover,
    },
    {
      id: "hilando",
      backgroundImage: HilandoCover,
    },
    {
      id: "lapaz",
      backgroundImage: LaPazCover ,
    },
    {
      id: "nueveonce",
      backgroundImage: NueveOnce ,
    },
    {
      id: "blog",
      backgroundImage: iberoCover ,
    },
    {
      id: "monitoreo",
      backgroundImage: monitoreoCover ,
    },
    {
      id: "tmymv",
      backgroundImage: tmymvCover ,
    },
  ];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl items-center pt-52">
      {projects.map((project) => (
        <GalleryItem
          key={project.id}
          id={project.id}
          backgroundImage={project.backgroundImage}
        />
      ))}
    </div>
  );
}

export default Gallery;
