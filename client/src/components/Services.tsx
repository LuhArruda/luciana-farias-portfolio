/**
 * Services Component
 * * Design Philosophy: Minimalismo Corporativo
 * - Grid de cards de serviço
 * - Fundo alternado com cinza claro
 * - Título em Poppins Bold
 * - Espaçamento generoso
 */

import ServiceCard from './ServiceCard';
import frontendImg from '@/assets/frontend.png';
import lowcodeImg from '@/assets/outsystems.png';
import performanceImg from '@/assets/performance.png';
import integracoesImg from '@/assets/integracoes.png';
import responsividadeImg from '@/assets/responsividade.png';
import ia1Img from '@/assets/IA1.png';


const services = [
  {
    icon: frontendImg,
    title: 'Desenvolvimento Front-end',
    description: 'Criação de interfaces modernas e responsivas, garantindo uma excelente experiência para o usuário. Utilizo React.js, HTML5, CSS3, JavaScript e Tailwind CSS para desenvolver soluções dinâmicas e de alto desempenho.',
    hiddenTitle: 'UI/UX',
    hiddenDescription: 'Cada detalhe conta! Meu objetivo é transformar ideias em interfaces intuitivas, utilizando as melhores práticas de UI/UX para entregar um design bonito, acessível e eficiente.',
  },
  {
    icon: lowcodeImg,
    title: 'Aplicações Low-Code (OutSystems)',
    description: 'Desenvolvimento ágil de aplicações web e mobile usando a plataforma OutSystems. Soluções escaláveis, seguras e eficientes, reduzindo o tempo de entrega sem perder qualidade.',
    hiddenTitle: 'OutSystems',
    hiddenDescription: 'Com a abordagem low-code, consigo acelerar o desenvolvimento de sistemas complexos e personalizados, garantindo robustez e segurança, sem abrir mão da performance.',
  },
  // --- NOVO CARD DE IA ---
  {
    icon: ia1Img, 
    title: 'Inteligência Artificial',
    description: 'Uso estratégico de IA para otimizar o fluxo de trabalho, acelerar o desenvolvimento de código e garantir entregas mais ágeis e inteligentes.',
    hiddenTitle: 'Produtividade IA',
    hiddenDescription: 'Integro ferramentas de IA Generativa e automação para potencializar a produtividade e criar soluções inovadoras com agilidade máxima.',
  },
  {
    icon: performanceImg,
    title: 'Otimização e Performance',
    description: 'Melhoria da velocidade, SEO e usabilidade de sites e aplicações, garantindo melhor ranqueamento nos mecanismos de busca e uma navegação fluída.',
    hiddenTitle: 'Usabilidade',
    hiddenDescription: 'Cada segundo importa! Otimizo código, imagens e recursos para garantir sites rápidos, com melhores taxas de conversão e posicionamento no Google.',
  },
  {
    icon: integracoesImg,
    title: 'Integrações e Automação',
    description: 'Conexão de aplicações com APIs, bancos de dados e serviços externos, criando sistemas robustos e eficientes.',
    hiddenTitle: 'Integrações Seguras',
    hiddenDescription: 'Seus sistemas precisam conversar entre si! Desenvolvo integrações seguras e escaláveis para conectar plataformas, automações e serviços de forma fluída e eficiente.',
  },
  {
    icon: responsividadeImg,
    title: 'Design Responsivo & Mobile-First',
    description: 'Interfaces adaptáveis para todos os dispositivos, garantindo uma experiência fluida tanto no desktop quanto no mobile.',
    hiddenTitle: 'Responsividade',
    hiddenDescription: 'Mais de 70% do tráfego vem do mobile! Desenvolvo layouts 100% responsivos, garantindo que seu site fique incrível em qualquer tamanho de tela.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#00051d]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            O que posso fazer pelo seu negócio?
          </h2>
          <div className="w-16 h-1 bg-[#FF9D5C] mx-auto"></div>
        </div>

        {/* Grid de Cards - Agora com 6 itens fecha o grid perfeitamente em 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              hiddenTitle={service.hiddenTitle}
              hiddenDescription={service.hiddenDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}