"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

// ─── Internal: Before/After comparison block ────────────────────────────────

interface BeforeAfterProps {
  heading: string;
  beforeLabel: string;
  beforeTitle: string;
  beforeSubtitle: string;
  afterLabel: string;
  afterTitle: string;
  afterImageSrc: string;
  afterImageAlt: string;
  afterImageBrief: string;
}

function BeforeAfterBlock({
  heading,
  beforeLabel,
  beforeTitle,
  beforeSubtitle,
  afterLabel,
  afterTitle,
  afterImageSrc,
  afterImageAlt,
  afterImageBrief,
}: BeforeAfterProps) {
  const [active, setActive] = useState<"before" | "after">("after");

  return (
    <div className="py-20 px-6" style={{ backgroundColor: "#0A1F44" }}>
      <p
        className="text-white font-bold text-center max-w-[700px] mx-auto mb-12"
        style={{ fontSize: "36px", lineHeight: 1.25 }}
      >
        {heading}
      </p>

      <div className="relative max-w-[1100px] mx-auto flex items-center gap-4">
        {/* Left arrow */}
        <button
          aria-label="Anterior"
          onClick={() => setActive("before")}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-white text-xl transition-all duration-200 hover:bg-white/10",
            active === "before"
              ? "border-[#1E90FF] text-[#1E90FF]"
              : "border-white/30"
          )}
        >
          &#8249;
        </button>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before card */}
          <div
            className={cn(
              "relative rounded-2xl overflow-hidden min-h-[320px] bg-[#071531] border transition-all duration-300 cursor-pointer",
              active === "before"
                ? "border-white/40 scale-[1.01]"
                : "border-white/10 opacity-80"
            )}
            onClick={() => setActive("before")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a5c] to-[#071531]" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="mb-3">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {beforeLabel}
                </span>
              </div>
              <p
                className="text-white font-semibold"
                style={{ fontSize: "16px", lineHeight: 1.4 }}
              >
                {beforeTitle}
              </p>
              <p className="text-[#a9b4c9] text-sm mt-1">{beforeSubtitle}</p>
            </div>
          </div>

          {/* After card */}
          <div
            className={cn(
              "relative rounded-2xl overflow-hidden min-h-[320px] border transition-all duration-300 cursor-pointer",
              active === "after"
                ? "border-[#1E90FF]/60 scale-[1.01]"
                : "border-white/10 opacity-80"
            )}
            onClick={() => setActive("after")}
          >
            <PlaceholderImage
              illustration={afterImageSrc}
              alt={afterImageAlt}
              brief={afterImageBrief}
              fill
              className="rounded-none border-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="mb-3">
                <span
                  className="inline-block text-black text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#1E90FF" }}
                >
                  {afterLabel}
                </span>
              </div>
              <p
                className="text-white font-semibold"
                style={{ fontSize: "16px", lineHeight: 1.4 }}
              >
                {afterTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          aria-label="Siguiente"
          onClick={() => setActive("after")}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-white text-xl transition-all duration-200 hover:bg-white/10",
            active === "after"
              ? "border-[#1E90FF] text-[#1E90FF]"
              : "border-white/30"
          )}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function CallQualitySection() {
  const [modeToggle, setModeToggle] = useState<"novexion" | "other">(
    "novexion"
  );
  const [micToggle, setMicToggle] = useState<"novexion" | "other">(
    "novexion"
  );

  return (
    <section className="text-white" style={{ backgroundColor: "#0A1F44" }}>
      {/* A: Hero intro */}
      <div
        className="relative w-full min-h-[560px] flex flex-col items-center justify-center py-24 px-6 text-center"
        style={{ background: "linear-gradient(to bottom, #071531, #0A1F44)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(30,144,255,0.08),transparent)]" />
        </div>
        <h2
          className="relative font-extrabold text-white text-center mb-6 leading-tight"
          style={{ fontSize: "52px" }}
        >
          Hablá Cara a Cara. Que Te Entiendan Clara y Directamente.
        </h2>
        <h3
          className="relative font-bold text-white text-center mb-5"
          style={{ fontSize: "36px" }}
        >
          Conversá Sin Barreras
        </h3>
        <p
          className="relative text-[#a9b4c9] text-center max-w-[600px] mx-auto"
          style={{ fontSize: "18px", lineHeight: 1.6 }}
        >
          Que te entiendan, aunque el idioma sea distinto — sin gritar, sin repetir.
        </p>
      </div>

      {/* B: Modo cara a cara — Before/After */}
      <BeforeAfterBlock
        heading="Andá directo al grano, sin el ida y vuelta incómodo del traductor de celular"
        beforeLabel="Antes"
        beforeTitle="Traductor de Celular"
        beforeSubtitle="Pantalla en la mano, mirás para abajo, se corta la conversación"
        afterLabel="Con Novexion"
        afterTitle="Mirás a los ojos, escuchás la traducción en el oído, seguís la charla"
        afterImageSrc="/images/novexion/usecase-hotel.svg"
        afterImageAlt="Recepcionista de hotel usando modo cara a cara con Novexion"
        afterImageBrief="FOTO REAL: Marina, recepcionista, conversando cara a cara con un huésped extranjero usando Novexion."
      />

      {/* C: Modo altavoz — Before/After */}
      <BeforeAfterBlock
        heading="En un local con varios clientes extranjeros, activá el modo altavoz"
        beforeLabel="Antes"
        beforeTitle="Repetir y Señalar"
        beforeSubtitle="Explicás con señas, se pierde la venta"
        afterLabel="Con Novexion"
        afterTitle="El auricular traduce en voz alta para que todos escuchen"
        afterImageSrc="/images/novexion/usecase-shop.svg"
        afterImageAlt="Comerciante usando modo altavoz con Novexion"
        afterImageBrief="FOTO REAL: Roberto, comerciante, atendiendo a un cliente extranjero con el modo altavoz de Novexion activado."
      />

      {/* D: "Pensado para el contacto real con el cliente" + toggle */}
      <div className="py-20 px-6" style={{ backgroundColor: "#071531" }}>
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: text */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-5 leading-tight"
              style={{ fontSize: "32px" }}
            >
              Pensado para el Contacto Real con el Cliente
            </h2>
            <p
              className="text-[#a9b4c9]"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Novexion, combinado con un motor de traducción por IA, te ayuda a
              dar una atención profesional en cualquier idioma, con cualquier
              cliente.
            </p>
          </div>

          {/* Right: toggle */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div
              className="inline-flex rounded-full overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <button
                onClick={() => setModeToggle("other")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-l-full",
                  modeToggle === "other"
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-[#a9b4c9] hover:text-white"
                )}
              >
                Traductor de Celular
              </button>
              <button
                onClick={() => setModeToggle("novexion")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-r-full",
                  modeToggle === "novexion"
                    ? "text-black"
                    : "bg-transparent text-[#a9b4c9] hover:text-white"
                )}
                style={
                  modeToggle === "novexion"
                    ? { backgroundColor: "#1E90FF" }
                    : undefined
                }
              >
                Novexion
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* E: "Claridad de voz para que ninguna palabra se pierda" */}
      <div className="py-20 px-6" style={{ backgroundColor: "#0A1F44" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: product cutaway image */}
          <div className="flex-1 relative min-h-[420px] w-full">
            <PlaceholderImage
              illustration="/images/novexion/product-chip.svg"
              alt="Micrófonos de Novexion captando la voz y reduciendo ruido de fondo"
              brief="Diagrama/foto real mostrando la ubicación de los micrófonos del auricular."
              fill
            />
          </div>

          {/* Right: text + toggle */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-5 leading-tight"
              style={{ fontSize: "36px" }}
            >
              Claridad de Voz para que Ninguna Palabra se Pierda
            </h2>
            <p
              className="text-[#a9b4c9] mb-10"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Los micrófonos captan tu voz y reducen el ruido de fondo, para
              que la traducción salga clara incluso en la calle o un local con
              gente.
            </p>

            <div
              className="inline-flex rounded-full overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <button
                onClick={() => setMicToggle("novexion")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-l-full",
                  micToggle === "novexion"
                    ? "text-black"
                    : "bg-transparent text-[#a9b4c9] hover:text-white"
                )}
                style={
                  micToggle === "novexion"
                    ? { backgroundColor: "#1E90FF" }
                    : undefined
                }
              >
                Novexion
              </button>
              <button
                onClick={() => setMicToggle("other")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-r-full",
                  micToggle === "other"
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-[#a9b4c9] hover:text-white"
                )}
              >
                Auriculares Comunes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
