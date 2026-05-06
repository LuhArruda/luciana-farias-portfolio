/**
 * Footer Component
 * 
 * Design Philosophy: Minimalismo Corporativo
 * - Fundo azul profundo com texto branco
 * - Layout em duas colunas
 * - Links de contato e redes sociais
 * - Botão WhatsApp flutuante
 */

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1F3A93] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Informações */}
            <div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Luciana Farias
              </h2>
              <p
                className="text-gray-200 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Desenvolvendo experiências digitais com inovação e eficiência. 
                Vamos transformar ideias em realidade!
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Links Rápidos
              </h3>
              <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li>
                  <a href="/home" className="text-gray-200 hover:text-[#FF9D5C] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-200 hover:text-[#FF9D5C] transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="/profile" className="text-gray-200 hover:text-[#FF9D5C] transition-colors">
                    Perfil
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-200 hover:text-[#FF9D5C] transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-gray-400 pt-8">
            <p
              className="text-center text-gray-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © {new Date().getFullYear()} Luciana Farias. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5581982791405?text=Olá Luciana, vi seu portfólio e gostaria de conversar!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hover:scale-110 transition-transform duration-300 shadow-lg"
        title="Abrir WhatsApp"
      >
        <div className="w-16 h-16 bg-[#FF9D5C] rounded-full flex items-center justify-center text-white font-bold text-2xl hover:bg-[#FF8A3D] transition-colors">
          💬
        </div>
      </a>
    </>
  );
}
