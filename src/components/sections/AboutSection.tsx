import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { Award, Heart, History } from "lucide-react";

const INFO_CARDS = [
  {
    icon: Heart,
    title: "Missão",
    description:
      "Na CrossFit889, nossa missão é salvar vidas e transformar o potencial humano atravéz da atividade física. Nosso ecossistema é um ambiente iclusivo e inspirador, onde cada treino é uma oportunidade para superar desafios, construir resiiência e um novo estilo de vida",
  },
  {
    icon: Award,
    title: "Valores",
    description:
      "Acreditamos no comprometimento como base de cada conquista, no respeito como princípio inegociável, na inovação como motor de evolução e na inclusão como força que nos une. Juntos, construímos um ambiente onde todos têm espaço para crescer e ir além.",
  },
  {
    icon: History,
    title: "Nossa História",
    description:
      "Desde 2018, a CrossFit889 tem sido referência em treinos funcionais de alta intensidade, formando atletas e transformando vidas com dedicação e paixão. Somos o único box credênciado pela CrossFit e Hyrox no Oeste da Bahia.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#f5f5f5] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(0,0,0,0.05) 40px, rgba(0,0,0,0.05) 41px)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <AnimatedSection animation="fade-right">
            <div>
              <span className="text-cf-orange font-display text-sm uppercase tracking-[0.2em] font-medium mb-4 block">
                Sobre Nós
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-[1] tracking-tight text-cf-dark">
                Descubra o<br />
                <span className="text-cf-orange">Diferencial</span>
                <br />
                CrossFit889
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="flex flex-col justify-center">
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase text-cf-dark mb-4 leading-tight">
                Viva o Fitness Como Nunca Antes.{" "}
                <span className="text-cf-orange">Onde Paixão, Força e Comunidade Se Unem</span>
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Na CrossFit889, somos apaixonados por transformar vidas através do movimento.
                Desde 2018, nos dedicamos a criar um ambiente dinâmico e acolhedor onde cada
                pessoa, independente do nível de condicionamento pode evoluir, superar limites
                e alcançar resultados extraordinários.
              </p>
              <div>
                <CTAButton href="#aulas" variant="primary" size="md">
                  Saiba Mais Sobre Nós
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {INFO_CARDS.map((card, i) => (
            <AnimatedSection key={card.title} animation="fade-up" delay={i * 150}>
              <div className="group h-full p-6 md:p-8 bg-white border border-gray-100 hover:border-cf-orange/30 transition-all duration-500 hover:shadow-sm">
                <card.icon
                  className="text-cf-orange mb-4 transition-transform duration-300 group-hover:scale-110"
                  size={32}
                  strokeWidth={1.5}
                />
                <h4 className="font-display font-bold text-lg uppercase text-cf-dark mb-3 tracking-wide">
                  {card.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
