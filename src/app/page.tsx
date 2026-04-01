import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instant COI Florida | Same-Day Certificate of Insurance for Florida Contractors',
  description: 'Need a COI today? Florida contractors get same-day Certificates of Insurance for general liability, workers comp, and commercial auto. Call now — specialists available Mon–Fri 9am–9pm EST.',
  alternates: { canonical: 'https://www.instantcoiflorida.com' },
}

const PHONE = '(435) 612-1009'
const PHONE_HREF = 'tel:+14356121009'

const contractorTypes = [
  { icon: '🏠', label: 'Roofing Contractors', desc: 'GAF, Owens Corning, and independent roofers' },
  { icon: '❄️', label: 'HVAC Contractors', desc: 'Residential and commercial HVAC systems' },
  { icon: '⚡', label: 'Electrical Contractors', desc: 'Licensed Florida electrical contractors' },
  { icon: '🔧', label: 'Plumbing Contractors', desc: 'Plumbers and pipefitters statewide' },
  { icon: '🏗️', label: 'General Contractors', desc: 'GCs managing subcontractors and job sites' },
  { icon: '🌿', label: 'Landscaping', desc: 'Lawn care, tree trimming, irrigation' },
  { icon: '🎨', label: 'Painting Contractors', desc: 'Interior and exterior painting crews' },
  { icon: '🪟', label: 'Window & Door', desc: 'Impact window and door installers' },
]

const howItWorks = [
  { step: '1', title: 'Call the number above', desc: 'A specialist picks up immediately during business hours. No automated menu maze — just a real person.' },
  { step: '2', title: 'Tell them what you need', desc: 'Your contractor type, coverage amount required, and who needs to be listed as additional insured.' },
  { step: '3', title: 'Get your COI same day', desc: 'Your Certificate of Insurance is issued and emailed directly to you and your general contractor.' },
]

const coverageTypes = [
  {
    title: 'General Liability',
    desc: 'The most commonly required COI in Florida. Covers bodily injury and property damage caused by your work. Required by most GCs and property managers.',
    required: 'Usually $1M per occurrence / $2M aggregate',
  },
  {
    title: "Workers' Compensation",
    desc: "Required by Florida law for most contractors with employees. Protects workers injured on the job. Many GCs won't let you on site without it.",
    required: 'Statutory limits required by Florida law',
  },
  {
    title: 'Commercial Auto',
    desc: 'Covers vehicles used for business purposes. If you drive to job sites in a work truck or van, your personal auto policy likely does not cover you.',
    required: 'Typically $1M combined single limit',
  },
  {
    title: 'Umbrella / Excess Liability',
    desc: 'Provides additional coverage above your GL and auto limits. Required on larger commercial projects and government contracts.',
    required: 'Varies — $1M to $5M common',
  },
]

const counties = [
  'Miami-Dade', 'Broward', 'Palm Beach', 'Orange', 'Hillsborough',
  'Pinellas', 'Duval', 'Sarasota', 'Lee', 'Volusia', 'Brevard',
  'Polk', 'Manatee', 'Collier', 'Seminole',
]

const faqs = [
  {
    q: 'What is a Certificate of Insurance (COI)?',
    a: 'A COI is a one-page document that proves your insurance coverage is active. It lists your insurer, policy number, coverage types, limits, and effective dates. General contractors and property managers require it before allowing you to start work.',
  },
  {
    q: 'How fast can I get a COI in Florida?',
    a: 'If you already have an active policy, your COI can typically be issued the same day — sometimes within hours. If you need to purchase a new policy first, same-day binding is available for most standard contractor policies.',
  },
  {
    q: 'What does "additional insured" mean on a COI?',
    a: 'When a general contractor or property owner asks to be listed as "additional insured," it means they are added to your policy as a protected party. This is standard practice in Florida construction and is required on most commercial projects.',
  },
  {
    q: 'Does Florida require contractors to carry insurance?',
    a: 'Yes. Florida DBPR (Department of Business and Professional Regulation) requires licensed contractors to maintain active general liability insurance as a condition of their license. Roofing contractors in Florida must carry a minimum of $300,000 in general liability coverage. Workers\' compensation is required for contractors with employees.',
  },
  {
    q: 'Can I get a COI on a Saturday?',
    a: `Yes — our specialists are available Saturday 12pm–5pm EST. Call ${PHONE} to get connected.`,
  },
  {
    q: 'What information do I need to get a COI?',
    a: 'Your business name, address, contractor license number (if applicable), the coverage amounts required, and the name and address of the certificate holder (the GC or property manager who needs to be listed).',
  },
]

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663413300520/2umk95hqGnFWYdBaBP8ZQA/coi-hero-UKAPTsejixz5MV6Yv6Dizw.webp')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-300 text-sm font-semibold">Same-Day COI Available</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
              Florida Contractors:<br />
              <span className="text-yellow-400">Get Your COI Today</span>
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8">
              Need a Certificate of Insurance before you can start the job? Call now — specialists connect you with same-day COI issuance for roofers, HVAC, electricians, plumbers, and general contractors across Florida.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              {['No obligation', 'Same-day issuance', 'All contractor types', 'All Florida counties'].map(item => (
                <div key={item} className="flex items-center gap-1.5 text-gray-300 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency bar */}
      <section className="bg-yellow-500 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-900 font-semibold text-sm sm:text-base text-center sm:text-left">
              🚨 <strong>Job on hold because you don&apos;t have a COI?</strong> Don&apos;t lose the contract — call now.
            </p>
            <a
              href={PHONE_HREF}
              className="flex-shrink-0 bg-gray-900 hover:bg-gray-800 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Who needs a COI */}
      <section id="who-needs-coi" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">Who Needs a COI?</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Every Florida Contractor Working for a GC or Property Manager</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">If you&apos;re a subcontractor in Florida, you almost certainly need to provide a COI before starting any job.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {contractorTypes.map((ct) => (
            <div key={ct.label} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-yellow-300 hover:shadow-md transition-all">
              <div className="text-2xl mb-2">{ct.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{ct.label}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{ct.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-2">How It Works</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">3 Steps to Your COI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-gray-900 font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Start Now: Call {PHONE}
            </a>
            <p className="text-gray-500 text-sm mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </div>
      </section>

      {/* Coverage types */}
      <section id="coverage-types" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">Coverage Types</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">What Your COI Can Cover</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Florida contractors typically need one or more of these coverage types. Your specialist will confirm exactly what&apos;s required for your specific job.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coverageTypes.map((ct) => (
            <div key={ct.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-yellow-300 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base mb-1">{ct.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">{ct.desc}</p>
                  <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                    <span className="text-xs text-gray-500 font-medium">{ct.required}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Florida counties */}
      <section id="florida-counties" className="bg-yellow-50 border-y border-yellow-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">Service Area</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-gray-900">Serving All Florida Counties</h2>
            <p className="text-gray-500 mt-2 text-sm">Including Miami-Dade, Broward, Palm Beach, Orange, Hillsborough, and all 67 Florida counties</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {counties.map(county => (
              <span key={county} className="bg-white border border-yellow-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">
                {county}
              </span>
            ))}
            <span className="bg-yellow-500 text-gray-900 font-semibold text-sm px-3 py-1.5 rounded-full">+ All 67 FL Counties</span>
          </div>
        </div>
      </section>

      {/* DBPR trust section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-2">Florida DBPR Compliance</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">Florida Law Requires Contractor Insurance</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              The Florida Department of Business and Professional Regulation (DBPR) requires all licensed contractors to maintain active general liability insurance as a condition of their license. Roofing contractors must carry a minimum of $300,000 in GL coverage. Workers&apos; compensation is required for any contractor with employees.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Operating without the required insurance can result in license suspension, fines, and personal liability for job site injuries or property damage. A COI is your proof of compliance — and your GC won&apos;t let you on site without one.
            </p>
          </div>
          <div className="flex-shrink-0 text-center">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-xl text-base transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Get COI Now
            </a>
            <p className="text-gray-500 text-xs mt-2">{PHONE}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-10">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Common Questions About COIs in Florida</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-yellow-500 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-3">Don&apos;t Lose the Job Over a Missing COI</h2>
          <p className="text-gray-800 text-lg mb-8">Call now and get connected with a specialist who can issue your Certificate of Insurance today.</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-bold py-5 px-12 rounded-xl text-xl transition-all shadow-xl"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {PHONE}
          </a>
          <p className="text-gray-700 text-sm mt-4">Mon–Fri 9am–9pm · Sat 12pm–5pm EST · All Florida counties</p>
        </div>
      </section>

      <Footer />
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 lg:hidden" />
    </>
  )
}
