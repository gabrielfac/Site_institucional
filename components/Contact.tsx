'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Solicitação enviada com sucesso. Nossa equipe técnica entrará em contato.');
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rg-primary mb-4 tracking-tight">
            Agende um Diagnóstico
          </h2>
          <p className="text-lg text-slate-600">
            Descreva seu desafio técnico. Nossa equipe de engenharia avaliará a viabilidade e proporá uma arquitetura de solução.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-rg-primary focus:border-rg-primary outline-none transition-all"
                  placeholder="João Silva"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-rg-primary focus:border-rg-primary outline-none transition-all"
                  placeholder="joao@organizacao.com.br"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="organization" className="block text-sm font-medium text-slate-700">
                Organização / Órgão Público
              </label>
              <input
                type="text"
                id="organization"
                required
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-rg-primary focus:border-rg-primary outline-none transition-all"
                placeholder="Nome da Empresa ou Prefeitura"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="challenge" className="block text-sm font-medium text-slate-700">
                Descrição do Desafio Técnico
              </label>
              <textarea
                id="challenge"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-rg-primary focus:border-rg-primary outline-none transition-all resize-none"
                placeholder="Descreva brevemente o cenário atual e o objetivo de modernização ou automação..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-2 bg-rg-primary hover:bg-rg-primary-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-all disabled:opacity-70"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Contato Técnico'}
              {!isSubmitting && <Send size={18} />}
            </button>
            <p className="text-xs text-center text-slate-500 mt-4">
              Seus dados estão seguros e serão utilizados apenas para fins de contato comercial.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
