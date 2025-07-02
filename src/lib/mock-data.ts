import { Product } from '@/stores/cart-store'

export const carouselImages = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80',
    alt: 'Granos de café colombiano premium'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80',
    alt: 'Proceso de tostado artesanal'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Café recién preparado'
  }
]

export const mockProducts: Product[] = [
  // Cafés
  {
    id: '1',
    name: 'Café Supremo',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'cafes',
    description: 'Café colombiano de origen único, notas a chocolate y frutos secos',
    weight: '500g',
    inStock: true
  },
  {
    id: '2',
    name: 'Café Huila Premium',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'cafes',
    description: 'Café especial del Huila, perfil dulce y cítrico',
    weight: '500g',
    inStock: true
  },
  {
    id: '3',
    name: 'Café Nariño Especial',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'cafes',
    description: 'Café de altura de Nariño, notas florales y acidez balanceada',
    weight: '500g',
    inStock: true
  },
  {
    id: '4',
    name: 'Café Geisha',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'cafes',
    description: 'Variedad Geisha, café premium con notas exóticas',
    weight: '250g',
    inStock: true
  },
  {
    id: '5',
    name: 'Café Orgánico',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'cafes',
    description: 'Café 100% orgánico certificado, cultivo sostenible',
    weight: '500g',
    inStock: true
  },
  {
    id: '6',
    name: 'Café Descafeinado',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'cafes',
    description: 'Café descafeinado por proceso natural, mantiene el sabor original',
    weight: '500g',
    inStock: true
  },

  // Complementos
  {
    id: '7',
    name: 'Prensa Francesa',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'complementos',
    description: 'Prensa francesa de vidrio borosilicato, 350ml',
    inStock: true
  },
  {
    id: '8',
    name: 'Molinillo Manual',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1585709028540-fb0c8ab44711?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'complementos',
    description: 'Molinillo de café manual con fresas cerámicas',
    inStock: true
  },
  {
    id: '9',
    name: 'Taza Cerámica',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'complementos',
    description: 'Taza de cerámica artesanal con diseño colombiano',
    inStock: true
  },
  {
    id: '10',
    name: 'Filtros V60',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'complementos',
    description: 'Paquete de 100 filtros de papel para V60',
    inStock: true
  },
  {
    id: '11',
    name: 'Termómetro Digital',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'complementos',
    description: 'Termómetro digital para agua, esencial para café de especialidad',
    inStock: true
  },
  {
    id: '12',
    name: 'Balanza Digital',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'complementos',
    description: 'Balanza de precisión para café, 0.1g de precisión',
    inStock: true
  },

  // Aromáticas
  {
    id: '13',
    name: 'Té de Manzanilla',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1597318281699-44d91384e157?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'aromaticas',
    description: 'Té de manzanilla premium, relajante y digestivo',
    weight: '50g',
    inStock: true
  },
  {
    id: '14',
    name: 'Hierba Buena',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'aromaticas',
    description: 'Hierba buena deshidratada, perfecta para infusiones',
    weight: '40g',
    inStock: true
  },
  {
    id: '15',
    name: 'Canela en Rama',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1583925146914-e37a73068983?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'aromaticas',
    description: 'Canela en rama de Ceylon, aromatic y dulce',
    weight: '30g',
    inStock: true
  },
  {
    id: '16',
    name: 'Jengibre Seco',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'aromaticas',
    description: 'Jengibre deshidratado, propiedades digestivas y energizantes',
    weight: '35g',
    inStock: true
  },
  {
    id: '17',
    name: 'Eucalipto',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'aromaticas',
    description: 'Hojas de eucalipto secas, ideal para problemas respiratorios',
    weight: '25g',
    inStock: true
  },
  {
    id: '18',
    name: 'Mezcla Relajante',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1564890434406-d65b5c2b0fb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'aromaticas',
    description: 'Mezcla especial de hierbas relajantes: manzanilla, lavanda y melisa',
    weight: '60g',
    inStock: true
  }
]

export const storeLocations = [
  {
    id: '1',
    name: 'Cheos Café Centro',
    address: 'Carrera 13 #26-45, Bogotá',
    phone: '+57 (1) 234-5678',
    hours: 'Lun - Vie: 7:00 AM - 7:00 PM, Sáb - Dom: 8:00 AM - 6:00 PM',
    coordinates: { lat: 4.6097, lng: -74.0817 }
  },
  {
    id: '2',
    name: 'Cheos Café Zona Rosa',
    address: 'Calle 82 #12-35, Bogotá',
    phone: '+57 (1) 234-5679',
    hours: 'Lun - Dom: 8:00 AM - 9:00 PM',
    coordinates: { lat: 4.6765, lng: -74.0543 }
  },
  {
    id: '3',
    name: 'Cheos Café Medellín',
    address: 'Carrera 43A #18-95, Medellín',
    phone: '+57 (4) 234-5678',
    hours: 'Lun - Sáb: 7:30 AM - 8:00 PM, Dom: 9:00 AM - 6:00 PM',
    coordinates: { lat: 6.2442, lng: -75.5812 }
  }
] 