import { ShieldCheck, BadgeCheck, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface OfferCard {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const offerCards: OfferCard[] = [
  {
    title: "Garantía\nOficial Novexion",
    value: "6 meses contra defectos de fábrica",
    icon: <ShieldCheck size={32} className="text-white" />,
  },
  {
    title: "Compra\nProtegida",
    value: "Mercado Pago te protege si algo sale mal con tu compra",
    icon: <BadgeCheck size={32} className="text-white" />,
  },
  {
    title: "Cuotas\nSin Interés",
    value: "Pagalo con Mercado Pago, sin recargos",
    icon: <CreditCard size={32} className="text-white" />,
  },
];

export function TrialOfferSection() {
  return (
    <section
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: "#0A1F44", padding: "80px 64px" }}
    >
      {/* Heading */}
      <h2
        className="text-white text-center"
        style={{
          fontSize: "40px",
          fontWeight: 800,
          lineHeight: 1.2,
          maxWidth: "700px",
        }}
      >
        Comprá Tranquilo:
        <br />
        Así Te Cubrimos
      </h2>

      {/* Sub text */}
      <div className="flex flex-col items-center gap-3 mt-6">
        <p
          className="text-center"
          style={{ color: "#a9b4c9", fontSize: "16px", maxWidth: "560px" }}
        >
          Compra 100% protegida por Mercado Pago, garantía oficial de Novexion y soporte en español por WhatsApp.
        </p>
      </div>

      {/* Large "6 Meses" visual */}
      <div className="relative flex flex-col items-center justify-center mt-12 mb-10">
        {/* Glowing radial gradient behind the number */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(30,144,255,0.25) 0%, transparent 70%)",
          }}
        />
        <span
          className="text-white leading-none font-black relative z-10"
          style={{ fontSize: "200px", fontWeight: 900, lineHeight: 1 }}
        >
          6
        </span>
        <span
          className="text-white font-black relative z-10 -mt-4"
          style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1 }}
        >
          Meses de Garantía
        </span>
      </div>

      {/* Offers continue heading */}
      <h3
        className="text-white text-center"
        style={{ fontSize: "28px", fontWeight: 700 }}
      >
        Tus 3 Respaldos al Comprar Novexion
      </h3>

      {/* How it works / Rules links */}
      <div className="flex items-center gap-6 mt-3">
        <a
          href="#"
          className="font-medium hover:underline transition-colors"
          style={{ color: "#1E90FF", fontSize: "14px" }}
        >
          Cómo funciona la garantía &gt;
        </a>
        <a
          href="#"
          className="font-medium hover:underline transition-colors"
          style={{ color: "#1E90FF", fontSize: "14px" }}
        >
          Ver términos &gt;
        </a>
      </div>

      {/* 3-col offer cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-full"
        style={{ maxWidth: "1100px" }}
      >
        {offerCards.map((card) => (
          <div
            key={card.title}
            className={cn("flex items-center justify-between")}
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <div className="flex flex-col gap-1">
              <span
                className="text-white font-bold"
                style={{ fontSize: "18px", fontWeight: 700, whiteSpace: "pre-line" }}
              >
                {card.title}
              </span>
              <span
                style={{ color: "#a9b4c9", fontSize: "13px" }}
              >
                {card.value}
              </span>
            </div>
            <div className="ml-4 shrink-0">{card.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
