import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300','400','600','700','800','900'],
  variable: '--font-barlow',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300','400','500'],
  variable: '--font-dm-sans',
  display: 'swap',
})
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400','500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kristoffer — Developer & Founder',
  description: 'Portfolio of Kristoffer — a 19-year-old developer and founder from Norway building AI-driven software, embedded systems, and products.',
  openGraph: {
    title: 'Kristoffer — Developer & Founder',
    description: 'Building things that matter.',
    url: 'https://nerskogen.com',
    siteName: 'nerskogen.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
