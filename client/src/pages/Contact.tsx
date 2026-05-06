import { Link } from 'wouter';
import { Mail, Phone, Linkedin, Github, Send, ArrowLeft } from 'lucide-react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#00051d] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          <div className="max-w-5xl mx-auto">
            {/* Título com correção do corte de letras e espaçamento */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-2 pb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-tight">
              Vamos construir algo juntos?
            </h1>
            <p className="text-gray-400 text-lg mb-12">
              Estou disponível para novos projetos, consultoria em OutSystems ou apenas para uma troca de ideias sobre tecnologia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Lado Esquerdo: Informações com links reais */}
              <div className="space-y-8">
                <a href="mailto:lucianafariasarruda@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#FF9D5C] transition-all">
                    <Mail className="text-[#FF9D5C]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <p className="text-lg font-medium">lucianafariasarruda@gmail.com</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/luciana-arruda-tecnologia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#FF9D5C] transition-all">
                    <Linkedin className="text-[#FF9D5C]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="text-lg font-medium">in/luciana-arruda-tecnologia</p>
                  </div>
                </a>

                <a href="https://wa.me/5581982791405?text=Olá Luciana, vi seu portfólio e gostaria de conversar!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#FF9D5C] transition-all">
                    <Phone className="text-[#FF9D5C]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-lg font-medium">+55 (81) 98279-1405</p>
                  </div>
                </a>
              </div>

              {/* Lado Direito: Formulário com Formspree */}
              <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 shadow-2xl">
                <form action="https://formspree.io/f/xlgzrwdw" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                    <input name="name" type="text" required className="w-full bg-[#00051d] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF9D5C] transition-colors" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                    <input name="email" type="email" required className="w-full bg-[#00051d] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF9D5C] transition-colors" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                    <textarea name="message" rows={4} required className="w-full bg-[#00051d] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF9D5C] transition-colors" placeholder="Como posso te ajudar?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#FF9D5C] text-white font-bold py-4 rounded-xl hover:bg-[#FF8A3D] transition-all flex items-center justify-center gap-2">
                    Enviar Mensagem <Send size={18} />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}