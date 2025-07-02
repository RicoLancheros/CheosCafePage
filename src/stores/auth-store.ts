import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
  role: 'customer' | 'admin'
  avatar?: string
  phone?: string
  address?: {
    street: string
    city: string
    department: string
    zipCode: string
  }
  preferences?: {
    notifications: boolean
    newsletter: boolean
    language: 'es' | 'en'
  }
  createdAt?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  
  // Actions
  login: (user: User) => void
  logout: () => void
  updateUser: (updates: Partial<User>) => void
  setLoading: (loading: boolean) => void
  
  // Helpers
  isAdmin: () => boolean
  isCustomer: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      
      login: (user: User) => {
        // Agregar defaults para nuevos usuarios
        const userWithDefaults: User = {
          ...user,
          preferences: {
            notifications: true,
            newsletter: true,
            language: 'es',
            ...user.preferences
          },
          createdAt: user.createdAt || new Date().toISOString()
        }
        
        set({
          user: userWithDefaults,
          isAuthenticated: true,
          isLoading: false
        })
      },
      
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false
        })
      },
      
      updateUser: (updates: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates }
          })
        }
      },
      
      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },
      
      isAdmin: () => {
        return get().user?.role === 'admin'
      },
      
      isCustomer: () => {
        return get().user?.role === 'customer'
      }
    }),
    {
      name: 'cheos-cafe-auth',
      // Solo persistir campos esenciales por seguridad
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      }),
      // Versión para futuras migraciones
      version: 1
    }
  )
)

// Hook para obtener información del usuario de forma fácil
export const useUser = () => {
  const { user, isAuthenticated, isAdmin, isCustomer } = useAuthStore()
  
  return {
    user,
    isAuthenticated,
    isAdmin: isAdmin(),
    isCustomer: isCustomer(),
    name: user?.name,
    email: user?.email,
    avatar: user?.avatar,
    role: user?.role
  }
} 