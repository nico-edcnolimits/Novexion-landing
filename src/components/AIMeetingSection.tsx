import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function AIMeetingSection() {
  return (
    <section className={cn("text-white")} style={{ backgroundColor: "#0A1F44" }}>
      {/* Sub-section A: "Traducís. La App Guarda Todo." */}
      <div className="flex flex-col items-center pt-20 px-4">
        <h1
          className="text-center text-white leading-tight"
          style={{ fontSize: "52px", fontWeight: 800 }}
        >
          Traducís. La App Guarda Todo.
        </h1>
        <p className="text-center text-[#a9b4c9] mt-3" style={{ fontSize: "13px", fontStyle: "italic" }}>
          PLACEHOLDER: esta sección asume que la app Novexion guarda historial de traducciones. Confirmar con el fabricante antes de publicar — si no existe, reemplazar por una sección de Preguntas Frecuentes.
        </p>
      </div>

      {/* Sub-section B: "No Perdés Ninguna Conversación Importante" */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
        style={{ padding: "80px 64px" }}
      >
        <div className="flex-1">
          <h2
            className="text-white leading-tight"
            style={{ fontSize: "40px", fontWeight: 800 }}
          >
            No Perdés Ninguna Conversación Importante
          </h2>
          <p className="text-white text-base mt-4">
            Charla terminada. Todo quedó guardado en la app. Esto es lo que
            tenés después:
          </p>
          <ul className="mt-4 space-y-2 text-white text-base">
            <li>· Historial de traducciones.</li>
            <li>· Frases frecuentes guardadas para reutilizar.</li>
          </ul>
        </div>
        <div className="relative flex-1 w-full" style={{ aspectRatio: "600 / 500" }}>
          <PlaceholderImage
            illustration="/images/novexion/specs-infographic.svg"
            name="app-history-screenshot"
            alt="App Novexion mostrando historial de traducciones"
            brief="CAPTURA REAL de la app Novexion mostrando el historial/frases guardadas, si esta función existe."
            fill
          />
        </div>
      </div>

      {/* Sub-section C: "Tu Conversación, Segura" */}
      <div
        className="flex flex-col items-center px-4"
        style={{ padding: "80px 16px" }}
      >
        <h2
          className="text-white text-center leading-tight max-w-3xl"
          style={{ fontSize: "40px", fontWeight: 800 }}
        >
          Tu Conversación, Segura
        </h2>
        <p className="text-[#a9b4c9] text-center mt-6 max-w-[600px] leading-relaxed text-lg">
          La traducción se procesa para que puedas usarla al instante, sin
          exponer tus conversaciones a terceros.
        </p>
      </div>
    </section>
  );
}
