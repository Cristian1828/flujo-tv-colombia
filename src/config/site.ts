export const site = {
  domain: 'co.flujooficial.com',
  canonical: 'https://co.flujooficial.com',
  brand: {
    name: 'Flujo TV',
    premiumLabel: 'Premium'
  },
  supportEmail: 'soporte@flujooficial.com',
  whatsappNumber: '51921445800',
  pricing: {
    currencyCode: 'USD',
    plans: [
      {
        id: '1m',
        name: '1 mes',
        price: 9,
        label: 'Ideal para empezar',
        features: [
          'Television en vivo y catálogo bajo demanda',
          'Hasta 3 pantallas simultáneas',
          'Compatible con Android y dispositivos compatibles',
          'Soporte garantizado'
        ]
      },
      {
        id: '3m',
        name: '3 meses',
        price: 29,
        label: 'Más elegido',
        highlight: true,
        features: [
          'Television en vivo y catálogo bajo demanda',
          'Hasta 3 pantallas simultáneas',
          'Mejor relación precio/tiempo',
          'Soporte garantizado'
        ]
      },
      {
        id: '6m',
        name: '6 meses',
        price: 49,
        label: 'Incluye 1 mes gratis',
        features: [
          'Incluye 1 mes gratis (total 7 meses)',
          'Hasta 3 pantallas simultáneas',
          'Ideal para uso familiar',
          'Soporte garantizado'
        ]
      },
      {
        id: '12m',
        name: '12 meses',
        price: 99,
        label: 'Incluye 2 meses gratis',
        features: [
          'Incluye 2 meses gratis (total 14 meses)',
          'Hasta 3 pantallas simultáneas',
          'Ahorro a largo plazo',
          'Soporte garantizado'
        ]
      }
    ]
  }
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
