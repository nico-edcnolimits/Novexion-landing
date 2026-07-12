"use client";

import { Search, ShoppingCart } from "lucide-react";
import { TIENDANUBE_PRODUCT_URL } from "@/lib/store-links";
import { cn } from "@/lib/utils";

const trustBullets = [
  "Envío a todo el país",
  "Cuotas sin interés con Mercado Pago",
  "Garantía 6 meses",
];

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Cómo Funciona", href: "#thus" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
];

export function GlobalNav() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top trust bar — hidden on mobile, the same info repeats in the Hero's trust badges */}
      <div
        className="hidden md:flex h-8 items-center justify-between px-4 md:px-16"
        style={{ backgroundColor: "#0A1F44" }}
      >
        <nav className="flex items-center gap-4">
          {trustBullets.map((bullet, index) => (
            <span key={bullet} className="flex items-center gap-4">
              <span className="text-white" style={{ fontSize: "12px" }}>
                {bullet}
              </span>
              {index < trustBullets.length - 1 && (
                <span className="text-white/30 text-xs">|</span>
              )}
            </span>
          ))}
        </nav>
        <span className="text-white" style={{ fontSize: "12px" }}>
          Compra Protegida Mercado Pago
        </span>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          "h-16 md:h-20 flex items-center justify-between gap-3 px-4 md:px-16 bg-white shadow-sm"
        )}
      >
        {/* Left: Logo + tagline */}
        <div className="flex items-center gap-3 shrink-0 min-w-0">
          <a href="#" className="flex items-center gap-2 md:gap-3 min-w-0">
            <span
              className="font-black tracking-tight shrink-0"
              style={{ fontSize: "clamp(17px, 4vw, 22px)", letterSpacing: "-0.03em", color: "#0A1F44" }}
            >
              NOVEX<span style={{ color: "#1E90FF" }}>I</span>ON
            </span>
            <span className="hidden sm:inline text-gray-300 text-lg shrink-0">|</span>
            <span
              className="hidden sm:inline text-gray-500 font-medium truncate"
              style={{ fontSize: "13px" }}
            >
              Traductor con IA
            </span>
          </a>
        </div>

        {/* Center-left: Nav links */}
        <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center mx-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-black hover:text-gray-600 transition-colors font-medium whitespace-nowrap"
                style={{ fontSize: "14px" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Icons + CTA */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <div className="hidden sm:flex items-center gap-3">
            <button
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Carrito"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
          <a
            href={TIENDANUBE_PRODUCT_URL}
            className="inline-flex items-center justify-center text-white font-bold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: "#1E90FF",
              borderRadius: "24px",
              padding: "10px 14px",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Comprar Ahora
          </a>
        </div>
      </nav>
    </header>
  );
}
