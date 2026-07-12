import { ShieldCheck, Languages, Truck, BadgeCheck } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { BackgroundVideo } from "@/components/ui/background-video";
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
      {/* Background image — stays mounted as poster/fallback under the video */}
      <PlaceholderImage
        illustration="/images/novexion/hero-product.svg"
        name="hero-driver"
        alt="Chofer de traslados usando Novexion mientras conversa con un pasajero extranjero"
        brief="FOTO REAL: Diego, chofer de traslados, usando Novexion en el auto mientras conversa con un pasajero extranjero. Horizontal 1920x1080, buena luz, se le tiene que ver el auricular puesto."
        fill
        priority
        className="rounded-none border-0"
      />

      {/* Background video — plays on top of the photo; if it fails to load, it
          unmounts and the photo above shows through */}
      <BackgroundVideo src="/images/novexion/video-landing.mp4" />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content — single flex column so a taller headline pushes the trust
          badges down naturally instead of the two overlapping. Flows normally
          (not absolute) on mobile so it can push the section taller instead
          of being clipped when the stacked CTAs + wrapped badges need more
          room than the min-height; becomes a full overlay from sm+ up. */}
      <div
        className="relative sm:absolute sm:inset-0 flex flex-col justify-between gap-10 sm:gap-0"
        style={{ padding: "clamp(24px, 6vw, 48px) clamp(20px, 6vw, 64px) clamp(20px, 4vw, 32px)" }}
      >
        {/* Top block: eyebrow + heading */}
        <div className="flex flex-col gap-3 md:gap-4" style={{ maxWidth: "560px" }}>
          {/* Eyebrow */}
          <p
            className="text-white"
            style={{ fontSize: "clamp(13px, 3vw, 16px)", fontWeight: 500, opacity: 0.9 }}
          >
            Traductor con IA en tiempo real
          </p>

          {/* H1 */}
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(26px, 7vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Cada Cliente Que
            <br />
            No Entendés
            <br />
            Es Una
            <br />
            Oportunidad Perdida
          </h1>
        </div>

        {/* Bottom block: sub-headline + CTAs + trust badges */}
        <div className="flex flex-col gap-4 md:gap-6" style={{ maxWidth: "560px" }}>
          {/* Sub-headline */}
          <p
            className="text-white"
            style={{ fontSize: "clamp(14px, 3.2vw, 16px)", fontWeight: 500 }}
          >
            No necesitás hablar perfecto. Necesitás entender y responder — al instante, en +140 idiomas.
          </p>

          {/* CTA buttons — side by side even on mobile */}
          <div className="flex flex-row items-stretch gap-2 sm:gap-3">
            <a
              href={TIENDANUBE_PRODUCT_URL}
              className="inline-flex flex-1 items-center justify-center text-center text-white font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#1E90FF",
                border: "1.5px solid #1E90FF",
                borderRadius: "24px",
                padding: "12px 16px",
                fontSize: "clamp(12.5px, 3vw, 16px)",
                fontWeight: 700,
              }}
            >
              Comprar Ahora
            </a>
            <a
              href="#thus"
              className="inline-flex flex-1 items-center justify-center text-center text-white font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "transparent",
                border: "1.5px solid white",
                borderRadius: "24px",
                padding: "12px 16px",
                fontSize: "clamp(12.5px, 3vw, 16px)",
                fontWeight: 700,
              }}
            >
              Ver Cómo Funciona
            </a>
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-8">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white">
                <Icon size={16} className="md:hidden" />
                <Icon size={20} className="hidden md:block" />
                <span style={{ fontSize: "clamp(11px, 2.8vw, 14px)", fontWeight: 600 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
