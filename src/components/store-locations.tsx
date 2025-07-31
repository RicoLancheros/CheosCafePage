'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { storeLocations } from '@/lib/mock-data'

export function StoreLocations() {
  return (
    <section className="py-16 bg-coffee-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark font-playfair mb-4">
            📍 Nuestras Tiendas
          </h2>
          <p className="text-coffee-medium text-lg max-w-2xl mx-auto">
            Visítanos en nuestros puntos físicos y descubre el aroma del mejor café colombiano
          </p>
          <div className="w-24 h-1 bg-coffee-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeLocations.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-coffee-dark font-playfair mb-4">
                  {store.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-coffee-medium mt-0.5 flex-shrink-0" />
                    <span className="text-coffee-dark">{store.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-coffee-medium flex-shrink-0" />
                    <a 
                      href={`tel:${store.phone}`}
                      className="text-coffee-dark hover:text-coffee-medium transition-colors"
                    >
                      {store.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-coffee-medium mt-0.5 flex-shrink-0" />
                    <span className="text-coffee-dark text-sm">{store.hours}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-coffee-dark hover:bg-coffee-medium text-coffee-cream py-2 px-4 rounded-md font-medium transition-colors duration-200">
                  Ver en Mapa
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-coffee-medium text-lg mb-4">
            ¿Quieres abrir una franquicia de Cheos Café?
          </p>
          <button className="bg-coffee-dark hover:bg-coffee-medium text-coffee-cream px-8 py-3 rounded-md font-medium transition-colors duration-200">
            Contacta con nosotros
          </button>
        </motion.div>
      </div>
    </section>
  )
} 