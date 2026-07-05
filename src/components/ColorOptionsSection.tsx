import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function ColorOptionsSection() {
  return (
    <section className={cn("text-white")} style={{ backgroundColor: "#0A1F44" }}>
      <div className="flex flex-col items-center pt-20 pb-24 px-4">
        <h2
          className="text-white text-center leading-tight"
          style={{ fontSize: "48px", fontWeight: 800 }}
        >
          Empezá a Entender Todo, Hoy
        </h2>
        <p className="text-[#a9b4c9] text-center mt-4 max-w-[560px]" style={{ fontSize: "16px" }}>
          Elegí tu Kit Novexion y sumá el traductor con IA que te hace ganar
          tiempo, plata y confianza en cada conversación.
        </p>

        <div className="relative mt-10 w-full max-w-[1100px] mx-auto" style={{ aspectRatio: "1100 / 600" }}>
          <PlaceholderImage
            illustration="/images/novexion/hero-product.svg"
            alt="Kits Novexion: Individual y Profesional, con estuche de pantalla LCD abierto"
            brief="FOTO REAL: mockup de ambos kits (Individual y Profesional) con el estuche abierto mostrando la pantalla LCD."
            fill
            priority
          />
        </div>

        <a
          href="#kits"
          className="mt-10 inline-block font-bold text-lg px-12 py-4 transition-colors"
          style={{ borderRadius: "24px", backgroundColor: "#1E90FF", color: "#ffffff" }}
        >
          Comprar Ahora
        </a>
      </div>
    </section>
  );
}
