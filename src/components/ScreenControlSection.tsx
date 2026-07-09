import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function ScreenControlSection() {
  return (
    <section className={cn("text-white")} style={{ backgroundColor: "#0A1F44" }}>
      <div className="flex flex-col items-center pt-20 px-4">
        <h1
          className="text-center text-white leading-tight"
          style={{ fontSize: "52px", fontWeight: 800 }}
        >
          Cargá. Guardá. Listo para Traducir.
        </h1>
        <p
          className="text-center text-white mt-4"
          style={{ fontSize: "30px" }}
        >
          Estuche de Carga Incluido
        </p>
        <div className="mt-6 text-center text-[#a9b4c9] text-base leading-relaxed max-w-xl">
          <p>El auricular viene con estuche de carga y cable para que lo uses todo el día.</p>
          <p>Guardalo, cargalo y lleválo siempre con vos, sin ocupar espacio.</p>
        </div>
        <div className="relative mt-10 w-full max-w-[800px] mx-auto" style={{ aspectRatio: "800 / 600" }}>
          <PlaceholderImage
            illustration="/images/novexion/smart-case.svg"
            name="charging-case"
            alt="Estuche de carga de Novexion con auricular adentro"
            brief="FOTO REAL del estuche de carga Novexion con el auricular adentro, sobre fondo neutro."
            fill
            priority
          />
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
        style={{ padding: "80px 64px" }}
      >
        <div className="flex-1">
          <h2
            className="text-white leading-tight"
            style={{ fontSize: "48px", fontWeight: 800 }}
          >
            Práctico para el Día a Día
          </h2>
          <p className="text-[#a9b4c9] mt-6 text-lg leading-relaxed">
            El estuche protege el auricular y te permite recargarlo entre viajes,
            turnos o atenciones. Ideal para choferes, comercios y hotelería.
          </p>
        </div>
        <div className="relative flex-1 w-full" style={{ aspectRatio: "600 / 500" }}>
          <PlaceholderImage
            illustration="/images/novexion/product-main.svg"
            name="charging-case-closeup"
            alt="Auricular Novexion con estuche de carga"
            brief="FOTO REAL del auricular junto al estuche de carga y cable incluido."
            fill
          />
        </div>
      </div>
    </section>
  );
}
