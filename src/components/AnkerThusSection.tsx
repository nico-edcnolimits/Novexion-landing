import { PlaceholderImage } from "@/components/ui/placeholder-image";

function PartA() {
  return (
    <section
      id="thus"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "60vh", background: "#0A1F44" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage
          illustration="/images/novexion/translation-bg.svg"
          alt="Motor de traducción IA de Novexion"
          brief="Fondo real: closeup del auricular Novexion o gráfico del proceso de traducción, tono azul marino."
          fill
          className="rounded-none border-0 opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,31,68,0.5)" }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ padding: "80px 32px", maxWidth: "800px" }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: "#1E90FF",
            fontSize: "14px",
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
            fontSize: "56px",
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
            fontSize: "18px",
            fontFamily: "var(--font-montserrat)",
            lineHeight: "1.6",
            marginBottom: "40px",
            whiteSpace: "pre-line",
          }}
        >
          {"Un motor de traducción por IA que entiende, traduce y responde\nsin que tengas que mirar la pantalla del celular"}
        </p>

        {/* CTA */}
        <button
          type="button"
          className="cursor-pointer transition-opacity hover:opacity-90"
          style={{
            background: "transparent",
            color: "#ffffff",
            border: "1.5px solid #ffffff",
            borderRadius: "24px",
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          Ver Video Demostrativo
        </button>
        <p style={{ color: "#a9b4c9", fontSize: "11px", marginTop: "12px", fontStyle: "italic" }}>
          PLACEHOLDER: sumar video real demostrando el producto en uso.
        </p>
      </div>
    </section>
  );
}

function PartB() {
  return (
    <section
      className="w-full"
      style={{ background: "#0A1F44", padding: "80px 64px" }}
    >
      <div
        className="mx-auto grid"
        style={{
          maxWidth: "1200px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {/* Left column */}
        <div
          className="flex flex-col"
          style={{
            padding: "0 40px 0 0",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Icon */}
          <div className="relative mb-6" style={{ width: "64px", height: "64px" }}>
            <PlaceholderImage
              illustration="/images/novexion/step-listen.svg"
              alt="Escuchás"
              brief="Ícono/gráfico real del paso 'escuchar'."
              fill
              className="rounded-lg"
            />
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
              color: "#a9b4c9",
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
              color: "#a9b4c9",
              fontSize: "14px",
              fontFamily: "var(--font-montserrat)",
              lineHeight: "1.7",
            }}
          >
            El auricular capta la voz de la otra persona, incluso con ruido de
            fondo — sin que nadie tenga que gritar ni repetir.
          </p>
        </div>

        {/* Center column */}
        <div
          className="flex flex-col items-center text-center"
          style={{
            padding: "0 40px",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p
            style={{
              color: "#1E90FF",
              fontSize: "72px",
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
              color: "#a9b4c9",
              fontSize: "14px",
              fontFamily: "var(--font-montserrat)",
              lineHeight: "1.7",
            }}
          >
            De Europa a Brasil, la IA de traducción cubre los idiomas de la
            mayoría de los turistas que llegan a Argentina.
          </p>
        </div>

        {/* Right column */}
        <div
          className="flex flex-col"
          style={{ padding: "0 0 0 40px" }}
        >
          {/* Icon */}
          <div className="relative mb-6" style={{ width: "64px", height: "64px" }}>
            <PlaceholderImage
              illustration="/images/novexion/step-speak.svg"
              alt="Respondés"
              brief="Ícono/gráfico real del paso 'responder'."
              fill
              className="rounded-lg"
            />
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
              color: "#a9b4c9",
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
              color: "#a9b4c9",
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
    </section>
  );
}

export function AnkerThusSection() {
  return (
    <>
      <PartA />
      <PartB />
    </>
  );
}
