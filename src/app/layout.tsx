import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import Sidebar from '@/components/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Darulhikmet'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Providers>
          <Sidebar />
          <div className="transition-all md:ml-72">
            <Header />
            <main className="p-6">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
