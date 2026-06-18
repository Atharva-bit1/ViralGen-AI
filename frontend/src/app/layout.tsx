import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'ViralGen AI - Multi-Modal Social Media Content Generator',
  description: 'Generate Instagram posts, TikTok scripts, LinkedIn articles, and more with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
