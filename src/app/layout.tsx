/* eslint-disable camelcase */
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Noto_Sans_JP({ subsets: ['latin'] })

const APP_NAME = 'app name'
const APP_DESCRIPTION = 'please write your app description'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  keywords: ['website'],
  authors: [
    { name: 'write your name' },
    { name: 'write your name', url: 'write your site url' },
  ],
  openGraph: {
    type: 'website',
    url: 'write your site url',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: 'write your og image url',
      },
    ],
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
