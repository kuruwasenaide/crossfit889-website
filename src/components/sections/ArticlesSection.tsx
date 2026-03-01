"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { Parallax, useParallaxController } from "react-scroll-parallax";

export default function ArticlesSection() {
  const parallaxController = useParallaxController();

  return (
    <section id="app" className="bg-cf-dark overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end">
          <AnimatedSection animation="fade-right">
            <div className="py-20 md:py-28">
              <SectionHeading
                subtitle="Exclusivo CrossFit889"  
                title={
                  <>
                    Nutricionista
                    <br />
                    <span className="text-cf-orange">de IA</span>
                  </>
                }
                className="!mb-6"
              />
              <p className="text-white/60 leading-relaxed mb-6 max-w-lg">
                A Diana é a assistente de nutrição com inteligência artificial da CrossFit889.
                Acompanhe calorias, proteínas, carboidratos e gorduras, veja seu progresso semanal
                e histórico completo. Tudo no app, com metas personalizadas para seu objetivo.
              </p>
              <ul className="text-white/70 text-sm space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cf-orange" />
                  Perfil e metas personalizadas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cf-orange" />
                  Acompanhamento de macros em tempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cf-orange" />
                  Histórico e progresso da semana
                </li>
              </ul>
              {/* <CTAButton href="#planos" size="lg">
                Em Breve
              </CTAButton> */}
              <div className="flex gap-4">
                <a
                  className="relative w-auto rounded-lg cursor-pointer opacity-90"
                  style={{ boxShadow: "inset 0 0 0 2px var(--color-cf-dark)" }}
                >
                  <Image
                    src="/appstore.jpeg"
                    alt="App Store"
                    height={40}
                    width={160}
                    priority
                    className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />
                </a>
{/* 
                <a
                  className="relative w-auto rounded-lg cursor-pointer opacity-90"
                  style={{ boxShadow: "inset 0 0 0 2px var(--color-cf-dark)" }}
                >
                  <Image
                    src="/googleplay.jpeg"
                    alt="App Store"
                    height={40}
                    width={160}
                    priority
                    className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />
                </a> */}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={150}>
            <div className="relative flex justify-center overflow-visible">
              <Parallax rotate={[15, 5]} translateY={[60, 5]} opacity={[-0.5, 2.5]}>
                <div className="relative w-full   lg:w-[40vw] h-full">
                  <Image
                    src="/app.png"
                    alt="App CrossFit889 — perfil e histórico de nutrição com a Diana"
                    width={640}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={false}
                    onLoad={() => parallaxController?.update()}
                  />
                </div>
              </Parallax>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
