import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Clock, Users } from "lucide-react";
import Image from "next/image";

const EVENTS = [
  {
    title: "Throwdown de Aniversário 889",
    shortTitle: "Aniversário 889",
    description:
      "Competição interna comemorativa com categorias scaled e RX, clima de festa e muito PR.",
    image:
      "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=800&q=80",
    slots: 80,
    participants: 120,
    dateTime: "Sáb · 26 de Abril · 8h às 13h",
  },
  {
    title: "Duplas do Dia dos Namorados",
    shortTitle: "Duplas Love",
    description:
      "WODs em dupla para casais e amigos, com baterias temáticas e premiação especial.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    slots: 40,
    participants: 60,
    dateTime: "Sáb · 14 de Junho · 9h às 12h",
  },
  {
    title: "Desafio Hyrox 889",
    shortTitle: "Hyrox 889",
    description:
      "Simulação de prova Hyrox com estações de corrida e força para testar seus limites.",
    image:
      "https://images.unsplash.com/photo-1554344058-8d1d1dbc5960?w=800&q=80",
    slots: 60,
    participants: 90,
    dateTime: "Dom · 30 de Novembro · 7h às 11h",
  },
];

export default function ClassesSection() {
  return (
    <section id="eventos" className="bg-[#f5f5f5] py-20 md:py-28 relative">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            subtitle="Competir Para Evoluir"
            title={
              <>
                Nossos Eventos
              </>
            }
            titleClassName="!text-cf-dark"

          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {EVENTS.map((event, i) => (
            <AnimatedSection key={event.shortTitle} animation="fade-up" delay={i * 150}>
              <div className="group relative overflow-hidden cursor-pointer h-[420px] md:h-[480px] lg:h-[520px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95" />

                <div className="absolute top-0 left-0 w-full h-1 bg-cf-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display font-bold text-xl md:text-2xl uppercase text-white mb-2 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-5 leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock size={14} className="text-cf-orange" />
                      <span className="text-xs uppercase tracking-wider">
                        {event.slots} vagas
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Users size={14} className="text-cf-orange" />
                      <span className="text-xs uppercase tracking-wider">
                        {event.participants}+ atletas
                      </span>
                    </div>
                  </div>

                  <div className="text-white/40 text-xs mb-4 uppercase tracking-wider">
                    {event.dateTime}
                  </div>

                  <div className="flex items-center gap-2 text-cf-orange font-display font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span>Quero Participar</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
