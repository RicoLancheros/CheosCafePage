# ☕ Cheos Café - E-commerce de Café Colombiano

E-commerce especializado en la venta de café en bolsa y productos relacionados. Una landing page completa para la empresa colombiana "Cheos Café" con estética de colores tipo café.

## 🚀 Tecnologías Utilizadas

### Core
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

### Base de Datos y Backend (Próximo)
- Supabase (PostgreSQL + Auth + Storage)
- Prisma (ORM)

### Estado y Formularios
- Zustand (estado global del carrito)
- React Hook Form (formularios)
- Zod (validación)

### UI y Componentes
- Radix UI (componentes headless)
- Lucide React (iconos)
- Framer Motion (animaciones)

### Pagos y Funcionalidades (Próximo)
- Stripe (pagos)
- React Hot Toast (notificaciones)
- date-fns (fechas)

### Deployment (Próximo)
- Vercel (hosting)
- Dominio custom

## 📋 Funcionalidades Implementadas

### Frontend Completo
- Navbar con logo, buscador, cambio de idioma y carrito
- Carrusel automático de imágenes
- Secciones de productos por categorías (máximo 6 por categoría):
  - Cafés
  - Complementos
  - Aromáticas
- Puntos físicos de venta
- Footer con información de contacto

### Sistema de Carrito
- Estado global con Zustand y persistencia local
- Carrito lateral deslizable con animaciones
- Agregar/quitar productos
- Actualizar cantidades
- Notificaciones toast
- Contador de items en navbar

### Diseño y UX
- Estética colombiana con colores café
- Paleta de colores temática (tonos café y crema)
- Animaciones suaves con Framer Motion
- Diseño completamente responsivo
- Tipografía elegante (Inter + Playfair Display)

## 🎨 Paleta de Colores

- Coffee Dark: #3C2415
- Coffee Medium: #8B4513
- Coffee Light: #D2B48C
- Coffee Cream: #F5F5DC
- Coffee Gold: #DAA520

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar producción
npm start
```

La aplicación estará disponible en http://localhost:3000

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── cart-sheet.tsx
│   ├── footer.tsx
│   ├── image-carousel.tsx
│   ├── navbar.tsx
│   ├── product-card.tsx
│   ├── product-section.tsx
│   └── store-locations.tsx
├── lib/
│   └── mock-data.ts
└── stores/
    └── cart-store.ts
```

## 🔄 Estado Actual

### ✅ Completado
- Configuración inicial del proyecto Next.js 14
- Implementación completa del frontend
- Sistema de carrito funcional
- Diseño responsivo y animaciones
- Datos de ejemplo (mock data)

### 🚧 Próximos Pasos
- Implementación del backend con Supabase
- Configuración de Prisma ORM
- Sistema de autenticación
- Integración con Stripe para pagos
- Gestión de imágenes con Supabase Storage
- Deployment en Vercel

## 👥 Equipo

Desarrollado para Cheos Café - Empresa colombiana especializada en café de especialidad.

## 📄 Licencia

Proyecto privado para Cheos Café. 