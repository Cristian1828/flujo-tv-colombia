# 🚀 Flujo TV Colombia - Landing Page High-End "Cyber-Luxe"

> **Versión:** 2.0.0 (Eagle Edition)
> **Stack:** Astro 4.0 + TailwindCSS + TypeScript
> **Target:** 🇨🇴 Colombia | 🇪🇨 Ecuador | 🇻🇪 Venezuela

Esta es la landing page oficial diseñada para la conversión masiva en el mercado andino. Cuenta con una arquitectura de **SEO Élite**, optimización de carga extrema (Score 99/100) y una estética "Cyber-Luxe" diseñada para generar confianza y ventas.

## ✨ Características Clave

*   **Diseño Cyber-Luxe:** Estética premium con gradientes "Electric Orange", efectos glassmorphism y animaciones fluidas.
*   **SEO Multi-Región:** Configurada con metadatos específicos para Colombia (`co.flujooficial.com`) pero optimizada con keywords para Ecuador y Venezuela (Magis TV, IPTV, Tele Latino).
*   **Schema.org Product:** Implementación avanzada de datos estructurados para Rich Snippets en Google (Ratings, Stock, Precio).
*   **Smart Pricing:** Tablas de precios con lógica cognitiva (Plan de 3 meses pre-seleccionado y hover inteligente).
*   **Anti-Ban Content:** Textos sanitizados para evitar bloqueos en plataformas de anuncios (Meta/Google Ads).

## 🛠️ Configuración del Proyecto

### 1. Variables Globales (`src/config/site.ts`)
Aquí se controla toda la lógica del negocio. No hace falta tocar el código fuente.

```typescript
export const site = {
  // Configuración SEO
  canonical: 'https://co.flujooficial.com', // URL Final
  
  // Contacto (Centralizado)
  whatsappNumber: '51921445800', 
  supportEmail: 'soporte@flujooficial.com',
  
  // Enlaces de Descarga
  download: {
     mobileApkHref: '/flujo-movil.apk',
     tvApkHref: '/flujo-tv.apk'
  }
}
```

### 2. Comandos de Desarrollo

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala las dependencias necesarias. |
| `npm run dev` | Inicia el servidor local en `localhost:4321`. |
| `npm run build` | Compila el sitio para producción en la carpeta `dist/`. |
| `npm run preview` | Vista previa local de la versión compilada. |

## 🌍 Estrategia SEO Implementada

La landing incluye una suite completa de optimización:

1.  **Robots.txt & Sitemap:** Generados automáticamente en `public/` para indexación inmediata.
2.  **Canonical URLs:** Prevención de contenido duplicado.
3.  **Keywords Específicas:** "Flujo TV Colombia", "Magis TV APK", "Tele Latino", "IPTV Premium".
4.  **Metadata Social:** Cards de Twitter y Open Graph (Facebook/WhatsApp) totalmente configuradas.

## 📦 Despliegue

El proyecto es estático ("Static Site Generation"), por lo que puede desplegarse en cualquier CDN:

*   **Vercel / Netlify:** Importar repo y listo.
*   **Hostinger / cPanel:** Subir contenido de la carpeta `dist/` al `public_html`.

---
© 2026 Flujo TV - "Somos un equipo comprometido con brindarte la mejor experiencia."
