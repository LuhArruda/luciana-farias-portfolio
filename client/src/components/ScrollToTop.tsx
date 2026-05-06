import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Deixa a subida suave, com efeito legal
    });
  }, [location]);

  return null; // Este componente não renderiza nada na tela
}