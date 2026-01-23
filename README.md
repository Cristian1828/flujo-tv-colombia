# Flujo TV Colombia (Landing)

Landing de Flujo TV para Colombia construida con Astro + Tailwind. Optimizada para conversión a WhatsApp y para indexación en Google (SEO técnico + contenido visible).

## Stack
- Astro (sitio estático)
- Tailwind CSS

## Requisitos
- Node.js 18+
- npm

## Instalación y desarrollo
```bash
npm install
npm run dev
```
Dev server: `http://localhost:4321`

Build estático:
```bash
npm run build
```

Preview del build:
```bash
npm run preview
```

## Configuración (WhatsApp, dominio, precios)
La configuración principal está centralizada en [src/config/site.ts](src/config/site.ts):
- `site.canonical` / `site.domain`
- `site.supportEmail`
- `site.whatsappNumber`
- planes y precios (`site.pricing`)

Los CTAs usan `waLink(message)` para generar enlaces de WhatsApp con mensaje prellenado.

## SEO e indexación (Google)
SEO técnico vive en [src/layouts/Layout.astro](src/layouts/Layout.astro):
- `title`, `meta description`, `canonical`
- Open Graph / Twitter
- JSON-LD (Organization/WebSite/WebPage/Service + BreadcrumbList)

Archivos para crawlers:
- [public/robots.txt](public/robots.txt)
- [public/sitemap.xml](public/sitemap.xml)

FAQ con rich results:
- [src/components/FAQ.astro](src/components/FAQ.astro) incluye `FAQPage` JSON-LD.

Verificación de Google Search Console (opcional):
- Define `PUBLIC_GOOGLE_SITE_VERIFICATION` como variable de entorno para inyectar el meta tag.

## Restricciones de producto (copy)
- Soportado: Android (celular/tablet), TV Box, Fire Stick, Google TV, Xiaomi Stick.
- Requiere internet estable.
- Smart TV sin Android requiere TV Box.

## Componentes principales
- [src/components/Hero.astro](src/components/Hero.astro) (incluye slider)
- [src/components/Benefits.astro](src/components/Benefits.astro)
- [src/components/HowItWorks.astro](src/components/HowItWorks.astro)
- [src/components/Comparison.astro](src/components/Comparison.astro)
- [src/components/Installation.astro](src/components/Installation.astro)
- [src/components/Download.astro](src/components/Download.astro)
- [src/components/PricingTable.astro](src/components/PricingTable.astro)
- [src/components/SEOContent.astro](src/components/SEOContent.astro) (guía visible para búsquedas)
- [src/components/FAQ.astro](src/components/FAQ.astro)

## Deploy
Genera el build con `npm run build` y despliega la carpeta `dist/` como sitio estático.

## Notas
- Este proyecto no incluye checkout/pasarela dentro del sitio: la activación se coordina por WhatsApp.
