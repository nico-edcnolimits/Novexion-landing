import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuántos idiomas traduce?",
    a: "Más de 140 idiomas, incluyendo inglés, portugués, alemán, francés, italiano y chino, entre muchos otros.",
  },
  {
    q: "¿Necesito internet para usarlo?",
    a: "Sí. Novexion se vincula a una app en tu celular y usa internet (wifi o datos móviles) para traducir en tiempo real. Así la traducción es rápida y siempre está actualizada.",
  },
  {
    q: "¿Cómo se usa?",
    a: "Se conecta por Bluetooth a tu celular. Elegís el idioma y hablás: en modo cara a cara la otra persona escucha la traducción, y en modo altavoz el auricular traduce en voz alta para varias personas.",
  },
  {
    q: "¿Cuánto dura la batería?",
    a: "Rinde varias horas de uso continuo, y el estuche de carga incluido te permite recargarlo durante el día para que no te quedes sin batería.",
  },
  {
    q: "¿Tiene garantía?",
    a: "Sí, incluye 6 meses de garantía contra defectos de fábrica.",
  },
  {
    q: "¿Puedo pagar en cuotas? ¿Cómo compro?",
    a: "Sí. Comprás desde la tienda oficial con Mercado Pago y cuotas sin interés. El precio y las cuotas disponibles los ves al tocar “Comprar Ahora”.",
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí, enviamos a toda la Argentina. Tu compra está protegida por Mercado Pago.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="text-white" style={{ backgroundColor: "#0A1F44" }}>
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2
          className="font-extrabold text-center leading-tight mb-12"
          style={{ fontSize: "clamp(28px, 6.5vw, 44px)" }}
        >
          Preguntas Frecuentes
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 [&_svg]:open:rotate-45"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="font-semibold text-white" style={{ fontSize: "17px" }}>
                  {q}
                </span>
                <Plus
                  size={20}
                  className="shrink-0 transition-transform duration-200"
                  style={{ color: "#1E90FF" }}
                />
              </summary>
              <p
                className="text-[#a9b4c9] mt-4"
                style={{ fontSize: "15px", lineHeight: 1.7 }}
              >
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
