import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

// ─── Feature pill badge ──────────────────────────────────────────────────────

interface FeaturePillProps {
  label: string;
  active?: boolean;
}

function FeaturePill({ label, active = false }: FeaturePillProps) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-2 rounded-full text-sm font-semibold border transition-colors",
        active
          ? "text-black border-transparent"
          : "text-white border-white/30 bg-white/5"
      )}
      style={active ? { backgroundColor: "#1E90FF", borderColor: "#1E90FF" } : undefined}
    >
      {label}
    </span>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function SignatureSoundSection() {
  return (
    <section className="text-white" style={{ backgroundColor: "#0A1F44" }}>
      {/* A: Close-up earbud image + heading */}
      <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background earbud image */}
        <PlaceholderImage
          illustration="/images/novexion/product-main.svg"
          name="earbud-closeup"
          alt="Primer plano del auricular Novexion"
          brief="FOTO REAL: primer plano de estudio del auricular Novexion Q16-H3."
          fill
          priority
          className="rounded-none border-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        {/* Heading overlay */}
        <div className="relative z-10 text-center px-6">
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "52px" }}
          >
            <span className="text-white">Tu Traducción, </span>
            <span className="text-white/40">Con Voz Natural</span>
          </h2>
        </div>
      </div>

      {/* B: "Ajustá velocidad y voz desde la app" — split layout */}
      <div className="py-20 px-6" style={{ backgroundColor: "#071531" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: text */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-4 leading-tight"
              style={{ fontSize: "40px" }}
            >
              Elegí Cómo Suena tu Traductor
            </h2>
            <h3
              className="font-bold mb-6"
              style={{ fontSize: "24px", color: "#1E90FF" }}
            >
              Ajustá Velocidad y Voz desde la App
            </h3>
            <p
              className="text-[#a9b4c9]"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Elegí la voz, el idioma y la velocidad de traducción que mejor
              te sirva — encontrá tu configuración ideal en segundos, desde la
              app Novexion.
            </p>

            {/* Voice/speed presets */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Voz Femenina", "Voz Masculina", "Velocidad Normal", "Velocidad Rápida", "Modo Claridad"].map(
                (preset) => (
                  <FeaturePill
                    key={preset}
                    label={preset}
                    active={preset === "Modo Claridad"}
                  />
                )
              )}
            </div>
            <p className="mt-4 text-[#a9b4c9]" style={{ fontSize: "11px", fontStyle: "italic" }}>
              PLACEHOLDER: confirmar qué opciones de voz/velocidad ofrece realmente la app antes de publicar.
            </p>
          </div>

          {/* Right: app screenshot */}
          <div className="flex-1 relative min-h-[480px] w-full flex items-center justify-center">
            <PlaceholderImage
              illustration="/images/novexion/smart-case.svg"
              name="app-voice-settings"
              alt="App Novexion mostrando ajustes de voz e idioma"
              brief="CAPTURA REAL de la app Novexion mostrando la pantalla de configuración de voz/idioma/velocidad."
              fill
            />
          </div>
        </div>
      </div>

      {/* C: "Escuchá cada palabra como corresponde" — split layout (image left, text right) */}
      <div className="py-20 px-6" style={{ backgroundColor: "#0A1F44" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: image */}
          <div className="flex-1 relative min-h-[440px] w-full rounded-2xl overflow-hidden">
            <PlaceholderImage
              illustration="/images/novexion/feature-realtime.svg"
              name="ai-realtime-adjustment"
              alt="IA ajustando la traducción en tiempo real según el ambiente"
              brief="Gráfico/foto real ilustrando el ajuste en tiempo real de la traducción."
              fill
            />
          </div>

          {/* Right: text */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-5 leading-tight"
              style={{ fontSize: "40px" }}
            >
              Escuchá Cada Palabra Como Corresponde
            </h2>
            <p
              className="text-[#a9b4c9] mb-8"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              La IA ajusta la traducción en tiempo real según el ambiente —
              para que cada palabra se entienda clara, sin importar dónde
              estés.
            </p>

            {/* Feature pills / tags */}
            <div className="flex flex-wrap gap-3">
              <FeaturePill label="IA en Tiempo Real" active />
              <FeaturePill label="Traducción Bidireccional" />
              <FeaturePill label="Ajuste Automático" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
