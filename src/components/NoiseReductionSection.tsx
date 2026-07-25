import fs from "node:fs";
import path from "node:path";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

// Sección "Reducción de ruido" — resalta el filtro de limpieza de sonido de
// Novexion con una comparación Sin/Con Novexion. La imagen ya trae su propio
// título y textos, así que la sección solo la muestra integrada, con el mismo
// fundido azul marino → blanco → azul marino de la sección "Cómo usar".

// Versión vertical de la comparación para mobile — si todavía no se subió el
// archivo real, se usa la imagen horizontal de desktop también en mobile.
const ambientMobileExists = fs.existsSync(
  path.join(process.cwd(), "public/images/novexion/ambient-mobile.webp")
);

export function NoiseReductionSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Fundido superior: azul marino → blanco */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0"
        style={{
          height: "150px",
          background: "linear-gradient(180deg, #0A1F44 0%, rgba(10,31,68,0) 100%)",
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
        {ambientMobileExists && (
          <div
            className="relative mx-auto w-full md:hidden"
            style={{ maxWidth: "420px", aspectRatio: "1493 / 2000" }}
          >
            <PlaceholderImage
              illustration="/images/novexion/translation-bg.svg"
              name="ambient-mobile"
              alt="Escuchá cada conversación incluso en entornos ruidosos: comparación Sin Novexion (el ruido ambiente dificulta entender) vs Con Novexion (la reducción inteligente de ruido permite conversaciones claras)."
              brief="Versión vertical de la comparación Sin/Con Novexion, pensada para mobile."
              fill
              fit="contain"
              className="rounded-none border-0"
            />
          </div>
        )}
        <div
          className={`relative mx-auto w-full ${ambientMobileExists ? "hidden md:block" : ""}`}
          style={{ maxWidth: "1150px", aspectRatio: "1882 / 836" }}
        >
          <PlaceholderImage
            illustration="/images/novexion/translation-bg.svg"
            name="ambient"
            alt="Escuchá cada conversación incluso en entornos ruidosos: comparación Sin Novexion (el ruido ambiente dificulta entender) vs Con Novexion (la reducción inteligente de ruido permite conversaciones claras)."
            brief="Comparación Sin Novexion / Con Novexion mostrando la reducción de ruido en un entorno concurrido. Fondo blanco."
            fill
            fit="contain"
            className="rounded-none border-0"
          />
        </div>
      </div>
    </section>
  );
}
