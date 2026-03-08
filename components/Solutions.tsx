import { BrainCircuit, CloudCog, DatabaseBackup } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: <BrainCircuit size={32} className="text-rg-accent" />,
      image: '/assets/images/icon-ai.png',
      title: 'Agentes de Inteligência Artificial',
      description: 'Automação de triagem, processamento de documentos não estruturados e atendimento inteligente para redução de carga operacional.',
    },
    {
      icon: <CloudCog size={32} className="text-rg-accent" />,
      image: '/assets/images/icon-cloud.png',
      title: 'Engenharia de Nuvem & DevOps',
      description: 'Arquiteturas resilientes, seguras e de alta disponibilidade. Implementação de pipelines CI/CD e monitoramento contínuo.',
    },
    {
      icon: <DatabaseBackup size={32} className="text-rg-accent" />,
      image: '/assets/images/icon-legacy.png',
      title: 'Modernização de Sistemas Legados',
      description: 'Integração via APIs robustas, extração de dados e reestruturação de bancos de dados relacionais para ambientes escaláveis.',
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-rg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rg-primary mb-4 tracking-tight">
            Arquitetura e Soluções
          </h2>
          <p className="text-lg text-slate-600">
            Desenvolvemos infraestrutura de software orientada a dados, focada em interoperabilidade e eficiência em escala.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-rg-accent/5 transition-colors">
                  {solution.icon}
                </div>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-12 h-12 object-contain opacity-80"
                />
              </div>
              <h3 className="text-xl font-semibold text-rg-primary mb-3">
                {solution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
