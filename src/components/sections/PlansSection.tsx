"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";
import { useState } from "react";

function formatPrice(value: number): string {
  return Number.isInteger(value)
    ? `R$ ${value}`
    : `R$ ${value.toFixed(2).replace(".", ",")}`;
}

const PLANS = [
  {
    name: "Day Use",
    description: "Ideal para quem quer experimentar ou treinar ocasionalmente sem compromisso.",
    price: 67,
    period: "/aula",
    features: [
      "Acesso a qualquer aula",
      "Sem fidelidade"
    ],
    highlighted: false,
  },
  {
    name: "10x Day Use",
    description: "Flexibilidade total: use suas 10 aulas quando quiser, sem prazo de validade.",
    price: 49,
    period: "/aula",
    features: [
      "10 aulas para usar quando quiser",
      "Válido por 60 dias",
      "Todas as modalidades",
    ],
    highlighted: false,
  },
  {
    name: "Plano Mensal",
    description: "Acesso a todas as aulas e modalidades. O plano mais popular.",
    price: 360,
    period: "/mês",
    features: [
      "Aulas 2, 3 ou 5 vezes por semana",
      "Todas as modalidades",
      "Cardio liberado",
      "Aulão bônus aos sábados e domingos",
    ],
    highlighted: false,
  },
  {
    name: "Plano Trimestral",
    description: "Acesso a todas as aulas e modalidades. O plano mais popular.",
    price: 403,
    period: "/mês",
    features: [
      "Aulas 2, 3 ou 5 vezes por semana",
      "Todas as modalidades",
      "Cardio liberado",
      "Aulão bônus aos sábados e domingos",
    ],
    highlighted: false,
  },
  {
    name: "Plano Semestral",
    description: "Acesso a todas as aulas e modalidades. O plano mais popular.",
    price: 362,
    period: "/mês",
    features: [
      "Aulas 2, 3 ou 5 vezes por semana",
      "Todas as modalidades",
      "Cardio liberado",
      "Aulão bônus aos sábados e domingos",
    ],
    highlighted: false,
  },
  {
    name: "Plano Anual",
    description: "Acesso a todas as aulas e modalidades. O plano mais popular.",
    price: 333,
    period: "/mês",
    features: [
      "Aulas 2, 3 ou 5 vezes por semana",
      "Todas as modalidades",
      "Cardio liberado",
      "Aulão bônus aos sábados e domingos",
    ],
    highlighted: true,
  },
].sort((a, b) => a.price - b.price);

const INITIAL_COUNT = 4;
const REMAINING_PLANS = PLANS.slice(INITIAL_COUNT);

export default function PlansSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="planos" className="bg-[#f5f5f5] py-20 md:py-28 relative">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            subtitle="Investimento"
            title="Planos de Matrícula"
            titleClassName="!text-cf-dark"
          />
        </AnimatedSection>

        <div className="relative">
          <div className="space-y-4">
            {PLANS.slice(0, INITIAL_COUNT).map((plan, i) => (
              <AnimatedSection key={plan.name} animation="fade-up" delay={i * 100}>
                <div
                  className='group flex flex-col md:flex-row items-center justify-between p-6 md:p-8 transition-all duration-500 bg-white text-cf-dark hover:shadow-sm border border-gray-100'>
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-wide">
                        {plan.name}
                      </h3>
                      {plan.highlighted && (
                        <span className="inline-flex items-center gap-1 shadow-sm border-1 border-black text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                          <Star size={10} fill="currentColor" />
                          Mais Popular
                        </span>
                      )}
                    </div>
                    <p
                      className='text-sm text-gray-500'
                    >
                      {plan.description}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 md:mt-2">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className='flex items-center gap-1.5 text-xs text-gray-400'
                        >
                          <Check size={12} className='text-cf-orange'/>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end gap-6 md:gap-8">
                    <div className="text-left">
                      <div className="font-display font-bold text-2xl md:text-3xl">
                      {plan.period !== "/aula" && (
                        <div className='text-xs font-normal uppercase tracking-wider text-gray-400'>
                          A Partir De
                        </div>
                      )}
                        {formatPrice(plan.price)}
                        {plan.period && (
                          <span
                            className='text-sm font-normal uppercase tracking-wider text-gray-400'>
                            {plan.period}
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/5577999908265?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o " + plan.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='
                        inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-wider
                        px-6 py-3 transition-all duration-300 bg-cf-dark text-white hover:bg-cf-orange'>
                      Saiba Mais
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <div
              className="grid"
              style={{
                gridTemplateRows: showAll ? "1fr" : "0fr",
                transition: "grid-template-rows 0.5s ease-in-out",
              }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="space-y-4 pt-4">
                  {REMAINING_PLANS.map((plan, i) => (
                    <AnimatedSection key={plan.name} animation="fade-up" delay={i * 100}>
                      <div
                        className='group flex flex-col md:flex-row items-center justify-between p-6 md:p-8 transition-all duration-500 bg-white text-cf-dark hover:shadow-sm border border-gray-100'>
                        <div className="flex-1 mb-4 md:mb-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-wide">
                              {plan.name}
                            </h3>
                            {plan.highlighted && (
                              <span className="inline-flex items-center gap-1 shadow-sm border-1 border-black text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                                <Star size={10} fill="currentColor" />
                                Mais Popular
                              </span>
                            )}
                          </div>
                          <p
                            className='text-sm text-gray-500'
                          >
                            {plan.description}
                          </p>
      
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 md:mt-2">
                            {plan.features.map((feature) => (
                              <div
                                key={feature}
                                className='flex items-center gap-1.5 text-xs text-gray-400'
                              >
                                <Check size={12} className='text-cf-orange'/>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
      
                        <div className="flex items-end gap-6 md:gap-8">
                          <div className="text-left">
                            <div className="font-display font-bold text-2xl md:text-3xl">
                            {plan.period !== "/aula" && (
                              <div className='text-xs font-normal uppercase tracking-wider text-gray-400'>
                                A Partir De
                              </div>
                            )}
                              {formatPrice(plan.price)}
                              {plan.period && (
                                <span
                                  className='text-sm font-normal uppercase tracking-wider text-gray-400'>
                                  {plan.period}
                                </span>
                              )}
                            </div>
                          </div>
                          <a
                            href={`https://wa.me/5577999908265?text=${encodeURIComponent("Olá! Gostaria saber mais sobre o " + plan.name)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='
                              inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-wider
                              px-6 py-3 transition-all duration-300 bg-cf-dark text-white hover:bg-cf-orange'>
                            Saiba Mais
                            <ArrowRight
                              size={16}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </a>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {!showAll && (
            <>
              <div
                className="absolute bottom-0 left-0 right-0 h-50 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, #f5f5f550, #f5f5f5 65%)",
                }}
                aria-hidden
              />
              <div className="flex justify-center pt-6 -mt-28">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="w-full inline-flex justify-center items-center gap-2 z-5 font-display font-semibold uppercase tracking-wider text-cf-dark hover:text-cf-darker transition-colors"
                >
                  Mostrar mais
                  <ChevronDown size={18} />
                </button>
              </div>
            </>
          )}
      </div>
    </section>
  );
}
