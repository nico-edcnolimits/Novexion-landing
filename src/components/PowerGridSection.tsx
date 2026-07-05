import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  imageBrief?: string;
  className?: string;
}

function FeatureCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageBrief,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border flex flex-col",
        "bg-white/[0.04] border-white/10",
        className
      )}
    >
      {imageSrc && (
        <div className="relative w-full" style={{ height: "280px" }}>
          <PlaceholderImage
            illustration={imageSrc}
            alt={imageAlt ?? title}
            brief={imageBrief ?? "Reemplazar por foto/video real del producto"}
            fill
            className="rounded-none border-0"
          />
        </div>
      )}
      <div className="p-5">
        <p
          className="text-white font-bold mb-1"
          style={{ fontSize: "20px", fontFamily: "var(--font-montserrat)" }}
        >
          {title}
        </p>
        <p
          style={{
            color: "#a9b4c9",
            fontSize: "14px",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function CenterChipCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        minHeight: "580px",
        padding: "40px 24px",
      }}
    >
      <div className="relative w-full mb-6" style={{ height: "320px" }}>
        <PlaceholderImage
          illustration="/images/novexion/product-chip.svg"
          alt="Motor de traducción IA de Novexion"
          brief="Ilustración/render real del motor de traducción o del chip, si el proveedor la provee."
          fill
          className="rounded-none border-0"
        />
      </div>
      <p
        className="text-white text-center"
        style={{
          fontSize: "20px",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 700,
          lineHeight: "1.4",
        }}
      >
        Motor de Traducción IA en Tiempo Real: procesa tu voz y la traduce en
        milisegundos, directo en el auricular
      </p>
    </div>
  );
}

export function PowerGridSection() {
  return (
    <section
      className="w-full"
      style={{
        background: "#0A1F44",
        padding: "80px 64px",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-white mb-4"
          style={{
            fontSize: "48px",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
          }}
        >
          Un Motor de Traducción Hecho para Conversar
        </h2>
        <p
          style={{
            color: "#a9b4c9",
            fontSize: "18px",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          IA en el auricular — cuatro funciones que cambian cómo te comunicás
        </p>
      </div>

      {/* 3-column grid */}
      <div
        className="grid gap-4 mx-auto"
        style={{
          gridTemplateColumns: "1fr 1.2fr 1fr",
          maxWidth: "1200px",
        }}
      >
        {/* Left column — 2 stacked cards */}
        <div className="flex flex-col gap-4">
          <FeatureCard
            title="Traducción Instantánea"
            subtitle="Hablás, y la otra persona te entiende al instante, en +140 idiomas"
            imageSrc="/images/novexion/feature-realtime.svg"
            imageAlt="Traducción instantánea"
            imageBrief="Foto/video real mostrando la traducción apareciendo casi sin demora."
          />
          <FeatureCard
            title="Modo Cara a Cara y Altavoz"
            subtitle="Elegí cómo traducir: charla uno a uno o varias personas escuchando"
            imageSrc="/images/novexion/feature-facetoface.svg"
            imageAlt="Modo cara a cara"
            imageBrief="Foto real de dos personas conversando con Novexion en modo cara a cara."
          />
        </div>

        {/* Center column — tall chip card */}
        <CenterChipCard />

        {/* Right column — 2 stacked cards */}
        <div className="flex flex-col gap-4">
          <FeatureCard
            title="Diseño Open-Ear"
            subtitle="Cómodo todo el día, sin taparte el oído del todo"
            imageSrc="/images/novexion/feature-openear.svg"
            imageAlt="Diseño open-ear"
            imageBrief="Foto real del auricular puesto, mostrando el diseño open-ear."
          />
          <FeatureCard
            title="Bluetooth 5.4"
            subtitle="Conexión rápida y estable con tu celular"
            imageSrc="/images/novexion/feature-bluetooth.svg"
            imageAlt="Bluetooth 5.4"
            imageBrief="Foto/gráfico real mostrando la conexión Bluetooth con el celular."
          />
        </div>
      </div>
    </section>
  );
}
