import { Check } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface KitCardProps {
  kitName: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  imageBrief: string;
  includes: string[];
  ctaLabel: string;
  note?: string;
}

function KitCard({
  kitName,
  tagline,
  imageSrc,
  imageAlt,
  imageBrief,
  includes,
  ctaLabel,
  note,
}: KitCardProps) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ flex: "1 1 0", minWidth: 0 }}
    >
      {/* Product image */}
      <div
        className="relative w-full mb-6"
        style={{ maxWidth: "380px", aspectRatio: "1 / 1", margin: "0 auto 24px" }}
      >
        <PlaceholderImage
          illustration={imageSrc}
          alt={imageAlt}
          brief={imageBrief}
          fill
          className="rounded-xl"
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          color: "#a9b4c9",
          fontSize: "14px",
          fontFamily: "var(--font-montserrat)",
          marginBottom: "10px",
        }}
      >
        {tagline}
      </p>

      {/* Kit name */}
      <h3
        className="text-white"
        style={{
          fontSize: "24px",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >
        {kitName}
      </h3>

      {/* Includes list */}
      <ul className="flex flex-col gap-2 mb-6 text-left" style={{ maxWidth: "300px" }}>
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check size={16} style={{ color: "#1E90FF", marginTop: "3px", flexShrink: 0 }} />
            <span style={{ color: "#e5eaf3", fontSize: "14px" }}>{item}</span>
          </li>
        ))}
      </ul>
      {note && (
        <p style={{ color: "#a9b4c9", fontSize: "11px", fontStyle: "italic", marginBottom: "16px", maxWidth: "300px" }}>
          {note}
        </p>
      )}

      {/* CTA */}
      <button
        type="button"
        className="cursor-pointer transition-opacity hover:opacity-90"
        style={{
          background: "#1E90FF",
          color: "#ffffff",
          borderRadius: "24px",
          padding: "12px 28px",
          fontSize: "14px",
          fontWeight: 700,
          fontFamily: "var(--font-montserrat)",
          border: "none",
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}

export function ProductExplorerSection() {
  return (
    <section
      id="kits"
      className="w-full"
      style={{
        background: "#0A1F44",
        padding: "80px 64px",
      }}
    >
      {/* Section heading */}
      <h2
        className="text-white text-center"
        style={{
          fontSize: "40px",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 800,
          marginBottom: "12px",
        }}
      >
        Elegí Tu Kit Novexion
      </h2>
      <p
        className="text-center mx-auto"
        style={{ color: "#a9b4c9", fontSize: "16px", marginBottom: "48px", maxWidth: "600px" }}
      >
        Mismo hardware Q16-H3, distinto armado según lo uses vos o tu negocio
      </p>

      {/* Kit cards */}
      <div
        className="flex items-start mx-auto"
        style={{ maxWidth: "1200px", gap: "40px" }}
      >
        <KitCard
          kitName="Kit Individual"
          tagline="Ideal para vos"
          imageSrc="/images/novexion/product-main.svg"
          imageAlt="Novexion Q16-H3, kit individual"
          imageBrief="Foto real del kit individual: 1 auricular, estuche con pantalla LCD y cable, sobre fondo neutro."
          includes={[
            "1 auricular traductor Novexion Q16-H3",
            "Estuche con pantalla LCD",
            "Cable de carga",
          ]}
          ctaLabel="Comprar Kit Individual"
        />

        {/* Divider */}
        <div
          className="self-stretch flex-shrink-0"
          style={{
            width: "1px",
            background: "rgba(255,255,255,0.1)",
          }}
        />

        <KitCard
          kitName="Kit Profesional"
          tagline="Ideal para choferes, hotelería y comercios"
          imageSrc="/images/novexion/product-black.svg"
          imageAlt="Novexion Q16-H3, kit profesional"
          imageBrief="Foto real del kit profesional armado (2-3 unidades + accesorios), sobre fondo neutro."
          includes={[
            "2 auriculares traductores Novexion Q16-H3",
            "Estuche con pantalla LCD por unidad",
            "Funda protectora extra",
            "Garantía extendida",
          ]}
          note="PLACEHOLDER: confirmar contenido exacto y precio del Kit Profesional antes de publicar."
          ctaLabel="Comprar Kit Profesional"
        />
      </div>
    </section>
  );
}
