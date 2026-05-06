/**
 * Hero Component
 * 
 * Design Philosophy: Minimalismo Corporativo
 * - Layout assimétrico com texto à esquerda
 * - Imagem à direita com efeito de profundidade
 * - CTA destacado em laranja
 * - Tipografia hierárquica com Poppins Bold
 */
import heroProfileImg from '@/assets/hero-profile.png';


export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#00051d] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1F3A93] leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
              >
                Transformando Ideias em
              </h2>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#FF9D5C]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Experiências Digitais Incríveis
              </h2>
            </div>

            <p
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Criando interfaces atraentes e experiências memoráveis com Front-end e OutSystems. 
              Código, criatividade e inovação para projetos extraordinários.
            </p>

            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-[#FF9D5C] text-white rounded-lg hover:bg-[#FF8A3D] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Contrate Agora
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A93] to-[#FF9D5C] opacity-10"></div>
            <img 
               src={heroProfileImg} 
                alt="Foto de perfil de Luciana Farias" 
               className="w-90 h-90 md:w-150 md:h-150 rounded-3x1 object-cover border-4 border-[#00051d] shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
}
