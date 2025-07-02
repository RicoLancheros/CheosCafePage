'use client'

import { Navbar } from '@/components/navbar'
import { ImageCarousel } from '@/components/image-carousel'
import { ProductSection } from '@/components/product-section'
import { StoreLocations } from '@/components/store-locations'
import { Footer } from '@/components/footer'
import { mockProducts } from '@/lib/mock-data'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  // Filter products by category
  const cafeProducts = mockProducts.filter(product => product.category === 'cafes')
  const complementoProducts = mockProducts.filter(product => product.category === 'complementos')
  const aromaticoProducts = mockProducts.filter(product => product.category === 'aromaticas')

  return (
    <div className="min-h-screen bg-coffee-cream">
      <Navbar />
      
      <main>
        {/* Hero Carousel */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ImageCarousel />
          </div>
        </section>

        {/* Products Sections */}
        <div id="cafes">
          <ProductSection 
            title="Nuestros Cafés" 
            products={cafeProducts} 
            category="cafes"
          />
        </div>

        <div id="complementos">
          <ProductSection 
            title="Complementos" 
            products={complementoProducts} 
            category="complementos"
          />
        </div>

        <div id="aromaticas">
          <ProductSection 
            title="Aromáticas" 
            products={aromaticoProducts} 
            category="aromaticas"
          />
        </div>

        {/* Store Locations */}
        <div id="tiendas">
          <StoreLocations />
        </div>
      </main>

      <Footer />
      
      {/* Toast notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#3C2415',
            color: '#F5F5DC',
          },
        }}
      />
    </div>
  )
} 