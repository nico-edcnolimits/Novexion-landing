import { Volume2, Users, Megaphone } from "lucide-react";

// Merged block: replaces the old CallQuality + ANC sections.
// Compact "works everywhere" proof for the driver / hotel / shop personas.

const scenarios = [
  {
    icon: Volume2,
    title: "En la calle o el auto",
    text: "Los micrófonos captan tu voz y reducen el ruido de fondo, para que la traducción se escuche clara aunque haya tránsito o gente hablando.",
  },
  {
    icon: Users,
    title: "Cara a cara",
    text: "Mirás a los ojos y escuchás la traducción en el oído, sin una pantalla en el medio que corte la conversación.",
  },
  {
    icon: Megaphone,
    title: "Modo altavoz",
    text: "¿Varios clientes extranjeros a la vez? Activás el modo altavoz y el auricular traduce en voz alta para que todos escuchen.",
  },
];

export function CallQualitySection() {
  return (
    <section className="text-white" style={{ backgroundColor: "#0A1F44" }}>
      <div className="max-w-[1150px] mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2
            className="font-extrabold leading-tight mb-4"
            style={{ fontSize: "44px" }}
          >
            Funciona en la Calle y en el Local
          </h2>
          <p
            className="text-[#a9b4c9] mx-auto"
            style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "640px" }}
          >
            Tránsito, música, gente hablando: Novexion está pensado para que te
            entiendan igual, en cualquier ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E90FF]/50 hover:bg-white/[0.07]"
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
