import { useRoute, Link } from 'wouter';
import { 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Globe, 
  Database, 
  BarChart3, 
  Smartphone, 
  Code 
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServiceDetail() {
  const [match, params] = useRoute('/service/:serviceName');

  if (!match || !params.serviceName) {
    return (
      <div className="min-h-screen bg-[#00051d] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Serviço não encontrado</h1>
        <Link href="/services">
          <span className="text-[#FF9D5C] hover:underline flex items-center gap-2 cursor-pointer">
            <ArrowLeft size={16} /> Voltar para os serviços
          </span>
        </Link>
      </div>
    );
  }

  const serviceTitle = params.serviceName
    .split('-')
    .map(word => {
      if (word === 'and') return '&';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  const getServiceIcon = (title: string) => {
    switch (title) {
      case 'Desenvolvimento OutSystems':
        return <Zap className="text-[#FF9D5C]" size={40} />;
      case 'IA e Automação Inteligente':
        return <Sparkles className="text-[#FF9D5C]" size={40} />;
      case 'Interfaces com React & Tailwind':
        return <Globe className="text-[#FF9D5C]" size={40} />;
      case 'Arquitetura e Integrações':
        return <Database className="text-[#FF9D5C]" size={40} />;
      case 'Análise de Performance':
        return <BarChart3 className="text-[#FF9D5C]" size={40} />;
      case 'Mobile First Design':
        return <Smartphone className="text-[#FF9D5C]" size={40} />;
      case 'Consultoria Analítica':
        return <Code className="text-[#FF9D5C]" size={40} />;
      default:
        return <Code className="text-[#FF9D5C]" size={40} />;
    }
  };

  const getServiceDescription = (title: string) => {
    switch (title) {
      case 'Desenvolvimento OutSystems':
        return 'Aplicações robustas e escaláveis para web e mobile, utilizando o poder do Low-Code para acelerar a entrega de valor ao seu negócio com alto padrão de qualidade e arquitetura 4-Layer Canvas.';
      case 'IA e Automação Inteligente':
        return 'Integração de Inteligência Artificial para otimização de processos, análise preditiva de dados e criação de agentes inteligentes personalizados para a sua empresa.';
      case 'Interfaces com React & Tailwind':
        return 'Criação de front-ends modernos, rápidos e totalmente responsivos aplicando o conceito Utility-First, focados na melhor experiência de uso e conversão.';
      case 'Arquitetura e Integrações':
        return 'Conexão eficiente entre sistemas via APIs REST/SOAP, garantindo que seus dados fluam com segurança e integridade entre diferentes plataformas.';
      case 'Análise de Performance':
        return 'Diagnóstico técnico para identificar gargalos e otimizar a velocidade das suas aplicações, melhorando o engajamento dos usuários e ranqueamento no Google.';
      case 'Mobile First Design':
        return 'Desenvolvimento focado na mobilidade, garantindo que cada funcionalidade seja intuitiva em telas de qualquer tamanho (smartphones e tablets).';
      case 'Consultoria Analítica':
        return 'Aplicação do rigor analítico e metodológico para estruturar soluções de software que resolvem problemas reais de negócio.';
      default:
        return 'Solução tecnológica sob medida para o seu negócio.';
    }
  };

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-[#00051d] text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-[#FF9D5C] font-semibold text-sm hover:underline cursor-pointer select-none mb-6">
              <ArrowLeft size={16} /> Voltar para Serviços
            </span>
          </Link>

          <div className="max-w-4xl mb-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-[#00051d] border border-white/10 rounded-3xl flex items-center justify-center shrink-0">
              {getServiceIcon(serviceTitle)}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
                {serviceTitle}
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                {getServiceDescription(serviceTitle)}
              </p>
            </div>
          </div>

          <hr className="border-white/10 my-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold text-white">Sobre a Solução</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Este serviço foi desenhado para aplicar as melhores práticas de mercado. 
                Utilizamos as tecnologias mais recentes e eficientes para garantir escalabilidade, 
                segurança e uma experiência de usuário impecável.
              </p>

              <h3 className="text-xl font-bold text-white pt-6">Principais Diferenciais</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#FF9D5C] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 leading-relaxed">
                    <strong>Foco no Negócio:</strong> Alinhamento direto entre a tecnologia e os objetivos estratégicos da empresa.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#FF9D5C] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 leading-relaxed">
                    <strong>Performance e Escalabilidade:</strong> Arquitetura pensada para crescer junto com a sua demanda.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#FF9D5C] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 leading-relaxed">
                    <strong>Suporte Especializado:</strong> Atendimento próximo para tirar dúvidas e realizar melhorias contínuas.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 flex flex-col justify-between h-auto shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#FF9D5C]">Precisa de ajuda com este serviço?</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Vamos conversar sobre como implementar essa tecnologia no seu projeto atual.
                </p>
              </div>
              
              <Link href="/contact">
                <button className="w-full bg-[#FF9D5C] text-[#00051d] font-bold py-4 px-6 rounded-2xl hover:bg-[#FF8A3D] transition-all shadow-[0_10px_30px_rgba(255,157,92,0.2)] flex items-center justify-center gap-3 uppercase tracking-wider text-sm cursor-pointer border-none">
                  Falar com especialista <Send size={16} />
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}