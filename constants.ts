import { TranslationContent, Recommendation, HouseGuideData, PropertyData } from './types';

export const PROPERTY_DATA: PropertyData = {
  licenseNumber: '123456/AL',
  complaintsBookUrl: 'https://www.livroreclamacoes.pt/inicio',
  hostPhone: '+351912345678',
  emergencyPhone: '112',
  locations: {
    hospital: {
      name: 'Centro de Saúde Santa Cruz das Flores',
      address: 'Santa Cruz das Flores',
      mapUrl: 'https://www.google.com/maps/place/Centro+de+Sa%C3%BAde+Santa+Cruz+das+Flores/@39.4517515,-31.1291442,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242c3d289a55:0x4f828f80e638aad9!8m2!3d39.4517515!4d-31.1291442!16s%2Fg%2F119vfs4k9!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepDGHRGQxLNXfZtjTYvJ1O3PCLVBcfzsWojMlHD4QD6y84f76rbf9aBI6vv_s4i1y7-K9OuS_o57n5pP-Qcv0P9LlvzFofx5_NYF6Rs_O6ajuWX4Z-mm1xD39WP2daPlYBEU16Q=w408-h306-k-no'
    },
    pharmacies: [
      {
        name: 'Farmácia da Misericórdia',
        address: 'Santa Cruz das Flores',
        mapUrl: 'https://www.google.com/maps/place/Farm%C3%A1cia+da+Miseric%C3%B3rdia/@39.4513757,-31.1291127,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242bbddca04f:0x1c68c2cdc6698dae!8m2!3d39.4513757!4d-31.1291127!16s%2Fg%2F11c60c60pb!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
        imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=80'
      },
      {
        name: 'Farmácia Misericórdia Posto Lajes',
        address: 'Lajes das Flores',
        mapUrl: 'https://www.google.com/maps/place/Farm%C3%A1cia+Miseric%C3%B3rdia+Posto+Lajes/@39.377764,-31.1803521,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221c64d1ddfff:0x4d3d8019bf7746ab!8m2!3d39.377764!4d-31.1803521!16s%2Fg%2F11h_c6l05b!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
        imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop&q=80'
      }
    ],
    gasStations: [
      {
        name: 'Galp Santa Cruz',
        address: 'Santa Cruz das Flores',
        mapUrl: 'https://www.google.com/maps/place/Galp/@39.4598111,-31.1307639,17z/data=!3m1!4b1!4m6!3m5!1s0xb322433d832b4bf:0xa4a3a87ad97eeaa9!8m2!3d39.4598111!4d-31.1307639'
      },
      {
        name: 'Feliciano & Feliciano',
        address: 'Estrada Regional, Santa Cruz',
        mapUrl: 'https://www.google.com/maps?q=Feliciano+%26+Feliciano+Lda.,+Estrada+regional,+9970-310+Santa+Cruz+das+Flores,+Portugal&ftid=0xb32242e70c29c09:0x7466b662439fc33b'
      },
      {
        name: 'Galp Lajes',
        address: 'Lajes das Flores',
        mapUrl: 'https://www.google.com/maps/place/Galp/@39.3789917,-31.1815444,17z/data=!3m1!4b1!4m6!3m5!1s0xb3220c88e3ad20d:0xa0e72fa15b12cf41!8m2!3d39.3789917!4d-31.1815444'
      },
      {
        name: 'Cooperativa União Agrícola',
        address: 'Lajes das Flores',
        mapUrl: 'https://www.google.com/maps/place/Cooperativa+Uni%C3%A3o+Agricola+Florentina,+C.R.L./@39.3820391,-31.1713333,17z/data=!3m1!4b1!4m6!3m5!1s0xb322148ce059783:0xe125056e22b2d80d!8m2!3d39.3820391!4d-31.1713333'
      }
    ],
    evStations: [
      {
        name: 'Galp Charging Station (Santa Cruz)',
        address: 'Santa Cruz das Flores',
        mapUrl: 'https://www.google.com/maps/place/Galp+Esta%C3%A7%C3%A3o+de+Carregamento/@39.4545892,-31.1300518,17z/data=!3m1!4b1!4m6!3m5!1s0xb32253917dff103:0x196ffd64a94468c5!8m2!3d39.4545892!4d-31.1300518'
      },
      {
        name: 'Galp Charging Station (Lajes)',
        address: 'Lajes das Flores',
        mapUrl: 'https://www.google.com/maps/place/Galp+Esta%C3%A7%C3%A3o+de+Carregamento/@39.379024,-31.181553,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221368f719917:0x88fd8e11c13c8bc5!8m2!3d39.379024!4d-31.181553'
      }
    ],
    busStop: {
      name: 'Paragem UTC (Centro)',
      address: 'Largo Marquês de Pombal',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Largo+Marques+Pombal+Santa+Cruz+Flores'
    }
  }
};

export const TRANSLATIONS: Record<'en' | 'pt', TranslationContent> = {
  en: {
    nav: {
      home: 'Home',
      house: 'House',
      local: 'Local',
      info: 'Info',
    },
    home: {
      welcome: 'Welcome to Sleep HAIbeat Guest House',
      wifiTitle: 'Wi-Fi Network',
      wifiPasswordLabel: 'Password',
      copy: 'Copy',
      copied: 'Copied',
      actions: {
        checkIn: 'Check-in Guide',
        checkOut: 'Check-out Info',
        emergency: 'Emergency (112)',
        rules: 'House Rules',
      },
      safety: {
        title: 'Safety Equipment',
        body: 'Fire Extinguisher is located next to kitchen cabinet. First Aid Kit is in the bathroom cabinet.',
      },
    },
    house: {
      title: 'House Guide',
      tabs: {
        appliances: 'Appliances',
        cleaning: 'Cleaning',
        waste: 'Recycling',
        safety: 'Safety',
        gallery: 'Gallery',
      }
    },
    local: {
      title: 'Local Guide',
      categories: {
        eat: 'Eat & Drink',
        beach: 'Swimming',
        hike: 'Nature',
        shop: 'Groceries',
        snack: 'Snack & Coffee',
        park: 'Kids Parks',
        viewpoint: 'Viewpoints',
        museum: 'Museums',
      },
      directions: 'Get Directions',
      hostTipLabel: 'Host Tip',
    },
    info: {
      title: 'Info & Legal',
      sections: {
        emergency: 'Emergency & Contacts',
        health: 'Health Services',
        transport: 'Transport & Parking',
        fuel: 'Fuel & Charging',
        legal: 'Legal Information',
      },
      actions: {
        call: 'Call',
        directions: 'Get Directions',
        website: 'Visit',
        whatsapp: 'WhatsApp',
        copy: 'Copy Address',
      },
      items: {
        host: 'Host Support',
        pharmacy: 'Pharmacy',
        hospital: 'Health Center',
        taxi: 'Taxi',
        bus: 'Bus Stop',
        parking: 'Parking Rules',
        complaints: 'Online Complaints Book',
        gasStation: 'Gas Station',
        evStation: 'EV Charging Station',
        emergencyNumber: 'Emergency Number',
      },
      descriptions: {
        bus: 'Buses (UTC) run around the island. The main stop is in the town center square.',
        parking: 'Free street parking is available on the street. Please adhere to yellow line restrictions.',
      },
    },
  },
  pt: {
    nav: {
      home: 'Início',
      house: 'Casa',
      local: 'Local',
      info: 'Info',
    },
    home: {
      welcome: 'Sleep HAIbeat Alojamento Local',
      wifiTitle: 'Rede Wi-Fi',
      wifiPasswordLabel: 'Palavra-passe',
      copy: 'Copiar',
      copied: 'Copiado',
      actions: {
        checkIn: 'Guia de Check-in',
        checkOut: 'Info de Check-out',
        emergency: 'Emergência (112)',
        rules: 'Regras da Casa',
      },
      safety: {
        title: 'Equipamento de Segurança',
        body: 'O Extintor está ao lado do armário da cozinha. O Kit de Primeiros Socorros está no armário da casa de banho.',
      },
    },
    house: {
      title: 'Guia da Casa',
      tabs: {
        appliances: 'Equipamentos',
        cleaning: 'Limpeza',
        waste: 'Reciclagem',
        safety: 'Segurança',
        gallery: 'Galeria',
      }
    },
    local: {
      title: 'Guia Local',
      categories: {
        eat: 'Comer & Beber',
        beach: 'Banhos',
        hike: 'Natureza',
        shop: 'Mercado',
        snack: 'Snack & Café',
        park: 'Parques',
        viewpoint: 'Miradouros',
        museum: 'Museus',
      },
      directions: 'Ver no Mapa',
      hostTipLabel: 'Dica do Anfitrião',
    },
    info: {
      title: 'Informações',
      sections: {
        emergency: 'Emergência e Contactos',
        health: 'Saúde',
        transport: 'Transportes',
        fuel: 'Combustível e Carregamento',
        legal: 'Informação Legal',
      },
      actions: {
        call: 'Ligar',
        directions: 'Ver no Mapa',
        website: 'Aceder',
        whatsapp: 'WhatsApp',
        copy: 'Copiar',
      },
      items: {
        host: 'Apoio ao Cliente',
        pharmacy: 'Farmácia',
        hospital: 'Centro de Saúde',
        taxi: 'Táxi',
        bus: 'Paragem Autocarro',
        parking: 'Estacionamento',
        complaints: 'Livro de Reclamações',
        gasStation: 'Posto de Combustível',
        evStation: 'Estação de Carregamento',
        emergencyNumber: 'Número de Emergência',
      },
      descriptions: {
        bus: 'Os autocarros (UTC) circulam pela ilha. A paragem principal é no largo central.',
        parking: 'Estacionamento gratuito na rua. Respeite as linhas amarelas.',
      },
    },
  },
};

export const HOUSE_GUIDE_DATA: Record<'en' | 'pt', HouseGuideData> = {
  en: {
    appliances: [
      { id: 'coffee', name: 'Nespresso Vertuo', iconName: 'Coffee', instruction: 'Lift the lever to open head, insert Vertuo pod. Close, lock lever left, and press the top button once to brew.' },
      { id: 'stove', name: 'Induction Hob', iconName: 'Flame', instruction: 'Turn on, place pot (required to activate controls). Select zone and power. Press "Push&Go" for quick boil.' },
      { id: 'oven', name: 'Electric Oven', iconName: 'Flame', instruction: 'Turn the left knob to select the cooking program and the right knob to set the temperature.' },
      { id: 'micro', name: 'Microwave', iconName: 'Zap', instruction: 'Slide finger on the touch bar to set time and press "Start". For Grill, select mode before starting.' },
      { id: 'washer', name: 'Washer & Dryer', iconName: 'Droplets', instruction: 'Press blue "Push&Go" button for 2 sec to start auto Wash+Dry cycle.' },
    ],
    cleaning: {
      title: 'Cleaning & Linen Policy',
      policy: 'We maintain high hygiene standards for your comfort.',
      schedules: [
        {
          title: 'General Cleaning',
          frequency: [
            'At least twice a week',
            'Whenever requested by guest',
            'Upon guest change'
          ]
        },
        {
          title: 'Bed Linen',
          frequency: [
            'At least once a week',
            'Whenever requested by guest',
            'Upon guest change'
          ]
        },
        {
          title: 'Towels',
          frequency: [
            'At least twice a week',
            'Whenever requested by guest',
            'Upon guest change'
          ]
        }
      ],
      notes: [
        '(1) Alternatively, it can be placed in the living room or bedrooms of the house or apartment.'
      ]
    },
    waste: [
      { id: 'yellow', name: 'Plastic & Metal', colorClass: 'bg-yellow-400', borderColorClass: 'border-yellow-400', description: 'Plastic bottles, cans, cartons, styrofoam.' },
      { id: 'blue', name: 'Paper & Cardboard', colorClass: 'bg-blue-500', borderColorClass: 'border-blue-500', description: 'Clean paper boxes, newspapers, magazines.' },
      { id: 'green', name: 'Glass', colorClass: 'bg-green-500', borderColorClass: 'border-green-500', description: 'Glass bottles and jars (without lids).' },
      { id: 'grey', name: 'General Waste', colorClass: 'bg-stone-500', borderColorClass: 'border-stone-500', description: 'Organic waste, dirty paper, non-recyclables.' },
    ],
    safety: [
      { id: 's1', name: 'Fire Extinguisher', location: 'Next to kitchen cabinet.' },
      { id: 's3', name: 'First Aid Kit', location: 'Bathroom cabinet.' },
    ],
    gallery: [
      { id: 'living', title: 'Living Room', description: 'Spacious living area with TV and sofa bed.', imageUrls: ['/images/living_room.jpg', '/images/living_room_2.jpg'] },
      { id: 'kitchen', title: 'Kitchen', description: 'Fully equipped kitchen with modern appliances.', imageUrls: ['/images/kitchen.jpg', '/images/kitchen_2.jpg'] },
      { id: 'bedroom', title: 'Bedroom', description: 'Cozy bedroom with double bed and wardrobe.', imageUrls: ['/images/bedroom.jpg', '/images/bedroom_2.jpg'] },
      { id: 'bedroom2', title: 'Bedroom 2', description: 'Comfortable second bedroom with air conditioning.', imageUrls: ['/images/bedroom_2_new.jpg'] },
      { id: 'bathroom', title: 'Bathroom', description: 'Modern bathroom with walk-in shower.', imageUrls: ['/images/bathroom.jpg'] },
    ]
  },
  pt: {
    appliances: [
      { id: 'coffee', name: 'Nespresso Vertuo', iconName: 'Coffee', instruction: 'Levante a alavanca para abrir, insira a cápsula. Feche, tranque para a esquerda e pressione o botão para tirar café.' },
      { id: 'stove', name: 'Placa de Indução', iconName: 'Flame', instruction: 'Ligue e coloque a panela (obrigatório). Selecione a zona e potência. Use "Push&Go" para fervura rápida.' },
      { id: 'oven', name: 'Forno Elétrico', iconName: 'Flame', instruction: 'Rode o botão da esquerda para escolher o programa e o da direita para definir a temperatura.' },
      { id: 'micro', name: 'Micro-ondas', iconName: 'Zap', instruction: 'Deslize o dedo na barra para definir o tempo e pressione "Start".' },
      { id: 'washer', name: 'Máquina Lavar/Secar', iconName: 'Droplets', instruction: 'Pressione o botão azul "Push&Go" 2 seg para ciclo auto Lavar+Secar.' },
    ],
    cleaning: {
      title: 'Arrumpação e Limpeza',
      policy: 'Mantemos elevados padrões de higiene para o seu conforto.',
      schedules: [
        {
          title: 'Limpeza Geral',
          frequency: [
            'Pelo menos duas vezes por semana',
            'Sempre que o hóspede o solicite',
            'Sempre que haja mudança de hóspede'
          ]
        },
        {
          title: 'Roupas de Cama',
          frequency: [
            'Pelo menos uma vez por semana',
            'Sempre que o hóspede o solicite',
            'Sempre que haja mudança de hóspede'
          ]
        },
        {
          title: 'Atoalhados',
          frequency: [
            'Pelo menos duas vezes por semana',
            'Sempre que o hóspede o solicite',
            'Sempre que haja mudança de hóspede'
          ]
        }
      ],
      notes: [
        '(1) Alternativamente, pode ser colocada na sala ou nos quartos da moradia ou apartamento.'
      ]
    },
    waste: [
      { id: 'yellow', name: 'Plástico e Metal', colorClass: 'bg-yellow-400', borderColorClass: 'border-yellow-400', description: 'Garrafas plástico, latas, pacotes de leite, esferovite.' },
      { id: 'blue', name: 'Papel e Cartão', colorClass: 'bg-blue-500', borderColorClass: 'border-blue-500', description: 'Caixas de papel limpas, jornais, revistas.' },
      { id: 'green', name: 'Vidro', colorClass: 'bg-green-500', borderColorClass: 'border-green-500', description: 'Garrafas e frascos de vidro (sem tampas).' },
      { id: 'grey', name: 'Lixo Indiferenciado', colorClass: 'bg-stone-500', borderColorClass: 'border-stone-500', description: 'Lixo orgânico, papel sujo, não recicláveis.' },
    ],
    safety: [
      { id: 's1', name: 'Extintor', location: 'Ao lado do armário da cozinha.' },
      { id: 's3', name: 'Kit Primeiros Socorros', location: 'Armário da casa de banho.' },
    ],
    gallery: [
      { id: 'living', title: 'Sala de Estar', description: 'Sala espaçosa com TV e sofá-cama.', imageUrls: ['/images/living_room.jpg', '/images/living_room_2.jpg'] },
      { id: 'kitchen', title: 'Cozinha', description: 'Cozinha totalmente equipada com eletrodomésticos modernos.', imageUrls: ['/images/kitchen.jpg', '/images/kitchen_2.jpg'] },
      { id: 'bedroom', title: 'Quarto', description: 'Quarto aconchegante com cama de casal e guarda-roupa.', imageUrls: ['/images/bedroom.jpg', '/images/bedroom_2.jpg'] },
      { id: 'bedroom2', title: 'Quarto 2', description: 'Segundo quarto confortável com ar condicionado.', imageUrls: ['/images/bedroom_2_new.jpg'] },
      { id: 'bathroom', title: 'Casa de Banho', description: 'Casa de banho moderna com duche.', imageUrls: ['/images/bathroom.jpg'] },
    ]
  },
};

export const RECOMMENDATIONS_DATA: Record<'en' | 'pt', Recommendation[]> = {
  en: [
    // --- VIEWPOINTS ---
    {
      id: 'morro-alto',
      categoryId: 'viewpoint',
      title: 'Morro Alto Viewpoint',
      description: 'The highest point on the island offering panoramic views of lagoons and valleys.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxIv191fx4vhaU8MQ_9GOsDnADLa5unttfcLI67WzitsooKG6tOkzlBjIcOD7T9TaHjSlOPxTqttIn3cr0QR1fgsDb-AszyigAFEeuJXXCnxIYvO_hsIWrhzyGKFdRVVFEhllQk=w408-h306-k-no',
      distance: 'Central Plateau',
      hostTip: 'Often cloudy, but spectacular when clear.',
      mapUrl: 'https://www.google.com/maps/place/Morro+Alto/@39.4631789,-31.2200023,17z/data=!3m1!4b1!4m6!3m5!1s0xb322336c2e250bb:0x5b9f3622b27c9de2!8m2!3d39.4631789!4d-31.2200023!16s%2Fg%2F11rrsd8mcz!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'vale-da-fazenda',
      categoryId: 'viewpoint',
      title: 'Vale da Fazenda Viewpoint',
      description: 'Overlooking the picturesque Fazenda valley.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyMw5wQOUCBiw89V_nXVfdqDgHCae2vML705PdTXfxiXN5h7eA9BT9G1zwz5Cd1DIMiHtWujxmTJ3vTEWGXWwtxvrnd4bX8kTAu2bZeX9AzdOzw7fypRgAJ6cobx9dsnHaJ5On6=w408-h544-k-no',
      distance: 'Fazenda',
      hostTip: 'Great stop for a photo of the green valley.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+do+Vale+da+Fazenda/@39.4745771,-31.2011809,17z/data=!3m1!4b1!4m6!3m5!1s0xb3223b4d28f41b3:0xfed0df10b4d3372e!8m2!3d39.4745771!4d-31.2011809!16s%2Fg%2F11g0ngzy19!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'monte-das-cruzes',
      categoryId: 'viewpoint',
      title: 'Monte das Cruzes Viewpoint',
      description: 'Offers a complete view over Santa Cruz das Flores, the airport and the ocean.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0OWpiOzOLmwYRgBYoUIaPSw_sHIvm-iIJ6gq_SRaSdl13Jc79ZVh54XLJz8dGjjUJgIZMFYMvgWYUsosxxXjZt-_jlcFtU4ZVfLB5W_kavbu-mWonG2akkyfGhTwAqE1Me6hWgQ=w426-h240-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Best spot to see the whole town from above.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+do+Monte+das+Cruzes/@39.4515429,-31.1363516,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242f5e7b14c9:0x72833a68bb791608!8m2!3d39.4515429!4d-31.1363516!16s%2Fg%2F1225f0hp!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'faja-do-conde',
      categoryId: 'viewpoint',
      title: 'Fajã do Conde Viewpoint',
      description: 'A viewpoint offering views of the rugged coastline and the bay.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerr63OnAu9eC4Sr_wRCng9d0Qol1IbCHwAxvuO3ildkmwJaq4sgBuvqqfjdcV7W16Xovk2EgygGTsNf7Ycm1wjPWXuxHR7zViAXtiKrgcxdVQtsGlEdv6i6aThKz9FyYwya-g=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'A nice quick stop on the coastal road.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+da+Faj%C3%A3+do+Conde/@39.4397841,-31.1468424,17z/data=!3m1!4b1!4m6!3m5!1s0xb32269f72846233:0x3c82a9ff97178154!8m2!3d39.4397841!4d-31.1468424!16s%2Fg%2F11g8gx_s6j!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'rocha-dos-frades',
      categoryId: 'viewpoint',
      title: 'Rocha dos Frades Viewpoint',
      description: 'View of an imposing rock formation rising from the sea.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweq6daZrd9QFK4SKF35oDPm12z_nOQ4TbmIE_ilbxNNGFurWCbrmybglSCKprSWzRQN5_Lyaon2c_vBDtfyFluWkewOPoGc7uhY-9nU3rKycqWJfVpr7GclNbjBNH0rsz9fY0lE=w408-h510-k-no',
      distance: 'Lajes',
      hostTip: 'Impressive geological feature.',
      mapUrl: 'https://www.google.com/maps/place/Rocha+dos+Frades/@39.379941,-31.2127704,17z/data=!3m1!4b1!4m6!3m5!1s0xb32218d7cd36f41:0xf72a858679de26a9!8m2!3d39.379941!4d-31.2127704!16s%2Fg%2F11s56sn93s!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'agua-quente',
      categoryId: 'viewpoint',
      title: 'Água Quente - Costa do Lajedo',
      description: 'A coastal spot known for its thermal springs and rugged beauty.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepneZx2_Ps5OZvW522giaExUW9emUTcySkUTwW8-4vq18pBKPjt4Tqdp8xO8oq_AIurHskDJw_mwt806An1h2-eZMmwgMA6F9ccyL-QEcBNqBJfQX346Qd-r2_SGULqK-aLHNPb=w408-h544-k-no',
      distance: 'Lajedo',
      hostTip: 'Explore the unique coastal landscape here.',
      mapUrl: 'https://www.google.com/maps/place/%C3%81gua+Quente+-+Costa+do+Lajedo/@39.3764219,-31.2489338,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221ca468d50a3:0x6bd6ea5c42b3275d!8m2!3d39.3764219!4d-31.2489338!16s%2Fg%2F11ghvbv0hg!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'rocha-bordoes-main',
      categoryId: 'viewpoint',
      title: 'Rocha dos Bordões',
      description: 'The famous vertical basalt columns, a geological wonder of the Azores.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMHNjv1ZWBD9dbV4JtLEKNATCWbxv8pPv_A1r5XtdSluYjj1LU_JuGabWVzOX-uzzQ6NexwV8_AYod8T7bgyOd5x3C9rd5sfC0zCt8a_mmnPDbCmD3fCHsQWn-TfdWN4fbow0n=w408-h306-k-no',
      distance: 'Mosteiro',
      hostTip: 'Iconic spot, looks great in the afternoon light.',
      mapUrl: 'https://www.google.com/maps/place/Rocha+dos+Bord%C3%B5es/@39.4059424,-31.2412996,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221f297bb0f6f:0x52091192af853f6!8m2!3d39.4059424!4d-31.2412996!16s%2Fg%2F1226y7h6!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'raul-brandao',
      categoryId: 'viewpoint',
      title: 'Miradouro Raul Brandão',
      description: 'Overlooking Fajã Grande and the western ocean.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqDAkXGhuhIJ_dto88Aj7WiYnW0to9-kh3GnmcYWbvoUxvumYePcfgep4onwkCrUcDL3k56lQV0HBDfnUME6KX-h737wd0zFK1dLpvVbgbgA0iwFD873FRZMkRVs29EHjp_JGc=w408-h271-k-no',
      distance: 'Fajã Grande',
      hostTip: 'Named after the famous Portuguese writer.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+Raul+Brand%C3%A3o/@39.4532163,-31.2557984,17z/data=!3m1!4b1!4m6!3m5!1s0xb32239967588f99:0x1749ecb0bd649006!8m2!3d39.4532163!4d-31.2557984!16s%2Fg%2F11t13_53sj!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'farol-albarnaz',
      categoryId: 'viewpoint',
      title: 'Farol de Albarnaz',
      description: 'The westernmost lighthouse of the Azores with dramatic cliff views.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzEVpQnVsC8pZtUrerCa99Yj7lQZXXmQIuoediF-L83hvPxGdnqvFWlNQ6Q1z9jOlrxmNYJ_GVMf01SnJDhis_unuGBi7YPaviWxaPtv_Nco34wPyYdoCVZn3EThEf4K3EtcZaq=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Windy but beautiful location.',
      mapUrl: 'https://www.google.com/maps/place/Farol+de+Albarnaz/@39.5199229,-31.2358461,17z/data=!3m1!4b1!4m6!3m5!1s0xb323d15d8329337:0x7bf1b0583b0a42c6!8m2!3d39.5199229!4d-31.2358461!16s%2Fm%2F011q9963!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'baia-alem',
      categoryId: 'viewpoint',
      title: 'Miradouro da Baía de Além',
      description: 'View over the bay and the islet of Monchique, the westernmost point of Europe.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxqv4gMQ70Pfh05UvMzIVfBkjJ7CHVb15da0xqb81KUrk3hOrl2aprTEZOi-1LnWRrtrjwadnTJ4ZpA_XH_HoxotuqukP-scnHaXF1nPMY_wzduCcqtGA7p7WqLwMTGrWojeJo=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Look for the Monchique islet in the distance.',
      mapUrl: 'https://www.google.com/maps?q=Miradouro+da+Ba%C3%ADa+de+Al%C3%A9m,+Ilha+das+Flores,+Portugal&ftid=0xb323d16cd39a5ad:0x5f61ae4e72af9f9b&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=0e915845-db29-4f0a-9bed-acd0687b4a67&g_st=ipc'
    },
    {
      id: 'porto-ponta-delgada',
      categoryId: 'viewpoint',
      title: 'Miradouro Porto e Baía Ponta Delgada',
      description: 'Scenic view over the northern port and bay.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw6cnSpxc0oeNNSxQcOksezDhr5tPXqunVEfSEB2-Mzug1-8ieumMZt5AeKoU63JUtFrRcRtUZu53bzq2IFFXDA7QFM4goUdxwn91w_TQ6nYvf5wbzfknXdpB86IYGmiQstICjr=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'A lovely view of the northern coast.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+sobre+o+Porto+e+Ba%C3%ADa+de+Ponta+Delgada/@39.5201155,-31.2078181,17z/data=!3m1!4b1!4m6!3m5!1s0xb323ce7af42ed9d:0xd02f72cdbfc8ad2f!8m2!3d39.5201155!4d-31.2078181!16s%2Fg%2F11g9vn2j3y!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'miradouro-ponta-delgada',
      categoryId: 'viewpoint',
      title: 'Miradouro de Ponta Delgada',
      description: 'Overlooking the village of Ponta Delgada.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx96MoBFoTxlCawD4i9djtFYijvhai7CcKj31BUEDkX_N137DYYk8p2JxW896dTRoh5tidG8t7WVHA0f4OiuAL1O6HZi_kUx3PYnJCeSSOFyjCRz2YhsyBuB3PdilyV7fflVzsuXqo19L8Q=w408-h544-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Great perspective of the northern village.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+de+Ponta+Delgada/@39.5069145,-31.2167686,17z/data=!3m1!4b1!4m6!3m5!1s0xb323d355c4c41d1:0xb756d28b30c3940f!8m2!3d39.5069145!4d-31.2167686!16s%2Fg%2F11qhgcpnqz!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'pedrinha',
      categoryId: 'viewpoint',
      title: 'Miradouro da Pedrinha',
      description: 'View towards the interior landscapes and the coast.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyPKe7fpe06WLhDkjCjT0pCXIa9eyy2HkJAMUN3m914Du-XAfzeFtwwgxnfwYN2OOba6tjAqN1G3FJL0PMnh8JdGpq18BhcvRGPHwhdE0IuKgLQdqSGK61anhBLAgk0C9jouyHn=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'A quiet spot to admire the scenery.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+da+Pedrinha/@39.4948247,-31.195168,17z/data=!3m1!4b1!4m6!3m5!1s0xb322337ec7b09f3:0xd355aca5df4bff0c!8m2!3d39.4948247!4d-31.195168!16s%2Fg%2F11fxzsp8_l!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'caimbros',
      categoryId: 'viewpoint',
      title: 'Miradouro dos Caimbros',
      description: 'View over the northeast coast and the sea.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSymisvq-WDlkqdmSKDlPckXQ7LJAU618jEiPhdnz-18BnN1PpA-yva1pXzjQb9qAASgC3COxq9TkQFd_Y4tFoQ7uzVSy1gIMJeMrGq3TABFghYW5Zw6uYiMCQYCyXRvpvbgIkAxLkNJm22f=w408-h306-k-no',
      distance: 'Cedros',
      hostTip: 'Beautiful coastal views.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+dos+Caimbros/@39.4722134,-31.1469764,17z/data=!3m1!4b1!4m6!3m5!1s0xb32254178115c5f:0x75911aa589c5301e!8m2!3d39.4722134!4d-31.1469764!16s%2Fg%2F11jmwgsl2r!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'craveiro-lopes-new',
      categoryId: 'viewpoint',
      title: 'Miradouro Craveiro Lopes',
      description: 'Surrounded by hydrangeas with deep valley views.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxIemEf2yeOEJ3ikBdO0Tg0IpIVq5YkMNM3O7yxvxIptXI7Va1TjDVjE_fura2Ru7PtK3RdkzrPna_wzN1vCFVmal1NU7DEqGXtiuTYuevjuLrKLZQt0t1mHGWNXyXAdOrKH8fROY8l7nno=w408-h306-k-no',
      distance: 'Flores',
      hostTip: 'A classic viewpoint often surrounded by flowers.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+Craveiro+Lopes/@39.4264449,-31.2383823,17z/data=!3m1!4b1!4m6!3m5!1s0xb3223c09d02b631:0x2514eab45f603c9e!8m2!3d39.4264449!4d-31.2383823!16s%2Fg%2F11rbf_505m!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- MUSEUMS ---
    {
      id: 'museu-agricultura',
      categoryId: 'museum',
      title: 'Agriculture & Dairy Museum',
      description: 'Discover the agricultural traditions and dairy production history of the island.',
      imageUrl: 'https://www.explorefloresisland.com/wp-content/uploads/2023/07/big1339691706.jpg',
      distance: 'Lomba',
      hostTip: 'A glimpse into the rural life of Flores.',
      mapUrl: 'https://www.google.com/maps/place/Museu+agricultura+e+latic%C3%ADnios/@39.4026682,-31.1560722,17z/data=!3m1!4b1!4m6!3m5!1s0xb3227006625798f:0xc6b84a8ac598a624!8m2!3d39.4026682!4d-31.1560722!16s%2Fg%2F11vzdsqpf8!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-baleeiro',
      categoryId: 'museum',
      title: 'Whaling Museum',
      description: 'Dedicated to the history of whaling, displaying boats and tools used by whalers.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzLxrM8oe619_G-DiP9nYr513BXmncufhgu3OyrmBpT5dQRc1UQoi4PxGLlG7LeOdR3Ychmz1IvW381md0qkwofgMZoRFftdqhECYlCiqaD1s5BBmIk5dZEWYkPMLO4AFqDKQ8i=w408-h306-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'Essential to understand the maritime history of Lajes.',
      mapUrl: 'https://www.google.com/maps/place/Museu+Baleeiro/@39.3790987,-31.1710098,17z/data=!3m1!4b1!4m6!3m5!1s0xb322737261eddf1:0xf798849e84db856d!8m2!3d39.3790987!4d-31.1710098!16s%2Fg%2F11sqj6ns2d!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-municipal-lajes',
      categoryId: 'museum',
      title: 'Municipal Museum Lajes das Flores',
      description: 'The local municipal museum preserving the cultural heritage of Lajes.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxMgwRX5EIlk1FdZ0bZVSFbEMX8F8kguK-wTQZrTmoWd8RXtZeqBcIVeu-8cdA4SJr4Hh2nJ7-qSp9C1EYZSR4FN-aFVfwh-OpeikneDAJScDoxhBZA02pCkrQfDE6o--Gw3fD9Y0D7t9w8=w408-h307-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'Located in the heart of the village.',
      mapUrl: 'https://www.google.com/maps/place/Museu+Municipal+Lajes+das+Flores/@39.3775626,-31.1787431,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221002110a9a5:0x3e695508a13cb44e!8m2!3d39.3775626!4d-31.1787431!16s%2Fg%2F11ldhfzl0c!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-lacticinios',
      categoryId: 'museum',
      title: 'Dairy Museum',
      description: 'Exhibits related to the milk and cheese production that sustains the island.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxdGio2WEBSHex-8IpujkIxWMif5LkWuOu5gWu0RoFNfyIjnljOXSpmCAY_49SRWPhpXzzn4NXiRRa2GCKe7KDhUF64FPGdZa-c4dsPSr85mpxp-aiRalyR698iIsxhDGdPAws-HqU5941m=w408-h408-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'Learn about the famous Azorean cheese making.',
      mapUrl: 'https://www.google.com/maps/place/Museu+dos+Lactic%C3%ADnios/@39.3795784,-31.1866628,17z/data=!3m1!4b1!4m6!3m5!1s0xb322100280a2ee9:0x7514904b4c2a6e4e!8m2!3d39.3795784!4d-31.1866628!16s%2Fg%2F11vzdsy0dm!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-lavrador',
      categoryId: 'museum',
      title: 'Farmer\'s Museum',
      description: 'A collection honoring the work and tools of the local farmers.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxbAk879kNziY10t0NmeQXgao5jqndfvK7MLzgYwTJT1DRYG2p8ovpZF89ty2hwqJAgILgE11UUVHj-z8TY5Qrodg0YRFl7YG5L8kaZLLt3RlERB8QAudWgWuUqGmOD53CisokwhiTZXpI-=w408-h408-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'See the traditional tools used in the fields.',
      mapUrl: 'https://www.google.com/maps/place/Museu+lavrador/@39.3800377,-31.1867594,17z/data=!3m1!4b1!4m6!3m5!1s0xb32210041a68373:0x9d1dfd63f5d7f338!8m2!3d39.3800377!4d-31.1867594!16s%2Fg%2F11vx5slzy4!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'casa-museu-faja',
      categoryId: 'museum',
      title: 'House Museum Fajã Grande',
      description: 'A traditional house preserved to show the domestic life of the past.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkwjDMjvbQjUTO8SdHOC4ZUpZiCmgmIaIuw&s',
      distance: 'Fajã Grande',
      hostTip: 'Step back in time in this beautiful traditional house.',
      mapUrl: 'https://www.google.com/maps/place/Casa+Museu+Faj%C3%A3+Grande/@39.452621,-31.2617792,17z/data=!3m1!4b1!4m6!3m5!1s0xb322282659c9471:0xae6c2069cd28e9f4!8m2!3d39.452621!4d-31.2617792!16s%2Fg%2F11g7npv5l0!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-machado',
      categoryId: 'museum',
      title: 'Axe Museum (Museu do Machado)',
      description: 'Located in Cedros/Ponta Ruiva, featuring historical artifacts.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzxx2NF6EpoEAk6slZFTFuTPBFOpwVjeE-50cQ0RjG_G4q7KB_7812EQvUgdOEUxb-BiRVHCWciU8J9D91QTmdcZvZubrPgeBZwTt10nUBHqyk0oj4sev1XaF-3THG3EYNygg4=w408-h544-k-no',
      distance: 'Cedros',
      hostTip: 'A unique small museum in the north.',
      mapUrl: 'https://www.google.com/maps/place/Museu+do+Machado+(+Cedros+-+Ponta+Ruiva)/@39.4949447,-31.1572034,17z/data=!3m1!4b1!4m6!3m5!1s0xb322580c2e5fe85:0x19499234dbc6d2b9!8m2!3d39.4949447!4d-31.1572034!16s%2Fg%2F11h1ywysx5!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'fabrica-baleia',
      categoryId: 'museum',
      title: 'Boqueirão Whaling Factory',
      description: 'The old whale processing factory, now a museum showcasing the industrial side of whaling history.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy3Am6P_VIFZg0Gic3EbWI5nvC4w0ZLbIi4RoScYuO2dxZDnfCz9ATWTNXuGwjwQhIoKgF5Bt31GMd21r-A71RRFv-bRRoTq0j47jRz6RpMLU72S2bCJA-oyde6zw2NersFVEY=w408-h544-k-no',
      distance: 'Santa Cruz',
      hostTip: 'A fascinating look into the industrial past of the island.',
      mapUrl: 'https://www.google.com/maps/place/F%C3%A1brica+da+Baleia+do+Boqueir%C3%A3o/@39.4630269,-31.129927,17z/data=!3m1!4b1!4m6!3m5!1s0xb3224341624d703:0xd41180b710127ed!8m2!3d39.4630269!4d-31.129927!16s%2Fg%2F121tb_3g!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-flores-convento',
      categoryId: 'museum',
      title: 'Museu das Flores',
      description: 'The main museum located in the historic Convent of São Boaventura.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSys8-TFLPgBc17UZ4g-FkDOcs-1ua_aXibw6-kPlmk_ZYISft6I70RaxIj0ybp4pejMMePHkZZHeV_huy0L-jRsMPgWx9sPDzZsOfB2y3DG4-reO3LMyZGoQriVbOuBBv9qWQViqsKcoGk=w408-h544-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Explore the cloisters and the history of the island.',
      mapUrl: 'https://www.google.com/maps/place/Museu+das+Flores/@39.4520195,-31.1481575,15z/data=!4m10!1m2!2m1!1smuseu+perto+de+Santa+Cruz+das+Flores,+Portugal!3m6!1s0xb32242b91e55f45:0x7c2692f18a14840e!8m2!3d39.4520195!4d-31.1291031!15sCi5tdXNldSBwZXJ0byBkZSBTYW50YSBDcnV6IGRhcyBGbG9yZXMsIFBvcnR1Z2FskgEGbXVzZXVt4AEA!16s%2Fg%2F120trymd!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- HIKE ---
    {
      id: 'itinerary-pdf',
      categoryId: 'hike',
      title: '5-Day Itinerary to Explore Flores Island by Car',
      description: 'A complete guide to explore the most beautiful spots on the island in 5 days, including lagoons, viewpoints, and waterfalls.',
      imageUrl: 'https://ilha-das-flores.reservasdabiosfera.pt/wp-content/uploads/sites/7/resized/2023/07/RB_ILHA-DAS-FLORES_Pontos-de-Interesse_0004_Rocha-dos-Bordoes-e1718977500939-1920x0-c-default.jpg',
      distance: 'Full Island Tour',
      hostTip: 'Tap the button below to download the full PDF guide with detailed maps and daily routes.',
      mapUrl: 'https://drive.google.com/uc?export=download&id=1B9TdBbQi0NG1QXUz1N8fp89aaZkovd_K'
    },
    {
      id: 'grande-rota-1',
      categoryId: 'hike',
      title: 'Grande Rota das Flores (Part 1)',
      description: 'A spectacular coastal trail offering breathtaking views of the ocean and the island\'s rugged terrain.',
      imageUrl: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEwMTMyMzY4LzY0MzI2ZjE2MDI3NjZhZDM4NTExYzA4YmVmZTM4YWZmLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0IjoianBlZyIsInJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19',
      distance: 'Start: Santa Cruz',
      hostTip: 'This is a challenging full-day hike. Bring plenty of water and check the weather beforehand.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/grande-rota-das-flores-parte-1',
      trailStats: { length: '22.7 km', duration: '9 - 9.5 h', difficulty: 'Hard' }
    },
    {
      id: 'sc-barragem-loop',
      categoryId: 'hike',
      title: 'Santa Cruz - Dam Loop',
      description: 'A moderate circular trail through green landscapes, passing by the dam and offering scenic views of Santa Cruz.',
      imageUrl: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTg1MjUyMTMvZDFlMTM3ZWE4NzgxNTQ4NTdkMzdlOGY3ZmYxN2QwMmEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=',
      distance: 'Start: Santa Cruz',
      hostTip: 'Good for a half-day hike. The path near the dam can be muddy after rain.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/santa-cruz-das-flores-barragem-da-fazenda-fazenda-de-santa-cruz',
      trailStats: { length: '13.4 km', duration: '4 - 4.5 h', difficulty: 'Moderate' }
    },
    {
      id: 'gr-flores-short',
      categoryId: 'hike',
      title: 'Grande Rota das Flores (Short Section)',
      description: 'A demanding adventure exploring a part of Europe\'s westernmost island! This route offers total immersion in the volcanic nature of the Azores.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11132899/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Various Points',
      hostTip: 'A beautiful but demanding section of the trail.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/trilho-grande-rota-das-flores--3',
      trailStats: { length: '5.5 km', duration: '1.5 - 2 h', difficulty: 'Moderate' }
    },
    {
      id: 'sc-ponta-delgada',
      categoryId: 'hike',
      title: 'Santa Cruz das Flores - Ponta Delgada',
      description: 'This linear route starts in Santa Cruz das Flores and heads towards Ponta Delgada, passing through the village of Cedros.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11315790/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Start: Santa Cruz',
      hostTip: 'A long linear trail, arrange transport for the return trip.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/santa-cruz-das-flores-ponta-delgada',
      trailStats: { length: '19.5 km', duration: '6.5 - 7 h', difficulty: 'Hard' }
    },
    {
      id: 'gr01-flo-full',
      categoryId: 'hike',
      title: 'GR01 FLO - Grande Rota das Flores',
      description: 'A stunning multi-day coastal traverse immersing hikers in the wildest and most remote corner of the Azores. Covering the length of Flores Island, this adventure is designed for experienced hikers.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11133270/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Multi-day',
      hostTip: 'This is the full island traverse. Preparation and logistics are key.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/gr01-flo-grande-rota-das-flores',
      trailStats: { length: '47.2 km', duration: '17.5 - 19.5 h', difficulty: 'Hard' }
    },
    {
      id: 'sc-ribeira-monte',
      categoryId: 'hike',
      title: 'Santa Cruz das Flores - Ribeira dos Barqueiros - Monte',
      description: 'Santa Cruz das Flores is one of the most isolated towns in the Azores, so the paved roads around it are relatively quiet.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11208187/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Start: Santa Cruz',
      hostTip: 'A quiet route mostly on paved roads.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/santa-cruz-das-flores-ribeira-dos-barqueiros-monte',
      trailStats: { length: '10.8 km', duration: '3.5 - 4 h', difficulty: 'Moderate' }
    },
    {
      id: 'rota-falesias',
      categoryId: 'hike',
      title: 'West Coast Cliffs Route',
      description: 'This short walking route in the Protected Landscape Area of the Central Zone and West Coast Cliffs offers a unique experience.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11357710/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'West Coast',
      hostTip: 'Great for a shorter walk with amazing views.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/rota-das-falesias-da-costa-oeste',
      trailStats: { length: '3.2 km', duration: '1.5 - 2 h', difficulty: 'Moderate' }
    },
    {
      id: 'trilho-fazenda',
      categoryId: 'hike',
      title: 'Rua da Fazenda Linear Trail',
      description: 'This linear route develops in an area marked by the black color of volcanic basalt.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11133257/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Fazenda',
      hostTip: 'Interesting volcanic landscape features.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/trilho-linear-da-rua-da-fazenda',
      trailStats: { length: '7.9 km', duration: '2 - 2.5 h', difficulty: 'Moderate' }
    },
    {
      id: 'martins-rebelo',
      categoryId: 'hike',
      title: 'Around the Old Martins & Rebelo Facilities',
      description: 'Along this route, hikers will find the remains of the old Martins e Rebelo facilities. These ruins, now reclaimed by nature, tell a part of the industrial history.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11392595/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Historic Site',
      hostTip: 'A walk through industrial history reclaimed by nature.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/em-torno-das-antigas-instalacoes-da-martins-e-rebelo',
      trailStats: { length: '4.2 km', duration: '1.5 - 2 h', difficulty: 'Moderate' }
    },
    {
      id: 'arcos-ribeira-cruz',
      categoryId: 'hike',
      title: 'Arcos Ribeira da Cruz Viewpoint Route',
      description: 'This route on Flores Island provides a nature adventure offering spectacular views of the lush green landscape and the Atlantic Ocean.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11399298/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Ribeira da Cruz',
      hostTip: 'Spectacular views of the Atlantic and lush vegetation.',
      mapUrl: 'https://www.google.com/maps/place/Rota+do+Miradouro+Arcos+Ribeira+da+Cruz/@39.4580202,-31.1268106,17z',
      trailStats: { length: '10.0 km', duration: '3.5 - 4 h', difficulty: 'Moderate' }
    },

    // --- BEACH (SWIMMING) ---
    {
      id: 'poca-salemas',
      categoryId: 'beach',
      title: 'Poça das Salemas',
      description: 'Small hidden natural pool with crystal clear waters, accessible at low tide.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGkgpQq12i5Qkc0R95gbCsDFg0DeS4LtdSjIMWs5OQzGl_UAj1Ero4EdGk0ay8P4t6NKV1MkTAlIi_Y_MBukY5kpuaGhEDrLsxFs5U-lyKGW5TcMb63hONd4LCq1fA3Wdil9mi=w408-h544-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Best visited during low tide to see the clear colors of the pool.',
      mapUrl: 'https://www.google.com/maps?q=Po%C3%A7a+das+Salemas,+9970-320+Santa+Cruz+das+Flores,+Portugal&ftid=0xb32243362d887f1:0x7844ff3bc034a7b5&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=ba75130f-bd06-4f99-9907-a836257dc3ea&g_st=ipc'
    },
    {
      id: 'poca-mulheres',
      categoryId: 'beach',
      title: 'Natural Swimming Pools of Poça das Mulheres',
      description: 'Famous volcanic pools in Santa Cruz, featuring concrete platforms and easy access.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzC5Vr99RgHPpsXU2An8wtxv78XHA2y7QmmlFx3i1GYBw9stM0ooLzioSSDeufE8uPNus3oqVNJPJGmU38hIlKLgYfYwmL_laeEC76WmLdTlz4x0uP-JSZnwZ-7FVKBqBiKHu97mA=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'A classic spot for locals with safe swimming areas.',
      mapUrl: 'https://www.google.com/maps?q=Natural+Swimming+Pools+of+Po%C3%A7a+das+Mulheres,+R.+do+Boqueir%C3%A3o+9970,+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3225dfc95e7599:0x7f2c80941fb9e559&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=e2833fbe-abc2-4fff-9d76-2416549d9485&g_st=ipc'
    },
    {
      id: 'zona-boqueirao',
      categoryId: 'beach',
      title: 'Zona Balnear do Boqueirão',
      description: 'Swimming area at the old whaling port, offering deep ocean swimming.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzE-kXADnfXv2AcE-ismZmAG-pC2eV5I4gM6e558e5RWM-0tgClr-u7KSPxgDEOK69KbCkPfV8PZHh0pHVy5R7yQSjMRxFkcBOHmZd_NV0ROkKL4jdnxTvKgadcFCyTdlTB=w408-h305-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Great for jumping into the deep blue ocean.',
      mapUrl: 'https://www.google.com/maps?q=Zona+Balnear+do+Boqueir%C3%A3o,+Boqueir%C3%A3o,+Ilha+das,+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3224345d22c895:0x7b0802fd60c03744&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=51b63987-3d00-47fa-806b-4ead37bd2a29&g_st=ipc'
    },
    {
      id: 'calheta-beach',
      categoryId: 'beach',
      title: 'Calheta Beach (Lajes)',
      description: 'A calm port area in Lajes used for swimming, usually protected from waves.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz2ZQRfPcF2FxIV9aOOc8Zt2XiDYopOfu1uwIwYg_cZfG3NHF-XwJ6i-8YsgEiXrgkzTS9rfdnwlUPXPjF8nGwGB440IBcAARoAv212oGNIp-eHMOWG0SWDLd5HQFfC7Sa-SQsMJg=w408-h306-k-no',
      distance: 'Lajes',
      hostTip: 'Good spot if the sea is rough elsewhere.',
      mapUrl: 'https://www.google.com/maps?q=Calheta+Beach,+Lajes+das+Flores,+Portugal&ftid=0xb3227355343ea83:0x605f67963dd8dcc5&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=3e2db9cf-8aea-4c36-813e-0ea2cf3176d8&g_st=ipc'
    },
    {
      id: 'zona-faja-grande',
      categoryId: 'beach',
      title: 'Zona Balnear da Fajã Grande',
      description: 'Popular bathing area with ocean access and stunning views of the waterfalls and cliffs.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw3XcnsiRDVfbuZOGJnyHBNCgZO2_YD5dE8CFqsgHY1CadI2hcjwCY3-dhh_CsC30MUMa7IXeKSgVAUG8mWaN5CHFngHY3ejebfV8TfNJz33dFW40xrmB7NQ7Z0rzhpAmNow3HFbw5f97E=w408-h306-k-no',
      distance: 'Fajã Grande',
      hostTip: 'Sunset here is spectacular.',
      mapUrl: 'https://www.google.com/maps?q=Zona+Balnear+da+Faj%C3%A3+Grande,+Ilha+das,+Faj%C3%A3+Grande,+Portugal&ftid=0xb32229df72552db:0x97628170b7feba2d&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=60da92c2-a7db-4240-be26-4b2030030197&g_st=ipc'
    },
    {
      id: 'cascata-bacalhau',
      categoryId: 'beach',
      title: 'Cascata do Poço do Bacalhau',
      description: 'A unique experience to swim at the base of a 90m waterfall.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz_tZsJw8b8pQrkZgVRmGwL2WRotEt_h-foNjYfG8CpETHcq8nuMPhNeFWZVZ_LDJjpbzoOFTGFuo-ZhPhWDu1hNzugn4IEJnP_H_E4R2OqgFZf8bb3neKhie9MZuqG1iqlOw0=w408-h408-k-no',
      distance: 'Fajã Grande',
      hostTip: 'The water is fresh and invigorating!',
      mapUrl: 'https://www.google.com/maps?q=FP5R+7M+Cascata+do+Po%C3%A7o+do+Bacalhau,+In%C3%ADcio+do+percurso+Po%C3%A7o+do+Bacalhau,+9960-030+Faj%C3%A3+Grande,+Portugal&ftid=0xb32229b14cf36eb:0x530161c4276f70bb&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=4f40869c-ac79-4922-9cc3-6d99ac9a0c07&g_st=ipc'
    },
    {
      id: 'poco-redondo',
      categoryId: 'beach',
      title: 'Poço Redondo',
      description: 'A hidden natural riverside spot in Fazenda, surrounded by lush vegetation.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz11diJWEF3JoosXlVf9BewmelUkZAxDGlPMHnZvC8esGzxmS07y3WvAlbH4ZeSNFb3yjF3jeNDo79lrdSVJHW1jW6QVT-7x7tC4GNyAr6xUNwrfo8m9GUc48aj-M85prDjZk0jrZYHi8nv=w519-h240-k-no',
      distance: 'Fazenda',
      hostTip: 'A peaceful spot away from the crowds.',
      mapUrl: 'https://www.google.com/maps?q=9RVH+HX+Po%C3%A7o+Redondo,+Fazenda,+Portugal&ftid=0xb32270038ba0d1b:0x9c5c4372ea725cf3&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=8fe113ad-99fb-44a6-8c30-d956fa826804&g_st=ipc'
    },
    {
      id: 'porto-velho',
      categoryId: 'beach',
      title: 'Porto Velho',
      description: 'Historical port area in the center of Santa Cruz, popular for diving and swimming.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5l120MYtLh952mKl0MJrGGi9MbnzGZXI3njIKyy4Ir2OonS6IutT6dmiWTsfOIm9WsYb2iMSw332yvua_Wl723B-3TcoaPOwwYILtBgeiRnvdpMl9Jq75m6n2z8tlIpN_F41r=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Convenient spot if you are staying in the town center.',
      mapUrl: 'https://www.google.com/maps?q=Porto+Velho,+9970-320+Santa+Cruz+das+Flores,+Portugal&ftid=0xb32242cb37d37af:0x9a8496584e0bf24&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=8ccdee60-6f5f-41db-9e72-b8bbfd5382ce&g_st=ipc'
    },

    // --- SNACK & COFFEE ---
    {
      id: 'ponto-encontro',
      categoryId: 'snack',
      title: 'Ponto de Encontro',
      description: 'A central meeting point with a friendly atmosphere, perfect for a quick coffee or light snack.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOCmhcP8zaqTYODWih1cB1XAQlWwFuifIVl1KWm=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Great spot to mingle with locals.',
      mapUrl: 'https://www.google.com/maps/place/Ponto+de+Encontro/@39.4621574,-31.1300832,17z/data=!3m1!4b1!4m6!3m5!1s0xb32258ba0ce8b2b:0xa8aff4041cb76b5b!8m2!3d39.4621574!4d-31.1300832!16s%2Fg%2F11yprcmdqc!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'lucinos-bar',
      categoryId: 'snack',
      title: 'Lucino\'s Bar',
      description: 'A traditional local bar offering a wide selection of drinks and a welcoming vibe.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPKpWtxFzS3GqNAbOO3Xbj5CVyJ_wq7WELTXgL-=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Try the local "Especial" beer.',
      mapUrl: 'https://www.google.com/maps/place/Lucino\'s+Bar/@39.4522629,-31.1291765,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242b8c18d641:0x43940dd0478bfe1!8m2!3d39.4522629!4d-31.1291765!16s%2Fg%2F11g68zj0pb!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'orquidea',
      categoryId: 'snack',
      title: 'Lanchonete "Orquídea"',
      description: 'Known for its delicious homemade snacks and quick bites in the heart of Santa Cruz.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz9nnJrFP9g-MDlxhSZ0NqBEmDgZx8aDIm_oyiMLQJ0reaCeQkekSuQltJuJmHYeWa7gWl59sL3xyJKd7f6QMwt2_i0A8mKd1aKImUj5Xn5S28HQpoKLCHAYCfn4Rbi0Sw5xLEe=w507-h240-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Their sandwiches are fresh and tasty.',
      mapUrl: 'https://www.google.com/maps/place/Lanchonete+%22Orqu%C3%ADdea%22/@39.453287,-31.1273193,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242c9d39639b:0xf3ae6eececbe5cb9!8m2!3d39.453287!4d-31.1273193!16s%2Fg%2F11dyzdmcdw!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'wrb',
      categoryId: 'snack',
      title: 'Snackbar WRB',
      description: 'A popular spot for substantial snacks and friendly service.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqthadl5Xho3HAYTKO6tQ1DBDfhAtoHvbaxBjaYCcF-oCExtda7Cd68t6gu992tOK-szUlVoTqWbxfgLbxWSC1MsWH69jT-7IDviByzrdRAA3INq2wDXhcoeK3naoPquULXYGab=w408-h723-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Good value for money.',
      mapUrl: 'https://www.google.com/maps/place/Snackbar+WRB/@39.4528608,-31.1282593,17z/data=!3m1!4b1!4m6!3m5!1s0xb322556a06de387:0x11537ec174a1b45!8m2!3d39.4528608!4d-31.1282593!16s%2Fg%2F11s2k8d722!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'fora-d-horas',
      categoryId: 'snack',
      title: 'Snack Bar - Fora d\'Horas',
      description: 'As the name implies, a great place for late-night snacks and drinks.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwl0_AcieG1T42bpXZCGI2fOJB6pDbzxxML6AchKHtR8wqIFMLjm5QDnbc9qcS4uuqKn5kRwYcgKFckuL9ujObv9LScyvPa7HgrHkvm4af-cWNhDs8IrEaYRuy0QuYNZShnracDGA=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Perfect for after-dinner drinks.',
      mapUrl: 'https://www.google.com/maps/place/Snack+Bar+-+Fora+d\'Horas/@39.4624022,-31.1300228,17z/data=!3m1!4b1!4m6!3m5!1s0xb32255ce04fdaf7:0x286cbfdce4bb92db!8m2!3d39.4624022!4d-31.1300228!16s%2Fg%2F11hgk1s9rm!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'happy-hour',
      categoryId: 'snack',
      title: 'Happy Hour - Lounge Bar',
      description: 'A modern lounge bar offering cocktails, music, and a relaxed environment.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzsj0rJNoH-8wm8fZnIRh-H6rJ9ag_f-xW1teu9XIGpIiz8a_tW-QMiz8jFDKNdEFy-Id56cu_2bj18YsNpsyWzv5QKfYBMj4-p_A2iBT3-eqYqhaKyY-1CwWzv4xPpFu9UzrfNZQ3-_eU5=w513-h240-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Check their schedule for live music or DJ sets.',
      mapUrl: 'https://www.google.com/maps/place/Happy+Hour+-+Lounge+Bar+%26+Restaurante/@39.4625801,-31.1297493,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225003ed89049:0xbdafb1df053f6cc!8m2!3d39.4625801!4d-31.1297493!16s%2Fg%2F11x0qh2zt_!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'extintor',
      categoryId: 'snack',
      title: 'O Extintor Sports Bar',
      description: 'The place to be for sports fans. Watch the game with a cold beer and snacks.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOypcX5olaDmPCQksGZLu6vaheMj_ZnZRYFIW0-=w408-h724-k-no',
      distance: 'Santa Cruz',
      hostTip: 'It gets lively during big football matches.',
      mapUrl: 'https://www.google.com/maps/place/O+Extintor+Sports+Bar/@39.4554583,-31.1329593,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225801a0174d7:0x48a3a52413c124fb!8m2!3d39.4554583!4d-31.1329593!16s%2Fg%2F11x5tdjz3t!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- SHOP (GROCERIES) ---
    {
      id: 'floratlantico',
      categoryId: 'shop',
      title: 'Centro Comercial Floratlântico',
      description: 'Main commercial center in Santa Cruz with a supermarket and various shops.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxxOAqEW1vnWIDUasZAy1KRkPVbuA1ffT9-eYI1oKR3QRllcu6swVraY_WjsYeen3ABmq-a9PmT_Woi9VYaMCiye7KSNoZNCT1Q1VikO0tlSQu2hpFKwnOCYwuP_qinSmaQoloN_66Rl0Pf=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'One-stop shop for groceries and other needs.',
      mapUrl: 'https://www.google.com/maps?q=Centro+Comercial+Floratl%C3%A2ntico,+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3224340f371dcb:0x5fd66d63e54dbe5d&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=2e2b74df-dfc8-4624-b0b9-940be3488a03&g_st=ipc'
    },
    {
      id: 'helios',
      categoryId: 'shop',
      title: 'Hélio\'s',
      description: 'Well-stocked supermarket in Lajes das Flores.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzUgvzspAzWreuZ7qpLYXRge9hXqUi-i8CRyBSbs1ViWR9EZ3fURy94OY3y-MqmwvkOMefWOkMXKlGmPSXR20LTiKk7c_9cjSZwYYcWE13-8PtNfMOzianLLBjZbB9Fl-7ENLT_pHG5-60n=w408-h725-k-no',
      distance: 'Lajes',
      hostTip: 'Good selection of essential items in Lajes.',
      mapUrl: 'https://www.google.com/maps?q=H%C3%A9lio%27s,+Lajes+das+Flores,+Portugal&ftid=0xb3220b62c96b0cb:0xdfaba8bf7782852c&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=486a56a2-7383-43eb-8f3c-987b2407828e&g_st=ipc'
    },
    {
      id: 'barcelos',
      categoryId: 'shop',
      title: 'Barcelos Minimercado',
      description: 'Convenient minimarket in Ponta Delgada for daily essentials.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwYmq8HXahf8i9mBmdJJe88WwAtOvdaOE-aIr6lKksChsWrw5gmOpUckOAD03bp9nAPU7lR-GImobodY-v_KhIDtL9CMibzO2wIx9sBgtVub5XfCQzUznCjq61ZTrBX96IPBSMD=w460-h240-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Perfect for quick grocery runs in the north of the island.',
      mapUrl: 'https://www.google.com/maps?q=Barcelos+Minimercado,+Terra+Ch%C3%A3,+Ilha+das,+9970+Ponta+Delgada,+Portugal&ftid=0xb323d77a869871d:0x3f2a08ec24be7a74&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=8a2fdf4e-3cc5-4b7a-a0fe-c49c2498b144&g_st=ipc'
    },
    {
      id: 'lgf-sc',
      categoryId: 'shop',
      title: 'Minimercado Luís Gregório de Freitas (SC)',
      description: 'Local grocery store in Santa Cruz offering fresh products.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyWCz0f9ma66tiOOTq-51ZK1Vn7y763t0tO7jSTGjYUPS7UlHsOHjikw_NSkkxkbPN_Aav2UVi6uIy4d84J3KL_xNzd-EuWW1eB9FtJd8vh5kIJcit2Tjb_tfEbMbasnWrBQXMr=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Friendly local service and fresh goods.',
      mapUrl: 'https://www.google.com/maps?q=Luis+Gregorio+de+Freitas+-+Minimercado,+R.+da+Anuncia%C3%A7%C3%A3o+306,+9970-320+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3225ac00bb2cfd:0x7a07aa37dbf0dcb1&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=6f15d879-e250-4385-93f2-531dfef4bf0a&g_st=ipc'
    },
    {
      id: 'lgf-lajes',
      categoryId: 'shop',
      title: 'Mini-Mercado Luís Gregório De Freitas (Lajes)',
      description: 'Grocery store in Lajes for quick shopping.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwzZA87ALDF8DcKQL8h2WNgwdf4gTLBdtnM-oqdFPWRYMfAlpgf9J9mI59mmGs9RcqFaZq_b-1-1lwyhjnEOlyXltUixbQBWoPI4q1MPznZNIZ7_gHZu7qT_ZBIxtmjHpei2eET3g=w408-h544-k-no',
      distance: 'Lajes',
      hostTip: 'Convenient stop when in Lajes.',
      mapUrl: 'https://www.google.com/maps?q=Mini-Mercado+Lu%C3%ADs+Greg%C3%B3rio+De+Freitas,+Lda,+Lajes+das+Flores,+Portugal&ftid=0xb3220ca696910ef:0xf8c1bda85d81755c&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=a8a2e9b3-c67e-4b28-a4da-47e6e09f17a2&g_st=ipc'
    },
    {
      id: 'joao-germano',
      categoryId: 'shop',
      title: 'João Germano De Deus & Filho Lda',
      description: 'Traditional store in Lajes das Flores.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxZ5eOQWvfzN6KpOqNkQcJINQSiTyBu248jcg2E66bgusj1YCpPSL5yf4Sk0l_r0bUM7ii2lHBzAej9sC8aAX_XI8bWjPCkcH2dbis5w4WH9V6vQZpaLzgTpbfTzs3ClCCjdAc=w408-h306-k-no',
      distance: 'Lajes',
      hostTip: 'A staple in the Lajes community.',
      mapUrl: 'https://www.google.com/maps?q=Jo%C3%A3o+Germano+De+Deus+%26+Filho+Lda,+R.+Jo%C3%A3o+Germano+de+Deus+7,+9960-435+Lajes+das+Flores,+Portugal&ftid=0xb3220c88ca4f709:0x1d42a47a9e2caab4&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=7e4bc135-90e1-40d5-aa78-f22165762912&g_st=ipc'
    },
    {
      id: 'miniflor',
      categoryId: 'shop',
      title: 'Miniflor - Minimercado',
      description: 'A convenient mini-market for your daily essentials.',
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      distance: 'Santa Cruz',
      hostTip: 'Friendly service and good location.',
      mapUrl: 'https://www.google.com/maps/place/Miniflor+-+Minimercado/@39.4534531,-31.1322736,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225c7d18e6bc5:0x6d4412816c9f77dc!8m2!3d39.453449!4d-31.1296987!16s%2Fg%2F11vjh4r6vb!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- PARK (KIDS PARKS) ---
    {
      id: 'parque-luis-paulo-camacho',
      categoryId: 'park',
      title: 'Parque Florestal Luís Paulo Camacho',
      description: 'A fantastic forest reserve with animals (deer, ducks), picnic areas and a trout farm.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx1OTOwbIWBsape-b9InWqQdL-npQj5F9CqdGDHsH7o2bdFJ4sJr9rmvmO5F_xfWS9TdbIUYgNACKbiYNY3ygTjtg-DaussIBY7SnOl7GgH6Ze7KqjHJjZuocytpkQiHSMMRNnHARwS7Jwq=w426-h240-k-no',
      distance: '5 min drive / 25 min walk',
      hostTip: 'Kids love feeding the ducks and seeing the deer.',
      mapUrl: 'https://www.google.com/maps/place/Parque+da+Reserva+Florestal+de+Recreio+%22Lu%C3%ADs+Paulo+Camacho%22/@39.4627577,-31.1574254,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225005cab68f3:0xbb0c6c5794ab4040!8m2!3d39.4627577!4d-31.1574254!16s%2Fg%2F11xvs74y2k!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'parque-altio',
      categoryId: 'park',
      title: 'Parque Infantil do Altio',
      description: 'Located next to the campsite, offering ample green space and leisure equipment.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzOGd2KGzz_0dh0nGzeR1IpwDeVUYWWe6uaRyxRF8XUzGd08YUbWFmokg-I5KlHp3i9bTMoXeY04OV1E137Iy8jP8q1w2PdYXwCJeYr1Ic0dvjYl3Kf4qT8O8oJ8RFsGpRJefh0AhxY_TE=w426-h240-k-no',
      distance: '10 min walk',
      hostTip: 'Great for a picnic or playing in a quiet green space.',
      mapUrl: 'https://www.google.com/maps/place/Parque+Infantil+do+Altio+(Parque+de+Campismo+e+lazer)/@39.4580202,-31.1268106,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225006fc83d07:0x5e5f2bd02b05bf2c!8m2!3d39.4580202!4d-31.1268106!16s%2Fg%2F11vpzgky2y!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'parque-teofilo',
      categoryId: 'park',
      title: 'Parque Infantil Teófilo Ferreira',
      description: 'A central park perfect for a quick stop while exploring the town.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxsJ7-Yt8ZtZEidGkjnhqjAiTRsN5YBt-ix7lphhZquWXF4OY2CTpQJbJFhhwKuXY2Lw8gBjmcOBi-BMG30Sg1vP35UsUQ_vHOzsXDjILqCZ_hDa03xsx-4eMSp6TuoAPM-wjv_=w426-h240-k-no',
      distance: 'Center',
      hostTip: 'Conveniently located near cafes and the seafront.',
      mapUrl: 'https://www.google.com/maps/place/Parque+Infantil+Te%C3%B3filo+Ferreira/@39.4513482,-31.1281262,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242ba7706485:0x7bf09d6e0f81ad4d!8m2!3d39.4513482!4d-31.1281262!16s%2Fg%2F11dzdbg588!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- EAT ---
    {
      id: 'macau',
      categoryId: 'eat',
      title: 'Restaurante Macau',
      description: 'Local Chinese place with tasty dishes and friendly service.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSynwjXVCmcpe_cAKDCqP-tWDXEhqbJXyYt-WnterK6HBPfhlEkt43-7oXA3NBqQqcPWOMIKgXU_RHt-7Gh9Jmkbg5GHQsuPWKmIMVt8SYotnmydxp_GovDPCsN7PzafDMf13rzM=w408-h306-k-no',
      distance: '5 min a pé',
      hostTip: 'Very reliable for a comforting Asian meal.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+%22Macau%22/@39.4598308,-31.1305423,17z/data=!3m1!5s0xb322433d0a2a223:0x3509d64fb07c990a!4m15!1m8!3m7!1s0xb322433d9e13457:0xa0899ceca083197!2sRestaurante+%22Macau%22!8m2!3d39.4598308!4d-31.1305423!10e1!16s%2Fg%2F11dxkdgd07!3m5!1s0xb322433d9e13457:0xa0899ceca083197!8m2!3d39.4598308!4d-31.1305423!16s%2Fg%2F11dxkdgd07'
    },
    {
      id: 'cinco-sentidos',
      categoryId: 'eat',
      title: 'Restaurante Bar "5 Sentidos"',
      description: 'Contemporary space with fish, meat, vegetarian options and wine.',
      imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
      distance: '6 min a pé',
      hostTip: 'One of the best dining experiences on the island.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+Bar+%225+Sentidos%22/@39.461433,-31.1281205,17z/data=!4m15!1m8!3m7!1s0xb32243379c67cb3:0x5f8524f7a76c0c9f!2sRestaurante+Bar+%225+Sentidos%22!8m2!3d39.4618655!4d-31.1278443!10e9!16s%2Fg%2F11c5stp0bs!3m5!1s0xb32243379c67cb3:0x5f8524f7a76c0c9f!8m2!3d39.4618655!4d-31.1278443!16s%2Fg%2F11c5stp0bs!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'casa-do-rei',
      categoryId: 'eat',
      title: 'Restaurante Casa do Rei',
      description: 'Sustainable restaurant with fish, meat and vegetarian options.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMf-78FHYed8UTo6Pi4gB4EShMBkWLw7ABY1euG=w408-h307-k-no',
      distance: '20 min de carro',
      hostTip: 'Reservation essential. Fresh ingredients from their own farm.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+Casa+do+Rei/@39.3843407,-31.1862295,17z/data=!3m1!4b1!4m6!3m5!1s0xb3220b5816a6203:0x41da81f9003971d9!8m2!3d39.3843407!4d-31.1862295!16s%2Fg%2F11td7jz_5!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'por-do-sol',
      categoryId: 'eat',
      title: 'Restaurante Pôr-do-Sol',
      description: 'Legendary sunset view. Most ordered: Grilled Limpets, Seaweed Tart, and Blood Sausage with Yam and Sweet Potato.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqnUFamCxQ2TsyefkQ6BRE0sz8F_CmQSkz6OILZ_XfNMhhsHdPY7pyfL7m2jctJdjzcjiowulGrrM5BpGccs7lSrTgvXhj6dHmzcm8jd8wrZsA7CoGWuk3raFfrXCJO6JzCNgXvPc8PZ-U=w408-h544-k-no',
      distance: '25 min de carro',
      hostTip: 'Taste local delicacies while watching the sun disappear.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+P%C3%B4r-do-Sol/@39.4361324,-31.2564499,17z/data=!3m1!4b1!4m6!3m5!1s0xb3222712982052d:0x8e58c0df41798f16!8m2!3d39.4361324!4d-31.2564499!16s%2Fg%2F11c2q30fx9!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'aldeia-cuada',
      categoryId: 'eat',
      title: 'Restaurante "Aldeia da Cuada"',
      description: 'Excellent regional gastronomy in a historic village. Famous dishes: "Torrada da Terra" (bread with cheese/sausage), Caramelized Ribs, and fresh Pelagic Fish.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNepTB1XO-xZ5p0frydT_vaTJlnyH6M5QlYsvgl=w408-h272-k-no',
      distance: '25 min de carro',
      hostTip: 'Incredibly peaceful and authentic atmosphere. Try the Seaweed Tart too.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+%22Aldeia+da+Cuada%22/@39.4403678,-31.2559289,17z/data=!3m1!4b1!4m9!3m8!1s0xb32227a311466d7:0x3bc4f4de51f18508!5m2!4m1!1i2!8m2!3d39.4403678!4d-31.2559289!16s%2Fg%2F11dz1cdpts!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'rainha-do-bife',
      categoryId: 'eat',
      title: 'Restaurante "Rainha do Bife"',
      description: 'The absolute choice for regional steak and local specialties. Popular dishes: Regional Steak, Oven/Grilled Limpets, Fresh Cheese, Octopus or Tuna.',
      imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800',
      distance: '8 min a pé',
      hostTip: 'The "Queen Steak" is their signature dish. Start with Fresh Cheese with local pepper sauce.',
      mapUrl: 'https://www.google.com/maps?q=Restaurante+%22Rainha+do+Bife%22'
    },
    {
      id: 'o-baleia',
      categoryId: 'eat',
      title: 'Restaurante O Baleia',
      description: 'Authentic spot, legendary for its super fresh grilled fish and typical ambiance.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyuq1gW44N03XmTDxCn0PuqfQhrwQmnuux4tVbGiRgY2CCOQltqdgAH6C3nE2CYCWkvF3a56vIFKWNNuymMPfyohfZqTYsdavyXUXDeb_X3zYGBtWI4QyO5Lo-CDOCiI1xqDyEnUrtsG6la=w408-h306-k-no',
      distance: '15 min a pé',
      hostTip: 'Arrive early, it\'s extremely popular for the daily freshness of its fish.',
      mapUrl: 'https://www.google.com/maps/place/O+Baleia/@39.4623999,-31.1300268,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225004268580b:0x951e1c5037029703!8m2!3d39.4623999!4d-31.1300268!16s%2Fg%2F11x0hf529b!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'esplanada-mar-terra',
      categoryId: 'eat',
      title: 'A Esplanada - Mar & Terra',
      description: 'Seaside dining in Fajã Grande with an excellent seafood mix.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOntPbxMsP68lqZf6vPrppgBymwG_f-kobA6v9t=w408-h873-k-no',
      distance: '25 min de carro',
      hostTip: 'The terrace is fantastic for a post-hike lunch.',
      mapUrl: 'https://www.google.com/maps?q=Restaurante+%22A+Esplanada%22+-+Mar+%26+Terra'
    },
    {
      id: 'o-arruda',
      categoryId: 'eat',
      title: 'Restaurante O Arruda',
      description: 'A landmark in Lajes das Flores for traditional Azorean recipes.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMAoBX4IZFAPnx_VJkmbhIaqoR1Tg02hrgvCWCJ=w408-h306-k-no',
      distance: '18 min de carro',
      hostTip: 'Favorite for local fish specialties.',
      mapUrl: 'https://www.google.com/maps?q=O+Arruda,+Lajes+das+Flores'
    },
    {
      id: 'cana-roca',
      categoryId: 'eat',
      title: 'Restaurante Cana Roca',
      description: 'Famous for thin-crust pizzas and traditional Portuguese food.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyPpeaSfi_rEYGNWvf4_UAbln-Qe7jBYTU_ZEboL64vK4Gb6dZv9MerZJ0JVvbZV2mnp4qEXUg6gMxGCkE88FmD7Fy7SnY7mgPumbnSR2Tl4ccp2v_XHB7Vu_Sc7_cipwoo8cG2dQ=w408-h306-k-no',
      distance: '10 min de carro',
      hostTip: 'Pizzas are a local favorite in Fazenda.',
      mapUrl: 'https://www.google.com/maps?q=Cana+Roca,+Fazenda'
    },
    {
      id: 'flor-de-lotus',
      categoryId: 'eat',
      title: 'Restaurante Flor de Lótus',
      description: 'International and healthy options in Ponta Delgada.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipP1YWbdVXBa430uGHUuZJesheVPTHnJbwIgBi3B=w534-h240-k-no',
      distance: '25 min de carro',
      hostTip: 'Great for taking a break from meat and fish.',
      mapUrl: 'https://www.google.com/maps/place/FLOR+DE+L%C3%93TUS/@39.5206801,-31.2111708,17z/data=!3m1!4b1!4m6!3m5!1s0xb323df5e4d9d80b:0xf4a9ba59b4e2d0fd!8m2!3d39.520676!4d-31.2085959!16s%2Fg%2F11hds05b5x?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'o-mergulhador',
      categoryId: 'eat',
      title: '"O Mergulhador"',
      description: 'A relaxed spot located right next to the swimming area.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNCA-LDWafT-5bzyA6rBvdXZzFpgaKYCwiWxuQX=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Perfect for a drink or snack after a swim.',
      mapUrl: 'https://www.google.com/maps/place/%22O+Mergulhador%22/@39.4517644,-31.1264633,17z/data=!3m1!4b1!4m6!3m5!1s0xb32253d18f73407:0xf8dd153adca24765!8m2!3d39.4517644!4d-31.1264633!16s%2Fg%2F11sscpds1x!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'forno-transmontano',
      categoryId: 'eat',
      title: 'Restaurante "O Forno Transmontano"',
      description: 'Traditional restaurant offering hearty meals and wood-oven specialties.',
      imageUrl: '/images/restaurant_forno.png',
      distance: 'Lajes',
      hostTip: 'Try the roasted meats!',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+%22O+Forno+Transmontano%22/@39.3883899,-31.1925259,11.8z/data=!4m6!3m5!1s0xb322733a0ec1383:0x396e3f5400186aea!8m2!3d39.3861656!4d-31.1681189!16s%2Fg%2F11g9g01_47!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    }
  ],
  pt: [
    // --- VIEWPOINTS ---
    {
      id: 'morro-alto',
      categoryId: 'viewpoint',
      title: 'Morro Alto Viewpoint',
      description: 'O ponto mais alto da ilha, oferecendo vistas panorâmicas de lagoas e vales.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxIv191fx4vhaU8MQ_9GOsDnADLa5unttfcLI67WzitsooKG6tOkzlBjIcOD7T9TaHjSlOPxTqttIn3cr0QR1fgsDb-AszyigAFEeuJXXCnxIYvO_hsIWrhzyGKFdRVVFEhllQk=w408-h306-k-no',
      distance: 'Planalto Central',
      hostTip: 'Muitas vezes nublado, mas espetacular quando limpo.',
      mapUrl: 'https://www.google.com/maps/place/Morro+Alto/@39.4631789,-31.2200023,17z/data=!3m1!4b1!4m6!3m5!1s0xb322336c2e250bb:0x5b9f3622b27c9de2!8m2!3d39.4631789!4d-31.2200023!16s%2Fg%2F11rrsd8mcz!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'vale-da-fazenda',
      categoryId: 'viewpoint',
      title: 'Vale da Fazenda Viewpoint',
      description: 'Com vista para o pitoresco vale da Fazenda.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyMw5wQOUCBiw89V_nXVfdqDgHCae2vML705PdTXfxiXN5h7eA9BT9G1zwz5Cd1DIMiHtWujxmTJ3vTEWGXWwtxvrnd4bX8kTAu2bZeX9AzdOzw7fypRgAJ6cobx9dsnHaJ5On6=w408-h544-k-no',
      distance: 'Fazenda',
      hostTip: 'Ótima paragem para uma foto do vale verde.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+do+Vale+da+Fazenda/@39.4745771,-31.2011809,17z/data=!3m1!4b1!4m6!3m5!1s0xb3223b4d28f41b3:0xfed0df10b4d3372e!8m2!3d39.4745771!4d-31.2011809!16s%2Fg%2F11g0ngzy19!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'monte-das-cruzes',
      categoryId: 'viewpoint',
      title: 'Monte das Cruzes Viewpoint',
      description: 'Oferece uma vista completa sobre Santa Cruz das Flores, o aeroporto e o oceano.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0OWpiOzOLmwYRgBYoUIaPSw_sHIvm-iIJ6gq_SRaSdl13Jc79ZVh54XLJz8dGjjUJgIZMFYMvgWYUsosxxXjZt-_jlcFtU4ZVfLB5W_kavbu-mWonG2akkyfGhTwAqE1Me6hWgQ=w426-h240-k-no',
      distance: 'Santa Cruz',
      hostTip: 'O melhor local para ver toda a vila de cima.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+do+Monte+das+Cruzes/@39.4515429,-31.1363516,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242f5e7b14c9:0x72833a68bb791608!8m2!3d39.4515429!4d-31.1363516!16s%2Fg%2F1225f0hp!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'faja-do-conde',
      categoryId: 'viewpoint',
      title: 'Fajã do Conde Viewpoint',
      description: 'Um miradouro com vistas sobre a costa acidentada e a baía.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerr63OnAu9eC4Sr_wRCng9d0Qol1IbCHwAxvuO3ildkmwJaq4sgBuvqqfjdcV7W16Xovk2EgygGTsNf7Ycm1wjPWXuxHR7zViAXtiKrgcxdVQtsGlEdv6i6aThKz9FyYwya-g=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Uma paragem rápida e agradável na estrada costeira.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+da+Faj%C3%A3+do+Conde/@39.4397841,-31.1468424,17z/data=!3m1!4b1!4m6!3m5!1s0xb32269f72846233:0x3c82a9ff97178154!8m2!3d39.4397841!4d-31.1468424!16s%2Fg%2F11g8gx_s6j!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'rocha-dos-frades',
      categoryId: 'viewpoint',
      title: 'Rocha dos Frades Viewpoint',
      description: 'Vista de uma imponente formação rochosa que se ergue do mar.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweq6daZrd9QFK4SKF35oDPm12z_nOQ4TbmIE_ilbxNNGFurWCbrmybglSCKprSWzRQN5_Lyaon2c_vBDtfyFluWkewOPoGc7uhY-9nU3rKycqWJfVpr7GclNbjBNH0rsz9fY0lE=w408-h510-k-no',
      distance: 'Lajes',
      hostTip: 'Recurso geológico impressionante.',
      mapUrl: 'https://www.google.com/maps/place/Rocha+dos+Frades/@39.379941,-31.2127704,17z/data=!3m1!4b1!4m6!3m5!1s0xb32218d7cd36f41:0xf72a858679de26a9!8m2!3d39.379941!4d-31.2127704!16s%2Fg%2F11s56sn93s!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'agua-quente',
      categoryId: 'viewpoint',
      title: 'Água Quente - Costa do Lajedo',
      description: 'Um local costeiro conhecido pelas suas águas termais e beleza acidentada.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepneZx2_Ps5OZvW522giaExUW9emUTcySkUTwW8-4vq18pBKPjt4Tqdp8xO8oq_AIurHskDJw_mwt806An1h2-eZMmwgMA6F9ccyL-QEcBNqBJfQX346Qd-r2_SGULqK-aLHNPb=w408-h544-k-no',
      distance: 'Lajedo',
      hostTip: 'Explore a paisagem costeira única aqui.',
      mapUrl: 'https://www.google.com/maps/place/%C3%81gua+Quente+-+Costa+do+Lajedo/@39.3764219,-31.2489338,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221ca468d50a3:0x6bd6ea5c42b3275d!8m2!3d39.3764219!4d-31.2489338!16s%2Fg%2F11ghvbv0hg!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'rocha-bordoes-main',
      categoryId: 'viewpoint',
      title: 'Rocha dos Bordões',
      description: 'As famosas colunas verticais de basalto, uma maravilha geológica dos Açores.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMHNjv1ZWBD9dbV4JtLEKNATCWbxv8pPv_A1r5XtdSluYjj1LU_JuGabWVzOX-uzzQ6NexwV8_AYod8T7bgyOd5x3C9rd5sfC0zCt8a_mmnPDbCmD3fCHsQWn-TfdWN4fbow0n=w408-h306-k-no',
      distance: 'Mosteiro',
      hostTip: 'Local icónico, ótimo à tarde com a luz do sol.',
      mapUrl: 'https://www.google.com/maps/place/Rocha+dos+Bord%C3%B5es/@39.4059424,-31.2412996,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221f297bb0f6f:0x52091192af853f6!8m2!3d39.4059424!4d-31.2412996!16s%2Fg%2F1226y7h6!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'raul-brandao',
      categoryId: 'viewpoint',
      title: 'Miradouro Raul Brandão',
      description: 'Com vista para a Fajã Grande e o oceano ocidental.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqDAkXGhuhIJ_dto88Aj7WiYnW0to9-kh3GnmcYWbvoUxvumYePcfgep4onwkCrUcDL3k56lQV0HBDfnUME6KX-h737wd0zFK1dLpvVbgbgA0iwFD873FRZMkRVs29EHjp_JGc=w408-h271-k-no',
      distance: 'Fajã Grande',
      hostTip: 'Nomeado em homenagem ao famoso escritor português.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+Raul+Brand%C3%A3o/@39.4532163,-31.2557984,17z/data=!3m1!4b1!4m6!3m5!1s0xb32239967588f99:0x1749ecb0bd649006!8m2!3d39.4532163!4d-31.2557984!16s%2Fg%2F11t13_53sj!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'farol-albarnaz',
      categoryId: 'viewpoint',
      title: 'Farol de Albarnaz',
      description: 'O farol mais ocidental dos Açores com vistas dramáticas das falésias.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzEVpQnVsC8pZtUrerCa99Yj7lQZXXmQIuoediF-L83hvPxGdnqvFWlNQ6Q1z9jOlrxmNYJ_GVMf01SnJDhis_unuGBi7YPaviWxaPtv_Nco34wPyYdoCVZn3EThEf4K3EtcZaq=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Local ventoso, mas bonito.',
      mapUrl: 'https://www.google.com/maps/place/Farol+de+Albarnaz/@39.5199229,-31.2358461,17z/data=!3m1!4b1!4m6!3m5!1s0xb323d15d8329337:0x7bf1b0583b0a42c6!8m2!3d39.5199229!4d-31.2358461!16s%2Fm%2F011q9963!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'baia-alem',
      categoryId: 'viewpoint',
      title: 'Miradouro da Baía de Além',
      description: 'Vista sobre a baía e o ilhéu de Monchique, o ponto mais ocidental da Europa.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxqv4gMQ70Pfh05UvMzIVfBkjJ7CHVb15da0xqb81KUrk3hOrl2aprTEZOi-1LnWRrtrjwadnTJ4ZpA_XH_HoxotuqukP-scnHaXF1nPMY_wzduCcqtGA7p7WqLwMTGrWojeJo=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Procure o ilhéu de Monchique ao longe.',
      mapUrl: 'https://www.google.com/maps?q=Miradouro+da+Ba%C3%ADa+de+Al%C3%A9m,+Ilha+das+Flores,+Portugal&ftid=0xb323d16cd39a5ad:0x5f61ae4e72af9f9b&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=0e915845-db29-4f0a-9bed-acd0687b4a67&g_st=ipc'
    },
    {
      id: 'porto-ponta-delgada',
      categoryId: 'viewpoint',
      title: 'Miradouro Porto e Baía Ponta Delgada',
      description: 'Vista panorâmica sobre o porto e a baía a norte.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw6cnSpxc0oeNNSxQcOksezDhr5tPXqunVEfSEB2-Mzug1-8ieumMZt5AeKoU63JUtFrRcRtUZu53bzq2IFFXDA7QFM4goUdxwn91w_TQ6nYvf5wbzfknXdpB86IYGmiQstICjr=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Uma vista encantadora da costa norte.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+sobre+o+Porto+e+Ba%C3%ADa+de+Ponta+Delgada/@39.5201155,-31.2078181,17z/data=!3m1!4b1!4m6!3m5!1s0xb323ce7af42ed9d:0xd02f72cdbfc8ad2f!8m2!3d39.5201155!4d-31.2078181!16s%2Fg%2F11g9vn2j3y!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'miradouro-ponta-delgada',
      categoryId: 'viewpoint',
      title: 'Miradouro de Ponta Delgada',
      description: 'Com vista para a vila de Ponta Delgada.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx96MoBFoTxlCawD4i9djtFYijvhai7CcKj31BUEDkX_N137DYYk8p2JxW896dTRoh5tidG8t7WVHA0f4OiuAL1O6HZi_kUx3PYnJCeSSOFyjCRz2YhsyBuB3PdilyV7fflVzsuXqo19L8Q=w408-h544-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Ótima perspetiva da vila do norte.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+de+Ponta+Delgada/@39.5069145,-31.2167686,17z/data=!3m1!4b1!4m6!3m5!1s0xb323d355c4c41d1:0xb756d28b30c3940f!8m2!3d39.5069145!4d-31.2167686!16s%2Fg%2F11qhgcpnqz!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'pedrinha',
      categoryId: 'viewpoint',
      title: 'Miradouro da Pedrinha',
      description: 'Vista para as paisagens interiores e para a costa.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyPKe7fpe06WLhDkjCjT0pCXIa9eyy2HkJAMUN3m914Du-XAfzeFtwwgxnfwYN2OOba6tjAqN1G3FJL0PMnh8JdGpq18BhcvRGPHwhdE0IuKgLQdqSGK61anhBLAgk0C9jouyHn=w408-h306-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Um local tranquilo para admirar a paisagem.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+da+Pedrinha/@39.4948247,-31.195168,17z/data=!3m1!4b1!4m6!3m5!1s0xb322337ec7b09f3:0xd355aca5df4bff0c!8m2!3d39.4948247!4d-31.195168!16s%2Fg%2F11fxzsp8_l!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'caimbros',
      categoryId: 'viewpoint',
      title: 'Miradouro dos Caimbros',
      description: 'Vista sobre a costa nordeste e o mar.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSymisvq-WDlkqdmSKDlPckXQ7LJAU618jEiPhdnz-18BnN1PpA-yva1pXzjQb9qAASgC3COxq9TkQFd_Y4tFoQ7uzVSy1gIMJeMrGq3TABFghYW5Zw6uYiMCQYCyXRvpvbgIkAxLkNJm22f=w408-h306-k-no',
      distance: 'Cedros',
      hostTip: 'Belas vistas costeiras.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+dos+Caimbros/@39.4722134,-31.1469764,17z/data=!3m1!4b1!4m6!3m5!1s0xb32254178115c5f:0x75911aa589c5301e!8m2!3d39.4722134!4d-31.1469764!16s%2Fg%2F11jmwgsl2r!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'craveiro-lopes-new',
      categoryId: 'viewpoint',
      title: 'Miradouro Craveiro Lopes',
      description: 'Cercado por hortênsias com vistas profundas para o vale.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxIemEf2yeOEJ3ikBdO0Tg0IpIVq5YkMNM3O7yxvxIptXI7Va1TjDVjE_fura2Ru7PtK3RdkzrPna_wzN1vCFVmal1NU7DEqGXtiuTYuevjuLrKLZQt0t1mHGWNXyXAdOrKH8fROY8l7nno=w408-h306-k-no',
      distance: 'Flores',
      hostTip: 'Um miradouro clássico muitas vezes cercado por flores.',
      mapUrl: 'https://www.google.com/maps/place/Miradouro+Craveiro+Lopes/@39.4264449,-31.2383823,17z/data=!3m1!4b1!4m6!3m5!1s0xb3223c09d02b631:0x2514eab45f603c9e!8m2!3d39.4264449!4d-31.2383823!16s%2Fg%2F11rbf_505m!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- MUSEUMS ---
    {
      id: 'museu-agricultura',
      categoryId: 'museum',
      title: 'Agriculture & Dairy Museum',
      description: 'Descubra as tradições agrícolas e a história da produção de laticínios da ilha.',
      imageUrl: 'https://www.explorefloresisland.com/wp-content/uploads/2023/07/big1339691706.jpg',
      distance: 'Lomba',
      hostTip: 'Um vislumbre da vida rural das Flores.',
      mapUrl: 'https://www.google.com/maps/place/Museu+agricultura+e+latic%C3%ADnios/@39.4026682,-31.1560722,17z/data=!3m1!4b1!4m6!3m5!1s0xb3227006625798f:0xc6b84a8ac598a624!8m2!3d39.4026682!4d-31.1560722!16s%2Fg%2F11vzdsqpf8!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-baleeiro',
      categoryId: 'museum',
      title: 'Whaling Museum',
      description: 'Dedicado à história da caça à baleia, exibindo barcos e ferramentas usadas pelos baleeiros.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzLxrM8oe619_G-DiP9nYr513BXmncufhgu3OyrmBpT5dQRc1UQoi4PxGLlG7LeOdR3Ychmz1IvW381md0qkwofgMZoRFftdqhECYlCiqaD1s5BBmIk5dZEWYkPMLO4AFqDKQ8i=w408-h306-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'Essencial para compreender a história marítima das Lajes.',
      mapUrl: 'https://www.google.com/maps/place/Museu+Baleeiro/@39.3790987,-31.1710098,17z/data=!3m1!4b1!4m6!3m5!1s0xb322737261eddf1:0xf798849e84db856d!8m2!3d39.3790987!4d-31.1710098!16s%2Fg%2F11sqj6ns2d!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-municipal-lajes',
      categoryId: 'museum',
      title: 'Municipal Museum Lajes das Flores',
      description: 'O museu municipal local preserva o património cultural das Lajes.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxMgwRX5EIlk1FdZ0bZVSFbEMX8F8kguK-wTQZrTmoWd8RXtZeqBcIVeu-8cdA4SJr4Hh2nJ7-qSp9C1EYZSR4FN-aFVfwh-OpeikneDAJScDoxhBZA02pCkrQfDE6o--Gw3fD9Y0D7t9w8=w408-h307-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'Localizado no coração da vila.',
      mapUrl: 'https://www.google.com/maps/place/Museu+Municipal+Lajes+das+Flores/@39.3775626,-31.1787431,17z/data=!3m1!4b1!4m6!3m5!1s0xb3221002110a9a5:0x3e695508a13cb44e!8m2!3d39.3775626!4d-31.1787431!16s%2Fg%2F11ldhfzl0c!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-lacticinios',
      categoryId: 'museum',
      title: 'Dairy Museum',
      description: 'Exposições relacionadas com a produção de leite e queijo que sustenta a ilha.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxdGio2WEBSHex-8IpujkIxWMif5LkWuOu5gWu0RoFNfyIjnljOXSpmCAY_49SRWPhpXzzn4NXiRRa2GCKe7KDhUF64FPGdZa-c4dsPSr85mpxp-aiRalyR698iIsxhDGdPAws-HqU5941m=w408-h408-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'Aprenda sobre a famosa produção de queijo dos Açores.',
      mapUrl: 'https://www.google.com/maps/place/Museu+dos+Lactic%C3%ADnios/@39.3795784,-31.1866628,17z/data=!3m1!4b1!4m6!3m5!1s0xb322100280a2ee9:0x7514904b4c2a6e4e!8m2!3d39.3795784!4d-31.1866628!16s%2Fg%2F11vzdsy0dm!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-lavrador',
      categoryId: 'museum',
      title: 'Farmer\'s Museum',
      description: 'Uma coleção que homenageia o trabalho e as ferramentas dos agricultores locais.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxbAk879kNziY10t0NmeQXgao5jqndfvK7MLzgYwTJT1DRYG2p8ovpZF89ty2hwqJAgILgE11UUVHj-z8TY5Qrodg0YRFl7YG5L8kaZLLt3RlERB8QAudWgWuUqGmOD53CisokwhiTZXpI-=w408-h408-k-no',
      distance: 'Lajes das Flores',
      hostTip: 'Veja as ferramentas tradicionais usadas nos campos.',
      mapUrl: 'https://www.google.com/maps/place/Museu+lavrador/@39.3800377,-31.1867594,17z/data=!3m1!4b1!4m6!3m5!1s0xb32210041a68373:0x9d1dfd63f5d7f338!8m2!3d39.3800377!4d-31.1867594!16s%2Fg%2F11vx5slzy4!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'casa-museu-faja',
      categoryId: 'museum',
      title: 'House Museum Fajã Grande',
      description: 'Uma casa tradicional preservada para mostrar a vida doméstica do passado.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkwjDMjvbQjUTO8SdHOC4ZUpZiCmgmIaIuw&s',
      distance: 'Fajã Grande',
      hostTip: 'Viaje no tempo nesta bela casa tradicional.',
      mapUrl: 'https://www.google.com/maps/place/Casa+Museu+Faj%C3%A3+Grande/@39.452621,-31.2617792,17z/data=!3m1!4b1!4m6!3m5!1s0xb322282659c9471:0xae6c2069cd28e9f4!8m2!3d39.452621!4d-31.2617792!16s%2Fg%2F11g7npv5l0!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-machado',
      categoryId: 'museum',
      title: 'Axe Museum (Museu do Machado)',
      description: 'Localizado em Cedros/Ponta Ruiva, com artefactos históricos.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzxx2NF6EpoEAk6slZFTFuTPBFOpwVjeE-50cQ0RjG_G4q7KB_7812EQvUgdOEUxb-BiRVHCWciU8J9D91QTmdcZvZubrPgeBZwTt10nUBHqyk0oj4sev1XaF-3THG3EYNygg4=w408-h544-k-no',
      distance: 'Cedros',
      hostTip: 'Um pequeno museu único no norte.',
      mapUrl: 'https://www.google.com/maps/place/Museu+do+Machado+(+Cedros+-+Ponta+Ruiva)/@39.4949447,-31.1572034,17z/data=!3m1!4b1!4m6!3m5!1s0xb322580c2e5fe85:0x19499234dbc6d2b9!8m2!3d39.4949447!4d-31.1572034!16s%2Fg%2F11h1ywysx5!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'fabrica-baleia',
      categoryId: 'museum',
      title: 'Boqueirão Whaling Factory',
      description: 'A antiga fábrica de processamento de baleias, agora um museu que mostra o lado industrial da história da baleação.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy3Am6P_VIFZg0Gic3EbWI5nvC4w0ZLbIi4RoScYuO2dxZDnfCz9ATWTNXuGwjwQhIoKgF5Bt31GMd21r-A71RRFv-bRRoTq0j47jRz6RpMLU72S2bCJA-oyde6zw2NersFVEY=w408-h544-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Um olhar fascinante sobre o passado industrial da ilha.',
      mapUrl: 'https://www.google.com/maps/place/F%C3%A1brica+da+Baleia+do+Boqueir%C3%A3o/@39.4630269,-31.129927,17z/data=!3m1!4b1!4m6!3m5!1s0xb3224341624d703:0xd41180b710127ed!8m2!3d39.4630269!4d-31.129927!16s%2Fg%2F121tb_3g!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'museu-flores-convento',
      categoryId: 'museum',
      title: 'Museu das Flores',
      description: 'O principal museu, situado no histórico Convento de São Boaventura.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSys8-TFLPgBc17UZ4g-FkDOcs-1ua_aXibw6-kPlmk_ZYISft6I70RaxIj0ybp4pejMMePHkZZHeV_huy0L-jRsMPgWx9sPDzZsOfB2y3DG4-reO3LMyZGoQriVbOuBBv9qWQViqsKcoGk=w408-h544-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Explore os claustros e a história da ilha.',
      mapUrl: 'https://www.google.com/maps/place/Museu+das+Flores/@39.4520195,-31.1481575,15z/data=!4m10!1m2!2m1!1smuseu+perto+de+Santa+Cruz+das+Flores,+Portugal!3m6!1s0xb32242b91e55f45:0x7c2692f18a14840e!8m2!3d39.4520195!4d-31.1291031!15sCi5tdXNldSBwZXJ0byBkZSBTYW50YSBDcnV6IGRhcyBGbG9yZXMsIFBvcnR1Z2FskgEGbXVzZXVt4AEA!16s%2Fg%2F120trymd!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- HIKE ---
    {
      id: 'itinerary-pdf',
      categoryId: 'hike',
      title: 'Itinerário de 5 Dias para Explorar a Ilha das Flores',
      description: 'Um guia completo para explorar os locais mais bonitos da ilha em 5 dias, incluindo lagoas, miradouros e cascatas.',
      imageUrl: 'https://ilha-das-flores.reservasdabiosfera.pt/wp-content/uploads/sites/7/resized/2023/07/RB_ILHA-DAS-FLORES_Pontos-de-Interesse_0004_Rocha-dos-Bordoes-e1718977500939-1920x0-c-default.jpg',
      distance: 'Volta à Ilha',
      hostTip: 'Toque no botão abaixo para descarregar o guia completo em PDF com mapas detalhados e rotas diárias.',
      mapUrl: 'https://drive.google.com/uc?export=download&id=1B9TdBbQi0NG1QXUz1N8fp89aaZkovd_K'
    },
    {
      id: 'grande-rota-1',
      categoryId: 'hike',
      title: 'Grande Rota das Flores (Parte 1)',
      description: 'Um trilho costeiro espetacular com vistas deslumbrantes do oceano e do terreno acidentado da ilha.',
      imageUrl: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEwMTMyMzY4LzY0MzI2ZjE2MDI3NjZhZDM4NTExYzA4YmVmZTM4YWZmLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0IjoianBlZyIsInJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19',
      distance: 'Início: Santa Cruz',
      hostTip: 'Caminhada desafiante de dia inteiro. Leve água e verifique o tempo.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/grande-rota-das-flores-parte-1',
      trailStats: { length: '22.7 km', duration: '9 - 9.5 h', difficulty: 'Difícil' }
    },
    {
      id: 'sc-barragem-loop',
      categoryId: 'hike',
      title: 'Santa Cruz - Barragem Loop',
      description: 'Um trilho circular moderado por paisagens verdes, passando pela barragem e com vistas panorâmicas de Santa Cruz.',
      imageUrl: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTg1MjUyMTMvZDFlMTM3ZWE4NzgxNTQ4NTdkMzdlOGY3ZmYxN2QwMmEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=',
      distance: 'Início: Santa Cruz',
      hostTip: 'Bom para meio dia. O caminho perto da barragem pode ter lama.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/santa-cruz-das-flores-barragem-da-fazenda-fazenda-de-santa-cruz',
      trailStats: { length: '13.4 km', duration: '4 - 4.5 h', difficulty: 'Moderado' }
    },
    {
      id: 'gr-flores-short',
      categoryId: 'hike',
      title: 'Grande Rota das Flores (Secção Curta)',
      description: 'Uma aventura exigente explorando parte da ilha mais ocidental da Europa! Imersão total na natureza vulcânica.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11132899/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Vários Pontos',
      hostTip: 'Uma secção bonita mas exigente.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/trilho-grande-rota-das-flores--3',
      trailStats: { length: '5.5 km', duration: '1.5 - 2 h', difficulty: 'Moderado' }
    },
    {
      id: 'sc-ponta-delgada',
      categoryId: 'hike',
      title: 'Santa Cruz das Flores - Ponta Delgada',
      description: 'Rota linear de Santa Cruz para Ponta Delgada, passando por Cedros.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11315790/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Início: Santa Cruz',
      hostTip: 'Trilho linear longo, organize transporte para o regresso.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/santa-cruz-das-flores-ponta-delgada',
      trailStats: { length: '19.5 km', duration: '6.5 - 7 h', difficulty: 'Difícil' }
    },
    {
      id: 'gr01-flo-full',
      categoryId: 'hike',
      title: 'GR01 FLO - Grande Rota das Flores',
      description: 'Travessia costeira deslumbrante de vários dias no canto mais selvagem e remoto dos Açores.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11133270/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Vários dias',
      hostTip: 'Travessia completa da ilha. Preparação e logística são essenciais.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/gr01-flo-grande-rota-das-flores',
      trailStats: { length: '47.2 km', duration: '17.5 - 19.5 h', difficulty: 'Difícil' }
    },
    {
      id: 'sc-ribeira-monte',
      categoryId: 'hike',
      title: 'Santa Cruz das Flores - Ribeira dos Barqueiros - Monte',
      description: 'Percurso por estradas pavimentadas relativamente tranquilas à volta de Santa Cruz.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11208187/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Início: Santa Cruz',
      hostTip: 'Rota tranquila, maioritariamente em estrada.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/santa-cruz-das-flores-ribeira-dos-barqueiros-monte',
      trailStats: { length: '10.8 km', duration: '3.5 - 4 h', difficulty: 'Moderado' }
    },
    {
      id: 'rota-falesias',
      categoryId: 'hike',
      title: 'Rota das Falésias da Costa Oeste',
      description: 'Pequena rota na Paisagem Protegida da Zona Central e Falésias da Costa Oeste.',
      imageUrl: 'https://www.alltrails.com/api/alltrails/v2/trails/11357710/photos/0?key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i&size=large',
      distance: 'Costa Oeste',
      hostTip: 'Ótimo para uma caminhada mais curta com vistas incríveis.',
      mapUrl: 'https://www.alltrails.com/pt-pt/trilho/portugal/azores/rota-das-falesias-da-costa-oeste',
      trailStats: { length: '3.2 km', duration: '1.5 - 2 h', difficulty: 'Moderado' }
    },

    // --- SHOP (GROCERIES) ---
    {
      id: 'floratlantico',
      categoryId: 'shop',
      title: 'Centro Comercial Floratlântico',
      description: 'Principal centro comercial em Santa Cruz com supermercado e várias lojas.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxxOAqEW1vnWIDUasZAy1KRkPVbuA1ffT9-eYI1oKR3QRllcu6swVraY_WjsYeen3ABmq-a9PmT_Woi9VYaMCiye7KSNoZNCT1Q1VikO0tlSQu2hpFKwnOCYwuP_qinSmaQoloN_66Rl0Pf=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Loja única para compras de supermercado e outras necessidades.',
      mapUrl: 'https://www.google.com/maps?q=Centro+Comercial+Floratl%C3%A2ntico,+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3224340f371dcb:0x5fd66d63e54dbe5d&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=2e2b74df-dfc8-4624-b0b9-940be3488a03&g_st=ipc'
    },
    {
      id: 'helios',
      categoryId: 'shop',
      title: 'Hélio\'s',
      description: 'Supermercado bem abastecido nas Lajes das Flores.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzUgvzspAzWreuZ7qpLYXRge9hXqUi-i8CRyBSbs1ViWR9EZ3fURy94OY3y-MqmwvkOMefWOkMXKlGmPSXR20LTiKk7c_9cjSZwYYcWE13-8PtNfMOzianLLBjZbB9Fl-7ENLT_pHG5-60n=w408-h725-k-no',
      distance: 'Lajes',
      hostTip: 'Boa seleção de itens essenciais nas Lajes.',
      mapUrl: 'https://www.google.com/maps?q=H%C3%A9lio%27s,+Lajes+das+Flores,+Portugal&ftid=0xb3220b62c96b0cb:0xdfaba8bf7782852c&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=486a56a2-7383-43eb-8f3c-987b2407828e&g_st=ipc'
    },
    {
      id: 'barcelos',
      categoryId: 'shop',
      title: 'Barcelos Minimercado',
      description: 'Minimercado conveniente em Ponta Delgada para o essencial do dia-a-dia.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwYmq8HXahf8i9mBmdJJe88WwAtOvdaOE-aIr6lKksChsWrw5gmOpUckOAD03bp9nAPU7lR-GImobodY-v_KhIDtL9CMibzO2wIx9sBgtVub5XfCQzUznCjq61ZTrBX96IPBSMD=w460-h240-k-no',
      distance: 'Ponta Delgada',
      hostTip: 'Perfeito para compras rápidas no norte da ilha.',
      mapUrl: 'https://www.google.com/maps?q=Barcelos+Minimercado,+Terra+Ch%C3%A3,+Ilha+das,+9970+Ponta+Delgada,+Portugal&ftid=0xb323d77a869871d:0x3f2a08ec24be7a74&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=8a2fdf4e-3cc5-4b7a-a0fe-c49c2498b144&g_st=ipc'
    },
    {
      id: 'lgf-sc',
      categoryId: 'shop',
      title: 'Minimercado Luís Gregório de Freitas (SC)',
      description: 'Mercearia local em Santa Cruz com produtos frescos.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyWCz0f9ma66tiOOTq-51ZK1Vn7y763t0tO7jSTGjYUPS7UlHsOHjikw_NSkkxkbPN_Aav2UVi6uIy4d84J3KL_xNzd-EuWW1eB9FtJd8vh5kIJcit2Tjb_tfEbMbasnWrBQXMr=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Serviço local amigável e produtos frescos.',
      mapUrl: 'https://www.google.com/maps?q=Luis+Gregorio+de+Freitas+-+Minimercado,+R.+da+Anuncia%C3%A7%C3%A3o+306,+9970-320+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3225ac00bb2cfd:0x7a07aa37dbf0dcb1&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=6f15d879-e250-4385-93f2-531dfef4bf0a&g_st=ipc'
    },
    {
      id: 'lgf-lajes',
      categoryId: 'shop',
      title: 'Mini-Mercado Luís Gregório De Freitas (Lajes)',
      description: 'Mercearia nas Lajes para compras rápidas.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwzZA87ALDF8DcKQL8h2WNgwdf4gTLBdtnM-oqdFPWRYMfAlpgf9J9mI59mmGs9RcqFaZq_b-1-1lwyhjnEOlyXltUixbQBWoPI4q1MPznZNIZ7_gHZu7qT_ZBIxtmjHpei2eET3g=w408-h544-k-no',
      distance: 'Lajes',
      hostTip: 'Paragem conveniente quando estiver nas Lajes.',
      mapUrl: 'https://www.google.com/maps?q=Mini-Mercado+Lu%C3%ADs+Greg%C3%B3rio+De+Freitas,+Lda,+Lajes+das+Flores,+Portugal&ftid=0xb3220ca696910ef:0xf8c1bda85d81755c&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=a8a2e9b3-c67e-4b28-a4da-47e6e09f17a2&g_st=ipc'
    },
    {
      id: 'joao-germano',
      categoryId: 'shop',
      title: 'João Germano De Deus & Filho Lda',
      description: 'Loja tradicional nas Lajes das Flores.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxZ5eOQWvfzN6KpOqNkQcJINQSiTyBu248jcg2E66bgusj1YCpPSL5yf4Sk0l_r0bUM7ii2lHBzAej9sC8aAX_XI8bWjPCkcH2dbis5w4WH9V6vQZpaLzgTpbfTzs3ClCCjdAc=w408-h306-k-no',
      distance: 'Lajes',
      hostTip: 'Um marco na comunidade das Lajes.',
      mapUrl: 'https://www.google.com/maps?q=Jo%C3%A3o+Germano+De+Deus+%26+Filho+Lda,+R.+Jo%C3%A3o+Germano+de+Deus+7,+9960-435+Lajes+das+Flores,+Portugal&ftid=0xb3220c88ca4f709:0x1d42a47a9e2caab4&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=7e4bc135-90e1-40d5-aa78-f22165762912&g_st=ipc'
    },
    {
      id: 'miniflor',
      categoryId: 'shop',
      title: 'Miniflor - Minimercado',
      description: 'Um minimercado conveniente para os seus essenciais diários.',
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      distance: 'Santa Cruz',
      hostTip: 'Serviço amigável e boa localização.',
      mapUrl: 'https://www.google.com/maps/place/Miniflor+-+Minimercado/@39.4534531,-31.1322736,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225c7d18e6bc5:0x6d4412816c9f77dc!8m2!3d39.453449!4d-31.1296987!16s%2Fg%2F11vjh4r6vb!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- SNACK & COFFEE ---
    {
      id: 'ponto-encontro',
      categoryId: 'snack',
      title: 'Ponto de Encontro',
      description: 'Um ponto de encontro central com um ambiente amigável, perfeito para um café rápido ou um lanche leve.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOCmhcP8zaqTYODWih1cB1XAQlWwFuifIVl1KWm=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Ótimo local para conviver com os habitantes locais.',
      mapUrl: 'https://www.google.com/maps/place/Ponto+de+Encontro/@39.4621574,-31.1300832,17z/data=!3m1!4b1!4m6!3m5!1s0xb32258ba0ce8b2b:0xa8aff4041cb76b5b!8m2!3d39.4621574!4d-31.1300832!16s%2Fg%2F11yprcmdqc!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'lucinos-bar',
      categoryId: 'snack',
      title: 'Lucino\'s Bar',
      description: 'Um bar local tradicional que oferece uma vasta seleção de bebidas e um ambiente acolhedor.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPKpWtxFzS3GqNAbOO3Xbj5CVyJ_wq7WELTXgL-=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Experimente a cerveja local "Especial".',
      mapUrl: 'https://www.google.com/maps/place/Lucino\'s+Bar/@39.4522629,-31.1291765,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242b8c18d641:0x43940dd0478bfe1!8m2!3d39.4522629!4d-31.1291765!16s%2Fg%2F11g68zj0pb!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'orquidea',
      categoryId: 'snack',
      title: 'Lanchonete "Orquídea"',
      description: 'Conhecida pelos seus deliciosos lanches caseiros e refeições rápidas no coração de Santa Cruz.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz9nnJrFP9g-MDlxhSZ0NqBEmDgZx8aDIm_oyiMLQJ0reaCeQkekSuQltJuJmHYeWa7gWl59sL3xyJKd7f6QMwt2_i0A8mKd1aKImUj5Xn5S28HQpoKLCHAYCfn4Rbi0Sw5xLEe=w507-h240-k-no',
      distance: 'Santa Cruz',
      hostTip: 'As sandes são frescas e saborosas.',
      mapUrl: 'https://www.google.com/maps/place/Lanchonete+%22Orqu%C3%ADdea%22/@39.453287,-31.1273193,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242c9d39639b:0xf3ae6eececbe5cb9!8m2!3d39.453287!4d-31.1273193!16s%2Fg%2F11dyzdmcdw!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'wrb',
      categoryId: 'snack',
      title: 'Snackbar WRB',
      description: 'Um local popular para lanches substanciais e serviço amigável.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqthadl5Xho3HAYTKO6tQ1DBDfhAtoHvbaxBjaYCcF-oCExtda7Cd68t6gu992tOK-szUlVoTqWbxfgLbxWSC1MsWH69jT-7IDviByzrdRAA3INq2wDXhcoeK3naoPquULXYGab=w408-h723-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Boa relação qualidade/preço.',
      mapUrl: 'https://www.google.com/maps/place/Snackbar+WRB/@39.4528608,-31.1282593,17z/data=!3m1!4b1!4m6!3m5!1s0xb322556a06de387:0x11537ec174a1b45!8m2!3d39.4528608!4d-31.1282593!16s%2Fg%2F11s2k8d722!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'fora-d-horas',
      categoryId: 'snack',
      title: 'Snack Bar - Fora d\'Horas',
      description: 'Como o nome indica, um ótimo lugar para lanches e bebidas tarde da noite.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwl0_AcieG1T42bpXZCGI2fOJB6pDbzxxML6AchKHtR8wqIFMLjm5QDnbc9qcS4uuqKn5kRwYcgKFckuL9ujObv9LScyvPa7HgrHkvm4af-cWNhDs8IrEaYRuy0QuYNZShnracDGA=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Perfeito para bebidas depois do jantar.',
      mapUrl: 'https://www.google.com/maps/place/Snack+Bar+-+Fora+d\'Horas/@39.4624022,-31.1300228,17z/data=!3m1!4b1!4m6!3m5!1s0xb32255ce04fdaf7:0x286cbfdce4bb92db!8m2!3d39.4624022!4d-31.1300228!16s%2Fg%2F11hgk1s9rm!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'happy-hour',
      categoryId: 'snack',
      title: 'Happy Hour - Lounge Bar',
      description: 'Um lounge bar moderno que oferece cocktails, música e um ambiente descontraído.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzsj0rJNoH-8wm8fZnIRh-H6rJ9ag_f-xW1teu9XIGpIiz8a_tW-QMiz8jFDKNdEFy-Id56cu_2bj18YsNpsyWzv5QKfYBMj4-p_A2iBT3-eqYqhaKyY-1CwWzv4xPpFu9UzrfNZQ3-_eU5=w513-h240-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Verifique a programação para música ao vivo ou DJ sets.',
      mapUrl: 'https://www.google.com/maps/place/Happy+Hour+-+Lounge+Bar+%26+Restaurante/@39.4625801,-31.1297493,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225003ed89049:0xbdafb1df053f6cc!8m2!3d39.4625801!4d-31.1297493!16s%2Fg%2F11x0qh2zt_!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'extintor',
      categoryId: 'snack',
      title: 'O Extintor Sports Bar',
      description: 'O lugar para os fãs de desporto. Veja o jogo com uma cerveja gelada e petiscos.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOypcX5olaDmPCQksGZLu6vaheMj_ZnZRYFIW0-=w408-h724-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Fica animado durante grandes jogos de futebol.',
      mapUrl: 'https://www.google.com/maps/place/O+Extintor+Sports+Bar/@39.4554583,-31.1329593,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225801a0174d7:0x48a3a52413c124fb!8m2!3d39.4554583!4d-31.1329593!16s%2Fg%2F11x5tdjz3t!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- EAT ---
    {
      id: 'macau',
      categoryId: 'eat',
      title: 'Restaurante Macau',
      description: 'Restaurante chinês local com pratos saborosos e serviço amigável.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSynwjXVCmcpe_cAKDCqP-tWDXEhqbJXyYt-WnterK6HBPfhlEkt43-7oXA3NBqQqcPWOMIKgXU_RHt-7Gh9Jmkbg5GHQsuPWKmIMVt8SYotnmydxp_GovDPCsN7PzafDMf13rzM=w408-h306-k-no',
      distance: '5 min a pé',
      hostTip: 'Muito fiável para uma refeição asiática reconfortante.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+%22Macau%22/@39.4598308,-31.1305423,17z/data=!3m1!5s0xb322433d0a2a223:0x3509d64fb07c990a!4m15!1m8!3m7!1s0xb322433d9e13457:0xa0899ceca083197!2sRestaurante+%22Macau%22!8m2!3d39.4598308!4d-31.1305423!10e1!16s%2Fg%2F11dxkdgd07!3m5!1s0xb322433d9e13457:0xa0899ceca083197!8m2!3d39.4598308!4d-31.1305423!16s%2Fg%2F11dxkdgd07'
    },
    {
      id: 'cinco-sentidos',
      categoryId: 'eat',
      title: 'Restaurante Bar "5 Sentidos"',
      description: 'Espaço contemporâneo com peixe, carne, opções vegetarianas e vinho.',
      imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
      distance: '6 min a pé',
      hostTip: 'Uma das melhores experiências gastronómicas da ilha.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+Bar+%225+Sentidos%22/@39.461433,-31.1281205,17z/data=!4m15!1m8!3m7!1s0xb32243379c67cb3:0x5f8524f7a76c0c9f!2sRestaurante+Bar+%225+Sentidos%22!8m2!3d39.4618655!4d-31.1278443!10e9!16s%2Fg%2F11c5stp0bs!3m5!1s0xb32243379c67cb3:0x5f8524f7a76c0c9f!8m2!3d39.4618655!4d-31.1278443!16s%2Fg%2F11c5stp0bs!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'casa-do-rei',
      categoryId: 'eat',
      title: 'Restaurante Casa do Rei',
      description: 'Restaurante sustentável com opções de peixe, carne e vegetarianas.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMf-78FHYed8UTo6Pi4gB4EShMBkWLw7ABY1euG=w408-h307-k-no',
      distance: '20 min de carro',
      hostTip: 'Reserva essencial. Ingredientes frescos da própria quinta.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+Casa+do+Rei/@39.3843407,-31.1862295,17z/data=!3m1!4b1!4m6!3m5!1s0xb3220b5816a6203:0x41da81f9003971d9!8m2!3d39.3843407!4d-31.1862295!16s%2Fg%2F11td7jz_5!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'por-do-sol',
      categoryId: 'eat',
      title: 'Restaurante Pôr-do-Sol',
      description: 'Vista lendária do pôr do sol. Mais pedidos: Lapas Grelhadas, Tarte de Algas e Morcela com Inhame e Batata Doce.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqnUFamCxQ2TsyefkQ6BRE0sz8F_CmQSkz6OILZ_XfNMhhsHdPY7pyfL7m2jctJdjzcjiowulGrrM5BpGccs7lSrTgvXhj6dHmzcm8jd8wrZsA7CoGWuk3raFfrXCJO6JzCNgXvPc8PZ-U=w408-h544-k-no',
      distance: '25 min de carro',
      hostTip: 'Prove iguarias locais enquanto vê o sol desaparecer.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+P%C3%B4r-do-Sol/@39.4361324,-31.2564499,17z/data=!3m1!4b1!4m6!3m5!1s0xb3222712982052d:0x8e58c0df41798f16!8m2!3d39.4361324!4d-31.2564499!16s%2Fg%2F11c2q30fx9!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'aldeia-cuada',
      categoryId: 'eat',
      title: 'Restaurante "Aldeia da Cuada"',
      description: 'Excelente gastronomia regional numa aldeia histórica. Pratos famosos: "Torrada da Terra" (pão com queijo/linguiça), Costeletas Caramelizadas e Peixe Pelágico fresco.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNepTB1XO-xZ5p0frydT_vaTJlnyH6M5QlYsvgl=w408-h272-k-no',
      distance: '25 min de carro',
      hostTip: 'Atmosfera incrivelmente pacífica e autêntica. Experimente também a Tarte de Algas.',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+%22Aldeia+da+Cuada%22/@39.4403678,-31.2559289,17z/data=!3m1!4b1!4m9!3m8!1s0xb32227a311466d7:0x3bc4f4de51f18508!5m2!4m1!1i2!8m2!3d39.4403678!4d-31.2559289!16s%2Fg%2F11dz1cdpts!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'rainha-do-bife',
      categoryId: 'eat',
      title: 'Restaurante "Rainha do Bife"',
      description: 'A escolha absoluta para bife regional e especialidades locais. Pratos populares: Bife Regional, Lapas no Forno/Grelhadas, Queijo Fresco, Polvo ou Atum.',
      imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800',
      distance: '8 min a pé',
      hostTip: 'O "Bife da Rainha" é o prato de assinatura. Comece com Queijo Fresco com molho de pimenta local.',
      mapUrl: 'https://www.google.com/maps?q=Restaurante+%22Rainha+do+Bife%22'
    },
    {
      id: 'o-baleia',
      categoryId: 'eat',
      title: 'Restaurante O Baleia',
      description: 'Local autêntico, lendário pelo seu peixe grelhado super fresco e ambiente típico.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyuq1gW44N03XmTDxCn0PuqfQhrwQmnuux4tVbGiRgY2CCOQltqdgAH6C3nE2CYCWkvF3a56vIFKWNNuymMPfyohfZqTYsdavyXUXDeb_X3zYGBtWI4QyO5Lo-CDOCiI1xqDyEnUrtsG6la=w408-h306-k-no',
      distance: '15 min a pé',
      hostTip: 'Chegue cedo, é extremamente popular pela frescura diária do peixe.',
      mapUrl: 'https://www.google.com/maps/place/O+Baleia/@39.4623999,-31.1300268,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225004268580b:0x951e1c5037029703!8m2!3d39.4623999!4d-31.1300268!16s%2Fg%2F11x0hf529b!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'esplanada-mar-terra',
      categoryId: 'eat',
      title: 'A Esplanada - Mar & Terra',
      description: 'Refeições à beira-mar na Fajã Grande com uma excelente mistura de marisco.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOntPbxMsP68lqZf6vPrppgBymwG_f-kobA6v9t=w408-h873-k-no',
      distance: '25 min de carro',
      hostTip: 'A esplanada é fantástica para um almoço pós-caminhada.',
      mapUrl: 'https://www.google.com/maps?q=Restaurante+%22A+Esplanada%22+-+Mar+%26+Terra'
    },
    {
      id: 'o-arruda',
      categoryId: 'eat',
      title: 'Restaurante O Arruda',
      description: 'Um marco nas Lajes das Flores para receitas tradicionais açorianas.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMAoBX4IZFAPnx_VJkmbhIaqoR1Tg02hrgvCWCJ=w408-h306-k-no',
      distance: '18 min de carro',
      hostTip: 'Favorito para especialidades locais de peixe.',
      mapUrl: 'https://www.google.com/maps?q=O+Arruda,+Lajes+das+Flores'
    },
    {
      id: 'cana-roca',
      categoryId: 'eat',
      title: 'Restaurante Cana Roca',
      description: 'Famoso pelas pizzas de massa fina e comida tradicional portuguesa.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyPpeaSfi_rEYGNWvf4_UAbln-Qe7jBYTU_ZEboL64vK4Gb6dZv9MerZJ0JVvbZV2mnp4qEXUg6gMxGCkE88FmD7Fy7SnY7mgPumbnSR2Tl4ccp2v_XHB7Vu_Sc7_cipwoo8cG2dQ=w408-h306-k-no',
      distance: '10 min de carro',
      hostTip: 'As pizzas são as favoritas locais na Fazenda.',
      mapUrl: 'https://www.google.com/maps?q=Cana+Roca,+Fazenda'
    },
    {
      id: 'flor-de-lotus',
      categoryId: 'eat',
      title: 'Restaurante Flor de Lótus',
      description: 'Opções internacionais e saudáveis em Ponta Delgada.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipP1YWbdVXBa430uGHUuZJesheVPTHnJbwIgBi3B=w534-h240-k-no',
      distance: '25 min de carro',
      hostTip: 'Ótimo para fazer uma pausa de carne e peixe.',
      mapUrl: 'https://www.google.com/maps/place/FLOR+DE+L%C3%93TUS/@39.5206801,-31.2111708,17z/data=!3m1!4b1!4m6!3m5!1s0xb323df5e4d9d80b:0xf4a9ba59b4e2d0fd!8m2!3d39.520676!4d-31.2085959!16s%2Fg%2F11hds05b5x?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'o-mergulhador',
      categoryId: 'eat',
      title: '"O Mergulhador"',
      description: 'Um local descontraído situado mesmo ao lado da zona balnear.',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNCA-LDWafT-5bzyA6rBvdXZzFpgaKYCwiWxuQX=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Perfeito para uma bebida ou lanche depois de um mergulho.',
      mapUrl: 'https://www.google.com/maps/place/%22O+Mergulhador%22/@39.4517644,-31.1264633,17z/data=!3m1!4b1!4m6!3m5!1s0xb32253d18f73407:0xf8dd153adca24765!8m2!3d39.4517644!4d-31.1264633!16s%2Fg%2F11sscpds1x!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'forno-transmontano',
      categoryId: 'eat',
      title: 'Restaurante "O Forno Transmontano"',
      description: 'Restaurante tradicional que oferece refeições fartas e especialidades em forno de lenha.',
      imageUrl: '/images/restaurant_forno.png',
      distance: 'Lajes',
      hostTip: 'Experimente as carnes assadas!',
      mapUrl: 'https://www.google.com/maps/place/Restaurante+%22O+Forno+Transmontano%22/@39.3883899,-31.1925259,11.8z/data=!4m6!3m5!1s0xb322733a0ec1383:0x396e3f5400186aea!8m2!3d39.3861656!4d-31.1681189!16s%2Fg%2F11g9g01_47!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },

    // --- BEACH (SWIMMING) ---
    {
      id: 'poca-salemas',
      categoryId: 'beach',
      title: 'Poça das Salemas',
      description: 'Pequena piscina natural escondida com águas cristalinas, acessível na maré baixa.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGkgpQq12i5Qkc0R95gbCsDFg0DeS4LtdSjIMWs5OQzGl_UAj1Ero4EdGk0ay8P4t6NKV1MkTAlIi_Y_MBukY5kpuaGhEDrLsxFs5U-lyKGW5TcMb63hONd4LCq1fA3Wdil9mi=w408-h544-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Melhor visitar durante a maré baixa para ver as cores claras da piscina.',
      mapUrl: 'https://www.google.com/maps?q=Po%C3%A7a+das+Salemas,+9970-320+Santa+Cruz+das+Flores,+Portugal&ftid=0xb32243362d887f1:0x7844ff3bc034a7b5&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=ba75130f-bd06-4f99-9907-a836257dc3ea&g_st=ipc'
    },
    {
      id: 'poca-mulheres',
      categoryId: 'beach',
      title: 'Piscinas Naturais da Poça das Mulheres',
      description: 'Piscinas vulcânicas famosas em Santa Cruz, com plataformas de betão e fácil acesso.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzC5Vr99RgHPpsXU2An8wtxv78XHA2y7QmmlFx3i1GYBw9stM0ooLzioSSDeufE8uPNus3oqVNJPJGmU38hIlKLgYfYwmL_laeEC76WmLdTlz4x0uP-JSZnwZ-7FVKBqBiKHu97mA=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Um local clássico para os habitantes locais com áreas de natação seguras.',
      mapUrl: 'https://www.google.com/maps?q=Natural+Swimming+Pools+of+Po%C3%A7a+das+Mulheres,+R.+do+Boqueir%C3%A3o+9970,+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3225dfc95e7599:0x7f2c80941fb9e559&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=e2833fbe-abc2-4fff-9d76-2416549d9485&g_st=ipc'
    },
    {
      id: 'zona-boqueirao',
      categoryId: 'beach',
      title: 'Zona Balnear do Boqueirão',
      description: 'Zona balnear no antigo porto baleeiro, oferecendo natação em mar profundo.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzE-kXADnfXv2AcE-ismZmAG-pC2eV5I4gM6e558e5RWM-0tgClr-u7KSPxgDEOK69KbCkPfV8PZHh0pHVy5R7yQSjMRxFkcBOHmZd_NV0ROkKL4jdnxTvKgadcFCyTdlTB=w408-h305-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Ótimo para saltar para o oceano azul profundo.',
      mapUrl: 'https://www.google.com/maps?q=Zona+Balnear+do+Boqueir%C3%A3o,+Boqueir%C3%A3o,+Ilha+das,+Santa+Cruz+das+Flores,+Portugal&ftid=0xb3224345d22c895:0x7b0802fd60c03744&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=51b63987-3d00-47fa-806b-4ead37bd2a29&g_st=ipc'
    },
    {
      id: 'calheta-beach',
      categoryId: 'beach',
      title: 'Praia da Calheta (Lajes)',
      description: 'Uma zona portuária calma nas Lajes usada para natação, geralmente protegida das ondas.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz2ZQRfPcF2FxIV9aOOc8Zt2XiDYopOfu1uwIwYg_cZfG3NHF-XwJ6i-8YsgEiXrgkzTS9rfdnwlUPXPjF8nGwGB440IBcAARoAv212oGNIp-eHMOWG0SWDLd5HQFfC7Sa-SQsMJg=w408-h306-k-no',
      distance: 'Lajes',
      hostTip: 'Bom local se o mar estiver agitado noutros lugares.',
      mapUrl: 'https://www.google.com/maps?q=Calheta+Beach,+Lajes+das+Flores,+Portugal&ftid=0xb3227355343ea83:0x605f67963dd8dcc5&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=3e2db9cf-8aea-4c36-813e-0ea2cf3176d8&g_st=ipc'
    },
    {
      id: 'zona-faja-grande',
      categoryId: 'beach',
      title: 'Zona Balnear da Fajã Grande',
      description: 'Zona balnear popular com acesso ao oceano e vistas deslumbrantes das cascatas e falésias.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw3XcnsiRDVfbuZOGJnyHBNCgZO2_YD5dE8CFqsgHY1CadI2hcjwCY3-dhh_CsC30MUMa7IXeKSgVAUG8mWaN5CHFngHY3ejebfV8TfNJz33dFW40xrmB7NQ7Z0rzhpAmNow3HFbw5f97E=w408-h306-k-no',
      distance: 'Fajã Grande',
      hostTip: 'O pôr do sol aqui é espetacular.',
      mapUrl: 'https://www.google.com/maps?q=Zona+Balnear+da+Faj%C3%A3+Grande,+Ilha+das,+Faj%C3%A3+Grande,+Portugal&ftid=0xb32229df72552db:0x97628170b7feba2d&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=60da92c2-a7db-4240-be26-4b2030030197&g_st=ipc'
    },
    {
      id: 'cascata-bacalhau',
      categoryId: 'beach',
      title: 'Cascata do Poço do Bacalhau',
      description: 'Uma experiência única de nadar na base de uma cascata de 90m.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz_tZsJw8b8pQrkZgVRmGwL2WRotEt_h-foNjYfG8CpETHcq8nuMPhNeFWZVZ_LDJjpbzoOFTGFuo-ZhPhWDu1hNzugn4IEJnP_H_E4R2OqgFZf8bb3neKhie9MZuqG1iqlOw0=w408-h408-k-no',
      distance: 'Fajã Grande',
      hostTip: 'A água é fresca e revigorante!',
      mapUrl: 'https://www.google.com/maps?q=FP5R+7M+Cascata+do+Po%C3%A7o+do+Bacalhau,+In%C3%ADcio+do+percurso+Po%C3%A7o+do+Bacalhau,+9960-030+Faj%C3%A3+Grande,+Portugal&ftid=0xb32229b14cf36eb:0x530161c4276f70bb&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=4f40869c-ac79-4922-9cc3-6d99ac9a0c07&g_st=ipc'
    },
    {
      id: 'poco-redondo',
      categoryId: 'beach',
      title: 'Poço Redondo',
      description: 'Um local natural ribeirinho escondido na Fazenda, rodeado por vegetação luxuriante.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz11diJWEF3JoosXlVf9BewmelUkZAxDGlPMHnZvC8esGzxmS07y3WvAlbH4ZeSNFb3yjF3jeNDo79lrdSVJHW1jW6QVT-7x7tC4GNyAr6xUNwrfo8m9GUc48aj-M85prDjZk0jrZYHi8nv=w519-h240-k-no',
      distance: 'Fazenda',
      hostTip: 'Um local tranquilo longe das multidões.',
      mapUrl: 'https://www.google.com/maps?q=9RVH+HX+Po%C3%A7o+Redondo,+Fazenda,+Portugal&ftid=0xb32270038ba0d1b:0x9c5c4372ea725cf3&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ0OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkdC&skid=8fe113ad-99fb-44a6-8c30-d956fa826804&g_st=ipc'
    },
    {
      id: 'porto-velho',
      categoryId: 'beach',
      title: 'Porto Velho',
      description: 'Zona portuária histórica no centro de Santa Cruz, popular para mergulho e natação.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5l120MYtLh952mKl0MJrGGi9MbnzGZXI3njIKyy4Ir2OonS6IutT6dmiWTsfOIm9WsYb2iMSw332yvua_Wl723B-3TcoaPOwwYILtBgeiRnvdpMl9Jq75m6n2z8tlIpN_F41r=w408-h306-k-no',
      distance: 'Santa Cruz',
      hostTip: 'Local conveniente se estiver alojado no centro da vila.',
      mapUrl: 'https://www.google.com/maps?q=Porto+Velho,+9970-320+Santa+Cruz+das+Flores,+Portugal&ftid=0xb32242cb37d37af:0x9a8496584e0bf24&entry=gps&shh=CAE&lucs=,94297695,94275415,94284499,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAINeCAypRLDk0Mjk3Njk1LDk0Mjc1NDE1LDk0Mjg0NDk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJHQg%3D%3D&skid=8ccdee60-6f5f-41db-9e72-b8bbfd5382ce&g_st=ipc'
    },

    // --- PARK (KIDS PARKS) ---
    {
      id: 'parque-luis-paulo-camacho',
      categoryId: 'park',
      title: 'Parque Florestal Luís Paulo Camacho',
      description: 'Uma reserva florestal fantástica com animais (veados, patos), áreas de piquenique e um viveiro de trutas.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx1OTOwbIWBsape-b9InWqQdL-npQj5F9CqdGDHsH7o2bdFJ4sJr9rmvmO5F_xfWS9TdbIUYgNACKbiYNY3ygTjtg-DaussIBY7SnOl7GgH6Ze7KqjHJjZuocytpkQiHSMMRNnHARwS7Jwq=w426-h240-k-no',
      distance: '5 min de carro / 25 min a pé',
      hostTip: 'As crianças adoram alimentar os patos e ver os veados.',
      mapUrl: 'https://www.google.com/maps/place/Parque+da+Reserva+Florestal+de+Recreio+%22Lu%C3%ADs+Paulo+Camacho%22/@39.4627577,-31.1574254,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225005cab68f3:0xbb0c6c5794ab4040!8m2!3d39.4627577!4d-31.1574254!16s%2Fg%2F11xvs74y2k!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'parque-altio',
      categoryId: 'park',
      title: 'Parque Infantil do Altio',
      description: 'Localizado ao lado do parque de campismo, oferecendo amplo espaço verde e equipamentos de lazer.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzOGd2KGzz_0dh0nGzeR1IpwDeVUYWWe6uaRyxRF8XUzGd08YUbWFmokg-I5KlHp3i9bTMoXeY04OV1E137Iy8jP8q1w2PdYXwCJeYr1Ic0dvjYl3Kf4qT8O8oJ8RFsGpRJefh0AhxY_TE=w426-h240-k-no',
      distance: '10 min a pé',
      hostTip: 'Ótimo para um piquenique ou brincar num espaço verde tranquilo.',
      mapUrl: 'https://www.google.com/maps/place/Parque+Infantil+do+Altio+(Parque+de+Campismo+e+lazer)/@39.4580202,-31.1268106,17z/data=!3m1!4b1!4m6!3m5!1s0xb3225006fc83d07:0x5e5f2bd02b05bf2c!8m2!3d39.4580202!4d-31.1268106!16s%2Fg%2F11vpzgky2y!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'parque-teofilo',
      categoryId: 'park',
      title: 'Parque Infantil Teófilo Ferreira',
      description: 'Um parque central perfeito para uma paragem rápida enquanto explora a vila.',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxsJ7-Yt8ZtZEidGkjnhqjAiTRsN5YBt-ix7lphhZquWXF4OY2CTpQJbJFhhwKuXY2Lw8gBjmcOBi-BMG30Sg1vP35UsUQ_vHOzsXDjILqCZ_hDa03xsx-4eMSp6TuoAPM-wjv_=w426-h240-k-no',
      distance: 'Centro',
      hostTip: 'Convenientemente localizado perto de cafés e da beira-mar.',
      mapUrl: 'https://www.google.com/maps/place/Parque+Infantil+Te%C3%B3filo+Ferreira/@39.4513482,-31.1281262,17z/data=!3m1!4b1!4m6!3m5!1s0xb32242ba7706485:0x7bf09d6e0f81ad4d!8m2!3d39.4513482!4d-31.1281262!16s%2Fg%2F11dzdbg588!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    }
  ]
};