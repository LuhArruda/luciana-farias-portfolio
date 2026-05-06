import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Perfil', href: '/profile' },
    { label: 'Serviços', href: '/services' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00051d]/90 shadow-sm border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Luciana Farias
            </h1>
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a
                className="text-gray-300 hover:text-[#FF9D5C] transition-colors duration-300 font-medium cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a
              className="px-6 py-2 bg-[#FF9D5C] text-white rounded-lg hover:bg-[#FF8A3D] transition-all duration-300 font-semibold shadow-sm hover:shadow-md cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contato
            </a>
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#00051d] border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a
                  className="text-gray-300 hover:text-[#FF9D5C] transition-colors py-2 text-lg cursor-pointer"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            
            {/* Corrigido para utilizar a rota correta do Wouter */}
            <Link href="/contact">
              <a
                className="px-6 py-3 bg-[#FF9D5C] text-white rounded-lg hover:bg-[#FF8A3D] transition-all text-center font-semibold cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}