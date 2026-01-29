export const site = {
  // SEO & Meta
  title: 'Flujo TV Colombia | El Mejor Servicio de TV Premium sin Contratos',
  description: 'Disfruta de +3000 canales en vivo, películas 4K y series exclusivas. La mejor alternativa a Magis TV para Colombia, Ecuador y Venezuela. Compatible con Android, TV Box y Fire Stick.',

  // Important: Layout.astro expects 'canonical'
  canonical: 'https://co.flujooficial.com',
  url: 'https://co.flujooficial.com',

  author: 'Flujo TV Oficial',

  // Keywords focused on LATAM market + Magis
  keywords: [
    'Flujo TV',
    'Flujo TV Colombia',
    'Magis TV',
    'Magis TV Colombia',
    'Magis TV apk',
    'Tele Latino',
    'TV por internet Ecuador',
    'Canales Premium Venezuela',
    'TV Box Colombia',
    'Fire Stick',
    'TV Digital sin contratos',
    'APK TV Premium',
    'Ver futbol en vivo',
    'Liga Betplay en vivo'
  ],

  // Contact (Peru Number as requested)
  whatsappNumber: '51921445800',
  supportEmail: 'soporte@flujooficial.com',

  // Download Configuration (Restored)
  download: {
    mobileApkHref: '/flujo-movil.apk', // Ensure this file exists in public/ or update path
    tvApkHref: '/flujo-tv.apk' // Optional if used
  },

  // Pricing (Restored original prices)
  pricing: {
    currencyCode: 'USD',
    plans: [
      {
        id: '1m',
        name: '1 Mes',
        label: 'Plan Inicial',
        price: '9.00',
        features: ['1 Pantalla + Móvil', 'Películas y Series HD', 'Canales en Vivo', 'Soporte 24/7']
      },
      {
        id: '3m',
        name: '3 Meses',
        label: 'Más Popular',
        price: '27.00',
        highlight: true,
        features: ['3 Pantallas Simultáneas', 'Calidad 4K Ultra HD', 'Todo el contenido Premium', 'Activación Inmediata']
      },
      {
        id: '6m',
        name: '6 Meses',
        label: 'Ahorro Inteligente',
        price: '49.00',
        features: ['3 Pantallas Simultáneas', 'Contenido 4K + Adultos', 'Cine y Series ilimitado', 'Garantía Total']
      },
      {
        id: '12m',
        name: '1 Año',
        label: 'Mejor Valor',
        price: '95.00',
        features: ['3 Pantallas Simultáneas', 'Acceso VIP Prioritario', 'Todo desbloqueado', 'Mejor Precio Anual']
      }
    ]
  }
};

// Helper for WhatsApp Links
export const waLink = (text: string) => {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

// Helper for Canonical URL
export const canonicalUrl = (path: string = '') => {
  return `${site.canonical}${path}`;
};
