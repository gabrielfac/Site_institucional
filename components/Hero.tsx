import Link from "next/link";
import { ArrowRight, Shield, Zap, Server } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-20 opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-rg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-rg-accent"></span>
              Engenharia de Software B2B & Gov
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-rg-primary leading-[1.1] mb-6">
              Modernização e Automação de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rg-primary to-rg-accent">
                Processos
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Eficiência operacional escalável para o setor corporativo privado
              e transformação digital com segurança e governança para a gestão
              pública.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#simulacao"
                className="inline-flex justify-center items-center gap-2 bg-rg-accent hover:bg-rg-accent-hover text-white px-8 py-4 rounded-md text-base font-semibold transition-all shadow-lg shadow-rg-accent/20 hover:shadow-rg-accent/30"
              >
                Agendar Diagnóstico Técnico
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#solucoes"
                className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-md text-base font-medium transition-all"
              >
                Explorar Soluções
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-start sm:items-center text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Shield size={18} className="text-rg-primary/60" />
                Segurança da Informação
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Zap size={18} className="text-rg-primary/60" />
                Alta Performance
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Server size={18} className="text-rg-primary/60" />
                Infraestrutura Resiliente
              </div>
            </div>
          </div>

          {/* Coluna Direita - Imagem Hero */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-rg-primary/10 to-rg-accent/10 rounded-2xl transform rotate-3 scale-105"></div>
            <img
              src="/assets/images/hero-ai.png"
              alt="Inteligência Artificial e Automação"
              className="relative rounded-2xl shadow-2xl w-full object-cover border border-slate-100 aspect-[4/3] bg-slate-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
