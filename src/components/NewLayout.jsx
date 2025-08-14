import React from "react";
import { SideBar, Hero, Gallery } from "../components";

function NewLayout() {
return (
    <div className="bg-stone-400 min-h-screen flex justify-center">
      <main className="relative max-w-7xl w-full bg-black text-white flex">
        {/* Sidebar pegado al lado izquierdo del main */}
        <SideBar />

        {/* Contenido scrollable */}
        <div className="ml-[40px] flex-1">
          <Hero />
          <Gallery />
          {/* Más secciones */}
        </div>
      </main>
    </div>
  );
};


export default NewLayout;
