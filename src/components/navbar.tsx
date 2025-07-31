'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, ShoppingCart, Globe, User, LogOut, Settings, Shield, UserPlus, LogIn, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/stores/cart-store'
import { useUser, useAuthStore } from '@/stores/auth-store'
import { CartSheet } from './cart-sheet'
import { AuthModal } from './auth-modal'

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentLanguage, setCurrentLanguage] = useState('es')
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState<'login' | 'register'>('login')
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  
  const { toggleCart, getTotalItems } = useCartStore()
  const { logout } = useAuthStore()
  const { user, isAuthenticated, isAdmin, name } = useUser()
  const totalItems = getTotalItems()
  
  const userMenuRef = useRef<HTMLDivElement>(null)

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const openAuthModal = (tab: 'login' | 'register') => {
    setAuthModalTab(tab)
    setIsAuthModalOpen(true)
  }

  const handleLogout = () => {
    logout()
    setIsUserMenuOpen(false)
  }

  // Cerrar menú de usuario al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isUserMenuOpen])

  // Obtener iniciales del nombre para el avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
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
              <span className="text-sm font-medium hidden sm:inline">{currentLanguage.toUpperCase()}</span>
            </button>

            {/* Authentication Section */}
            {isAuthenticated && user ? (
              /* Usuario logueado - Mostrar dropdown */
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-coffee-cream hover:text-coffee-gold transition-colors duration-200 group"
                >
                  {/* Avatar */}
                  <div className="w-8 h-8 bg-coffee-gold text-coffee-dark rounded-full flex items-center justify-center text-sm font-semibold">
                    {user.avatar ? (
                      <img src={user.avatar} alt={name} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      getInitials(name || 'U')
                    )}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">{name}</span>
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-coffee-cream rounded-lg shadow-xl border border-coffee-light py-2 z-50"
                    >
                      <div className="px-4 py-2 border-b border-coffee-light">
                        <p className="text-sm font-medium text-coffee-dark">{name}</p>
                        <p className="text-xs text-coffee-medium">{user.email}</p>
                        {isAdmin && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-coffee-gold text-coffee-dark mt-1">
                            <Shield className="h-3 w-3 mr-1" />
                            Administrador
                          </span>
                        )}
                      </div>

                      <div className="py-1">
                        <button className="w-full text-left px-4 py-2 text-sm text-coffee-dark hover:bg-coffee-light/20 flex items-center">
                          <User className="h-4 w-4 mr-3 text-coffee-medium" />
                          Mi Perfil
                        </button>
                        
                        <button className="w-full text-left px-4 py-2 text-sm text-coffee-dark hover:bg-coffee-light/20 flex items-center">
                          <Settings className="h-4 w-4 mr-3 text-coffee-medium" />
                          Configuración
                        </button>

                        {isAdmin && (
                          <button className="w-full text-left px-4 py-2 text-sm text-coffee-dark hover:bg-coffee-light/20 flex items-center">
                            <Shield className="h-4 w-4 mr-3 text-coffee-medium" />
                            Panel Admin
                          </button>
                        )}
                      </div>

                      <div className="border-t border-coffee-light pt-1">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Cerrar Sesión
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Usuario no logueado - Mostrar botones de auth */
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openAuthModal('login')}
                  className="hidden sm:flex items-center space-x-1 text-coffee-cream hover:text-coffee-gold transition-colors duration-200"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="text-sm font-medium">Ingresar</span>
                </button>

                <button
                  onClick={() => openAuthModal('register')}
                  className="bg-coffee-gold hover:bg-coffee-gold/90 text-coffee-dark px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <UserPlus className="h-4 w-4" />
                  <span className="hidden sm:inline">Registro</span>
                </button>

                {/* Mobile auth button */}
                <button
                  onClick={() => openAuthModal('login')}
                  className="sm:hidden text-coffee-cream hover:text-coffee-gold transition-colors duration-200"
                >
                  <User className="h-5 w-5" />
                </button>
              </div>
            )}

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
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
    </nav>
  )
} 