'use client'

import { Coffee, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8 text-coffee-gold mr-2" />
              <h3 className="text-2xl font-bold font-playfair">Cheos Café</h3>
            </div>
            <p className="text-coffee-light mb-6 text-sm leading-relaxed">
              Desde el corazón de Colombia, traemos a tu mesa el mejor café artesanal. 
              Cada grano es seleccionado cuidadosamente para ofrecerte una experiencia única 
              que despierta tus sentidos y conecta con nuestras tradiciones cafeteras.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-light hover:text-coffee-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-light hover:text-coffee-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-light hover:text-coffee-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-coffee-gold flex-shrink-0" />
                <a href="mailto:info@cheoscafe.com" className="text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                  info@cheoscafe.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-coffee-gold flex-shrink-0" />
                <a href="tel:+5713456789" className="text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                  +57 (1) 345-6789
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-coffee-gold mt-0.5 flex-shrink-0" />
                <span className="text-coffee-light text-sm">
                  Carrera 13 #26-45<br />
                  Bogotá, Colombia
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Enlaces</h4>
            <div className="space-y-2">
              <a href="#cafes" className="block text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                Nuestros Cafés
              </a>
              <a href="#complementos" className="block text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                Complementos
              </a>
              <a href="#aromaticas" className="block text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                Aromáticas
              </a>
              <a href="#tiendas" className="block text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                Nuestras Tiendas
              </a>
              <a href="#" className="block text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                Sobre Nosotros
              </a>
              <a href="#" className="block text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="block text-coffee-light hover:text-coffee-gold transition-colors text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-light text-sm">
            © 2024 Cheos Café. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-coffee-light text-sm">Hecho con</span>
            <Coffee className="h-4 w-4 text-coffee-gold" />
            <span className="text-coffee-light text-sm">en Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 