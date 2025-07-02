'use client'

import Image from 'next/image'
import { ShoppingCart, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { Product, useCartStore } from '@/stores/cart-store'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleAddToCart = () => {
    addItem(product)
    toast.success(`${product.name} agregado al carrito`, {
      duration: 2000,
      style: {
        background: '#3C2415',
        color: '#F5F5DC',
      },
    })
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold bg-red-600 px-3 py-1 rounded-md">
              Agotado
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-coffee-dark font-playfair line-clamp-2">
            {product.name}
          </h3>
          {product.weight && (
            <span className="text-sm text-coffee-medium bg-coffee-light px-2 py-1 rounded-md ml-2 flex-shrink-0">
              {product.weight}
            </span>
          )}
        </div>

        <p className="text-coffee-medium text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-coffee-dark">
              {formatPrice(product.price)}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              product.inStock
                ? 'bg-coffee-dark hover:bg-coffee-medium text-coffee-cream'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Agregar</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
} 