'use client'

import { useState } from 'react'
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthStore } from '@/stores/auth-store'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: 'login' | 'register'
}

export function AuthModal({ isOpen, onClose, defaultTab = 'login' }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(defaultTab)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  })
  
  const { login } = useAuthStore()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simular API call - aquí conectarás con tu backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock login - reemplazar con lógica real
      login({
        id: '1',
        name: 'Usuario Demo',
        email: loginForm.email,
        role: loginForm.email === 'admin@cheoscafe.com' ? 'admin' : 'customer'
      })
      
      onClose()
    } catch (error) {
      console.error('Error en login:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (registerForm.password !== registerForm.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    
    setIsLoading(true)
    
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock register
      login({
        id: '2',
        name: registerForm.name,
        email: registerForm.email,
        role: 'customer'
      })
      
      onClose()
    } catch (error) {
      console.error('Error en registro:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-coffee-cream rounded-2xl shadow-2xl border border-coffee-light overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-coffee-dark p-6 text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-coffee-cream hover:text-coffee-gold transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-coffee-cream font-playfair">
              Cheos Café
            </h2>
            <p className="text-coffee-light mt-1">
              {activeTab === 'login' ? 'Bienvenido de vuelta' : 'Únete a nuestra comunidad'}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-coffee-light">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === 'login'
                  ? 'text-coffee-dark border-b-2 border-coffee-gold bg-coffee-light/20'
                  : 'text-coffee-medium hover:text-coffee-dark'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === 'register'
                  ? 'text-coffee-dark border-b-2 border-coffee-gold bg-coffee-light/20'
                  : 'text-coffee-medium hover:text-coffee-dark'
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-coffee-light rounded-lg focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold bg-white"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 border border-coffee-light rounded-lg focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold bg-white"
                      placeholder="Tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-coffee-medium hover:text-coffee-dark"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-coffee-dark hover:bg-coffee-medium text-coffee-cream py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-coffee-light rounded-lg focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold bg-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-coffee-light rounded-lg focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold bg-white"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 border border-coffee-light rounded-lg focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold bg-white"
                      placeholder="Mínimo 6 caracteres"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-coffee-medium hover:text-coffee-dark"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Confirmar contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-coffee-light rounded-lg focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold bg-white"
                      placeholder="Repite tu contraseña"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-coffee-dark hover:bg-coffee-medium text-coffee-cream py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
                </button>
              </form>
            )}

            {/* Info adicional */}
            <div className="mt-6 p-4 bg-coffee-light/20 rounded-lg">
              <p className="text-xs text-coffee-medium text-center">
                {activeTab === 'login' ? (
                  <>
                    ¿No tienes cuenta?{' '}
                    <button
                      onClick={() => setActiveTab('register')}
                      className="text-coffee-dark font-medium hover:text-coffee-gold"
                    >
                      Regístrate aquí
                    </button>
                  </>
                ) : (
                  <>
                    ¿Ya tienes cuenta?{' '}
                    <button
                      onClick={() => setActiveTab('login')}
                      className="text-coffee-dark font-medium hover:text-coffee-gold"
                    >
                      Inicia sesión
                    </button>
                  </>
                )}
              </p>
              <p className="text-xs text-coffee-medium text-center mt-2">
                💡 <strong>Tip:</strong> No necesitas una cuenta para comprar, ¡pero te dará ventajas especiales!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
} 