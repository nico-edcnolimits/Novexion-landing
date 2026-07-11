import { PlaceholderImage } from "@/components/ui/placeholder-image";

// Sección "Cómo Usar" — fondo blanco (para que la imagen de fondo blanco calce
// sin bordes) con un fundido azul marino → blanco arriba y blanco → azul marino
// abajo, para que emerja suavemente de las secciones navy que la rodean.

export function HowToUseSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Fundido superior: negro → blanco (la sección de arriba termina en negro puro) */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0"
        style={{
          height: "150px",
          background: "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Fundido inferior: blanco → azul marino */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{
          height: "150px",
          background: "linear-gradient(0deg, #0A1F44 0%, rgba(10,31,68,0) 100%)",
        }}
      />

      <div
        className="relative z-10 mx-auto w-full max-w-[1200px] px-6"
        style={{ paddingTop: "170px", paddingBottom: "170px" }}
      >
        {/* Encabezado */}
        <div className="text-center" style={{ marginBottom: "48px" }}>
          <p
            style={{
              color: "#1E90FF",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Empezar es fácil
          </p>
          <h2
            style={{
              color: "#0A1F44",
              fontSize: "44px",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "14px",
            }}
          >
            Cómo Usar Novexion en 3 Pasos
          </h2>
          <p
            className="mx-auto"
            style={{ color: "#5b6472", fontSize: "18px", lineHeight: 1.6, maxWidth: "620px" }}
          >
            Descargá la app, conectá el auricular y empezá a conversar. Sin
            configuraciones complicadas.
          </p>
        </div>

        {/* Infográfico (fondo blanco, se integra con el fondo de la sección) */}
        <div
          className="relative mx-auto w-full"
          style={{ maxWidth: "1150px", aspectRatio: "1884 / 835" }}
        >
          <PlaceholderImage
            illustration="/images/novexion/translation-bg.svg"
            name="como-usar"
            alt="Cómo usar Novexion en 3 pasos: descargá la app, conectá el auricular y conversá en tu idioma"
            brief="Infográfico de 3 pasos (Descarga / Conecta / Conversa) con capturas de la app. Fondo blanco, horizontal ~1900x860."
            fill
            fit="contain"
            className="rounded-none border-0"
          />
        </div>
      </div>
    </section>
  );
}
