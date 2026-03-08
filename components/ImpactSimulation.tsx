import { ArrowRight } from 'lucide-react';
import WhatsAppSim from './WhatsAppSim';

export default function ImpactSimulation() {
  return (
    <section id="simulacao" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna Esquerda (Narrativa) */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rg-accent/10 border border-rg-accent/20 text-xs font-semibold text-rg-accent mb-6">
              Automação Inteligente
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rg-primary mb-6 tracking-tight leading-tight">
              Sua Operação Mais Eficiente, Hoje.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Nossos Agentes de IA não apenas processam dados; eles agem. Veja como eliminamos gargalos de comunicação, reduzimos o absenteísmo em serviços públicos e aceleramos o faturamento corporativo com automação inteligente via canais que seus clientes e cidadãos já usam.
            </p>
            <a
              href="https://web.whatsapp.com/send?phone=5511985132645&text=Ol%C3%A1!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-rg-accent hover:bg-rg-accent-hover text-white px-8 py-4 rounded-md text-base font-semibold transition-all shadow-lg shadow-rg-accent/20 hover:shadow-rg-accent/30"
            >
              Implementar IA na Minha Organização
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Coluna Direita (Animação) */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Efeitos de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rg-primary/5 to-rg-accent/5 rounded-full blur-3xl -z-10"></div>
            <WhatsAppSim />
          </div>
        </div>
      </div>
    </section>
  );
}
