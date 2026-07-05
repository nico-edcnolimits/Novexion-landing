import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function GuinnessSection() {
  return (
    <section
      id="testimonios"
      className="w-full flex flex-col items-center"
      style={{
        background: "#0A1F44",
        minHeight: "70vh",
      }}
    >
      {/* Text block */}
      <div
        className="flex flex-col items-center text-center"
        style={{ paddingTop: "80px", paddingLeft: "32px", paddingRight: "32px" }}
      >
        <h2
          className="text-white"
          style={{
            fontSize: "48px",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            lineHeight: "1.2",
            marginBottom: "16px",
            maxWidth: "800px",
          }}
        >
          Lo Que Dicen los Que Ya Lo Usan Todos los Días
        </h2>
        <p
          style={{
            color: "#a9b4c9",
            fontSize: "18px",
            fontFamily: "var(--font-montserrat)",
            marginBottom: "32px",
          }}
        >
          Historias reales de gente que vive del contacto con turistas
        </p>

        {/* Testimonial quote */}
        <blockquote
          className="text-white text-center"
          style={{ fontSize: "24px", fontWeight: 600, maxWidth: "700px", lineHeight: 1.4, marginBottom: "16px" }}
        >
          &ldquo;Antes tenía complicaciones para ofrecer bien mi servicio. Con
          Novexion aumenté considerablemente mis ventas.&rdquo;
        </blockquote>
        <p style={{ color: "#a9b4c9", fontSize: "14px", marginBottom: "8px" }}>
          — Diego, conductor de traslados, Buenos Aires
        </p>
        <p style={{ color: "#a9b4c9", fontSize: "11px", maxWidth: "500px", marginBottom: "32px", fontStyle: "italic" }}>
          Testimonio adaptado del relevamiento de mercado. PLACEHOLDER: reemplazar por el testimonio real con nombre, foto y rubro verificados antes de publicar.
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
            marginBottom: "48px",
            display: "inline-block",
          }}
        >
          Descubrí Cómo Funciona
        </a>
      </div>

      {/* Testimonial photo */}
      <div
        className="relative w-full"
        style={{ maxWidth: "900px", aspectRatio: "900 / 600", margin: "0 auto" }}
      >
        <PlaceholderImage
          illustration="/images/novexion/usecase-driver.svg"
          alt="Diego, conductor de traslados, usando Novexion"
          brief="FOTO REAL: Diego (o el chofer real entrevistado) con su auricular Novexion puesto, en su auto o con un pasajero — con su autorización para publicar nombre y foto."
          fill
          priority
          className="rounded-none border-0"
        />
      </div>
    </section>
  );
}
