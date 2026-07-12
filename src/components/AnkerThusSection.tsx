import { Ear, MessagesSquare } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { TIENDANUBE_PRODUCT_URL } from "@/lib/store-links";

export function AnkerThusSection() {
  return (
    <section
      id="thus"
      className="relative w-full overflow-hidden"
      style={{ background: "#0A1F44" }}
    >
      {/* Background image — covers the whole section (hero text down to the
          bottom CTA), not just the top block */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage
          illustration="/images/novexion/translation-bg.svg"
          name="ai-tech-hero"
          alt="Motor de traducción IA de Novexion"
          brief="Fondo real: closeup del auricular Novexion o gráfico del proceso de traducción, tono azul marino."
          fill
          fit="cover"
          className="rounded-none border-0 opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,31,68,0.55) 0%, rgba(10,31,68,0.8) 45%, rgba(10,31,68,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero block */}
        <div
          className="flex flex-col items-center text-center mx-auto"
          style={{ padding: "clamp(48px, 10vw, 80px) clamp(20px, 5vw, 32px) clamp(40px, 8vw, 60px)", maxWidth: "800px" }}
        >
          {/* Eyebrow */}
          <p
            style={{
              color: "#1E90FF",
              fontSize: "clamp(12px, 3vw, 14px)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Tecnología Novexion IA
          </p>

          {/* Heading */}
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(32px, 8vw, 56px)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            Tu Voz, Traducida al Instante
          </h2>

          {/* Subheading */}
          <p
            style={{
              color: "#a9b4c9",
              fontSize: "clamp(14px, 3.5vw, 18px)",
              fontFamily: "var(--font-montserrat)",
              lineHeight: "1.6",
              marginBottom: "40px",
            }}
          >
            Un motor de traducción por IA que entiende, traduce y responde sin que tengas que mirar la pantalla del celular
          </p>

          {/* CTA */}
          <a
            href={TIENDANUBE_PRODUCT_URL}
            className="cursor-pointer transition-opacity hover:opacity-90 inline-block"
            style={{
              background: "#1E90FF",
              color: "#ffffff",
              border: "1.5px solid #1E90FF",
              borderRadius: "24px",
              padding: "12px 32px",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Comprar Ahora
          </a>
        </div>

        {/* 3-column feature grid — stacks to 1 column on mobile */}
        <div style={{ padding: "40px clamp(20px, 5vw, 64px) 80px" }}>
          <div
            className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0"
            style={{ maxWidth: "1200px" }}
          >
            {/* Left column */}
            <div
              className="flex flex-col items-center text-center md:items-start md:text-left pb-10 md:pb-0 border-b md:border-b-0 md:border-r border-white/15"
              style={{ padding: "0" }}
            >
              <div className="md:pr-10 flex flex-col items-center text-center md:items-start md:text-left w-full">
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-xl mb-6"
                style={{ width: "64px", height: "64px", backgroundColor: "rgba(30,144,255,0.2)" }}
              >
                <Ear size={30} style={{ color: "#1E90FF" }} />
              </div>

              <h3
                className="text-white"
                style={{
                  fontSize: "22px",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                Escuchás
              </h3>
              <p
                style={{
                  color: "#c3cce0",
                  fontSize: "14px",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 500,
                  marginBottom: "16px",
                }}
              >
                Micrófonos de Alta Sensibilidad
              </p>
              <p
                style={{
                  color: "#c3cce0",
                  fontSize: "14px",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: "1.7",
                }}
              >
                El auricular capta la voz de la otra persona, incluso con ruido de
                fondo — sin que nadie tenga que gritar ni repetir.
              </p>
              </div>
            </div>

            {/* Center column */}
            <div
              className="flex flex-col items-center text-center pb-10 md:pb-0 border-b md:border-b-0 md:border-r border-white/15"
            >
              <div className="md:px-10 flex flex-col items-center text-center w-full">
              <p
                style={{
                  color: "#1E90FF",
                  fontSize: "clamp(48px, 12vw, 72px)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 900,
                  lineHeight: "1",
                  marginBottom: "4px",
                }}
              >
                +140
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: "20px",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                Idiomas Disponibles
              </p>
              <p
                style={{
                  color: "#c3cce0",
                  fontSize: "14px",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: "1.7",
                }}
              >
                De Europa a Brasil, la IA de traducción cubre los idiomas de la
                mayoría de los turistas que llegan a Argentina.
              </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="md:pl-10 flex flex-col items-center text-center md:items-start md:text-left w-full">
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-xl mb-6"
                style={{ width: "64px", height: "64px", backgroundColor: "rgba(30,144,255,0.2)" }}
              >
                <MessagesSquare size={30} style={{ color: "#1E90FF" }} />
              </div>

              <h3
                className="text-white"
                style={{
                  fontSize: "22px",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                Respondés
              </h3>
              <p
                style={{
                  color: "#c3cce0",
                  fontSize: "14px",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 500,
                  marginBottom: "16px",
                }}
              >
                Traducción Clara y Natural
              </p>
              <p
                style={{
                  color: "#c3cce0",
                  fontSize: "14px",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: "1.7",
                }}
              >
                La traducción se escucha directo en el oído, casi sin demora — la
                conversación sigue su ritmo, sin cortes incómodos.
              </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-16">
            <a
              href="#specs"
              className="cursor-pointer transition-opacity hover:opacity-90"
              style={{
                background: "#ffffff",
                color: "#0A1F44",
                border: "none",
                borderRadius: "24px",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: 700,
                fontFamily: "var(--font-montserrat)",
                display: "inline-block",
              }}
            >
              + Conocé Cómo Funciona la Traducción IA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
