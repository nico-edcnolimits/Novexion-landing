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
      className="w-full flex flex-col items-center gap-6 overflow-hidden"
      style={{ backgroundColor: "#0A1F44", padding: "24px 0" }}
    >
      <p
        className="px-6 text-center"
        style={{ color: "#a9b4c9", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
      >
        Pensado para quienes hablan con turistas todos los días
      </p>

      {/* Mobile: seamless auto-scrolling carousel */}
      <div
        className="w-full md:hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-10">
          {[...audiences, ...audiences].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2 text-white">
              <Icon size={22} style={{ color: "#1E90FF" }} />
              <span style={{ fontSize: "15px", fontWeight: 600, whiteSpace: "nowrap" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: static wrapped row */}
      <div className="hidden flex-wrap items-center justify-center gap-x-10 gap-y-4 px-16 md:flex">
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
