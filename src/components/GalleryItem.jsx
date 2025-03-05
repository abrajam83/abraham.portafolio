import React from "react";
import { Link } from "react-router-dom";

function GalleryItem({ id, backgroundImage }) {
  return (
    <Link
      to={`/project/${id}`}
      className="relative group block overflow-hidden"
    >
      {/* Contenedor con proporción fija */}
      <div className="aspect-w-16 aspect-h-9">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      </div>
    </Link>
  );
}

export default GalleryItem;
