'use client'

import { useState } from 'react'
import { Search, ShoppingCart, Globe } from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import { CartSheet } from './cart-sheet'

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentLanguage, setCurrentLanguage] = useState('es')
  const { toggleCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <nav className="bg-coffee-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-coffee-cream text-2xl font-bold font-playfair">
                Cheos Café
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-coffee-light" />
              </div>
              <input
                type="text"
                placeholder={currentLanguage === 'es' ? 'Buscar productos...' : 'Search products...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-coffee-medium rounded-md leading-5 bg-coffee-cream text-coffee-dark placeholder-coffee-medium focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold sm:text-sm"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-coffee-cream hover:text-coffee-gold transition-colors duration-200"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative flex items-center space-x-1 text-coffee-cream hover:text-coffee-gold transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-coffee-gold text-coffee-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-coffee-light" />
          </div>
          <input
            type="text"
            placeholder={currentLanguage === 'es' ? 'Buscar productos...' : 'Search products...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-coffee-medium rounded-md leading-5 bg-coffee-cream text-coffee-dark placeholder-coffee-medium focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold sm:text-sm"
          />
        </div>
      </div>

      <CartSheet />
    </nav>
  )
} 