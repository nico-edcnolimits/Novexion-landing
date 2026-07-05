import { PlaceholderImage } from "@/components/ui/placeholder-image";

// ─── Main export ─────────────────────────────────────────────────────────────

export function ANCSection() {
  return (
    <section className="text-white" style={{ backgroundColor: "#0A1F44" }}>
      {/* A: "Que el ruido no te corte la conversación" — cinematic hero */}
      <div className="relative w-full min-h-[640px] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <PlaceholderImage
          illustration="/images/novexion/usecase-driver.svg"
          alt="Chofer conversando con Novexion en la calle, sin que el ruido corte la traducción"
          brief="FOTO REAL: escena en la calle o en el auto con tránsito de fondo, mostrando que la conversación sigue clara."
          fill
          priority
          className="rounded-none border-0"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        {/* Text overlay — bottom-left */}
        <div className="relative z-10 px-16 pb-16 max-w-[640px]">
          <p
            className="text-white font-semibold uppercase tracking-widest mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.1em" }}
          >
            Escuchá Claro, Incluso en la Calle
          </p>
          <h2
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: "52px" }}
          >
            Que el Ruido No Te Corte{" "}
            <span className="block">la Conversación.</span>
          </h2>
        </div>
      </div>

      {/* B: "Menos ruido de fondo, más conversación" — split */}
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        {/* Left half: image */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-[520px]">
          <PlaceholderImage
            illustration="/images/novexion/translation-bg.svg"
            alt="Reducción de ruido ambiente para escuchar mejor la traducción"
            brief="Gráfico/foto real ilustrando cómo se reduce el ruido de fondo para escuchar la traducción."
            fill
            className="rounded-none border-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        {/* Right half: text content */}
        <div
          className="flex-1 flex flex-col justify-center px-12 py-16"
          style={{ backgroundColor: "#0A1F44" }}
        >
          <h2
            className="text-white font-extrabold mb-3 leading-tight"
            style={{ fontSize: "40px" }}
          >
            Menos Ruido de Fondo, Más Conversación
          </h2>
          <h3
            className="text-white font-bold mb-6"
            style={{ fontSize: "22px" }}
          >
            Pensado para Ambientes Ruidosos
          </h3>
          <p
            className="text-[#a9b4c9]"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            Diseñado para que la traducción se escuche clara aunque estés en
            la vereda, en el auto o en un local con música de fondo.
          </p>

          {/* Illustrative comparison bar */}
          <div className="mt-10">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#a9b4c9] text-sm font-medium w-40">
                Sin reducción de ruido
              </span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/30"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-sm font-semibold w-40">
                Con Novexion
              </span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: "85%", backgroundColor: "#1E90FF" }}
                />
              </div>
            </div>
            <p className="text-[#a9b4c9] mt-3" style={{ fontSize: "11px", fontStyle: "italic" }}>
              Comparación ilustrativa. PLACEHOLDER: reemplazar por una medición real si el fabricante la certifica.
            </p>
          </div>
        </div>
      </div>

      {/* C: "Enfocate en la conversación" — full-width dark */}
      <div className="py-24 px-6" style={{ backgroundColor: "#071531" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="text-white font-extrabold mb-5 leading-tight"
            style={{ fontSize: "52px" }}
          >
            Enfocate en la Conversación
          </h2>
          <p
            className="text-[#a9b4c9] mb-16"
            style={{ fontSize: "18px", lineHeight: 1.6 }}
          >
            Dejá afuera lo que no importa. Quedate con lo que sí: entender y
            que te entiendan.
          </p>
        </div>

        {/* Noise-reduction visualization */}
        <div className="max-w-[640px] mx-auto">
          <div className="space-y-4">
            {/* Bar 1 — Ambient noise */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#a9b4c9] text-sm font-medium">
                  Ruido de la Calle
                </span>
                <span className="text-[#a9b4c9] text-xs">Sin reducir</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/40 transition-all duration-700"
                  style={{ width: "92%" }}
                />
              </div>
            </div>

            {/* Bar 2 — noise reduced */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#a9b4c9] text-sm font-medium">
                  Reducción de Ruido
                </span>
                <span className="text-[#a9b4c9] text-xs">Con Novexion</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: "32%", backgroundColor: "#1E90FF" }}
                />
              </div>
            </div>

            {/* Bar 3 — what you hear */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm font-semibold">
                  Lo Que Escuchás
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#1E90FF" }}
                >
                  La traducción, clara
                </span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: "20%", backgroundColor: "#1E90FF" }}
                />
              </div>
            </div>
          </div>

          {/* Scale label */}
          <div className="flex justify-between mt-8">
            <span className="text-[#a9b4c9] text-xs">Ruido bajo</span>
            <span className="text-[#a9b4c9] text-xs">Nivel de ruido</span>
            <span className="text-[#a9b4c9] text-xs">Ruido alto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
