import { useLocation } from 'wouter';
import { 
  Code, 
  Zap, 
  BarChart3, 
  Database, 
  Smartphone, 
  Globe, 
  Sparkles,
  ArrowRight 
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Services() {
  const [, setLocation] = useLocation();

  const allServices = [
    {
      title: "Desenvolvimento OutSystems",
      description: "Aplicações robustas e escaláveis para web e mobile, utilizando o poder do Low-Code para acelerar a entrega de valor ao seu negócio.",
      icon: <Zap className="text-[#FF9D5C]" size={32} />,
    },
    {
      title: "IA e Automação Inteligente",
      description: "Integração de Inteligência Artificial para otimização de processos, análise preditiva de dados e criação de agentes inteligentes personalizados.",
      icon: <Sparkles className="text-[#FF9D5C]" size={32} />,
    },
    {
      title: "Interfaces com React & Tailwind",
      description: "Criação de front-ends modernos, rápidos e totalmente responsivos, focados na melhor experiência de uso e conversão.",
      icon: <Globe className="text-[#FF9D5C]" size={32} />,
    },
    {
      title: "Arquitetura e Integrações",
      description: "Conexão eficiente entre sistemas via APIs REST/SOAP, garantindo que seus dados fluam com segurança e integridade.",
      icon: <Database className="text-[#FF9D5C]" size={32} />,
    },
    {
      title: "Análise de Performance",
      description: "Diagnóstico técnico para identificar gargalos e otimizar a velocidade das suas aplicações, melhorando o engajamento dos usuários.",
      icon: <BarChart3 className="text-[#FF9D5C]" size={32} />,
    },
    {
      title: "Mobile First Design",
      description: "Desenvolvimento focado na mobilidade, garantindo que cada funcionalidade seja intuitiva em telas de qualquer tamanho.",
      icon: <Smartphone className="text-[#FF9D5C]" size={32} />,
    },
    {
      title: "Consultoria Analítica",
      description: "Aplicação do rigor analítico e metodológico para estruturar soluções de software que resolvem problemas reais de negócio.",
      icon: <Code className="text-[#FF9D5C]" size={32} />,
    },
  ];

  const handleNavigation = (title: string) => {
    const safeTitle = title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-');

    const path = `/service/${safeTitle}`;
    
    setLocation(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-[#00051d] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Cabeçalho da Página */}
          <div className="max-w-4xl mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent py-2 leading-tight">
              Estratégia, Tecnologia <br /> e Inteligência Artificial
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Ofereço soluções que unem a precisão da análise técnica com a agilidade das ferramentas mais modernas do mercado.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={index} 
                onClick={() => handleNavigation(service.title)}
                className={`bg-white/5 p-8 rounded-[40px] border border-white/10 hover:border-[#FF9D5C]/40 transition-all duration-500 group shadow-2xl flex flex-col h-full cursor-pointer select-none ${
                  index === 6 ? 'lg:col-span-1 md:col-span-2 lg:mx-0' : ''
                }`}
              >
                <div className="mb-6 w-16 h-16 bg-[#00051d] border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#FF9D5C]/30 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FF9D5C] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-[#FF9D5C] font-semibold text-sm mt-auto pt-4 group-hover:underline">
                  Saiba mais <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-28 relative overflow-hidden bg-gradient-to-br from-[#FF9D5C] to-[#FF8A3D] p-10 md:p-16 rounded-[50px] text-center shadow-[0_20px_50px_rgba(255,157,92,0.15)]">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#00051d]">
                Vamos impulsionar sua ideia?
              </h2>
              <p className="text-[#00051d]/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
                Estou pronta para integrar IA e as melhores práticas de desenvolvimento ao seu próximo desafio.
              </p>
              
              <button 
                onClick={() => {
                  setLocation('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#00051d] text-white font-bold py-5 px-12 rounded-2xl hover:scale-105 transition-transform shadow-2xl flex items-center gap-3 mx-auto uppercase tracking-wider text-sm cursor-pointer border-none"
              >
                Solicitar Consultoria Gratuita
              </button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}