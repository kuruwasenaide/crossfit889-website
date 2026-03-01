import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { ArrowRight, Flame } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="relative bg-cf-orange py-20 md:py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-cf-dark"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
      />

      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)",
          }}
        />
      </div>

      <div className="container relative z-10 text-center">
        <AnimatedSection animation="scale-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[1] tracking-tight text-white mb-6 max-w-4xl mx-auto">
            Pronto Para Começar Sua{" "}
            <span className="text-cf-dark">Transformação?</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Junte-se a centenas de pessoas que já transformaram suas vidas na CrossFit889.
            Sua primeira aula experimental é por nossa conta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href={`https://wa.me/5577999908265?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula experimental na CrossFit889.")}`}
              variant="secondary"
              size="lg"
              icon={<Flame size={18} />}
            >
              Agende Sua Aula Grátis
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-cf-dark"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
