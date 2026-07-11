import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { TIENDANUBE_PRODUCT_URL } from "@/lib/store-links";

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
          Sumá el traductor con IA que te hace ganar tiempo, plata y confianza
          en cada conversación.
        </p>

        <div className="relative mt-10 w-full max-w-[1100px] mx-auto" style={{ aspectRatio: "1100 / 600" }}>
          <PlaceholderImage
            illustration="/images/novexion/hero-product.svg"
            name="product-final-mockup"
            alt="Novexion Q16-H3 con estuche de carga"
            brief="FOTO REAL: mockup del producto Novexion Q16-H3 con auricular y estuche de carga."
            fill
            priority
          />
        </div>

        <a
          href={TIENDANUBE_PRODUCT_URL}
          className="mt-10 inline-block font-bold text-lg px-12 py-4 transition-colors"
          style={{ borderRadius: "24px", backgroundColor: "#1E90FF", color: "#ffffff" }}
        >
          Comprar Ahora
        </a>
        <p className="text-[#a9b4c9] mt-4" style={{ fontSize: "14px" }}>
          Precio y cuotas sin interés en la tienda oficial · Garantía 6 meses · Envío a todo el país
        </p>
      </div>
    </section>
  );
}
