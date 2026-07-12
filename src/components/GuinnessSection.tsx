import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function GuinnessSection() {
  return (
    <section
      id="testimonios"
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{
        background: "#0A1F44",
        minHeight: "70vh",
      }}
    >
      {/* Background image — full-bleed, same treatment as "Tu Voz, Traducida al Instante" */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage
          illustration="/images/novexion/usecase-driver.svg"
          name="testimonial-driver"
          alt="Diego, conductor de traslados, usando Novexion"
          brief="FOTO REAL: Diego (o el chofer real entrevistado) con su auricular Novexion puesto, en su auto o con un pasajero — con su autorización para publicar nombre y foto."
          fill
          fit="cover"
          priority
          className="rounded-none border-0"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,31,68,0.9) 0%, rgba(10,31,68,0.65) 45%, rgba(10,31,68,0.88) 100%)",
          }}
        />
      </div>

      {/* Text block — top group (eyebrow + heading) and bottom group (quote,
          attribution, CTA) pinned to opposite ends of the section */}
      <div
        className="relative z-10 flex flex-1 w-full flex-col items-center justify-between text-center"
        style={{ paddingTop: "56px", paddingBottom: "56px", paddingLeft: "clamp(20px, 5vw, 32px)", paddingRight: "clamp(20px, 5vw, 32px)" }}
      >
        {/* Top group */}
        <div className="flex flex-col items-center">
          <p
            style={{
              color: "#c3cce0",
              fontSize: "clamp(14px, 3.5vw, 18px)",
              fontFamily: "var(--font-montserrat)",
              marginBottom: "12px",
            }}
          >
            Historias reales de gente que vive del contacto con turistas
          </p>
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(28px, 6.5vw, 48px)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              lineHeight: "1.2",
              maxWidth: "800px",
            }}
          >
            Lo Que Dicen los Que Ya Lo Usan Todos los Días
          </h2>
        </div>

        {/* Bottom group */}
        <div className="flex flex-col items-center">
          <blockquote
            className="text-white text-center"
            style={{ fontSize: "clamp(18px, 4.5vw, 24px)", fontWeight: 600, maxWidth: "700px", lineHeight: 1.4, marginBottom: "16px" }}
          >
            &ldquo;Antes tenía complicaciones para ofrecer bien mi servicio. Con
            Novexion aumenté considerablemente mis ventas.&rdquo;
          </blockquote>
          <p style={{ color: "#c3cce0", fontSize: "14px", marginBottom: "32px" }}>
            — Diego, conductor de traslados, Buenos Aires
          </p>

          <a
            href="#thus"
            className="cursor-pointer transition-opacity hover:opacity-90"
            style={{
              background: "#ffffff",
              color: "#0A1F44",
              borderRadius: "24px",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "var(--font-montserrat)",
              border: "none",
              display: "inline-block",
            }}
          >
            Descubrí Cómo Funciona
          </a>
        </div>
      </div>
    </section>
  );
}
