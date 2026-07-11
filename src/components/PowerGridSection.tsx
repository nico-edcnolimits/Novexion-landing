import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface KspCardData {
  id: string;
  title: string;
  imageSrc: string;
  imageName: string;
  imageAlt: string;
  imageBrief: string;
  align?: "left" | "center";
}

const sideCards: {
  left: [KspCardData, KspCardData];
  right: [KspCardData, KspCardData];
} = {
  left: [
    {
      id: "realtime",
      title: "Traducción Instantánea",
      imageSrc: "/images/novexion/feature-realtime.svg",
      imageName: "feature-realtime",
      imageAlt: "Traducción instantánea con Novexion",
      imageBrief:
        "Foto/video real mostrando la traducción apareciendo casi sin demora.",
    },
    {
      id: "openear",
      title: "Diseño Open-Ear",
      imageSrc: "/images/novexion/feature-openear.svg",
      imageName: "feature-openear",
      imageAlt: "Diseño open-ear de Novexion",
      imageBrief:
        "Foto real del auricular puesto, mostrando el diseño open-ear.",
    },
  ],
  right: [
    {
      id: "facetoface",
      title: "Modo Cara a Cara y Altavoz",
      imageSrc: "/images/novexion/feature-facetoface.svg",
      imageName: "feature-facetoface",
      imageAlt: "Modo cara a cara con Novexion",
      imageBrief:
        "Foto real de dos personas conversando con Novexion en modo cara a cara.",
    },
    {
      id: "bluetooth",
      title: "Bluetooth 5.4",
      imageSrc: "/images/novexion/feature-bluetooth.svg",
      imageName: "feature-bluetooth",
      imageAlt: "Bluetooth 5.4 en Novexion",
      imageBrief:
        "Foto/gráfico real mostrando la conexión Bluetooth con el celular.",
    },
  ],
};

const centerCard: KspCardData = {
  id: "chip",
  title: "Motor de Traducción IA en Tiempo Real",
  imageSrc: "/images/novexion/product-chip.svg",
  imageName: "ai-engine",
  imageAlt: "Motor de traducción IA de Novexion",
  imageBrief:
    "Ilustración/render real del motor de traducción o del chip, si el proveedor la provee.",
  align: "center",
};

interface KspCardProps {
  card: KspCardData;
  className?: string;
}

function KspCard({ card, className }: KspCardProps) {
  const align = card.align ?? "left";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-xl bg-black lg:rounded-2xl",
        className
      )}
    >
      <PlaceholderImage
        illustration={card.imageSrc}
        name={card.imageName}
        alt={card.imageAlt}
        brief={card.imageBrief}
        fill
        className="rounded-none border-0"
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-start p-4 xl:p-6 2xl:p-8",
          align === "center" ? "items-center text-center" : "items-start text-left"
        )}
      >
        <p
          className="font-bold leading-[1.2] tracking-[-0.04em] text-[#f5f6f7]"
          style={{
            fontSize: "clamp(18px, 1.25vw, 24px)",
            textShadow:
              "0 2px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.6)",
          }}
        >
          {card.title}
        </p>
      </div>
    </article>
  );
}

export function PowerGridSection() {
  const [leftTop, leftBottom] = sideCards.left;
  const [rightTop, rightBottom] = sideCards.right;

  return (
    <section id="specs" className="relative w-full overflow-hidden px-4 md:px-16">
      {/* Blue → black fade behind the cards */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0A1F44 0%, #071531 28%, #030810 55%, #000000 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(30,144,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] py-12 md:py-16">
        {/* Mobile */}
        <div className="flex flex-col gap-3 md:hidden">
          <KspCard
            card={centerCard}
            className="aspect-[358/273]"
          />
          <div className="grid grid-cols-2 gap-3">
            <KspCard card={leftTop} className="aspect-[173/240]" />
            <KspCard card={rightTop} className="aspect-[173/240]" />
            <KspCard card={leftBottom} className="aspect-[173/240]" />
            <KspCard card={rightBottom} className="aspect-[173/240]" />
          </div>
        </div>

        {/* Desktop — matches reference ksp1203 grid */}
        <div
          className="ksp-desktop-grid hidden gap-3 md:grid lg:gap-4"
          style={{ gridTemplateRows: "auto auto" }}
        >
          <KspCard
            card={leftTop}
            className="col-start-1 row-start-1 aspect-[227/240] lg:aspect-[212/240] xl:aspect-[316/256] 2xl:aspect-[334/320]"
          />
          <KspCard
            card={leftBottom}
            className="col-start-1 row-start-2 aspect-[227/240] lg:aspect-[212/240] xl:aspect-[316/256] 2xl:aspect-[334/320]"
          />
          <KspCard
            card={centerCard}
            className="col-start-2 row-span-2 row-start-1 aspect-[227/492] lg:aspect-[288/496] xl:aspect-[426/528] 2xl:aspect-[685/656]"
          />
          <KspCard
            card={rightTop}
            className="col-start-3 row-start-1 aspect-[227/240] lg:aspect-[212/240] xl:aspect-[316/256] 2xl:aspect-[334/320]"
          />
          <KspCard
            card={rightBottom}
            className="col-start-3 row-start-2 aspect-[227/240] lg:aspect-[212/240] xl:aspect-[316/256] 2xl:aspect-[334/320]"
          />
        </div>
      </div>
    </section>
  );
}
