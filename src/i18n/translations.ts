export type Language = 'en' | 'es'

export interface Translations {
  nav: {
    home: string
    menu: string
    howToOrder: string
    quoteRequest: string
    getQuote: string
  }
  header: {
    tagline: string
  }
  hero: {
    badgeLocation: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    cta: string
  }
  menu: {
    heading: string
    subheading: string
    cake: {
      title: string
      roundCakesLabel: string
      roundCakes: string[]
      heartCakeLabel: string
      heartCake: string[]
      customNoteBold: string
      customNoteText: string
      instagramLabel: string
      flavorsLabel: string
      flavors: string[]
      fillingsLabel: string
      fillings: string[]
    }
    dessert: {
      title: string
      flansLabel: string
      flans: string[]
      gelatinasLabel: string
      gelatinas: string[]
      flavorsLabel: string
      flavors: string[]
      noteBold: string
      noteText: string
    }
    additional: {
      title: string
      fillingLabel: string
      filling: string[]
      flavorsLabel: string
      flavors: string[]
      noteBold: string
      noteText: string
    }
  }
  howToOrder: {
    heading: string
    steps: { title: string; description: string; linkLabel: string }[]
  }
  quote: {
    heading: string
    subheading: string
    fullName: string
    phoneNumber: string
    eventDate: string
    itemSelection: string
    selectItemPlaceholder: string
    itemOptions: { customCake: string; flan: string; gelatina: string; other: string }
    flavorSelection: string
    flavorPlaceholder: string
    fillingSelection: string
    fillingPlaceholder: string
    inspirationPhoto: string
    uploadPlaceholder: string
    additionalDetails: string
    additionalDetailsPlaceholder: string
    send: string
    sending: string
    thankYouTitle: string
    thankYouMessage: string
    submitAnother: string
    errorNotConfigured: string
    errorGeneric: string
  }
  footer: {
    rightsReserved: string
  }
}

const en: Translations = {
  nav: {
    home: 'Home',
    menu: 'Menu',
    howToOrder: 'How to Order',
    quoteRequest: 'Quote Request',
    getQuote: 'Get a Quote',
  },
  header: {
    tagline: 'Freshly Baked Cakes & Desserts',
  },
  hero: {
    badgeLocation: 'Bronx, NY',
    titleLine1: 'FRESHLY BAKED',
    titleLine2: 'Cakes & Desserts',
    subtitle: 'Custom cakes, flans, and gelatinas made fresh for your next celebration.',
    cta: 'Request a Custom Quote',
  },
  menu: {
    heading: 'Our Menu',
    subheading: 'Cakes, flans, and gelatinas made fresh to order.',
    cake: {
      title: 'CAKE MENU',
      roundCakesLabel: 'Round Cakes:',
      roundCakes: ['7" Cake', '9" Cake', '10" Cake'],
      heartCakeLabel: 'Heart Cake:',
      heartCake: ['10" Cake'],
      customNoteBold: 'We also make customized cakes',
      customNoteText: 'Please private message for inquires',
      instagramLabel: 'instagram:',
      flavorsLabel: 'Flavors:',
      flavors: ['Chocolate', 'Strawberry', 'Vanilla', 'Confetti', 'Red Velvet', 'Tiramisu', 'Tres Leches'],
      fillingsLabel: 'Fillings:',
      fillings: [
        'Vanilla Buttercream',
        'Chocolate buttercream',
        'Nutella',
        'Chocolate fudge',
        'Oreo pieces/ Oreo Cream',
        'Dulce De Leche',
        'Fresh Fruit (Additional Charge)',
      ],
    },
    dessert: {
      title: 'DESSERT MENU',
      flansLabel: 'Flans:',
      flans: ['Classic flan (Heart, round or butterfly shape)', 'Chocoflan', 'Mini flans', 'Mini chocoflans'],
      gelatinasLabel: 'Gelatinas:',
      gelatinas: ['Mosaico', 'Gelatina', 'Mini Mosaicos', 'Mini Gelatinas'],
      flavorsLabel: 'Flavors:',
      flavors: ['Strawberry', 'Mango', 'Lime', 'Chocolate'],
      noteBold: 'Flans and Gelatinas can include Fresh Fruit (Additional Charge)',
      noteText: 'Flavor requests are more than welcomed',
    },
    additional: {
      title: 'ADDITIONAL MENU VARIATIONS',
      fillingLabel: 'Filling:',
      filling: [
        'Vanilla Buttercream',
        'Chocolate',
        'Strawberry',
        'Nutella',
        'Oreo pieces/Oreo Cream',
        'Dulce De Leche',
        'Coconut',
        'Nuts',
        'Fresh Fruit (Aditional Charge)',
      ],
      flavorsLabel: 'Flavors:',
      flavors: [
        'Classic Vanilla',
        'Strawberry short cake',
        'Chocolate',
        'Guava',
        'Lemon',
        'Red Velvet',
        'Carrot Cake',
        'Tiramisu',
        'Coconut',
      ],
      noteBold: 'individual cakes are crafted into two-layer cake',
      noteText:
        "Oven Sweets NYC offers a variety of flavors and fillings. If you would like to request a specific filling and flavor inform us before finalizing your order.",
    },
  },
  howToOrder: {
    heading: 'HOW TO ORDER',
    steps: [
      {
        title: 'CHOOSE YOUR CAKE',
        description: 'Pick a size, shape, or cake tier/ customized cake',
        linkLabel: 'View cake menu',
      },
      {
        title: 'SELECT FLAVOR & FILLING',
        description: 'Browse our flavors and fillings menu.',
        linkLabel: 'See flavors & fillings',
      },
      {
        title: 'SHARE YOUR DESIGN',
        description: 'Send inspiration photos/ customized cake idea and event details.',
        linkLabel: 'Upload your inspiration',
      },
      {
        title: 'CONFIRM & DEPOSIT',
        description: 'Secure your date with a 50% deposit.',
        linkLabel: 'Start your quote request',
      },
    ],
  },
  quote: {
    heading: 'Quote Request',
    subheading: "Tell us about your event and we'll follow up with pricing.",
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    eventDate: 'Event Date',
    itemSelection: 'Item Selection',
    selectItemPlaceholder: 'Select an item',
    itemOptions: { customCake: 'Custom Cake', flan: 'Flan', gelatina: 'Gelatina', other: 'Other' },
    flavorSelection: 'Flavor Selection',
    flavorPlaceholder: 'e.g. Tres Leches',
    fillingSelection: 'Filling Selection',
    fillingPlaceholder: 'e.g. Dulce De Leche',
    inspirationPhoto: 'Inspiration Photo',
    uploadPlaceholder: 'Click to upload an image',
    additionalDetails: 'Additional Design Details',
    additionalDetailsPlaceholder: 'Tell us about your event, theme, colors, or design ideas...',
    send: 'Send Quote Request',
    sending: 'Sending...',
    thankYouTitle: 'Thank you!',
    thankYouMessage:
      'We received your quote request and will get back to you shortly. In the meantime, feel free to reach us at',
    submitAnother: 'Submit another request',
    errorNotConfigured: 'This form is not configured yet. Please reach us directly at (929) 530-6151.',
    errorGeneric: 'Something went wrong sending your request. Please try again or call us directly.',
  },
  footer: {
    rightsReserved: 'All rights reserved.',
  },
}

const es: Translations = {
  nav: {
    home: 'Inicio',
    menu: 'Menú',
    howToOrder: 'Cómo Ordenar',
    quoteRequest: 'Cotización',
    getQuote: 'Cotizar',
  },
  header: {
    tagline: 'Pasteles y Postres Recién Horneados',
  },
  hero: {
    badgeLocation: 'Bronx, NY',
    titleLine1: 'RECIÉN HORNEADO',
    titleLine2: 'Pasteles y Postres',
    subtitle: 'Pasteles, flanes y gelatinas personalizados hechos frescos para tu próxima celebración.',
    cta: 'Solicitar Cotización Personalizada',
  },
  menu: {
    heading: 'Nuestro Menú',
    subheading: 'Pasteles, flanes y gelatinas hechos frescos por encargo.',
    cake: {
      title: 'MENÚ DE PASTELES',
      roundCakesLabel: 'Pasteles Redondos:',
      roundCakes: ['Pastel de 7"', 'Pastel de 9"', 'Pastel de 10"'],
      heartCakeLabel: 'Pastel de Corazón:',
      heartCake: ['Pastel de 10"'],
      customNoteBold: 'También hacemos pasteles personalizados',
      customNoteText: 'Por favor envía un mensaje privado para consultas',
      instagramLabel: 'instagram:',
      flavorsLabel: 'Sabores:',
      flavors: ['Chocolate', 'Fresa', 'Vainilla', 'Confeti', 'Terciopelo Rojo', 'Tiramisú', 'Tres Leches'],
      fillingsLabel: 'Rellenos:',
      fillings: [
        'Crema de mantequilla de vainilla',
        'Crema de mantequilla de chocolate',
        'Nutella',
        'Fudge de chocolate',
        'Trozos de Oreo/ Crema de Oreo',
        'Dulce De Leche',
        'Fruta Fresca (Cargo Adicional)',
      ],
    },
    dessert: {
      title: 'MENÚ DE POSTRES',
      flansLabel: 'Flanes:',
      flans: ['Flan clásico (forma de corazón, redondo o mariposa)', 'Chocoflan', 'Mini flanes', 'Mini chocoflanes'],
      gelatinasLabel: 'Gelatinas:',
      gelatinas: ['Mosaico', 'Gelatina', 'Mini Mosaicos', 'Mini Gelatinas'],
      flavorsLabel: 'Sabores:',
      flavors: ['Fresa', 'Mango', 'Lima', 'Chocolate'],
      noteBold: 'Los flanes y gelatinas pueden incluir Fruta Fresca (Cargo Adicional)',
      noteText: 'Las solicitudes de sabor son más que bienvenidas',
    },
    additional: {
      title: 'VARIACIONES ADICIONALES DEL MENÚ',
      fillingLabel: 'Relleno:',
      filling: [
        'Crema de mantequilla de vainilla',
        'Chocolate',
        'Fresa',
        'Nutella',
        'Trozos de Oreo/Crema de Oreo',
        'Dulce De Leche',
        'Coco',
        'Nueces',
        'Fruta Fresca (Cargo Adicional)',
      ],
      flavorsLabel: 'Sabores:',
      flavors: [
        'Vainilla Clásica',
        'Pastel de fresa',
        'Chocolate',
        'Guayaba',
        'Limón',
        'Terciopelo Rojo',
        'Pastel de Zanahoria',
        'Tiramisú',
        'Coco',
      ],
      noteBold: 'los pasteles individuales están hechos en dos capas',
      noteText:
        'Oven Sweets NYC ofrece una variedad de sabores y rellenos. Si deseas solicitar un relleno y sabor específico, infórmanos antes de finalizar tu pedido.',
    },
  },
  howToOrder: {
    heading: 'CÓMO ORDENAR',
    steps: [
      {
        title: 'ELIGE TU PASTEL',
        description: 'Elige un tamaño, forma o pastel de niveles/ personalizado',
        linkLabel: 'Ver menú de pasteles',
      },
      {
        title: 'SELECCIONA SABOR Y RELLENO',
        description: 'Explora nuestro menú de sabores y rellenos.',
        linkLabel: 'Ver sabores y rellenos',
      },
      {
        title: 'COMPARTE TU DISEÑO',
        description: 'Envía fotos de inspiración/ idea de pastel personalizado y detalles del evento.',
        linkLabel: 'Sube tu inspiración',
      },
      {
        title: 'CONFIRMA Y DEPOSITA',
        description: 'Asegura tu fecha con un depósito del 50%.',
        linkLabel: 'Inicia tu cotización',
      },
    ],
  },
  quote: {
    heading: 'Solicitud de Cotización',
    subheading: 'Cuéntanos sobre tu evento y te responderemos con el precio.',
    fullName: 'Nombre Completo',
    phoneNumber: 'Número de Teléfono',
    eventDate: 'Fecha del Evento',
    itemSelection: 'Selección de Artículo',
    selectItemPlaceholder: 'Selecciona un artículo',
    itemOptions: { customCake: 'Pastel Personalizado', flan: 'Flan', gelatina: 'Gelatina', other: 'Otro' },
    flavorSelection: 'Selección de Sabor',
    flavorPlaceholder: 'ej. Tres Leches',
    fillingSelection: 'Selección de Relleno',
    fillingPlaceholder: 'ej. Dulce De Leche',
    inspirationPhoto: 'Foto de Inspiración',
    uploadPlaceholder: 'Haz clic para subir una imagen',
    additionalDetails: 'Detalles de Diseño Adicionales',
    additionalDetailsPlaceholder: 'Cuéntanos sobre tu evento, tema, colores o ideas de diseño...',
    send: 'Enviar Solicitud',
    sending: 'Enviando...',
    thankYouTitle: '¡Gracias!',
    thankYouMessage:
      'Recibimos tu solicitud de cotización y te responderemos pronto. Mientras tanto, no dudes en contactarnos al',
    submitAnother: 'Enviar otra solicitud',
    errorNotConfigured: 'Este formulario aún no está configurado. Por favor contáctanos directamente al (929) 530-6151.',
    errorGeneric: 'Algo salió mal al enviar tu solicitud. Por favor intenta de nuevo o llámanos directamente.',
  },
  footer: {
    rightsReserved: 'Todos los derechos reservados.',
  },
}

export const translations: Record<Language, Translations> = { en, es }
