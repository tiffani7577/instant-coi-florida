import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.instantcoiflorida.com'),
  title: {
    default: 'Instant COI Florida | Same-Day Certificate of Insurance for Contractors',
    template: '%s | Instant COI Florida',
  },
  description: 'Florida contractors: get your Certificate of Insurance (COI) same day. Roofers, HVAC, electricians, plumbers, and general contractors. Call now — specialists available Mon–Fri 9am–9pm EST.',
  keywords: ['COI Florida', 'certificate of insurance Florida', 'same day COI Florida', 'contractor insurance certificate Florida', 'general liability certificate Florida', 'Florida contractor COI', 'instant COI Florida', 'DBPR contractor insurance'],
  authors: [{ name: 'Instant COI Florida' }],
  creator: 'Instant COI Florida',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.instantcoiflorida.com',
    siteName: 'Instant COI Florida',
    title: 'Instant COI Florida | Same-Day Certificate of Insurance for Contractors',
    description: 'Florida contractors: get your COI same day. Call now — specialists available.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Instant COI Florida' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant COI Florida | Same-Day COI for Contractors',
    description: 'Florida contractors: get your Certificate of Insurance same day. Call now.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: '4fc9TBtEWE5VduvO-ZmS-J_NPJ1tBKYSKsPoooV0-6A',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Instant COI Florida",
  "description": "Same-day Certificate of Insurance (COI) for Florida contractors. Roofers, HVAC, electricians, plumbers, and general contractors. Call for fast COI issuance.",
  "url": "https://www.instantcoiflorida.com",
  "telephone": "+14356121009",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fort Lauderdale",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": "Florida",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "12:00", "closes": "17:00" }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+14356121009",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="bg-[#F8F7F4]">
        {children}
      </body>
    </html>
  )
}
