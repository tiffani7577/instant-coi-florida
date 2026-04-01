'use client'
// MarketCall hours: Mon-Fri 9am-9pm EST, Sat 12pm-5pm EST
// Outside hours: show lead form instead of call button
// This prevents dead-air calls that won't pay out

import { useState, useEffect } from 'react'

const PHONE = '(435) 612-1009'
const PHONE_HREF = 'tel:+14356121009'

function isMarketCallOpen(): boolean {
  const now = new Date()
  // Convert to EST (UTC-5 standard, UTC-4 daylight)
  const estOffset = -5 * 60 // use -5 (EST standard; close enough for this use case)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const est = new Date(utc + estOffset * 60000)
  const day = est.getDay() // 0=Sun, 1=Mon ... 6=Sat
  const hour = est.getHours()
  const minute = est.getMinutes()
  const timeInMinutes = hour * 60 + minute

  if (day >= 1 && day <= 5) {
    // Mon-Fri: 9am (540) to 9pm (1260)
    return timeInMinutes >= 540 && timeInMinutes < 1260
  } else if (day === 6) {
    // Saturday: 12pm (720) to 5pm (1020)
    return timeInMinutes >= 720 && timeInMinutes < 1020
  }
  return false // Sunday closed
}

interface CallButtonProps {
  variant?: 'hero' | 'sticky' | 'inline'
  label?: string
}

export default function CallButton({ variant = 'inline', label }: CallButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsOpen(isMarketCallOpen())
    setMounted(true)
    // Re-check every minute
    const interval = setInterval(() => setIsOpen(isMarketCallOpen()), 60000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  if (variant === 'hero') {
    return isOpen ? (
      <a
        href={PHONE_HREF}
        className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        {label || `Speak to an Agent: ${PHONE}`}
      </a>
    ) : (
      <a
        href="/get-a-quote"
        className="inline-flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
      >
        Get a Free Quote Online
      </a>
    )
  }

  if (variant === 'sticky') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-blue-900 px-4 py-3 flex gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
        {isOpen ? (
          <a
            href={PHONE_HREF}
            className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 rounded-lg text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call {PHONE}
          </a>
        ) : (
          <a
            href="/get-a-quote"
            className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 rounded-lg text-sm"
          >
            Get Free Quote
          </a>
        )}
        <a
          href="/get-a-quote"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-blue-900 font-bold py-3 rounded-lg text-sm"
        >
          Free Quote
        </a>
      </div>
    )
  }

  // inline variant
  return isOpen ? (
    <a
      href={PHONE_HREF}
      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      {label || 'Call Now'}
    </a>
  ) : (
    <a
      href="/get-a-quote"
      className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
    >
      {label || 'Get Free Quote'}
    </a>
  )
}
