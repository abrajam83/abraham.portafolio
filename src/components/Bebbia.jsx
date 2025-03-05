import React from "react";

function Bebbia() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bebbia</h1>
      <p className="text-gray-700 mb-6">
        Iniciativa para mejorar el acceso al agua limpia y sostenible...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Aquí agregarías las imágenes específicas del proyecto */}
        <img src="/images/proyecto2-1.jpg" alt="Imagen 1" className="w-full h-auto rounded-lg shadow-md" />
        <img src="/images/proyecto2-2.jpg" alt="Imagen 2" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
}

export default Bebbia;
