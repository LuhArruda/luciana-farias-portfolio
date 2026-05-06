import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

/**
 * Home Page - Portfólio Luciana Farias
 * * Design Philosophy: Minimalismo Corporativo + Spotlight Effect
 */

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Captura o movimento do mouse para atualizar a posição da luz
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#00051d] relative overflow-hidden">
      {/* A LUZINHA (Spotlight Effect)
          - pointer-events-none: essencial para você conseguir clicar nos botões abaixo da luz.
          - transition-opacity: para um movimento suave.
      */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 157, 92, 0.12), transparent 80%)`,
        }}
      />

      {/* Camada de Conteúdo */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-1">
          <Hero />
          <Services />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}