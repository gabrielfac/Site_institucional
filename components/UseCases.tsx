import { Building2, Landmark, CheckCircle2 } from 'lucide-react';

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rg-primary mb-4 tracking-tight">
            Casos de Uso
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Abordagens técnicas específicas para os desafios inerentes aos setores público e privado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Setor Público */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-rg-primary text-white rounded-lg flex items-center justify-center">
                <Landmark size={24} />
              </div>
              <h3 className="text-2xl font-bold text-rg-primary">Setor Governamental</h3>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Foco em conformidade, transparência e otimização do serviço público através da digitalização de processos burocráticos.
            </p>

            <ul className="space-y-4">
              {[
                'Automação de processos burocráticos e fluxos de aprovação.',
                'Sistemas focados em transparência e auditoria de dados.',
                'Segurança da informação e adequação a normativas governamentais.',
                'Interoperabilidade entre secretarias e sistemas isolados.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rg-accent shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Setor Privado */}
          <div className="bg-rg-primary rounded-2xl p-8 md:p-10 border border-rg-primary-dark text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Setor Privado</h3>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Foco em escalabilidade, redução de gargalos operacionais e vantagem competitiva guiada por dados.
            </p>

            <ul className="space-y-4">
              {[
                'Redução de gargalos operacionais através de automação.',
                'Tomada de decisão guiada por Inteligência Artificial e Analytics.',
                'Escalabilidade de infraestrutura para picos de demanda.',
                'Integração de sistemas legados com arquiteturas modernas.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-rg-accent shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
