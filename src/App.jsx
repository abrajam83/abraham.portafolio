import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, ContactPage, NavBar, Footer, MUCD, HilandoDerechos, LaPaz, CasosDeEstudio, NueveOnce, Blog, Gallery, Monitoreo, Tmymv } from "./components";
import ScrollToTop from "./components/ScrollToTop"; // Importa ScrollToTop

function App() {
  return (
    <Router>
      {/* Componente ScrollToTop para reiniciar la posición del scroll */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        {/* Navbar visible en todas las rutas */}
        <NavBar />

        {/* Contenido dinámico según la ruta */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/casos" element={<CasosDeEstudio />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project/mucd" element={<MUCD />} />
            <Route path="/project/hilando" element={<HilandoDerechos />} />
            <Route path="/project/lapaz" element={<LaPaz />} />
            <Route path="/project/nueveonce" element={<NueveOnce />} />
            <Route path="/project/blog" element={<Blog />} />
            <Route path="/project/gallery" element={<Gallery />} />
            <Route path="/project/monitoreo" element={<Monitoreo />} />
            <Route path="/project/tmymv" element={<Tmymv />} />
          </Routes>
        </main>

        {/* Footer visible en todas las rutas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
