'use client'
import { useState, useEffect, useCallback } from 'react'

function isMarketCallOpen(): boolean {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const est = new Date(utc + (-5 * 60) * 60000)
  const day = est.getDay()
  const t = est.getHours() * 60 + est.getMinutes()
  if (day >= 1 && day <= 5) return t >= 540 && t < 1260
  if (day === 6) return t >= 720 && t < 1020
  return false
}

export default function ExitIntent() {
  const [show, setShow] = useState(false)

  const trigger = useCallback(() => {
    if (!isMarketCallOpen() && !sessionStorage.getItem('exitShown')) {
      setShow(true)
      sessionStorage.setItem('exitShown', '1')
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(trigger, 30000)
    const onMouseLeave = (e: MouseEvent) => { if (e.clientY < 10) trigger() }
    document.addEventListener('mouseleave', onMouseLeave)
    return () => { clearTimeout(timer); document.removeEventListener('mouseleave', onMouseLeave) }
  }, [trigger])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 relative">
        <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="text-center">
          <div className="text-3xl mb-3">🌙</div>
          <h3 className="font-serif text-xl text-blue-900 font-bold mb-2">Agents available 9 AM – 9 PM EST</h3>
          <p className="text-gray-500 text-sm mb-5">Call during business hours for free Florida windstorm insurance information. No obligation.</p>
          <a
            href="tel:+14356121009"
            className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-sm transition-colors"
          >
            (435) 612-1009
          </a>
          <p className="text-gray-400 text-xs text-center mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          <button onClick={() => setShow(false)} className="mt-3 text-gray-400 text-xs underline">Dismiss</button>
        </div>
      </div>
    </div>
  )
}
