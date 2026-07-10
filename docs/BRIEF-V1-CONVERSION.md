# Brief: Optimizar landing Novexion para V1 (conversión rápida)

Documento para compartir con Claude u otro agente. Objetivo: **reducir la landing a lo mínimo que convierta**, listo para lanzar en Tiendanube (Argentina).

---

## Contexto del negocio

| Item | Detalle |
|------|---------|
| **Producto** | Novexion Q16-H3 — auricular traductor con IA en tiempo real |
| **Mercado** | Argentina |
| **Canal principal** | Tiendanube (CTA → URL del producto) |
| **Canal secundario** | Mercado Libre (pendiente definir con cliente) |
| **Modelo V1** | **Un solo producto** (sin kits) |
| **Pagos / confianza** | Mercado Pago, cuotas, garantía 6 meses, envío nacional |
| **NO incluir** | Pantalla LCD en el estuche (el producto no la trae) |

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4.  
**Página principal:** `src/app/page.tsx`  
**CTA Tiendanube:** `src/lib/store-links.ts` → `NEXT_PUBLIC_TIENDANUBE_PRODUCT_URL`

---

## Mapa actual de secciones (orden en página)

| # | Componente | Rol actual | Notas |
|---|------------|------------|-------|
| — | `GlobalNav` | Nav + CTA Comprar | Mantener simplificado |
| — | `ProductSubNav` | Tabs sticky (Resumen / Cómo funciona / Specs) | Evaluar si sobra en V1 |
| 1 | `HeroSection` | Hook + CTA dual | **Crítico** |
| 2 | `AwardsStrip` | Audiencias (choferes, hotelería, comercios, viajeros) | Útil para segmentación |
| 3 | `TrialOfferSection` | Garantía 6 meses + 3 respaldos (Mercado Pago) | **Crítico** para confianza AR |
| 4 | `PowerGridSection` | Grid KSP (5 features, estilo Soundcore) | **Crítico** — beneficios clave |
| 5 | `GuinnessSection` | Testimonio (Diego, chofer) | Mantener 1 testimonio max |
| 6 | `AnkerThusSection` | Cómo funciona IA + 3 pasos (+140 idiomas) | **Crítico** — explicar producto |
| 7 | `CallQualitySection` | Cara a cara vs celular, modo altavoz, micrófonos | Mucho contenido; candidato a recortar |
| 8 | `ANCSection` | Ruido de calle / reducción de ruido | Candidato a fusionar o recortar |
| 9 | `SignatureSoundSection` | Voz natural, ajustes de app | Candidato a recortar (PLACEHOLDER app) |
| 10 | `VoiceControlSection` | Control táctil, gestos | Candidato a recortar |
| 11 | `ScreenControlSection` | Estuche de carga (reemplazó LCD) | Evaluar: ¿necesario en V1? |
| 12 | `AIMeetingSection` | Historial en app | **Eliminar si no está confirmado** (PLACEHOLDER) |
| 13 | `MoreFeaturesSection` | Carrusel features extra | Candidato a eliminar (redundante con KSP) |
| 14 | `ColorOptionsSection` | CTA final “Comprar Ahora” | **Crítico** — cierre de conversión |
| — | `FooterSection` | Links legales, WhatsApp, pagos | Mantener mínimo legal |

**Total hoy:** ~14 bloques de contenido + 2 navs. Muy largo para V1.

---

## Objetivo de la optimización

1. **Menos scroll, más conversión** — visitante entiende el producto y compra en < 2 minutos.
2. **Eliminar redundancia** — no repetir el mismo beneficio en 3 secciones distintas.
3. **Eliminar claims no verificados** — quitar PLACEHOLDERs y features no confirmadas (app historial, gestos exactos, voz/velocidad app, mediciones de ruido).
4. **Mantener identidad visual** — azul `#0A1F44`, acento `#1E90FF`, Montserrat, estilo premium.
5. **No romper Tiendanube** — todos los “Comprar Ahora” siguen apuntando a `TIENDANUBE_PRODUCT_URL`.

---

## Propuesta orientativa V1 (para que el agente refine)

### Mantener (core conversión)
- Hero (headline + CTA + trust badges)
- Audiencias / casos de uso (1 fila compacta)
- Garantía + Mercado Pago (TrialOffer — puede acortarse)
- KSP grid (5 features — ya alineado a referencia)
- Cómo funciona (1 sección, no 3)
- 1 testimonio
- CTA final + footer mínimo

### Fusionar o acortar
- `CallQualitySection` + `ANCSection` → **1 bloque** “Funciona en la calle y en el local”
- `VoiceControlSection` + partes de `ScreenControlSection` → **1 bloque** “Fácil de usar sin mirar el celular”

### Eliminar en V1 (si no hay contenido real)
- `AIMeetingSection` (historial app no confirmado)
- `SignatureSoundSection` (ajustes de voz app no confirmados)
- `MoreFeaturesSection` (duplica KSP)
- `ProductSubNav` (opcional — simplifica nav a anclas esenciales)
- Comparativas before/after interactivas (estáticas o 1 sola)

### Agregar si falta
- **FAQ corta** (5–7 preguntas: envío, garantía, idiomas, batería, devoluciones)
- **Bloque precio** (aunque sea “Ver precio en tienda” si no hay ARS fijo aún)
- Botón WhatsApp flotante (opcional)

---

## Criterios de decisión (keep / cut)

| Pregunta | Si NO → cortar |
|----------|----------------|
| ¿Ayuda a que alguien **compre hoy**? | Eliminar |
| ¿Está **confirmado** por el fabricante/cliente? | Eliminar o marcar pendiente |
| ¿Ya se dice en otra sección? | Fusionar |
| ¿Requiere foto/video que **no tenemos**? | Simplificar a texto + 1 imagen |
| ¿Es legal/compliance en AR? | Mantener en footer |

---

## Placeholders pendientes (no publicar sin resolver)

- Testimonio: nombre/foto autorizados
- Specs exactas: batería (horas), gestos táctiles Q16-H3
- App: historial, voz, velocidad — **confirmar con fabricante**
- Razón social / CUIT en footer
- URL Tiendanube real del producto
- Precio en ARS y cuotas

---

## Archivos clave a editar

```
src/app/page.tsx              ← orden y lista de secciones
src/components/*.tsx          ← cada sección
src/lib/store-links.ts        ← URL compra
src/components/GlobalNav.tsx  ← links nav
src/components/FooterSection.tsx
```

Preview estático cliente (desactualizado): `preview-cliente/index.html` — regenerar después con `node scripts/generate-client-preview.mjs` si hace falta.

---

## Entregable esperado del agente

1. **`page.tsx` actualizado** con solo secciones V1.
2. **Lista explícita** de componentes removidos vs fusionados (y por qué).
3. **Copy revisado** — sin PLACEHOLDERs visibles al usuario.
4. **Nav simplificado** — máx. 4 links + Comprar.
5. **`npm run check`** sin errores.
6. Landing **~50–60% más corta** que la versión actual.

---

## Tono de marca (mantener)

- Directo, argentino, orientado a **choferes, hotelería, comercios** que atienden turistas.
- Pain point central: *“Cada cliente que no entendés es una venta que se va.”*
- No oversell — solo claims defendibles.

---

*Generado: julio 2026 · Proyecto: web novexion · Commit base: `cce544e`*
