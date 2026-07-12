import { Car, Building2, Store, Plane } from "lucide-react";

const audiences = [
  { icon: Car, label: "Choferes y Traslados" },
  { icon: Building2, label: "Hotelería y Airbnb" },
  { icon: Store, label: "Comercios y Gastronomía" },
  { icon: Plane, label: "Viajeros Frecuentes" },
];

export function AwardsStrip() {
  return (
    <section
      className="w-full flex flex-col items-center gap-6"
      style={{ backgroundColor: "#0A1F44", padding: "24px clamp(20px, 5vw, 64px)" }}
    >
      <p style={{ color: "#a9b4c9", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
        Pensado para quienes hablan con turistas todos los días
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {audiences.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-white">
            <Icon size={22} style={{ color: "#1E90FF" }} />
            <span style={{ fontSize: "15px", fontWeight: 600 }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
