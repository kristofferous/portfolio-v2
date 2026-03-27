import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans, DM_Mono } from 'next/font/google'
import Cursor from '@/components/Cursor'
import './globals.css'
import {Analytics} from "@vercel/analytics/next";

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

const BASE_URL = 'https://nerskogen.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Kristoffer — Developer & Founder',
  description: 'Portfolio of Kristoffer — a 19-year-old developer and founder from Norway building AI-driven software, embedded systems, and products.',
  keywords: ['Kristoffer', 'developer', 'founder', 'Norway', 'portfolio', 'Rust', 'embedded systems', 'AI', 'Next.js', 'TypeScript', 'nerskogen'],
  authors: [{ name: 'Kristoffer', url: BASE_URL }],
  creator: 'Kristoffer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Kristoffer — Developer & Founder',
    description: 'Building things that matter.',
    url: BASE_URL,
    siteName: 'nerskogen.com',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kristoffer — Developer & Founder',
    description: 'Portfolio of Kristoffer — a 19-year-old developer and founder from Norway building AI-driven software, embedded systems, and products.',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kristoffer',
  url: BASE_URL,
  sameAs: [BASE_URL],
  jobTitle: 'Developer & Founder',
  description: 'A 19-year-old developer and founder from Norway building AI-driven software, embedded systems, and products.',
  knowsAbout: ['Rust', 'Embedded Systems', 'Artificial Intelligence', 'Next.js', 'TypeScript', 'Hardware Design'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
