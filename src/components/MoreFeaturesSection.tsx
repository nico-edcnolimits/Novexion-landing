import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface FeatureCard {
  id: string;
  title: string;
  subtitle?: string;
  lines?: string[];
  image?: string;
  imageAlt?: string;
  imageBrief?: string;
  hasBatteryIndicators?: boolean;
}

const featureCards: FeatureCard[] = [
  {
    id: "languages",
    title: "+140 Idiomas",
    subtitle: "Traducí con turistas de casi cualquier país.",
    image: "/images/novexion/feature-realtime.svg",
    imageAlt: "Traducción en más de 140 idiomas",
    imageBrief: "Foto/gráfico real listando o mostrando la cobertura de idiomas.",
  },
  {
    id: "battery",
    title: "Batería de Larga Duración",
    lines: [
      "Hasta 8-10 hs de uso continuo",
      "El estuche suma carga extra durante el día",
      "PLACEHOLDER: confirmar horas y ciclos exactos",
    ],
    image: "/images/novexion/product-main.svg",
    imageAlt: "Batería de Novexion",
    imageBrief: "Foto real del producto + estuche mostrando indicador de batería.",
    hasBatteryIndicators: true,
  },
  {
    id: "bluetooth",
    title: "Bluetooth 5.4",
    subtitle: "Conexión rápida y estable con tu celular.",
  },
  {
    id: "modes",
    title: "Modo Cara a Cara y Modo Altavoz",
    subtitle: "Elegí cómo traducir según la situación.",
  },
];

export function MoreFeaturesSection() {
  return (
    <section className={cn("text-white py-20 px-4")} style={{ backgroundColor: "#0A1F44" }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-white text-center"
          style={{ fontSize: "40px", fontWeight: 800 }}
        >
          Más Funciones Novexion
        </h2>
        <p className="text-[#a9b4c9] text-sm text-center mt-3">
          Todo lo que necesitás saber sobre tu Novexion Q16-H3.
        </p>

        {/* Card row */}
        <div className="mt-12 flex gap-4 overflow-x-auto pb-4">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className={cn(
                "relative flex-shrink-0 w-[340px] h-[280px] rounded-2xl overflow-hidden border border-white/10",
                !card.image && "bg-white/[0.04]"
              )}
            >
              {card.image && (
                <PlaceholderImage
                  illustration={card.image}
                  alt={card.imageAlt ?? card.title}
                  brief={card.imageBrief ?? "Reemplazar por foto real del producto"}
                  fill
                  className="rounded-none border-0"
                />
              )}

              {/* Gradient overlay for cards with images */}
              {card.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              )}

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg leading-tight">
                  {card.title}
                </p>

                {card.subtitle && (
                  <p className="text-white/70 text-sm mt-1">{card.subtitle}</p>
                )}

                {card.lines &&
                  card.lines.map((line, i) => (
                    <p key={i} className="text-white/70 text-xs mt-0.5 leading-snug">
                      {line}
                    </p>
                  ))}

                {card.hasBatteryIndicators && (
                  <div className="flex gap-2 mt-3">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-green-400 flex items-center justify-center"
                      >
                        <span className="text-[6px] text-green-400 font-bold leading-none">
                          100%
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
