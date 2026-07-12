import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { TIENDANUBE_PRODUCT_URL } from "@/lib/store-links";

export function ColorOptionsSection() {
  return (
    <section
      className={cn("relative text-white overflow-hidden")}
      style={{ backgroundColor: "#0A1F44" }}
    >
      {/* Background image — full-bleed, same treatment as the rest of the page */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage
          illustration="/images/novexion/hero-product.svg"
          name="product-final-mockup"
          alt="Novexion Q16-H3 con estuche de carga"
          brief="FOTO REAL: mockup del producto Novexion Q16-H3 con auricular y estuche de carga."
          fill
          fit="cover"
          priority
          className="rounded-none border-0"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,31,68,0.92) 0%, rgba(10,31,68,0.55) 45%, rgba(10,31,68,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-20 pb-24 px-4">
        <h2
          className="text-white text-center leading-tight"
          style={{ fontSize: "clamp(28px, 6.5vw, 48px)", fontWeight: 800 }}
        >
          Empezá a Entender Todo, Hoy
        </h2>
        <p className="text-[#c3cce0] text-center mt-4 max-w-[560px]" style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}>
          Sumá el traductor con IA que te hace ganar tiempo, plata y confianza
          en cada conversación.
        </p>

        <a
          href={TIENDANUBE_PRODUCT_URL}
          className="mt-10 inline-block font-bold text-lg px-12 py-4 transition-colors"
          style={{ borderRadius: "24px", backgroundColor: "#1E90FF", color: "#ffffff" }}
        >
          Comprar Ahora
        </a>
        <p className="text-[#c3cce0] mt-4" style={{ fontSize: "14px" }}>
          Precio y cuotas sin interés en la tienda oficial · Garantía 6 meses · Envío a todo el país
        </p>
      </div>
    </section>
  );
}
