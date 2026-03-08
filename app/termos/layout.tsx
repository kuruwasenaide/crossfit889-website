import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Políticas | CrossFit889",
  description:
    "Política de Privacidade, Termos de Uso e Política de Cancelamento do aplicativo CrossFit889.",
};

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
