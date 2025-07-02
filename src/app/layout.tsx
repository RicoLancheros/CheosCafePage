import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cheos Café - El Mejor Café Colombiano',
  description: 'Descubre el mejor café colombiano artesanal. Granos seleccionados, tostado perfecto y envío directo a tu casa. Cheos Café - Tradición y calidad desde Colombia.',
  keywords: ['café colombiano', 'café artesanal', 'café de especialidad', 'tienda de café', 'Colombia'],
  authors: [{ name: 'Cheos Café' }],
  creator: 'Cheos Café',
  publisher: 'Cheos Café',
  robots: 'index, follow',
  openGraph: {
    title: 'Cheos Café - El Mejor Café Colombiano',
    description: 'Descubre el mejor café colombiano artesanal. Granos seleccionados, tostado perfecto y envío directo a tu casa.',
    type: 'website',
    locale: 'es_CO',
    url: 'https://cheoscafe.com',
    siteName: 'Cheos Café',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheos Café - El Mejor Café Colombiano',
    description: 'Descubre el mejor café colombiano artesanal. Granos seleccionados, tostado perfecto y envío directo a tu casa.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3C2415',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 