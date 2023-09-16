import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Roboto_Mono, Chakra_Petch } from 'next/font/google'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const roboto = Roboto({
  subsets: ['latin'],
  weight: [
    '300',
    '400',
    '500',
    '700',
    '900',
  ]
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
})

export const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: [
    '300',
    '400',
    '500',
    '600',
    '700',
  ]
})

export const metadata: Metadata = {
  title: 'Akhilan Ganesh',
  description: 'Hi, I\'m a software engineer. Check out my resume, skills, and projects.',
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      }, 
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  // <link rel="manifest" href="/site.webmanifest">
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head> */}
      <body className={`${roboto.className} bg-theme-color1`}>{children}</body>
    </html>
  )
}
