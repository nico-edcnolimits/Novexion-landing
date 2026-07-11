/** URL de checkout de Tiendanube — todos los CTA "Comprar Ahora" apuntan acá. */
export const TIENDANUBE_PRODUCT_URL =
  process.env.NEXT_PUBLIC_TIENDANUBE_PRODUCT_URL ??
  "https://tiendadenovexiontraslate.mitiendanube.com/checkout/v3/start/2016733210/a5005f95ffbefd430e060b9446a03e76df32884d?from_store=1&country=AR";

/**
 * Link de WhatsApp para consultas (formato https://wa.me/549XXXXXXXXXX).
 * Vacío por defecto: el botón flotante no se muestra hasta que se configure
 * NEXT_PUBLIC_WHATSAPP_URL con el número real.
 */
export const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "";
