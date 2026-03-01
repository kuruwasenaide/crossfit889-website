import AnimatedSection from "@/components/AnimatedSection";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const FOOTER_LINKS = [
  {
    title: "Navegação",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "App", href: "#app" },
      { label: "Planos", href: "#planos" },
      // { label: "Depoimentos", href: "#depoimentos" },
      { label: "Eventos", href: "#eventos" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cf-darker pt-16 md:pt-10 pb-8">
      <div className="container">
        {/* <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="font-display font-bold text-3xl leading-tight tracking-tight">
                  <span className="text-cf-orange">CROSSFIT</span>
                  <span className="text-white">889</span>
                </div>
              </div>
            </div>

            {FOOTER_LINKS.map((column) => (
              <div key={column.title}>
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-5">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/40 text-sm hover:text-cf-orange transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-5">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-cf-orange mt-0.5 shrink-0" />
                  <span className="text-white/40 text-sm">
                    Rua Marechal Hermes, 569
                    <br />
                    Primavera, Barreiras - BA
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-cf-orange shrink-0" />
                  <a
                    href="tel:+5511999999999"
                    className="text-white/40 text-sm hover:text-cf-orange transition-colors duration-300"
                  >
                    (77) 99990-8265
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-cf-orange shrink-0" />
                  <a
                    href="mailto:contato@crossfit889.com.br"
                    className="text-white/40 text-sm hover:text-cf-orange transition-colors duration-300"
                  >
                    contato@crossfit889.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection> */}

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} CrossFit889. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Desenvolvido por {" "}
            <a href="" className="font-semibold text-white/30 text-xs hover:text-white/60 transition-colors">
              Kauê Moreira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
