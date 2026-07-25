import fs from "node:fs";
import path from "node:path";
import { Download, Bluetooth, MessageCircle } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

// Versión vertical del infográfico para mobile — si todavía no se subió el
// archivo real, se usan los pasos numerados como respaldo en su lugar.
const comoUsarMobileExists = fs.existsSync(
  path.join(process.cwd(), "public/images/novexion/como-usar-mobile.webp")
);

const steps = [
  {
    icon: Download,
    title: "1. Descarga",
    text: "Bajá la app de Novexion en tu celular en menos de un minuto.",
  },
  {
    icon: Bluetooth,
    title: "2. Conecta",
    text: "Emparejá el auricular por Bluetooth con un solo toque.",
  },
  {
    icon: MessageCircle,
    title: "3. Conversa",
    text: "Elegí el idioma y empezá a traducir la conversación al instante.",
  },
];

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
        style={{ paddingTop: "clamp(165px, 20vw, 170px)", paddingBottom: "clamp(165px, 20vw, 170px)" }}
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
              fontSize: "clamp(28px, 6.5vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "14px",
            }}
          >
            Cómo Usar Novexion en 3 Pasos
          </h2>
          <p
            className="mx-auto"
            style={{ color: "#5b6472", fontSize: "clamp(14px, 3.5vw, 18px)", lineHeight: 1.6, maxWidth: "620px" }}
          >
            Descargá la app, conectá el auricular y empezá a conversar. Sin
            configuraciones complicadas.
          </p>
        </div>

        {/* Mobile: imagen vertical del infográfico si ya está subida; si no,
            pasos numerados como respaldo (la imagen panorámica de desktop
            queda ilegible en pantallas chicas) */}
        {comoUsarMobileExists ? (
          <div
            className="relative mx-auto w-full md:hidden"
            style={{ maxWidth: "420px", aspectRatio: "1493 / 2000" }}
          >
            <PlaceholderImage
              illustration="/images/novexion/translation-bg.svg"
              name="como-usar-mobile"
              alt="Cómo usar Novexion en 3 pasos: descargá la app, conectá el auricular y conversá en tu idioma"
              brief="Versión vertical del infográfico de 3 pasos (Descarga / Conecta / Conversa), pensada para mobile."
              fill
              fit="contain"
              className="rounded-none border-0"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:hidden">
            {steps.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border p-5"
                style={{ borderColor: "#e3e7ee", backgroundColor: "#f7f9fc" }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-xl"
                  style={{ width: "48px", height: "48px", backgroundColor: "rgba(30,144,255,0.12)" }}
                >
                  <Icon size={24} style={{ color: "#1E90FF" }} />
                </div>
                <div>
                  <h3 style={{ color: "#0A1F44", fontWeight: 700, fontSize: "17px", marginBottom: "4px" }}>
                    {title}
                  </h3>
                  <p style={{ color: "#5b6472", fontSize: "14px", lineHeight: 1.6 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Desktop: infográfico completo (fondo blanco, se integra con el fondo de la sección) */}
        <div
          className="relative mx-auto hidden w-full md:block"
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
