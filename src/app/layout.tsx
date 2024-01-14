import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import '@/styles/globals.css'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import ThemeProvider from '@/components/providers/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Darulhikmet',
  description: 'Çeşitli dini kaynakları tek bir yerde buluşturan platform.',
  manifest: '/manifest.json',
  metadataBase: process.env.SITE_URL,
  openGraph: { images: '/opengraph-image.jpg' }
}

export const viewport = {
  themeColor: '#000'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider>
          <Sidebar />
          <div className="transition-all md:ml-72">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
