import { Hand, Car, BatteryCharging } from "lucide-react";

// Merged block: replaces the old VoiceControl + ScreenControl sections.
// Compact "easy to use / hands-free" proof, plus the charging case reassurance.

const points = [
  {
    icon: Hand,
    title: "Un toque y traduce",
    text: "Control táctil directo en el auricular. No hace falta abrir apps ni sacar el celular para empezar a traducir.",
  },
  {
    icon: Car,
    title: "Manos libres de verdad",
    text: "Ideal para choferes: activás la traducción sin soltar el volante ni mirar la pantalla del celular.",
  },
  {
    icon: BatteryCharging,
    title: "Estuche de carga incluido",
    text: "Recargalo entre viajes o turnos y usalo durante toda la jornada, sin quedarte sin batería.",
  },
];

export function VoiceControlSection() {
  return (
    <section className="text-white" style={{ backgroundColor: "#071531" }}>
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-14">
          <h2
            className="font-extrabold leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 6.5vw, 44px)" }}
          >
            Fácil de Usar, Sin Mirar el Celular
          </h2>
          <p
            className="text-[#a9b4c9] mx-auto"
            style={{ fontSize: "clamp(14px, 3.5vw, 18px)", lineHeight: 1.6, maxWidth: "640px" }}
          >
            Pensado para que lo uses trabajando: manejando, atendiendo o
            caminando, con el celular guardado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E90FF]/50 hover:bg-white/[0.07]"
              style={{ boxShadow: "0 0 0 rgba(30,144,255,0)" }}
            >
              <div
                className="flex items-center justify-center rounded-xl mb-5 transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(30,144,255,0.45)]"
                style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "rgba(30,144,255,0.15)",
                }}
              >
                <Icon
                  size={26}
                  style={{ color: "#1E90FF" }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3
                className="text-white font-bold mb-2"
                style={{ fontSize: "20px" }}
              >
                {title}
              </h3>
              <p
                className="text-[#a9b4c9]"
                style={{ fontSize: "15px", lineHeight: 1.6 }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
