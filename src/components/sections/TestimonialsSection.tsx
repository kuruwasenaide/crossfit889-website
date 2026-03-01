import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Oliveira",
    role: "Aluna há 2 anos",
    text: "A CrossFit889 mudou completamente minha relação com exercício. Cheguei sem saber nada e hoje compito em campeonatos regionais. Os coaches são incríveis e a comunidade te puxa pra cima!",
    avatar: "SO",
  },
  {
    name: "Ricardo Mendes",
    role: "Aluno há 1 ano",
    text: "Perdi 18kg nos primeiros 6 meses. O que mais me impressiona é como cada treino é diferente — nunca fica monótono. A equipe realmente se importa com seu progresso.",
    avatar: "RM",
  },
  {
    name: "Ana Beatriz Costa",
    role: "Aluna há 3 anos",
    text: "Depois de anos tentando academias tradicionais sem resultado, encontrei na CrossFit889 o que faltava: motivação real, treinos que funcionam e pessoas que te inspiram todos os dias.",
    avatar: "AC",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-cf-dark py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-0 top-20 bottom-20 w-1.5 bg-cf-orange hidden lg:block" />

      <div className="container relative z-10">
        <AnimatedSection>
          <SectionHeading
            subtitle="Depoimentos"
            title={
              <>
                Resultados Que{" "}
                <span className="text-cf-orange">Falam Por Si</span>
              </>
            }
            accentBar
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection
              key={testimonial.name}
              animation="fade-up"
              delay={i * 100}
            >
              <div className="group p-6 md:p-8 bg-cf-surface/50 border border-white/5 hover:border-cf-orange/20 transition-all duration-500 h-full flex flex-col">
                <Quote
                  size={24}
                  className="text-cf-orange/30 mb-4 group-hover:text-cf-orange/60 transition-colors duration-300"
                />
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-cf-orange/20 flex items-center justify-center text-cf-orange font-display font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-white text-sm uppercase tracking-wide">
                      {testimonial.name}
                    </div>
                    <div className="text-white/40 text-xs">{testimonial.role}</div>
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
