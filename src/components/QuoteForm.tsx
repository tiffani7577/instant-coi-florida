"use client"
import { useState } from 'react'

interface QuoteFormProps {
  variant?: 'sidebar' | 'inline' | 'hero'
  title?: string
}

export default function QuoteForm({ variant = 'sidebar', title }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', zip: '', propertyType: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Store submission with timestamp
    const submission = { ...form, timestamp: new Date().toISOString(), source: window.location.pathname }
    const existing = JSON.parse(localStorage.getItem('ssi_leads') || '[]')
    existing.push(submission)
    localStorage.setItem('ssi_leads', JSON.stringify(existing))
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
    window.location.href = '/thank-you'
  }

  const formTitle = title || 'Get Your Free Florida Home Insurance Quote'

  const baseClasses = variant === 'hero'
    ? 'bg-white rounded-2xl shadow-2xl p-6 sm:p-8'
    : variant === 'inline'
    ? 'bg-teal-50 border border-teal-100 rounded-2xl p-6 sm:p-8'
    : 'bg-white border border-gray-100 rounded-2xl shadow-lg p-6 sticky top-24'

  return (
    <div className={baseClasses}>
      <h3 className="font-serif text-xl text-teal-800 mb-1">{formTitle}</h3>
      <p className="text-sm text-gray-500 mb-5">A licensed Florida specialist will contact you within 1 business hour.</p>

      {submitted ? (
        <div className="text-center py-4">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <p className="font-semibold text-teal-800">You're all set!</p>
          <p className="text-sm text-gray-500 mt-1">Redirecting you now...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text" name="name" required placeholder="Full Name"
            value={form.name} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <input
            type="email" name="email" required placeholder="Email Address"
            value={form.email} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <input
            type="tel" name="phone" required placeholder="Phone Number"
            value={form.phone} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <input
            type="text" name="zip" required placeholder="ZIP Code" maxLength={5}
            value={form.zip} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <select
            name="propertyType" required value={form.propertyType} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
          >
            <option value="">Property Type</option>
            <option value="single-family">Single Family Home</option>
            <option value="condo">Condo / Townhouse</option>
            <option value="mobile-home">Mobile / Manufactured Home</option>
            <option value="rental">Rental Property</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit" disabled={loading}
            className="w-full bg-coral-500 hover:bg-coral-600 disabled:opacity-70 text-white font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Submitting...
              </>
            ) : 'Get My Free Quote →'}
          </button>
          <p className="text-xs text-gray-400 text-center">No spam. No obligation. Florida specialists only.</p>
          <p className="text-xs text-gray-400 text-center mt-1">By submitting, I provide my signature and expressly consent to be contacted by licensed insurance agents via phone, SMS, or email at the number/address provided, even if on a Do Not Call list. Consent is not required to purchase.</p>
          <p className="text-xs text-gray-400 text-center mt-1">Surplus lines insurers' policy rates and forms are not approved by any Florida regulatory agency. By clicking, you acknowledge you are seeking quotes from the total available market.</p>
        </form>
      )}
    </div>
  )
}
