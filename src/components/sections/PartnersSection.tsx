import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const PARTNERS = [
  { name: "CrossFit", logo: "CrossFit", image: "/crossfit.svg" },
  { name: "Hyrox", logo: "Hyrox", image: "/hyrox.svg" },
  { name: "JKS CROSS", logo: "JKS CROSS", image: "/jks.svg" },
];

export default function PartnersSection() {
  return (
    <section id="parceiros" className="bg-[#f5f5f5] pt-8 md:pt-10 overflow-hidden">
      <div className="container">
        <AnimatedSection animation="fade-in">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-neutral-400 font-display font-semibold mb-6">
            Nossos Parceiros
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-14 lg:gap-20 flex-wrap">
            {PARTNERS.map((partner, i) => (
              <div
                key={partner.name}
                className="flex items-center justify-center min-h-[2.5rem] text-black/60 hover:text-black/80 transition-colors duration-300 font-display font-bold text-3xl md:text-3xl tracking-wider uppercase select-none"
                style={{ transitionDelay: '200ms' }}
              >
                {partner.image ? (
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={160}
                    height={48}
                    className="h-6 md:h-8 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300"
                    style={{ transitionDelay: '200ms' }}
                  />
                ) : (
                  partner.logo
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
