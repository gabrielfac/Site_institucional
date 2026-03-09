"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 flex items-center gap-3">
                <img
                  src="/assets/images/logo.png"
                  alt="RG Soluções e Inovação"
                  className="h-full w-auto object-contain"
                />
                <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rg-primary to-rg-accent">
                  Soluções e Inovação
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#solucoes"
              className="text-sm font-medium text-slate-600 hover:text-rg-primary transition-colors"
            >
              Soluções e Inovação
            </Link>
            <Link
              href="#casos-de-uso"
              className="text-sm font-medium text-slate-600 hover:text-rg-primary transition-colors"
            >
              Casos de Uso
            </Link>
            <Link
              href="#simulacao"
              className="text-sm font-medium text-slate-600 hover:text-rg-primary transition-colors"
            >
              Simulação de Impacto
            </Link>
            <a
              href="https://wa.me/5511985132645?text=Ol%C3%A1!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rg-accent hover:bg-rg-accent-hover text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm"
            >
              Falar com Especialista
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-rg-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link
              href="#solucoes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Soluções e Inovações
            </Link>
            <Link
              href="#casos-de-uso"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Casos de Uso
            </Link>
            <Link
              href="#simulacao"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Simulação de Impacto
            </Link>
            <div className="pt-4 px-3">
              <a
                href="https://wa.me/5511985132645?text=Ol%C3%A1!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-rg-accent hover:bg-rg-accent-hover text-white px-5 py-3 rounded-md text-base font-semibold transition-colors"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
