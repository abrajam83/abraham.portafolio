import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LandingPage, ContactPage, NavBar, Footer, MUCD, HilandoDerechos, LaPaz, CasosDeEstudio, NueveOnce, Blog, Gallery, Monitoreo, Tmymv, IberoCluster, Citibanamex, Simo, Truper } from "./components";
import ScrollToTop from "./components/ScrollToTop"; // Importa ScrollToTop

// --- Este componente se encargará de controlar la visibilidad del navbar ---
function LayoutWithConditionalNavbar() {
  const location = useLocation();

  // Puedes ajustar esta lógica según lo que necesites
  const showNavBar = location.pathname.startsWith("/project");

  return (
    <>
      {showNavBar && <NavBar />}
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
          <Route path="/project/iberoCluster" element={<IberoCluster />} />
          <Route path="/project/citibanamex" element={<Citibanamex />} />
          <Route path="/project/simo" element={<Simo />} />
          <Route path="/project/truper" element={<Truper />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
         <LayoutWithConditionalNavbar />
      </div>
    </Router>
  );
}

export default App;
