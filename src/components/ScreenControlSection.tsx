import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function ScreenControlSection() {
  return (
    <section className={cn("text-white")} style={{ backgroundColor: "#0A1F44" }}>
      {/* Sub-section A: "Mirá. Tocá. Traducido." */}
      <div className="flex flex-col items-center pt-20 px-4">
        <h1
          className="text-center text-white leading-tight"
          style={{ fontSize: "52px", fontWeight: 800 }}
        >
          Mirá. Tocá. Traducido.
        </h1>
        <p
          className="text-center text-white mt-4"
          style={{ fontSize: "30px" }}
        >
          Pantalla LCD en el Estuche
        </p>
        <div className="mt-6 text-center text-[#a9b4c9] text-base leading-relaxed max-w-xl">
          <p>El texto de la traducción aparece en la pantalla del estuche.</p>
          <p>Mostráselo a la otra persona cuando haga falta, sin usar el celular.</p>
        </div>
        <div className="relative mt-10 w-full max-w-[800px] mx-auto" style={{ aspectRatio: "800 / 600" }}>
          <PlaceholderImage
            illustration="/images/novexion/smart-case.svg"
            alt="Estuche de Novexion con pantalla LCD mostrando el texto traducido"
            brief="FOTO REAL del estuche Novexion con la pantalla LCD encendida mostrando una traducción en texto."
            fill
            priority
          />
        </div>
      </div>

      {/* Sub-section B: "Control Simple, Resultado Profesional" */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
        style={{ padding: "80px 64px" }}
      >
        <div className="flex-1">
          <h2
            className="text-white leading-tight"
            style={{ fontSize: "48px", fontWeight: 800 }}
          >
            Control Simple, Resultado Profesional
          </h2>
          <p className="text-[#a9b4c9] mt-6 text-lg leading-relaxed">
            La pantalla no es solo para mirar la hora: mostrá la traducción,
            cambiá de idioma y controlá el volumen, todo desde el estuche.
          </p>
        </div>
        <div className="relative flex-1 w-full" style={{ aspectRatio: "600 / 500" }}>
          <PlaceholderImage
            illustration="/images/novexion/smart-case.svg"
            alt="Primer plano de la pantalla del estuche Novexion"
            brief="FOTO REAL en primer plano de la pantalla del estuche mostrando el menú de idioma/volumen."
            fill
          />
        </div>
      </div>
    </section>
  );
}
