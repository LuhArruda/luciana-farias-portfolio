import { Link } from 'wouter';
import { ArrowLeft, Book, Code, GraduationCap, Laptop } from 'lucide-react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import lucianaprof1 from '../assets/lucianaprof1.jpeg';
import lucianaprof2 from '../assets/lucianaprof2.jpeg';

export default function Profile() {
  const timeline = [
    {
      year: "2025",
      title: "Graduação em ADS",
      description: "Conclusão da análise e desenvolvimento de sistemas, consolidando a base em lógica de programação, SQL e engenharia de software.",
      icon: <Laptop className="text-[#FF9D5C]" />,
    },
    {
      year: "2023",
      title: "Pós-Graduação Dupla",
      description: "Especialização em Tecnologia da Informação e Química Analítica, unindo competências tecnológicas com análise técnica rigorosa.",
      icon: <GraduationCap className="text-[#FF9D5C]" />,
    },
    {
      year: "2021",
      title: "Licenciatura em Química",
      description: "Formação inicial que desenvolveu meu pensamento analítico e capacidade de resolução de problemas complexos.",
      icon: <Code className="text-[#FF9D5C]" />, 
    }
  ];

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-[#00051d] text-white font-sans pt-32">
        <div className="container mx-auto px-4">
          
          {/* Botão Voltar */}
          <Link href="/">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#FF9D5C] transition-colors mb-8">
              <ArrowLeft size={20} /> Voltar para Home
            </button>
          </Link>

          {/* Cabeçalho do Perfil */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Minha Trajetória</h1>
            <p className="text-gray-400 text-lg">Unindo tecnologia, lógica e sensibilidade para criar soluções extraordinárias.</p>
          </div>

          {/* Linha do Tempo */}
          <div className="max-w-4xl mx-auto relative border-l-2 border-white/10 ml-4 md:ml-auto md:border-l-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:w-0.5 md:before:h-full md:before:bg-white/10">
            {timeline.map((item, index) => (
              <div key={index} className={`mb-12 flex justify-between items-center w-full md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                <div className="z-20 flex items-center justify-center absolute left-[-17px] md:left-1/2 md:ml-[-20px] w-10 h-10 bg-[#00051d] border-2 border-[#FF9D5C] rounded-full shadow-[0_0_15px_rgba(255,157,92,0.3)]">
                  {item.icon}
                </div>
                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#FF9D5C]/50 transition-all group text-left">
                    <span className="text-[#FF9D5C] font-mono text-sm mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF9D5C] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Seção de Fotos */}
          <div className="max-w-4xl mx-auto mt-24 pb-20">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Além do Código: Atuação e Propósito
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="group">
                <div className="relative overflow-hidden rounded-[40px] shadow-2xl mb-4 border border-white/5">
                  <img 
                    src={lucianaprof1} 
                    alt="Atuação Profissional" 
                    className="w-full h-[550px] object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-[#FF9D5C] font-semibold text-lg ml-4">Liderança e Mentoria</h3>
                <p className="text-gray-400 text-sm ml-4 mt-1">Compartilhando conhecimento e impulsionando novos talentos na tecnologia.</p>
              </div>
              <div className="group">
                <div className="relative overflow-hidden rounded-[40px] shadow-2xl mb-4 border border-white/5">
                  <img 
                    src={lucianaprof2} 
                    alt="Inspiração e Vida" 
                    className="w-full h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-[#FF9D5C] font-semibold text-lg ml-4">Foco e Resiliência</h3>
                <p className="text-gray-400 text-sm ml-4 mt-1">Minha base familiar é o que sustenta minha busca constante pela excelência.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}