import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-rg-primary-dark py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 flex items-center px-3 py-2">
              <span className="text-slate-400 hover:text-white transition-colors text-sm font-medium">RG Soluções e Inovação</span>
            </div>
          </div>
          
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} RG Soluções e Inovação. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:contato@rgsolucoes.com.br" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
              contato@rgsolucoes.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
