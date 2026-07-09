"use client";

import { TIENDANUBE_PRODUCT_URL } from "@/lib/store-links";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Resumen", href: "#overview" },
  { label: "Cómo Funciona", href: "#thus" },
  { label: "Specs", href: "#specs" },
];

interface ProductSubNavProps {
  activeTab?: string;
}

export function ProductSubNav({ activeTab = "Resumen" }: ProductSubNavProps) {
  return (
    <div
      className="sticky z-40 flex items-center justify-between px-16"
      style={{
        backgroundColor: "#0d2a5c",
        height: "46px",
        top: "0",
      }}
    >
      {/* Left: Product name */}
      <span
        className="text-white shrink-0"
        style={{
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
        }}
      >
        Novexion Q16-H3 — Traductor con IA
      </span>

      {/* Center: Tab links */}
      <nav className="flex items-center h-full gap-8">
        {tabs.map((tab) => {
          const isActive = tab.label === activeTab;
          return (
            <a
              key={tab.label}
              href={tab.href}
              className={cn(
                "relative h-full flex items-center text-white transition-colors hover:text-gray-300",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:content-['']",
                isActive
                  ? "after:bg-[#1E90FF]"
                  : "after:bg-transparent hover:after:bg-white/30"
              )}
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              {tab.label}
            </a>
          );
        })}
      </nav>

      {/* Right: Comprar Ahora button */}
      <a
        href={TIENDANUBE_PRODUCT_URL}
        className="shrink-0 bg-white text-black font-bold transition-opacity hover:opacity-90"
        style={{
          fontSize: "14px",
          fontWeight: 700,
          borderRadius: "24px",
          padding: "8px 20px",
        }}
      >
        Comprar Ahora
      </a>
    </div>
  );
}
