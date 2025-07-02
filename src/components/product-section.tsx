'use client'

import { Product } from '@/stores/cart-store'
import { ProductCard } from './product-card'
import { motion } from 'framer-motion'

interface ProductSectionProps {
  title: string
  products: Product[]
  category: 'cafes' | 'complementos' | 'aromaticas'
}

const categoryEmojis = {
  cafes: '☕',
  complementos: '🔧',
  aromaticas: '🌿'
}

const categoryDescriptions = {
  cafes: 'Nuestros mejores granos de café colombiano, cuidadosamente seleccionados y tostados',
  complementos: 'Todo lo que necesitas para preparar el café perfecto en casa',
  aromaticas: 'Hierbas y aromáticas naturales para complementar tu experiencia'
}

export function ProductSection({ title, products, category }: ProductSectionProps) {
  // Limit to maximum 6 products per category
  const displayProducts = products.slice(0, 6)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">{categoryEmojis[category]}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark font-playfair">
              {title}
            </h2>
          </div>
          <p className="text-coffee-medium text-lg max-w-2xl mx-auto">
            {categoryDescriptions[category]}
          </p>
          <div className="w-24 h-1 bg-coffee-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Show more products link if there are more than 6 */}
        {products.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button className="bg-transparent border-2 border-coffee-medium text-coffee-dark hover:bg-coffee-medium hover:text-coffee-cream px-6 py-3 rounded-md font-medium transition-colors duration-200">
              Ver más {title.toLowerCase()}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
} 