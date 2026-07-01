import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCard {
  id: string;
  title: string;
  subtitle?: string;
  lines?: string[];
  image?: string;
  hasBatteryIndicators?: boolean;
}

const featureCards: FeatureCard[] = [
  {
    id: "dolby",
    title: "Optimized for Dolby Atmos",
    subtitle: "Your personal cinema, anywhere.",
    image: "/images/d0ac6567f3b38273f997dcfdf5da7ef1.png",
  },
  {
    id: "battery",
    title: "Battery Life",
    lines: [
      "ANC On: 6.5 Hrs / 28 Hrs",
      "4 Hrs / 17 Hrs with all smart features on¹⁶",
      "Fast Charging: 5 Min = 4 Hrs",
    ],
    image: "/images/02-KSP_28cd788b-c180-4fb3-9395-b325d97321ce.png",
    hasBatteryIndicators: true,
  },
  {
    id: "wireless",
    title: "Wireless Charging",
    subtitle: "Place and power up. That’s it.",
  },
  {
    id: "multipoint",
    title: "Multipoint Connection",
    subtitle: "Stay connected across two devices simultaneously.",
  },
];

export function MoreFeaturesSection() {
  return (
    <section className={cn("bg-black text-white py-20 px-4")}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-white text-center"
          style={{ fontSize: "40px", fontWeight: 800 }}
        >
          More Shared Features
        </h2>
        <p className="text-[#767880] text-sm text-center mt-3">
          Both models include the following features. Liberty 5 Pro shown for reference.
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
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              )}

              {/* Gradient overlay for cards with images */}
              {card.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
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
