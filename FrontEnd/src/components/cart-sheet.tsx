'use client'

import { useCartStore } from '@/stores/cart-store'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function CartSheet() {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    updateQuantity, 
    removeItem, 
    getTotalPrice,
    getTotalItems 
  } = useCartStore()

  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleCart}
          />
          
          {/* Cart Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-coffee-cream shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-coffee-light">
              <h2 className="text-xl font-semibold text-coffee-dark font-playfair">
                Tu Carrito ({totalItems})
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 rounded-md hover:bg-coffee-light transition-colors"
              >
                <X className="h-5 w-5 text-coffee-dark" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-coffee-medium mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </div>
                  <p className="text-coffee-medium text-lg">Tu carrito está vacío</p>
                  <p className="text-coffee-light text-sm mt-2">
                    Agrega algunos productos para comenzar
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-coffee-dark truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-coffee-medium">
                          {formatPrice(item.product.price)}
                        </p>
                        {item.product.weight && (
                          <p className="text-xs text-coffee-light">
                            {item.product.weight}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-coffee-light transition-colors"
                        >
                          <Minus className="h-4 w-4 text-coffee-dark" />
                        </button>
                        <span className="text-sm font-medium text-coffee-dark w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-coffee-light transition-colors"
                        >
                          <Plus className="h-4 w-4 text-coffee-dark" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 rounded-md hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-coffee-light p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-coffee-dark">Total:</span>
                  <span className="text-xl font-bold text-coffee-dark">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <button className="w-full bg-coffee-dark hover:bg-coffee-medium text-coffee-cream py-3 px-4 rounded-md font-medium transition-colors duration-200">
                  Proceder al Checkout
                </button>
                
                <button 
                  onClick={toggleCart}
                  className="w-full bg-transparent border border-coffee-medium text-coffee-dark py-2 px-4 rounded-md font-medium hover:bg-coffee-light transition-colors duration-200"
                >
                  Continuar Comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 