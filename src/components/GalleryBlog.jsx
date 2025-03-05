import React from "react";
import GalleryItem from "./GalleryItem";
import { MucdCover, BebbiaCover, LaPazCover } from "../assets";

function Gallery() {
  const projects = [
    {
      id: "mucd",
      backgroundImage: MucdCover,
    },
    {
      id: "bebbia",
      backgroundImage: BebbiaCover,
    },
    {
      id: "lapaz",
      backgroundImage: LaPazCover ,
    },
  ];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl justify-center">
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
