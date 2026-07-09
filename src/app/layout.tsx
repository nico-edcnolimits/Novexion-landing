import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novexion Q16-H3 — Auriculares Traductor con IA en Tiempo Real | +140 Idiomas",
  description:
    "Entendé y hacete entender al instante. Auriculares traductor con IA, modo cara a cara y modo altavoz. Garantía 6 meses. Compra protegida con Mercado Pago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-white" style={{ backgroundColor: "#0A1F44" }}>
        {children}
      </body>
    </html>
  );
}
