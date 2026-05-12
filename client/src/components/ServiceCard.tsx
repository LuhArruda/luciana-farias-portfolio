import { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  hiddenTitle: string;
  hiddenDescription: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  hiddenTitle,
  hiddenDescription,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1F3A93] to-[#FF9D5C]">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-[#1F3A93] opacity-20"></div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Texto Visível */}
        <div
          className={`transition-all duration-300 ${
            isHovered ? 'opacity-0 h-0' : 'opacity-100'
          }`}
        >
          <h3
            className="text-xl font-bold text-[#1F3A93] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </h3>
          <p
            className="text-gray-600 text-sm leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {description}
          </p>
        </div>

        {/* Texto Oculto */}
        <div
          className={`transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 h-0'
          }`}
        >
          <h3
            className="text-xl font-bold text-[#FF9D5C] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {hiddenTitle}
          </h3>
          <p
            className="text-gray-600 text-sm leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {hiddenDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
