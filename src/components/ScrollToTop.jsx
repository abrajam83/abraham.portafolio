import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Establece la posición del scroll al inicio
    window.scrollTo(0, 0); // Sin efecto de animación
  }, [pathname]); // Ejecuta esto cada vez que cambie la ruta

  return null; // No renderiza nada
};

export default ScrollToTop;
