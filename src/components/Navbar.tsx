"use client";

import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "App", href: "#app" },
  { label: "Planos", href: "#planos" },
  // { label: "Depoimentos", href: "#depoimentos" },
  // { label: "Eventos", href: "#eventos" },
  { label: "Loja", href: "#loja" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };  
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-60 transition-all duration-500",
          isScrolled
            ? "bg-cf-dark/95 backdrop-blur-lg shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative w-auto">
              <Image
                src="/logo.png"
                alt="CrossFit889"
                height={40}
                width={160}
                priority
                className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm uppercase tracking-widest text-white/80 hover:text-cf-orange transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cf-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <CTAButton href="#planos" size="sm">
              Seja Membro
            </CTAButton>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-cf-darker/98 backdrop-blur-lg transition-all duration-500 lg:hidden flex flex-col items-center justify-center",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-2xl uppercase tracking-widest text-white hover:text-cf-orange transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <CTAButton
            href="#planos"
            size="lg"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4"
          >
            Matricule-se Agora
          </CTAButton>
        </div>
      </div>
    </>
  );
}
