import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import { ClientProviders } from "@/components/ClientProviders";
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
    "CrossFit889: a academia que vai transformar seu corpo e sua mente. Aulas de CrossFit, musculação, e treinos funcionais. Agende sua aula experimental gratuita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${oswald.variable} ${montserrat.variable} antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
