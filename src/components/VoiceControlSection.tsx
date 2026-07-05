import { PlaceholderImage } from "@/components/ui/placeholder-image";

// ─── Command pill ────────────────────────────────────────────────────────────

function CommandPill({ label }: { label: string }) {
  return (
    <span className="inline-block px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium whitespace-nowrap hover:bg-white/10 transition-colors duration-200">
      {label}
    </span>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function VoiceControlSection() {
  const tapCommands = [
    "Iniciar Traducción",
    "Cambiar Idioma",
    "Modo Altavoz",
    "Subir/Bajar Volumen",
    "Ver Batería",
    "Repetir Traducción",
  ];

  return (
    <section className="text-white" style={{ backgroundColor: "#0A1F44" }}>
      {/* A: "Control Táctil, Sin Mirar el Celular" — full-width hero */}
      <div className="py-24 px-6 text-center" style={{ background: "linear-gradient(to bottom, #071531, #0A1F44)" }}>
        <h2
          className="text-white font-extrabold mb-4 leading-tight"
          style={{ fontSize: "48px" }}
        >
          Control Táctil, Sin Mirar el Celular
        </h2>
        <p
          className="text-[#a9b4c9] text-center max-w-[600px] mx-auto"
          style={{ fontSize: "20px", lineHeight: 1.6 }}
        >
          Manos libres, aunque estés manejando o atendiendo un cliente
        </p>
      </div>

      {/* B: "Un Toque, Sin Vueltas" — split layout */}
      <div className="py-0">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row min-h-[600px]">
          {/* Left: large image */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[600px] rounded-none overflow-hidden">
            <PlaceholderImage
              illustration="/images/novexion/hands-free.svg"
              alt="Chofer tocando el auricular Novexion para activar la traducción, sin usar el celular"
              brief="FOTO REAL: chofer o recepcionista tocando el auricular para activar/cambiar el modo, manos libres."
              fill
              className="rounded-none border-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
          </div>

          {/* Right: text + comparison card */}
          <div className="flex-1 flex flex-col justify-center px-10 py-16" style={{ backgroundColor: "#0A1F44" }}>
            <h2
              className="text-white font-extrabold mb-4 leading-tight"
              style={{ fontSize: "40px" }}
            >
              Un Toque, Sin Vueltas
            </h2>
            <p
              className="text-[#a9b4c9] mb-8"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Controles táctiles directo en el auricular. No hace falta sacar
              el celular ni abrir ninguna app para activar la traducción.
            </p>

            {/* Comparison card */}
            <div
              className="rounded-xl p-5 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.12)",
                borderRadius: "12px",
              }}
            >
              <p className="text-white text-sm font-semibold mb-5 text-center">
                Para Activar la Traducción
              </p>

              <div className="flex items-center justify-around gap-6">
                {/* Novexion */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center border-2 font-extrabold text-center px-2"
                    style={{
                      borderColor: "#1E90FF",
                      color: "#1E90FF",
                      fontSize: "14px",
                    }}
                  >
                    1 Toque
                  </div>
                  <p className="text-white text-xs font-semibold text-center">
                    Novexion
                  </p>
                </div>

                {/* VS divider */}
                <span className="text-[#a9b4c9] text-sm font-bold">vs</span>

                {/* Other */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-dashed font-extrabold text-white text-center px-2"
                    style={{
                      borderColor: "rgba(255,255,255,0.30)",
                      fontSize: "12px",
                    }}
                  >
                    Sacar el Celular + Abrir App
                  </div>
                  <p className="text-[#a9b4c9] text-xs font-semibold text-center">
                    Traductor de Celular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C: "Todo Bajo Control" — tap command pills grid */}
      <div className="py-24 px-6 text-center" style={{ backgroundColor: "#071531" }}>
        <h2
          className="text-white font-extrabold mb-12 leading-tight"
          style={{ fontSize: "48px" }}
        >
          Todo Bajo Control
        </h2>

        {/* Tap command pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-[800px] mx-auto">
          {tapCommands.map((command) => (
            <CommandPill key={command} label={command} />
          ))}
        </div>
        <p className="mt-6 text-[#a9b4c9]" style={{ fontSize: "11px", fontStyle: "italic" }}>
          PLACEHOLDER: confirmar el mapa real de gestos táctiles del Q16-H3 antes de publicar.
        </p>
      </div>
    </section>
  );
}
