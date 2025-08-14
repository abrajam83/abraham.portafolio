import React from 'react'
import { NavBar, Hero, Gallery, LogoGallery, Footer, SideBar, TresDFolio } from "../components"
import { logoAb, LinkedinLogo } from '../assets';

const LayeredLayout = () => {
  return (
    <div className="bg-gray700 flex h-auto justify-center items-center md:px-14">
      {/* Div principal, centrado */}

      <div className="relative max-w-[1440px] w-full z-40 mt-24 rounded-t-3xl">

        <div className="relative z-20 bg-black mx-auto rounded-t-3xl">
          <div
            className="fixed top-40 z-50 block 1595:hidden">
            <SideBar />
          </div>

          {/* Capa 1: Hijo principal */}
          <div className="relative z-20 bg-slate-200 w-full mx-auto rounded-t-3xl ">

            <Hero />
            <LogoGallery />
            <Gallery />
            <TresDFolio />
            <Footer />
          </div>

        </div>

        {/* Capa 3: Pleca */}
        <div className="hidden 1595:block fixed mt-24 z-0 w-[130px] h-[800px] bg-gray300 transition-transform duration-300 ease-in-out hover:translate-x-[-75px] left-1/2 -translate-x-1/2 rounded-l-3xl"
          style={{ top: '0px', left: 'calc(50% - 730px - 0px' }}>

          <div className="flex flex-col justify-between items-center h-full px-2 py-6 w-[40px] ml-4">

            <div className="w-[60px] h-[60px] px-1">
              <img
                src={logoAb}
                alt="Mi logo"
                className="w-full h-auto object-contain"
              />
            </div>


            <div className="-rotate-90 text-[14px] tracking-widest font-maison font-normal whitespace-nowrap -mb-6">
              ABRAHAM MALDONADO   <br />
              <span className="text-[14px] tracking-normal font-playfair opacity-70 italic">
                Visual & Brand Designer
              </span>
            </div>

            {/* Iconos abajo */}
            <div className="flex flex-col items-center ">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-200">
                <img
                  src={LinkedinLogo}
                  alt="LinkedIn"
                  className="w-12 h-12"
                />
              </a>
            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default LayeredLayout;

