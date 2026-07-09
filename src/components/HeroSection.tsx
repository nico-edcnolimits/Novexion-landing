import { ShieldCheck, Languages, Truck, BadgeCheck } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { TIENDANUBE_PRODUCT_URL } from "@/lib/store-links";

const trustBadges = [
  { icon: Languages, label: "+140 idiomas" },
  { icon: ShieldCheck, label: "Garantía 6 meses" },
  { icon: Truck, label: "Envío a todo el país" },
  { icon: BadgeCheck, label: "Compra Protegida Mercado Pago" },
];

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 126px)" }}
    >
      {/* Background image */}
      <PlaceholderImage
        illustration="/images/novexion/hero-product.svg"
        name="hero-driver"
        alt="Chofer de traslados usando Novexion mientras conversa con un pasajero extranjero"
        brief="FOTO REAL: Diego, chofer de traslados, usando Novexion en el auto mientras conversa con un pasajero extranjero. Horizontal 1920x1080, buena luz, se le tiene que ver el auricular puesto."
        fill
        priority
        className="rounded-none border-0"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Left content — absolute positioned */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-6"
        style={{ left: "64px", maxWidth: "560px" }}
      >
        {/* Eyebrow */}
        <p
          className="text-white"
          style={{ fontSize: "16px", fontWeight: 500, opacity: 0.9 }}
        >
          NOVEXION · Traductor con IA en tiempo real
        </p>

        {/* H1 */}
        <h1
          className="text-white"
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Cada Cliente Que No
          <br />
          Entendés Es Una Venta Que Se Va
        </h1>

        {/* Sub-headline */}
        <p
          className="text-white"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          No necesitás hablar perfecto. Necesitás entender y responder — al instante, en +140 idiomas.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href={TIENDANUBE_PRODUCT_URL}
            className="inline-flex items-center justify-center text-white font-bold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: "#1E90FF",
              border: "1.5px solid #1E90FF",
              borderRadius: "24px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Comprar Ahora
          </a>
          <a
            href="#thus"
            className="inline-flex items-center justify-center text-white font-bold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: "transparent",
              border: "1.5px solid white",
              borderRadius: "24px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Ver Cómo Funciona
          </a>
        </div>
      </div>

      {/* Trust badges row — bottom of hero */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-x-8 gap-y-2"
        style={{ paddingBottom: "32px", paddingLeft: "64px", paddingRight: "64px" }}
      >
        {trustBadges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-white">
            <Icon size={20} />
            <span style={{ fontSize: "14px", fontWeight: 600 }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
