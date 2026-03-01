import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import { ClientProviders } from "@/components/ClientProviders";
import Script from "next/script";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "CrossFit889 - Transforme Seu Corpo e Sua Mente",
  description:
    "CrossFit889: a academia que vai transformar seu corpo e sua mente. Aulas de CrossFit, musculação, Hyrox e treinos funcionais. Agende sua aula experimental gratuita.",
    openGraph: {
      title: "CrossFit889",
      description: "O 2° Melhor do Mundo.",
      url: "https://crossfit889.com.br",
      siteName: "CrossFit889",
      images: [
        {
          url: "/banner.png",
          width: 1280,
          height: 1080,
          alt: "Banner",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "CrossFit889",
      description: "O 2° Melhor do Mundo.",
      images: ["/banner.png"],
    },
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
      <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TV92G2CN');
            `,
          }}
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2083804965755370');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "CrossFit889",
              "image": "https://crossfit889.com.br/banner.png",
              "url": "https://crossfit889.com.br",
              "telephone": "+557799908265",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Marechal Hermes, 569",
                "addressLocality": "Barreiras",
                "addressRegion": "BA",
                "postalCode": "47800-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -12.152003799999997,
                "longitude": -44.9921857
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "05:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "07:00",
                  "closes": "12:00"
                }
              ],
              "priceRange": "R$249-R$349",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "500"
              }
            }),
          }}
        />

      </head>
      <body className={`${oswald.variable} ${montserrat.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TV92G2CN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
