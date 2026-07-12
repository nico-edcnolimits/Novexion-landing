// Note: lucide-react v1.x removed brand icons (Instagram/Facebook/WhatsApp).
// We use semantic equivalents: Camera → Instagram, Users → Facebook, MessageCircle → WhatsApp.
import { Camera, Users, MessageCircle, Globe } from "lucide-react";
import { TIENDANUBE_PRODUCT_URL } from "@/lib/store-links";
import { cn } from "@/lib/utils";

const companyLinks = ["Sobre Novexion", "Garantía", "Preguntas Frecuentes"];
const productLinks = [{ label: "Novexion Q16-H3", href: TIENDANUBE_PRODUCT_URL }];
const supportLinks = [
  "Preguntas Frecuentes",
  "Cómo Funciona la Garantía",
  "Política de Envíos",
  "Cambios y Devoluciones",
];
const communityLinks = ["Reseñas de Clientes", "Comprá en Mercado Libre"];

const paymentMethods = ["Mercado Pago", "Visa", "Mastercard", "Cuotas"];

const policyLinks = [
  "Preguntas Frecuentes",
  "Política de Envíos",
  "Cambios y Devoluciones",
  "Términos y Condiciones",
  "Política de Privacidad",
];

type SocialEntry = {
  label: string;
  // We type Icon as a component accepting SVG size props
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const socialIcons: SocialEntry[] = [
  { Icon: Camera, label: "Instagram" },
  { Icon: Users, label: "Facebook" },
  { Icon: MessageCircle, label: "WhatsApp" },
];

export function FooterSection() {
  return (
    <footer
      className={cn("text-white")}
      style={{ padding: "48px clamp(20px, 5vw, 64px) 32px", backgroundColor: "#0A1F44" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company / Brand */}
          <div>
            <p className="text-xl font-extrabold text-white mb-5">NOVEXION</p>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#a9b4c9] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <p className="text-xs text-[#a9b4c9] uppercase tracking-widest mb-5">
              Producto
            </p>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a9b4c9] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <p className="text-xs text-[#a9b4c9] uppercase tracking-widest mb-5">
              Ayuda
            </p>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#a9b4c9] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Community + WhatsApp CTA */}
          <div>
            <p className="text-xs text-[#a9b4c9] uppercase tracking-widest mb-5">
              Comunidad
            </p>
            <ul className="space-y-2 mb-8">
              {communityLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#a9b4c9] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#a9b4c9] uppercase tracking-widest mb-3">
              Consultanos
            </p>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-xs text-[#a9b4c9] border border-white/20 rounded-lg px-3 py-2 hover:text-white hover:border-white/40 transition-colors"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── Social row ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 border-b border-white/10 gap-4">
          <div className="flex gap-5 items-center">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-[#a9b4c9] hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#a9b4c9] transition-colors">
            <Globe size={16} />
            <span>Envíos a todo el país — Argentina</span>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-[#a9b4c9]">
            {/* Copyright */}
            <p className="whitespace-nowrap">
              {/* PLACEHOLDER: confirmar razón social / CUIT antes de publicar */}
              © Novexion 2026. Todos los derechos reservados.
            </p>

            {/* Payment method badges */}
            <div className="flex flex-wrap gap-1 items-center justify-center">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="inline-flex items-center justify-center h-6 px-2 text-[9px] font-semibold border border-white/20 rounded text-white/60 bg-white/[0.03]"
                >
                  {method}
                </span>
              ))}
            </div>

            {/* Policy links */}
            <div className="flex flex-wrap gap-x-2 items-center justify-center">
              {policyLinks.map((link, i) => (
                <span key={link} className="flex items-center gap-2">
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                  {i < policyLinks.length - 1 && (
                    <span className="text-white/20 select-none">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
