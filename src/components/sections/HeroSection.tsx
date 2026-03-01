"use client";

import CTAButton from "@/components/CTAButton";
import { useCountUp, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Bot, Flame } from "lucide-react";
import Image from "next/image";

const STATS = [
  { value: 17, suffix: "K", label: "Alunos Ativos" },
  { value: 5, suffix: " Milhões+", label: "Treinos Realizados" },
  { value: 30, suffix: " Dias", label: "Garantia de Resultado" },
];

const AVATARS = [
  { name: "Jailkson Santos", image: "" },
  { name: "Kauê Moreira", image: "" },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "";

  const first = parts[0][0];
  const last = parts[parts.length - 1][0];

  return `${first}${last}`.toUpperCase();
}

function StatCounter({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 3000, isVisible);
  return (
    <div className="text-center md:text-left">
      <div className="font-display font-bold text-3xl md:text-4xl text-white">
        {count}
        <span className="text-cf-orange">{suffix}</span>
      </div>
      <div className="text-white/60 text-xs md:text-sm mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="hero"
      className="relative z-51 h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-cf-darker/95 via-cf-darker/80 to-cf-darker/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-cf-darker via-transparent to-cf-darker/30" />
      </div>

      <div className="absolute inset-0 z-[1] opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)",
          }}
        />
      </div>

      <div ref={ref} className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-8 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "200ms",
            }}
          >
            <div className="flex -space-x-2">
              {AVATARS.map((avatar) => (
                <div
                  key={avatar.name}
                  className="w-8 h-8 rounded-full border border-cf-darker/40 overflow-hidden bg-cf-darker/80 flex items-center justify-center text-[10px] font-semibold text-white"
                >
                  {avatar.image ? (
                    <Image
                      src={avatar.image}
                      alt={avatar.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{getInitials(avatar.name)}</span>
                  )}
                </div>
              ))}
              <div className="w-8 h-8  rounded-full border border-cf-darker/40 bg-cf-darker/80 flex items-center justify-center text-[10px] font-semibold text-white">
                +99
              </div>
            </div>
            <span className="text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">
              Alunos Satisfeitos
            </span>
          </div>

          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "400ms",
            }}
          >
            Transforme Seu Corpo
            <br />
            e Sua Mente na{" "}
            <span className="text-cf-orange">CrossFit889</span>
          </h1>

          <p
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "600ms",
            }}
          >
            Na CrossFit889, cada treino é um passo rumo à sua melhor versão. Junte-se a uma
            comunidade movida por paixão, disciplina e resultados reais.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "800ms",
            }}
          >
            <CTAButton
              href={`https://wa.me/5577999908265?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula experimental na CrossFit889.")}`}
              size="lg"
              icon={(<Flame />)}
            >
              Agende Sua Aula Grátis
            </CTAButton>
            <CTAButton
              href="#app"
              variant="outline"
              size="lg"
              icon={(<Bot />)}
            >
              Conheça Nossa IA
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#parceiros" className="text-white/40 hover:text-white/70 transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
