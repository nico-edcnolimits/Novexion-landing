import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/store-links";

/**
 * Floating WhatsApp button — a strong conversion/support channel in Argentina.
 * Renders only when NEXT_PUBLIC_WHATSAPP_URL is set to a real link, so it never
 * ships as a dead button.
 */
export function WhatsAppFloat() {
  if (!WHATSAPP_URL.startsWith("http")) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full shadow-lg transition-transform hover:scale-105"
      style={{ backgroundColor: "#25D366", color: "#ffffff", padding: "14px 18px" }}
    >
      <MessageCircle size={22} />
      <span className="font-bold hidden sm:inline" style={{ fontSize: "15px" }}>
        Consultanos
      </span>
    </a>
  );
}
